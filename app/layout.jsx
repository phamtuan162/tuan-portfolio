import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata = {
    title: "Minh Tuấn",
    description: "My Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/assets/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/assets/favicon/favicon-16x16.png"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/assets/favicon/apple-icon-180x180.png"
                />

                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/assets/favicon/android-icon-192x192.png"
                />

                <link rel="manifest" href="/assets/favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/assets/favicon/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
            </head>

            <body className={jetbrainsMono.variable}>
                <Header />
                <main>
                    <StairTransition />
                    <PageTransition>{children}</PageTransition>
                </main>
                <Toaster position="top-right" />
            </body>
        </html>
    );
}
