# Folder Structure

src/
│
├── app/                                   # Next.js App Router — UI + HTTP entrypoints
│   │
│   ├── (public)/                          # 🌍 Guest browsing (no login required)
│   │   ├── page.jsx                       # Landing / featured products
│   │   ├── products/page.jsx              # Product listing
│   │   ├── products/[slug]/page.jsx       # Product details
│   │   ├── search/page.jsx                # Search results
│   │   ├── categories/page.jsx            # Category browsing
│   │   └── layout.jsx                     # Public storefront layout (navbar/footer)
│   │
│   ├── (soft-auth)/                       # 🟡 Optional login (works without account)
│   │   ├── cart/page.jsx                  # Guest cart (merged after login)
│   │   ├── wishlist/page.jsx              # Local wishlist for guests
│   │   └── layout.jsx                     # Same UI but user-aware
│   │
│   ├── (customer)/                        # 🔵 Customer authenticated area
│   │   ├── checkout/page.jsx              # Payment requires login
│   │   ├── orders/page.jsx                # Order history
│   │   ├── account/page.jsx               # Profile overview
│   │   ├── account/addresses/page.jsx     # Shipping addresses
│   │   ├── account/settings/page.jsx      # Account settings
│   │   └── layout.jsx                     # Customer dashboard layout
│   │
│   ├── seller/                            # 🟠 Seller restricted dashboard
│   │   ├── page.jsx                       # Seller overview
│   │   ├── products/page.jsx              # Inventory list
│   │   ├── products/new/page.jsx          # Create product
│   │   ├── products/edit/[id]/page.jsx    # Edit owned product
│   │   ├── orders/page.jsx                # Incoming orders
│   │   ├── analytics/page.jsx             # Sales analytics
│   │   └── layout.jsx                     # Seller control panel UI
│   │
│   ├── admin/                             # 🔴 Platform admin console
│   │   ├── page.jsx                       # System overview
│   │   ├── users/page.jsx                 # Manage customers
│   │   ├── sellers/page.jsx               # Manage sellers
│   │   ├── products/page.jsx              # Moderation tools
│   │   ├── disputes/page.jsx              # Resolve conflicts
│   │   └── layout.jsx                     # Admin interface layout
│   │
│   ├── (auth)/                            # Authentication pages
│   │   ├── login/page.jsx                 # Sign in
│   │   ├── register/page.jsx              # Account creation
│   │   └── forgot-password/page.jsx       # Password recovery
│   │
│   ├── api/                               # Thin HTTP handlers (no business logic)
│   │   ├── public/route.js                # Fetch products/search
│   │   ├── customer/route.js              # Checkout & orders
│   │   ├── seller/route.js                # Inventory management
│   │   └── admin/route.js                 # Moderation actions
│   │
│   ├── layout.jsx                         # Root layout (providers, theme)
│   ├── globals.css                        # Global styles
│   └── page.jsx                           # Redirect → /products
│
├── controllers/                           # Request parsing & response formatting
│   ├── auth.controller.js                # Login/logout endpoints
│   ├── product.controller.js             # Product operations
│   ├── cart.controller.js                # Cart operations
│   ├── order.controller.js               # Order endpoints
│   ├── payment.controller.js             # Payment endpoints
│   ├── seller.controller.js              # Seller actions
│   └── admin.controller.js               # Admin actions
│
├── services/                              # Business rules (core system logic)
│   ├── auth.service.js
│   ├── product.service.js
│   ├── cart.service.js
│   ├── order.service.js
│   ├── payment.service.js
│   ├── seller.service.js
│   └── admin.service.js
│
├── repositories/                          # Database query layer
│   ├── user.repository.js                # User queries
│   ├── product.repository.js             # Product queries
│   ├── cart.repository.js                # Cart queries
│   └── order.repository.js               # Order queries
│
├── models/                                # Database schemas (Mongoose/ORM)
│   ├── user.model.js
│   ├── product.model.js
│   ├── cart.model.js
│   ├── order.model.js
│   ├── review.model.js
│   └── payout.model.js
│
├── permissions/                           # Role-based access control engine
│   ├── accessLevels.js                   # PUBLIC / CUSTOMER / SELLER / ADMIN
│   ├── withRole.js                       # Role validator
│   └── routeProtection.js                # Route → permission mapping
│
├── lib/                                   # External services adapters
│   ├── db.js                             # Database connection
│   ├── auth.js                           # JWT/session helpers
│   ├── stripe.js                         # Payment provider
│   ├── cloudinary.js                     # File uploads
│   └── redis.js                          # Caching/session storage
│
├── events/                                # Domain events (decoupled reactions)
│   ├── orderCreated.event.js
│   ├── paymentSuccess.event.js
│   └── userRegistered.event.js
│
├── jobs/                                  # Background async tasks
│   ├── email.job.js
│   ├── paymentWebhook.job.js
│   ├── orderTimeout.job.js
│   └── cleanup.job.js
│
├── mail/                                  # Email templates
│   ├── orderConfirmation.template.jsx
│   ├── resetPassword.template.jsx
│   └── sellerApproval.template.jsx
│
├── errors/                                # Central error handling system
│   ├── AppError.js                       # Custom error class
│   ├── errorCodes.js                     # Standard error codes
│   └── errorHandler.js                   # API error formatter
│
├── logger/                                # Logging & monitoring
│   ├── logger.js                         # Logger configuration
│   └── requestLogger.js                  # Logs incoming requests
│
├── constants/                             # Shared enums/constants
│   ├── roles.js
│   ├── orderStatus.js
│   └── paymentStatus.js
│
├── validations/                           # Input validation schemas
│   ├── auth.schema.js
│   ├── product.schema.js
│   ├── order.schema.js
│   └── cart.schema.js
│
├── uploads/                               # Temporary file processing
│   └── uploadHandler.js
│
├── utils/                                 # Pure helper utilities
│   ├── formatPrice.js
│   ├── generateSlug.js
│   └── pagination.js
│
├── hooks/                                 # Reusable frontend logic
│   ├── useAuth.js
│   ├── useRole.js
│   └── usePermission.js
│
├── store/                                 # Global client state
│   ├── auth.store.js
│   ├── cart.store.js
│   └── dashboard.store.js
│
├── components/                            # Reusable UI components
│   ├── ui/                               # Buttons, inputs, modals
│   ├── layout/                           # Navbar, footer
│   ├── customer/                         # Storefront components
│   ├── seller/                           # Seller UI components
│   └── admin/                            # Admin UI components
│
├── tests/                                 # Automated testing
│   ├── unit/                             # Function tests
│   ├── integration/                      # DB/API tests
│   └── e2e/                              # User flow tests
│
├── middleware.js                          # Security gate (auth + role check)
│
└── config/                                # App configuration
    ├── env.js                            # Environment validation
    └── app.config.js                     # Global settings


# NOTE:
Model = collection (a real table in MongoDB)
Schema = shape (a reusable structure inside documents)