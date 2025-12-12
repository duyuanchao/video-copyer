import React from "react";

export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Video Copyer",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: "AI-powered video content creation engine that helps you mimic viral hits.",

    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How does Video Copyer replicate viral videos?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our AI decodes the 'DNA' of viral hits using the proven 'Hook-Retain-Reward' framework. It analyzes pattern interrupts, visual pacing (cutting every 2-3 seconds), and emotional hooks to generate a new script that follows the exact structural logic of millions-viewed content.",
                },
            },
            {
                "@type": "Question",
                name: "Can I use this for TikTok and Instagram Reels?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The engine is specifically tuned for vertical short-form algorithms (9:16 aspect ratio). It optimizes for retention metrics favored by TikTok and Reels, including loopability and trending audio alignment.",
                },
            },
            {
                "@type": "Question",
                name: "Is there a free trial?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer a free tier that allows you to analyze up to 3 videos per day and generate limited scripts. No credit card required.",
                },
            },
            {
                "@type": "Question",
                name: "Do I need video editing skills?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Our Intelligent Creation tool handles the heavy lifting: automated b-roll matching, AI voiceover synchronization, and auto-captioning. You focus on the creative direction; we handle the timeline.",
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
        </>
    );
}
