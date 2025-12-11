import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://video-copyer.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/", // Example of disallowed path
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
