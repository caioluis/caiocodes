import type { Metadata } from "next";
import {
    GitHubIcon,
    YoutubeIcon,
    ArrowIcon,
    TwitchIcon,
    DattebayoIcon,
    EyeIcon,
} from "components/icons";
import PasswordChanger from "components/PasswordChanger";

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
                <h3 className="font-bold text-2xl font-serif">Dashlane</h3>
                <p>
                    Dashlane is one of the best password managers in the market.
                    Fun fact: even before being an employee, I was a user too.
                </p>
                <p>
                    During my time there, I worked on two features:{" "}
                    <strong>Password Changer</strong> and the{" "}
                    <strong>Password Health</strong>. This doesn't mean anything
                    to you? No worries, I can explain visually.
                </p>
                <ul>
                    <li className="font-bold text-xl font-serif">
                        Password Changer
                    </li>
                    <p>
                        This feature allows users to change their passwords in
                        just a click. It was a really great way to react to
                        breaches. Users could change their passwords in bulk in
                        a matter of seconds. Try it out yourself! (just a dummy,
                        tho)
                    </p>
                    <p>
                        Check the password that as randomly assigned to you,
                        then hit the Password Changer to see the Magic!
                    </p>
                    <PasswordChanger />
                </ul>
            </div>
        </section>
    );
}
