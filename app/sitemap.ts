import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://video-copyer.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        // Add other static routes here as you build them, e.g.:
        // {
        //   url: `${baseUrl}/features`,
        //   lastModified: new Date(),
        //   changeFrequency: 'weekly',
        //   priority: 0.8,
        // },
        // {
        //   url: `${baseUrl}/pricing`,
        //   lastModified: new Date(),
        //   changeFrequency: 'weekly',
        //   priority: 0.8,
        // },
        // {
        //   url: `${baseUrl}/blog`,
        //   lastModified: new Date(),
        //   changeFrequency: 'daily',
        //   priority: 0.8,
        // },
    ];
}
