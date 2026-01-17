'use client'
import { SignIn } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import Image from "next/image"
import ThreeDCalendar from "./ThreeDCalendar"
import { motion } from "framer-motion"

// Marks this file as a Client Component

export default function LandingPage() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background text-foreground">

            {/* 3D Background */}
            <ThreeDCalendar />

            {/* Content Overlay */}
            <div className="z-10 flex flex-col items-center gap-12 p-10 text-center backdrop-blur-sm">

                {/* Animated Logo/Brand */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-4"
                >
                    {/*  Using a white logo or applying brightness filter if it's the black logo */}
                    <Image
                        src='/assets/logo.svg'
                        width={200}
                        height={200}
                        alt="Logo"
                        className="invert drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    />
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h1 className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-5xl font-black text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] lg:text-7xl">
                        FUTURE OF TIME
                    </h1>
                </motion.div>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="max-w-2xl text-lg font-light tracking-wide text-muted-foreground"
                >
                    Experience the next generation of scheduling. Immersive, intuitive, and designed for visionaries.
                </motion.p>

                {/* Call to Action / Sign In */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-black/30 p-1 backdrop-blur-md shadow-[0_0_30px_rgba(109,40,217,0.3)]"
                >
                    <SignIn
                        routing="hash"
                        appearance={{
                            baseTheme: dark,
                            elements: {
                                formButtonPrimary: "bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity",
                                card: "bg-transparent shadow-none"
                            }
                        }}
                    />
                </motion.div>
            </div>

        </main>

    )
}
