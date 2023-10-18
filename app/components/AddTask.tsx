"use client";

import Link from 'next/link';
import React, {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Modal from './Modal';

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    return (
        <div>
            <Link href='/create'>
                <button
                    className='btn btn-primary w-full transition-colors duration-300 ease-in-out bg-dodgerblue hover:bg-green'
                >
                    Add a New Task
                    
                    <AiOutlinePlus className="ml-2 bg-transparent" style={{ background: 'transparent' }} size={18} />
                </button>
            </Link>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >modal to do</Modal>
        </div>
    )
}

export default AddTask