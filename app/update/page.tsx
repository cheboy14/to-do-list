"use client";
import { ITask } from '@/types/tasks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'

interface TaskProps {
    task: ITask
}


const Update: React.FC<TaskProps> = ({task}) => {
    const router = useRouter()
    const [taskToEdit, setTaskToEdit] = useState<string>(task.task);

    const handleSubmitEditTodo = () => {

    }

    return (
        <div className="flex justify-center items-center h-screen">
        <div>
            <h1 className="text-3xl font-bold text-center text-black">Add a Task</h1>
            <p className="text-center text-black font-light">Use this form to add a task.</p> <br />
            <form onSubmit={handleSubmitEditTodo}>
                <div className="flex flex-col justify-center items-center">
                    <textarea
                        value={taskToEdit}
                        onChange={(text) => setTaskToEdit(text.target.value)}
                        placeholder="Todo name"
                        rows={2}
                        cols={38}
                        className="p-2 border border-gray-300 bg-white rounded-md w-90 text-black"
                    />
                    <div>
                        <button
                        type="submit"
                        className="btn btn-primary transition-colors duration-300 ease-in-out bg-dodgerblue w-25 mr-5 h-10 mt-3 rounded-md hover:bg-green px-3 py-2 text-center text-sm font-semibold text-white shadow-md focus:outline-none focus:ring focus:ring-indigo-300"
                        >
                        Add Task
                        </button>
                        <Link href="/">
                            <button
                                type="submit"
                                className="btn btn-primary transition-colors duration-300 ease-in-out bg-dodgerblue w-25 h-10 mt-3 rounded-md px-3 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-green focus:outline-none focus:ring focus:ring-indigo-300"
                            >
                                The Todo's
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Update