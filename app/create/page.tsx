export default function CreatePage() {
    return (
        <div className="flex flex-col h-full">
            <h1 className="text-3xl font-bold mb-6">Intelligent Creation</h1>
            <div className="flex-1 rounded-xl border border-dashed border-border flex items-center justify-center bg-card">
                <div className="text-center space-y-4">
                    <p className="text-muted-foreground">Enter your creative Prompt</p>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                        Generate Plan
                    </button>
                </div>
            </div>
        </div>
    )
}
