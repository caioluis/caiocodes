import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "../components/sidebar";
import AnalyticsWrapper from "../components/analytics";

const kaisei = localFont({
    src: "../public/fonts/kaisei-tokumin-latin-400-normal.woff2",
    weight: "400",
    variable: "--font-kaisei",
    display: "swap",
});

const universBold = localFont({
    src: "../public/fonts/Univers-Bold-Condensed.ttf",
    weight: "700",
    variable: "--font-univers-bold",
    display: "swap",
});

const universLight = localFont({
    src: "../public/fonts/Univers-Light.ttf",
    weight: "300",
    variable: "--font-univers-light",
    display: "swap",
});

const universCondensed = localFont({
    src: "../public/fonts/Univers-Condensed.otf",
    weight: "400",
    variable: "--font-univers",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Caio Gomes",
        template: "%s | Caio Gomes",
    },
    description: "Developer",
    openGraph: {
        title: "Caio Gomes",
        description: "Developer",
        url: "https://caio.codes",
        siteName: "Caio Gomes",
        images: [
            {
                url: "https://caio.codes/og.jpg",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        shortcut: "/favicon.ico",
    },
    verification: {
        google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
        yandex: "14d2e73487fa6c71",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={clsx(
                "text-black bg-white dark:text-white dark:bg-[#111010]",
                kaisei.variable,
                universBold.variable,
                universLight.variable,
                universCondensed.variable
            )}
        >
            <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
                <Sidebar />
                <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
                    {children}
                    <AnalyticsWrapper />
                </main>
            </body>
        </html>
    );
}
