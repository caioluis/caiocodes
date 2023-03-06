import "server-only";

import { Octokit } from "@octokit/rest";
import { queryBuilder } from "lib/planetscale";
import { cache } from "react";

export const getBlogViews = cache(async () => {
    const data = await queryBuilder
        .selectFrom("views")
        .select(["count"])
        .execute();

    return data.reduce((acc, curr) => acc + Number(curr.count), 0);
});

export const getStarCount = cache(async () => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    });

    const req = await octokit.rest.repos.get({
        owner: "caioluis",
        repo: "caiocodes",
    });

    return req.data.stargazers_count;
});
