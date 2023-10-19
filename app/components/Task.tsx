"use client";

import { ITask } from '@/types/tasks';
import React, {useState, FormEventHandler} from 'react'
import {FiEdit, FiTrash2} from 'react-icons/fi'
import Modal from './Modal';
import { addTodoTask, deleteTodoTask, updateTodoTask } from '@/api';
import { v4 as uuidv4 } from 'uuid';

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {

    const [openModalUpdate, setOpenModalUpdate] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDelete] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.task);

    const handleSubmitUpdateTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (taskToEdit !== "") {
            await updateTodoTask({
                id: task.id,
                task: taskToEdit
            })
            location.reload();
            setTaskToEdit("");
            setOpenModalUpdate(false)
            alert("Task updated successfully");
        }
        else{
            alert("Textarea is empty. Add a task!");
        }
    }

    const handleDeleteTask = async(id: string) => {
        await deleteTodoTask(id);
        setOpenModalDelete(false)
        alert("Task deleted successfully");
        location.reload();
    }
    return (
        <tr key={task.id}>
            <td className='text-black font-normal text-base w-full'>{task.task}</td>
            <td className='flex flex-row items-center '>
                <span className="mr-2 text-base-500 text-blue-500">Update</span>
                <FiEdit onClick={() => setOpenModalUpdate(true)} cursor='pointer' size={20} className='text-blue-500' />
                <Modal modalOpen={openModalUpdate} setModalOpen={setOpenModalUpdate}>
                    <form onSubmit={handleSubmitUpdateTodo}>
                        <h3 className='font-bold text-lg text-black'>Update Your Task</h3>
                        <div className='modal-action justify-between'>
                            <textarea
                                value={taskToEdit}
                                onChange={(text) => setTaskToEdit(text.target.value)}
                                placeholder="Todo name"
                                rows={2}
                                cols={38}
                                className=" border border-gray-300 bg-white rounded-md w-90 text-black"
                            />
                            <button type='submit' className='btn bg-blue-500 hover:bg-green text-white'>
                                Submit
                            </button>
                        </div>
                    </form>
                </Modal>
                <span className=" ml-3 mr-2 text-base-500 text-red-500">Delete</span>
                <FiTrash2 onClick={() => setOpenModalDelete(true)} cursor='pointer' size={20} className='text-red-500' />
                <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDelete}>
                    <h3 className='text-lg text-black'>Are you sure you want to delete this task?</h3>
                    <div className='modal-action'>
                        <button onClick={() => handleDeleteTask(task.id)} className='btn bg-blue-500 hover:bg-green text-white'>Yes</button>
                    </div>
                </Modal>
            </td>
        </tr>
    )
}

export default Task