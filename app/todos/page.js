import TodoList from "@/components/TodoList";

async function fetchTodos() {
    // Simulera hämtning av data från en API eller databas
    return [
        { id: 1, text: "Lär dig Next.js", completed: false },
        { id: 2, text: "Bygg en Todo-app", completed: true },
        { id: 3, text: "Deploya till Vercel", completed: false },
    ];
}

export default async function TodosPage() {
    const initialTodos = await fetchTodos();

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Min Todo-lista</h1>
            <TodoList initialTodos={initialTodos} />
        </div>
    );
}