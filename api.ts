"use client";

import { ITask } from "./types/tasks";

const baseURL = "http://localhost:3002";

export const fetchAllTasks = async(): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}/tasks`, {cache: 'no-store'});
    const todos = await res.json();
    return todos;
}

export const addTodoTask = async(todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseURL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const newTodo = await res.json();
    return newTodo;
}

export const updateTodoTask = async(todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const updatedTodo = await res.json();
    return updatedTodo;
}

export const deleteTodoTask = async(id: string): Promise<void> => {
    await fetch(`${baseURL}/tasks/${id}`, {
        method: 'DELETE',
    });
}