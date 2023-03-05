import type { Metadata } from "next";
import { GitHubIcon, YoutubeIcon, ArrowIcon } from "components/icons";

export const metadata: Metadata = {
    title: "About",
    description: "Software Engineer",
};

export default function AboutPage() {
    return (
        <section>
            <h1 className="font-bold text-3xl font-serif">About Me</h1>
            <p className="my-5 text-neutral-800 dark:text-neutral-200">
                Hey, I'm Caio. People on the internet might call me Caio Codes.
            </p>
            <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
                <p>I'm still writing down this section.</p>
                <p>
                    This website is a fork from Lee's website, but it is/will be
                    adapted and transformed to my own needs.
                </p>
                <div className="flex flex-col gap-2 md:flex-row md:gap-2">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/caioluis"
                        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <GitHubIcon />
                            <div className="ml-3">GitHub</div>
                        </div>
                        <ArrowIcon />
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.youtube.com/@CaioCodes"
                        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <YoutubeIcon />
                            <div className="ml-3">YouTube</div>
                        </div>
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </section>
    );
}
