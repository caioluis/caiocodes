"use client";

import {
    AnimatePresence,
    motion,
    useAnimate,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { ChangePasswordIcon, EyeIcon } from "./icons";

function generateRandomString() {
    const characters =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
    let result = "";
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function Credential({ image, website, passwordChangerTrigger }) {
    const [password, setPassword] = useState(generateRandomString());
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (passwordChangerTrigger) {
            setPassword(generateRandomString());
        }
    }, [passwordChangerTrigger]);

    return (
        <div className="flex flex-row border-t-[1px] border-[#cbc9c7] pt-2">
            <div className="aspect-video h-8">
                <img
                    src={image}
                    className="rounded object-cover h-full w-full object-center border-[1px] border-[#0000001a]"
                />
            </div>
            <div className="ml-3">
                <p className="text-sm text-[#212d37] m-0 font-extrabold font-publicSans">
                    {website}
                </p>
                <p className="text-[0.75em] text-[#615b57] m-0 font-light font-publicSans -mt-1.5">
                    visitor@caio.codes
                </p>
            </div>
            <div className="relative flex flex-row ml-auto">
                <input
                    type={showPassword ? "text" : "password"}
                    className="border-[1px] border-[#7a8f93] bg-white rounded max-w-[100px] lg:max-w-none pl-2 pr-10 text-[#212d37] font-apercuMonoPro leading-5"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="absolute right-[1.5px] top-[1.5px] leading-2 rounded hover:bg-[#6b83986a]"
                    onClick={toggleShowPassword}
                >
                    <EyeIcon />
                </button>
            </div>
        </div>
    );
}

export default function PasswordChanger() {
    const [open, setOpen] = useState(false);
    const [passwordChangerTrigger, setPasswordChangerTrigger] = useState(false);
    const [scope, animate] = useAnimate();
    const [titleScope, animateTitle] = useAnimate();

    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

    const triggerPasswordChanger = () => {
        setOpen(true);
        setTimeout(() => {
            setPasswordChangerTrigger(true);
        }, 2000);
        setTimeout(() => {
            setOpen(false);
            setPasswordChangerTrigger(false);
        }, 4600);
    };

    useEffect(() => {
        if (passwordChangerTrigger) {
            animate("#left-circle", { y: 0 }, { duration: 0.5 });
            animate("#middle-circle", { y: 0 }, { duration: 0.5 });
            animate("#right-circle", { y: 0 }, { duration: 0.5 });

            setTimeout(() => {
                animate("#left-circle", { opacity: 0 }, { duration: 0.5 });
                animate("#right-circle", { opacity: 0 }, { duration: 0.5 });
                animateTitle(".changing", { opacity: 0 }, { duration: 0.5 });
                animateTitle(
                    ".done",
                    { opacity: 1 },
                    { duration: 1, delay: 0.5 }
                );
            }, 500);

            setTimeout(() => {
                animate(
                    "#middle-circle",
                    { scale: 2, backgroundColor: "green" },
                    { duration: 0.25 }
                );
            }, 750);

            setTimeout(() => {
                animate("#checkmark", { pathLength: 1 }, { duration: 0.5 });
            }, 1000);
        }
    }, [passwordChangerTrigger]);

    return (
        <div className="relative flex flex-col bg-white rounded-lg p-4 shadow-lg gap-y-4">
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { ease: "easeOut", duration: 0.15 },
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.75,
                            transition: { ease: "easeIn", duration: 0.15 },
                        }}
                        className="absolute bg-white rounded-lg m-5 inset-0 marker:rounded-lg shadow-lg flex flex-col items-center justify-center z-10"
                    >
                        <motion.div
                            ref={titleScope}
                            className="relative flex items-center justify-center mb-10 w-full"
                        >
                            <motion.h4
                                initial={{ opacity: 0, y: -10 }}
                                key="done"
                                className="absolute w-full text-center done text-[#212d37] font-bold font-publicSans text-2xl"
                            >
                                Done!
                            </motion.h4>
                            <motion.h4
                                key="changing"
                                className="absolute w-full text-center changing text-[#212d37] font-bold font-publicSans text-2xl"
                            >
                                Changing your passwords, hang tight!
                            </motion.h4>
                        </motion.div>
                        <motion.div
                            key="loading"
                            className="flex first-letter:relative h-10"
                            ref={scope}
                        >
                            <motion.span
                                id="left-circle"
                                layout
                                animate={{
                                    y: [10, -10, 10],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    staggerDirection: 0.1,
                                }}
                                className="h-4 w-4 rounded-full bg-[#7a8f93] inline-block mr-1"
                            />
                            <motion.span
                                layout
                                id="middle-circle"
                                animate={{
                                    y: [10, -10, 10],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    staggerDirection: 0.1,
                                    delay: 0.2,
                                }}
                                className="h-4 w-4 rounded-full bg-[#7a8f93] inline-block mr-1"
                            >
                                <div className="h-4 w-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 150 150"
                                        className="z-10"
                                    >
                                        <motion.path
                                            id="checkmark"
                                            d="M38 74.707l24.647 24.646L116.5 45.5"
                                            fill="transparent"
                                            strokeWidth="20"
                                            stroke="#fff"
                                            strokeLinecap="round"
                                            initial={{
                                                pathLength: 0,
                                                opacity: 0,
                                            }}
                                            style={{
                                                pathLength: pathLength,
                                                opacity: opacity,
                                            }}
                                        />
                                    </svg>
                                </div>
                            </motion.span>
                            <motion.span
                                layout
                                id="right-circle"
                                animate={{
                                    y: [10, -10, 10],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    staggerDirection: 0.1,
                                    delay: 0.4,
                                }}
                                className="h-4 w-4 rounded-full bg-[#7a8f93] inline-block mr-1"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                className="bg-neutral-200 w-fit py-1 px-2 rounded hover:brightness-90"
                onClick={triggerPasswordChanger}
            >
                <span className="flex font-publicSans font-bold text-[#212d37] items-center">
                    Password Changer
                    <ChangePasswordIcon />
                </span>
            </button>
            <Credential
                image="https://d2erpoudwvue5y.cloudfront.net/_46x30/apple_com@2x.png"
                website="apple.com"
                passwordChangerTrigger={passwordChangerTrigger}
            />
            <Credential
                image="https://d2erpoudwvue5y.cloudfront.net/_46x30/amazon_es@2x.png"
                website="amazon.es"
                passwordChangerTrigger={passwordChangerTrigger}
            />
            <Credential
                image="https://d2erpoudwvue5y.cloudfront.net/_46x30/google_com@2x.png"
                website="google.com"
                passwordChangerTrigger={passwordChangerTrigger}
            />
        </div>
    );
}
