import PasswordChanger from "components/PasswordChanger";

export const PasswordChangerInfo = () => {
    return (
        <>
            <li className="font-bold text-xl font-serif">Password Changer</li>
            <p>
                This feature allows users to change their passwords in just a
                click. It was a really great way to react to breaches. Users
                could change their passwords in bulk in a matter of seconds. Try
                it out yourself! (just a dummy, tho)
            </p>
            <p>
                Check the password that as randomly assigned to you, then hit
                the Password Changer to see the Magic!
            </p>
            <PasswordChanger />
            <p>
                Of course the actual feature inside the Dashlane extension
                wasn't that simple and it had a lot of edge cases to handle.
                Password Changer uses "recipes", a set of instructions to
                control our web crawler, navigating through pages on auto-pilot
                and following the actions needed to set a new password.
            </p>
            <p>
                When I joined, we were focusing on increasing the numbers of
                websites that were supported by it. In the meantime, I was also
                working on internal tools to help developers and non-tech people
                to create those recipes, refactoring an old, unusable UI that we
                had. We conducted some tests with my tool in a Workshop that my
                team held. After some considerations, we decided to put it on
                freezer, as it still was a bit too complex for non-tech people
                to use. Failed.
            </p>
            <p>
                After a while, we started to notice how maintenance-heavy this
                feature was. By the nature of our crawler engine, some changes
                made by the supported websites would break our recipes. We also
                tried hiring someone just to learn and do the web crawling and
                writing the instructions, saving engineering resources that
                could be used in the actual engine.
            </p>
            <p>
                However, I realised that we were just treating the symptoms,
                rather than the root cause. Password Changer was limited by its
                own design, which is based on that recipes. I conducted a
                presentation to the team, giving some options on how we could
                approach the problem. After some discussions and considerations,
                we decided to sunset the feature, as the majority of us agreed
                that it couldn't be kept alive delivering a poor result.
            </p>
            <p>
                I still hope that someday they will revive Password Changer. And
                I still want to try one of the options I've proposed. 👀
            </p>
        </>
    );
};
