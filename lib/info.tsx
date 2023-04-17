import { ArrowIcon } from "components/icons";
import me from "../app/avatar.jpg";

export const name = "Caio Gomes";
export const avatar = me;
export const about = () => {
    return (
        <>
            Hey, I'm Caio. I'm a Sofware Engineer, previously at{" "}
            <b>Dashlane, Qonto & Zefir</b>. Currently envolved in open-source
            projects and open to new opportunities.
        </>
    );
};

export const bio = () => {
    return (
        <>
            If you want to know more about my previous experience, check the{" "}
            <strong>About</strong> section. Do you want to talk about
            interesting opportunities? Reach me out on my{" "}
            <a
                href="https://linkedin.com/in/caioluis
                "
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
            >
                LinkedIn
            </a>{" "}
            profile.
        </>
    );
};
