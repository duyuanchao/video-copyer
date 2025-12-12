import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.videocopyer.com";
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/create`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/dashboard`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/replica`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/talking-photos`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/templates`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/templates/alex-hormozi-value-framework`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/tiktok-script-extractor`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/viral-hook-generator`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/youtube-title-optimizer`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
    ];
}