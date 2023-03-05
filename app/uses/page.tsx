import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Uses",
    description:
        "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
    return (
        <section>
            <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
            <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
                Here's what tech I'm currently using for coding, videos, and
                music.
            </p>
            <div className="prose prose-neutral dark:prose-invert">
                <h3 id="computer-office">Computer / Office</h3>
                <ul>
                    <li>Mac Studio (2022)</li>
                    <li>(2X) Ozone DSP28 IPS 28" 4K</li>
                    <li>Logitech G PRO Wireless</li>
                    <li>Apple Magic Trackpad</li>
                    <li>Keychron K2 Pro</li>
                </ul>
                <h3 id="software">Software</h3>
                <ul>
                    <li>Dashlane</li>
                    <li>Apple Music</li>
                    <li>Raycast</li>
                    <li>Fig</li>
                </ul>
                <h3 id="music">Music</h3>
                <ul>
                    <li>Epiphone Dove Studio</li>
                    <li>HyperX QuadCast S</li>
                </ul>
                <h3 id="other-tech">Other Tech</h3>
                <ul>
                    <li>Apple Airpods Pro </li>
                    <li>Apple Watch</li>
                    <li>Apple iPhone</li>
                    <li>Kobo</li>
                </ul>
            </div>
        </section>
    );
}
