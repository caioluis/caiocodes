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
                className="text-black dark:text-white h-[64px] md:h-[64px]"
                width="64"
                height="64"
                viewBox="0 0 2048 2048"
            >
                <path
                    fill="#FFF"
                    d="M0 0h434c0 1598 0 1598-1 1599h-1787v-101H347v-97h-612v-95h612V91H-46c2.98-14.897 13.005-29.709 20-43l8-16 8-15 6-12 4-5z"
                    transform="translate(1492 379)"
                ></path>
                <path
                    fill="#FFF"
                    d="M0 0h1046v91L85 92v1213l962 1v95H0V0z"
                    transform="translate(138 379)"
                ></path>
                <path
                    fill="#FFF"
                    d="M0 0c22.397 17.917 32.298 39.787 37 68 0 65.252-18.553 120.512-63 169-6 5-6 5-15 6-5-3-5-3-9-8 0-19.396 12.71-35.563 22-52C-5.471 137.942 4.435 99.305-12 50c-5.89-10.488-5.89-10.488-16-16-26.463 0-48.24 18.117-67 35l-8 7c-17.467 17.467-32.979 35.357-48 55l-13 17c-53.172 77.34-97.917 159.706-141 243l-14 27c-10.134 20.267-20.224 40.558-30 61l-25 51-11 23-20 41-10 21-8 15-8 16c-13.634 27.268-27.607 54.133-42 81l-18 34c-18.509 33.315-37.219 66.42-57 99l-8 14-17 28-12 20c-27.26 44.037-55.125 87.678-85 130l-7 11c2.716 10.866 17.461 14.13 27 20 16.07 9.889 32.082 19.87 48 30l24 15 22 14c188.767 119.221 388.46 208.36 615 218 21.857 2.85 41.304 5.536 60 18 3 6 3 6 2 15-16.71 27.851-40.284 39.966-71 49-270.674 43.308-535.48-86.514-748-240l-17-12-18-13-16-11c-8.059 1.064-8.059 1.064-19 18l-11 13-9 11-9 10-7 8-11 12-7 8-9 9-7 8c-7.502 7.502-15.016 15.014-23 22l-11 11-8 7-13 12-11 9-10 9-14 11-16 13c-85.93 62.061-177.329 110.075-286 98-51.753-12.322-87.52-35.781-117-80-47.042-83.63-41.338-180.984-18-271 27.935-83.806 64.161-158.08 146-199 100.75-39.18 202.42-8.082 298 32 52.404 23.82 103.823 48.775 154 77h6l2-4a8601.51 8601.51 0 0127-39l11-17 13-20c35.914-56.437 69.412-114.035 101-173l15-28 14-27 10-19c11.506-22.245 22.8-44.6 34-67l10-19 20-39 12-22 13-25 13-23 10-19c24.925-44.099 50.336-87.927 77-131l17-28c32.344-51.21 65.272-101.794 102-150l9-12 13-16 8-10c6.563-7.756 13.203-15.448 20-23l7-8 9-9 1-2h2l1-3h2v-2h2v-2l8-7 8-8C-126.741 24.149-60.2-30.1 0 0zm-1256 1015c-52.792 71.99-68.346 163.365-60 251 8.883 44.417 22.41 79.274 61 105 45.125 19.34 84.79 9.684 129-8 48.81-24.405 92.46-54.85 134-90l11-9 17-16 10-9c23.533-23.002 23.533-23.002 46-47l15-16 9-10 9-10c6.38-7.292 12.694-14.643 19-22l12-14 10-13c-5.464-10.928-20.911-17.274-31-24l-18-12c-107.825-70.32-260.016-168.984-373-56z"
                    transform="translate(1695 54)"
                ></path>
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

// <motion.svg
//                 className="text-black dark:text-white h-[25px] md:h-[37px]"
//                 width="25"
//                 height="37"
//                 viewBox="0 0 232 316"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <motion.path
//                     initial={{
//                         opacity: 0,
//                         pathLength: 0,
//                     }}
//                     animate={{
//                         opacity: 1,
//                         pathLength: 1,
//                     }}
//                     transition={{
//                         duration: 0.5,
//                         type: "spring",
//                         stiffness: 50,
//                     }}
//                     d="M39 316V0"
//                     stroke="currentColor"
//                     strokeWidth={78}
//                 />
//                 <motion.path
//                     initial={{ x: -200, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{
//                         duration: 0.5,
//                         type: "spring",
//                         stiffness: 50,
//                     }}
//                     d="M232 314.998H129.852L232 232.887V314.998Z"
//                     fill="currentColor"
//                 />
//             </motion.svg>
