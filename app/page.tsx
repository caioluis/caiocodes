import Link from "next/link";
import Image from "next/image";
import { getBlogViews, getStarCount } from "lib/metrics";
import { GitHubIcon, ViewsIcon } from "components/icons";
import { name, about, bio, avatar } from "lib/info";

export const revalidate = 60;

export default async function HomePage() {
    let starCount = 0,
        views = 0;

    try {
        [starCount, views] = await Promise.all([
            getStarCount(),
            getBlogViews(),
        ]);
    } catch (error) {
        console.error(error);
    }

    return (
        <section>
            <h1 className="font-bold text-4xl font-universBold bold">{name}</h1>
            <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
                {about()}
            </p>
            <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
                <Image
                    alt={name}
                    className="rounded-full"
                    src={avatar}
                    placeholder="blur"
                    width={100}
                    priority
                />
                <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/caioluis"
                        className="flex items-center gap-2"
                    >
                        <GitHubIcon />
                        {`${starCount.toLocaleString()} stars on this repo`}
                    </a>
                    <Link href="/blog" className="flex items-center">
                        <ViewsIcon />
                        {`${views.toLocaleString()} blog views all time`}
                    </Link>
                </div>
            </div>
            <p className="my-5 max-w-[460px]">{bio()}</p>
        </section>
    );
}
