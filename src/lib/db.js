import mongoose from "mongoose"

// Read the connection string from environment variables
// This keeps secrets out of source code and allows different DB per environment
const MONGODB_URI = process.env.MONGODB_URI

// Fail fast if missing — better to crash early than debug ghost bugs later
if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local")
}

/*
 Next.js (especially in development) reloads files frequently.
 Every reload re-runs this file from scratch.

 Without caching:
    refresh page → new DB connection
    refresh page → new DB connection
    refresh page → MongoDB cries

 So we store the connection on the global object.
 Global survives hot reloads inside the same Node process.
*/
let cached = global.mongoose

// First time the server runs, global.mongoose doesn't exist
// We create a cache container
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

/*
 connectDB is called inside API routes before any database operation.

 It guarantees:
   - Only ONE real connection is created
   - All future calls reuse the same connection
*/
async function connectDB() {

  // If connection already exists → reuse immediately
  if (cached.conn) return cached.conn

  /*
   If no connection yet, we create a connection PROMISE.

   Important:
   Multiple requests may hit the server at the same time.
   Without storing the promise, each request would start a new connection.

   By caching the promise:
     request A starts connection
     request B waits for same connection
     request C waits too
   → only one connection is created
  */
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false, // Fail immediately if DB not connected (no silent queueing)
      maxPoolSize: 10,       // Max parallel DB operations (connection pool size)
    })
  }

  // Wait for the connection to resolve and store it
  cached.conn = await cached.promise

  console.log("MongoDB connected")

  // Return active connection
  return cached.conn
}

export default connectDB
