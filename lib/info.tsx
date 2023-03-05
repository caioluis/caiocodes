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
            I'm still populating this website. In the meantime, you can check my{" "}
            <a
                href="
                linkedin.com/in/caioluis
                "
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline"
            >
                LinkedIn
            </a>{" "}
            profile.
        </>
    );
};
