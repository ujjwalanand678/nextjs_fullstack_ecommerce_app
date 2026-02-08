import connectDB from "@/lib/db";
import userModel from "@/models/user.model";



export async function GET() {
  await connectDB();

  const count = await userModel.countDocuments();

  return Response.json({
    status: "alive",
    users: count,
    time: new Date()
  });
}

//This checks if mongo DB is connected or not