import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationDrawer } from "@/components/navigation-drawer"
import { Analytics } from "@vercel/analytics/react"

const optima = localFont({
    src: "./fonts/optima.woff",
    variable: '--optima'
});

const title = localFont({
    src: "./fonts/title.otf",
    variable: '--title'
});

const fighter = localFont({
    src: "./fonts/fighter-keyword.ttf",
    variable: '--fighter'
});

const logo = localFont({
    src: "./fonts/logo.ttf",
    variable: '--logo'
});

export const metadata: Metadata = {
    title: "Armada Legends",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Analytics />
            </head>

            <body className={`${title.variable} ${optima.variable} ${fighter.variable} ${logo.variable} antialiased`}>
                <NavigationDrawer />
                <main className="h-full w-full overflow-y-auto flex justify-center">
                    <div className="fixed h-screen w-screen bg-black/[10%] z-10 pointer-events-none" />
                    <div className="z-20">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
