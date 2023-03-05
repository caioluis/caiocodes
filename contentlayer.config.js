import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath,
    },
    structuredData: {
        type: "object",
        resolve: (doc) => ({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: doc.title,
            datePublished: doc.publishedAt,
            dateModified: doc.publishedAt,
            description: doc.summary,
            image: doc.image
                ? `https://caio.codes${doc.image}`
                : `https://caio.codes/api/og?title=${doc.title}`,
            url: `https://caio.codes/blog/${doc._raw.flattenedPath}`,
            author: {
                "@type": "Person",
                name: "Caio Gomes",
            },
        }),
    },
};

export const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        publishedAt: {
            type: "string",
            required: true,
        },
        summary: {
            type: "string",
            required: true,
        },
        image: {
            type: "string",
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Blog],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "one-dark-pro",
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["anchor"],
                    },
                },
            ],
        ],
    },
});
