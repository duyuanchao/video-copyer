'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    MonitorPlay,
    Copy,
    MessageSquare,
    Sparkles,
    Settings,
    LayoutDashboard
} from 'lucide-react';

const sidebarItems = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'Viral Replica',
        href: '/replica',
        icon: Copy,
    },
    {
        title: 'Talking Photos',
        href: '/talking-photos',
        icon: MessageSquare,
    },
    {
        title: 'Smart Create',
        href: '/create',
        icon: Sparkles,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-64 flex-col border-r border-border bg-card">
            <div className="flex h-14 items-center border-b border-border px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <MonitorPlay className="h-6 w-6 text-primary" />
                    <span className="text-lg">Video Copyer</span>
                </Link>
            </div>
            <div className="flex-1 overflow-auto py-4">
                <nav className="grid items-start px-4 text-sm font-medium">
                    {sidebarItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                pathname === item.href
                                    ? "bg-secondary text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="border-t border-border p-4">
                <Link
                    href="/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary"
                >
                    <Settings className="h-4 w-4" />
                    Settings
                </Link>
            </div>
        </div>
    );
}
