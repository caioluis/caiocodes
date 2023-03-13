import React from "react";
import me from "../app/avatar.jpg";

export const name = "Caio Gomes";
export const avatar = me;

const companies = (
    <>
        <b>Dashlane, Qonto & Zefir</b>
    </>
);

export const about = (t: any) => (
    <>
        {t.home.shortIntro
            .split("{{companies}}")
            .flatMap((item) => [item, companies])
            .slice(0, -1)}
    </>
);

const LinkedIn = (
    <>
        <a
            href="https://linkedin.com/in/caioluis"
            target="_blank"
            rel="noopener noreferrer"
        >
            <b>LinkedIn</b>
        </a>
    </>
);

export const bio = (t: any) => (
    <>
        {t.home.shortOutro
            .split("{{linkedin}}")
            .flatMap((item) => [item, LinkedIn])
            .slice(0, -1)}
    </>
);
