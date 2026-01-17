# Future Calendar (Calendra)

Overview
A futuristic, ultra-modern scheduling application built with **Next.js 15**. This project reimagines the traditional calendar interface with a deep-space neon aesthetic, interactive 3D elements, and a seamless booking experience.

## ✨ Key Features
- **Futuristic UI**: Glassmorphism, neon glows, and a deep space theme using OKLCH color spaces.
- **3D Interactive Background**: Integrated `Three.js` scene with floating calendar elements.
- **Full-Stack Scheduling**: Create events, manage availability, and book appointments.
- **Authentication**: Secure user management via Clerk.
- **Database**: PostgreSQL (via Neon / Drizzle ORM).

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, Framer Motion (animations)
- **3D Graphics**: React Three Fiber (@react-three/fiber, @react-three/drei)
- **Auth**: Clerk
- **Database**: Drizzle ORM + Neon (PostgreSQL)
- **Forms**: React Hook Form + Zod

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Calendra-Course-main
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add the following keys:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
DATABASE_URL=postgres://...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/events
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/events
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

## ⚠️ Assumptions & Design Decisions
- **Browser Performance**: The 3D background requires a device with WebGL support. It may be resource-intensive on very old mobile devices.
- **Authentication**: The application assumes all users will authenticate via Clerk for dashboard access.
- **Timezones**: Dates are stored in UTC but displayed in the user's local timezone (auto-detected).
- **Theming**: The project enforces a dark/"space" mode by default. Custom CSS variables in `globals.css` override standard Tailwind colors to achieve the neon aesthetic.

## 🤝 Contributing
Contributions are welcome! Please fork the repo and submit a pull request.
