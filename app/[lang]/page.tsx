import Link from "next/link";
import Image from "next/image";
import { getBlogViews, getStarCount } from "lib/metrics";
import { GitHubIcon, ViewsIcon } from "components/icons";
import { name, about, bio, avatar } from "lib/info";
import { getLocale } from "lib/getLocale";

export const revalidate = 60;

export default async function HomePage({ params: { lang } }) {
    const t = await getLocale(lang);
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
                {about(t)}
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
                        {`${starCount.toLocaleString()} ${t.stars}`}
                    </a>
                    <Link href="/blog" className="flex items-center">
                        <ViewsIcon />
                        {`${views.toLocaleString()} ${t.views}`}
                    </Link>
                </div>
            </div>
            <p className="my-5 max-w-[460px]">{bio(t)}</p>
        </section>
    );
}
