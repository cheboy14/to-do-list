

export default function CreateTodoLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <section className="bg-gray-500">
        
        <nav></nav>
            {children}
        </section>
    )
}