import Link from "next/link";

const todos = [
  {
    id: 1,
    todo: "Making more money",
  },
  {
    id: 2,
    todo: "I need to learn Next Js",
  },
  {
    id: 3,
    todo: "Make sure to wake up early tomorrow morning",
  },
  {
    id: 4,
    todo: "I need to make mama proud",
  },
  {
    id: 5,
    todo: "I wanna own the biggest tech company in Africa",
  },
  
];


export default function Home() {
  return (
    <main style={{ backgroundColor: '#E0E0E0 ' }}>
      <div className="my-10 mx-5">
        <Link href="/create">
          <button
            type="submit"
            className="w-32 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Add a Task
          </button>
        </Link>
      </div>
      <ul role="list" className="divide-y divide-black mx-5">
        {todos.map((todo) => (
          <li key={todo.id} className="flex flex-col sm:flex-row justify-between gap-4 py-4">
            <div className="flex min-w-0 gap-2 sm:flex-col">
              <div className="min-w-0 flex-auto">
                <p className="text-base font-bold text-gray-800 whitespace-normal max-w-xl anywhere" style={{ wordWrap: 'break-word' }}>
                  {todo.todo}
                </p>
              </div>
            </div>
            <div className="sm:flex sm:flex-row sm:items-end">
              <div className="mb-3">
                <button
                  type="submit"
                  className="w-25 mr-5 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
                >
                  Edit
                </button>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="w-25 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
