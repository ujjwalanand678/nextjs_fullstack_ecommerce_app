src/
│
├── app/                         # Next.js App Router (UI + API entrypoints)
│   │
│   ├── (auth)/                  # Shared authentication pages (all roles)
│   │   ├── login/page.jsx       # User login
│   │   ├── register/page.jsx    # Create account (customer or seller)
│   │   ├── forgot-password/page.jsx
│   │   └── layout.jsx           # Auth specific layout (no main navbar)
│   │
│   ├── (public)/                # Public marketing pages (no login required)
│   │   ├── page.jsx             # Landing page
│   │   ├── about/page.jsx
│   │   └── contact/page.jsx
│   │
│   ├── (customer)/              # Customer storefront (buyers)
│   │   ├── layout.jsx           # Shop layout/navbar
│   │   ├── page.jsx             # Homepage product feed
│   │   ├── products/
│   │   │   ├── page.jsx         # Product listing
│   │   │   └── [slug]/page.jsx  # Product detail page
│   │   ├── cart/page.jsx        # Shopping cart
│   │   ├── checkout/page.jsx    # Order placement
│   │   ├── orders/page.jsx      # Order history
│   │   ├── wishlist/page.jsx
│   │   └── account/             # User profile settings
│   │       ├── page.jsx
│   │       ├── addresses/page.jsx
│   │       └── settings/page.jsx
│   │
│   ├── seller/                  # Seller dashboard (inventory owners)
│   │   ├── layout.jsx
│   │   ├── page.jsx             # Seller analytics overview
│   │   ├── products/
│   │   │   ├── page.jsx         # Seller product list
│   │   │   ├── new/page.jsx     # Add product
│   │   │   └── edit/[id]/page.jsx
│   │   ├── orders/page.jsx      # Orders received
│   │   ├── analytics/page.jsx
│   │   ├── payouts/page.jsx
│   │   └── settings/page.jsx
│   │
│   ├── admin/                   # Platform administration panel
│   │   ├── layout.jsx
│   │   ├── page.jsx             # System overview metrics
│   │   ├── users/page.jsx       # Manage customers
│   │   ├── sellers/page.jsx     # Manage sellers
│   │   ├── products/page.jsx    # Moderation
│   │   ├── orders/page.jsx
│   │   ├── disputes/page.jsx
│   │   └── reports/page.jsx
│   │
│   ├── api/                     # Backend HTTP entrypoints (thin layer)
│   │   ├── auth/route.js        # login/register/session
│   │   ├── products/route.js
│   │   ├── cart/route.js
│   │   ├── orders/route.js
│   │   ├── payments/route.js
│   │   ├── seller/route.js      # seller-only actions
│   │   └── admin/route.js       # admin-only actions
│   │
│   ├── layout.jsx               # Root layout
│   ├── globals.css
│   └── page.jsx
│
├── controllers/                 # Handles HTTP requests (req → service → res)
│   ├── auth.controller.js
│   ├── product.controller.js
│   ├── cart.controller.js
│   ├── order.controller.js
│   ├── payment.controller.js
│   ├── seller.controller.js     # Seller operations
│   └── admin.controller.js      # Admin moderation actions
│
├── services/                    # Core business rules (framework-independent)
│   ├── auth.service.js
│   ├── product.service.js
│   ├── cart.service.js
│   ├── order.service.js
│   ├── payment.service.js
│   ├── seller.service.js        # Ownership & inventory rules
│   └── admin.service.js         # Platform governance rules
│
├── models/                      # Database schemas (Mongo/Mongoose)
│   ├── user.model.js            # roles: customer | seller | admin
│   ├── product.model.js         # linked to seller
│   ├── cart.model.js
│   ├── order.model.js
│   ├── review.model.js
│   └── payout.model.js
│
├── permissions/                 # Role Based Access Control (RBAC)
│   ├── roles.js                 # role definitions
│   ├── canAccess.js             # permission checker
│   └── policies.js              # rules mapping role → action
│
├── lib/                         # External integrations & infrastructure
│   ├── db.js                    # database connection
│   ├── auth.js                  # JWT/session utilities
│   ├── stripe.js                # payment provider setup
│   └── cloudinary.js            # image upload service
│
├── components/                  # Reusable UI components
│   ├── ui/                      # generic components (buttons, inputs)
│   ├── layout/                  # navbar, footer, wrappers
│   ├── customer/                # storefront components
│   ├── seller/                  # dashboard components
│   └── admin/                   # moderation components
│
├── hooks/                       # Reusable frontend behavior
│   ├── useAuth.js
│   ├── useRole.js
│   └── usePermission.js
│
├── store/                       # Global state (Zustand/Redux)
│   ├── auth.store.js
│   ├── cart.store.js
│   └── dashboard.store.js
│
├── validations/                 # Request validation schemas
│
├── utils/                       # Pure helper functions
│
├── middleware.js                # Protect routes based on role/session
│
└── config/                      # Environment & app configuration
