// Let's use raw tailwind for now to verify logic, then upgrade to Shadcn components later if installed.

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Stat Cards */}
                {[
                    { title: "Generated Videos", value: "12", trend: "+2.5%" },
                    { title: "Credits Used", value: "850", trend: "150 Remaining" },
                    { title: "Saved Templates", value: "4", trend: "" },
                    { title: "Processing", value: "1", trend: "1 active task" },
                ].map((stat, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm">
                        <div className="text-sm font-medium text-muted-foreground">{stat.title}</div>
                        <div className="mt-2 text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.trend}</div>
                    </div>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 rounded-xl border border-border bg-card p-6">
                    <h3 className="font-semibold mb-4">Recent Projects</h3>
                    <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-lg text-muted-foreground">
                        No projects yet. Start "replicating" now!
                    </div>
                </div>
                <div className="col-span-3 rounded-xl border border-border bg-card p-6">
                    <h3 className="font-semibold mb-4">Viral Library</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded bg-muted"></div>
                                <div>
                                    <div className="font-medium text-sm">TikTok Viral BGM Edit</div>
                                    <div className="text-xs text-muted-foreground">Used by 1.2k+ users</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
