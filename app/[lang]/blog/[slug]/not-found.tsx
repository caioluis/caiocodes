export default function NotFound() {
    // const t = await getLocale(lang);
    // Next 13 limitation. I can't localize this page because it doesn't have access to params/searchParams.
    // Maybe I can contribute to Next.js to fix this!
    return <p>Page not found</p>;
}
