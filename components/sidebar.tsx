"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = {
    "/": {
        name: "home",
        x: 0,
        y: 0,
        w: "64px",
    },
    "/about": {
        name: "about",
        x: 64,
        y: 35,
        w: "65px",
    },
    "/blog/manifesto": {
        name: "manifesto",
        x: 182,
        y: 69,
        w: "100px",
    },
    "/blog": {
        name: "blog",
        x: 127,
        y: 104,
        w: "56px",
    },
    "/uses": {
        name: "uses",
        x: 237,
        y: 139,
        w: "56px",
    },
};

function Logo() {
    return (
        <Link aria-label="Caio Luis Gomes" href="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2024 1990"
                width="64px"
                height="65px"
            >
                <g className="layer">
                    <path
                        fill="#bfbfbf"
                        d="M1810 1245H422V392h221v625h1167V228h-327V0h541v1990H0v-228h1816v-144h-333v-228h327v-145zM37 0h1263v228H258v1162h1041v228H37V0z"
                    ></path>
                </g>
            </svg>
        </Link>
    );
}

export default function Navbar() {
    let pathname = usePathname() || "/";
    if (pathname.includes("/blog/") && !pathname.includes("manifesto")) {
        pathname = "/blog";
    }

    return (
        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
            <div className="lg:sticky lg:top-20">
                <div className="mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
                    <Logo />
                </div>
                <nav
                    className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
                        {navItems[pathname] ? (
                            <>
                                {/* Desktop version, hidden on mobile, animates y axis */}
                                <div className="hidden md:block">
                                    <motion.div
                                        className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                                        layoutId="test2"
                                        initial={{
                                            opacity: 0,
                                            y: navItems[pathname].y,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: navItems[pathname].y,
                                            width: navItems[pathname].w,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                </div>
                                {/* Mobile version, hidden on desktop, animates x axis */}
                                <div className="block md:hidden">
                                    <motion.div
                                        className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                                        layoutId="test"
                                        initial={{
                                            opacity: 0,
                                            x: navItems[pathname].x,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: navItems[pathname].x,
                                            width: navItems[pathname].w,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                </div>
                            </>
                        ) : null}

                        {Object.entries(navItems).map(([path, { name }]) => {
                            const isActive = path === pathname;

                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className={clsx(
                                        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]",
                                        {
                                            "text-neutral-500": !isActive,
                                            "font-bold": isActive,
                                        }
                                    )}
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    );
}
