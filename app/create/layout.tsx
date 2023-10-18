

export default function CreateTodoLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <section className="bg-white">
        
        <nav></nav>
            {children}
        </section>
    )
}