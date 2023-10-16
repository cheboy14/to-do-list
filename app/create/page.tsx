"use client";

import Link from 'next/link';
import React from 'react'

export default function CreateTodo() {

    const handleSubmit = () => {
        alert("Submitted.");    
    };

    return (
        <div className="flex justify-center items-center h-screen">
        <div>
            <h1 className="text-3xl font-bold text-center">Add a Task</h1>
            <p className="text-center">Use this form to add a task.</p> <br />
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center">
                    <textarea
                        placeholder="Todo name"
                        rows={2}
                        cols={38}
                        className="p-2 border border-gray-300 rounded-md w-90 text-black"
                    />
                    <div>
                        <button
                        type="submit"
                        className="w-25 mr-5 h-10 mt-3 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
                        >
                        Submit
                        </button>
                        <Link href="/">
                            <button
                                type="submit"
                                className="w-25 h-10 mt-3 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
                            >
                                The Todos
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}
