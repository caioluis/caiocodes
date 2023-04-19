import type { Metadata } from "next";
import {
    YoutubeIcon,
    ArrowIcon,
    TwitchIcon,
    DattebayoIcon,
} from "components/icons";

import { PasswordChangerInfo } from "./components/PasswordChangerInfo";

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
                <p>
                    I do some live coding on my Twitch with a small community of
                    developers. I'm trying to kickstart my YouTube Channel as
                    well.
                </p>
                <div className="flex flex-col gap-2 md:flex-row md:gap-2">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://twitch.tv/caiocodes"
                        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <TwitchIcon />
                            <div className="ml-3">Twitch</div>
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
                <p>
                    I also running a project called Dattebayo!, a Naruto
                    Play-by-post RPG.
                </p>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/DattebayoRPG/dattebayo-rpg"
                    className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                >
                    <div className="flex items-center">
                        <DattebayoIcon />
                        <div className="ml-3">
                            Dattebayo! repository on GitHub
                        </div>
                    </div>
                    <ArrowIcon />
                </a>

                <h2 className="font-bold text-2xl font-serif">
                    Work Experience
                </h2>
                <p>
                    Apart from my freelance work, I have worked for three great
                    french companies.
                </p>
                <div>
                    <h3 className="font-bold text-2xl font-serif">Dashlane</h3>
                    <p>
                        Dashlane is one of the best password managers in the
                        market. Fun fact: even before being an employee, I was a
                        user too.
                    </p>
                    <p>
                        During my time there, I worked on two features:{" "}
                        <strong>Password Changer</strong> and the{" "}
                        <strong>Password Health</strong>. This doesn't mean
                        anything to you? No worries, I can explain visually.
                    </p>
                    <ul>
                        <PasswordChangerInfo />
                        <li className="font-bold text-xl font-serif">
                            Password Health
                        </li>
                        <p>
                            After the death of Password Changer, I joined the
                            "Protect the User" (PTU) team, which was later
                            transformed into "Improved my Security"ß (IMS). It
                            can seem a very simple-to-implement feature, but I
                            guarantee that it was not. To this day, I'm not that
                            knowledgeable about the Password Health codebase,
                            but I have spent a long time working on it alongside
                            my peers.
                        </p>
                        <figure>
                            <img src="/images/password-health.jpeg" />
                            <figcaption>
                                Made by our lovely{" "}
                                <a href="https://mastodon.social/@louisgrasset">
                                    @louisgrasset
                                </a>
                            </figcaption>
                        </figure>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-2xl font-serif">Qonto</h3>
                    <p>
                        Qonto is a fintech startup based in Paris, designed for
                        SMEs and freelancers.
                    </p>
                    <p>I'm still building this section...</p>
                </div>

                <div>
                    <h3 className="font-bold text-2xl font-serif">Zefir</h3>
                    <p>Zefir is a real-estate startup based in Paris.</p>
                    <p>I'm still building this section...</p>
                </div>
            </div>
        </section>
    );
}
