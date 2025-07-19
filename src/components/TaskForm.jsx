import { useState } from "react";
import { IoIosClose } from "react-icons/io";


const TaskForm = ({ initialData = {}, onSubmit, onCancel }) => {


    const [title, setTitle] = useState(initialData.title || '');
    const [description, setDescription] = useState(initialData.description || '');
    const [status, setStatus] = useState(initialData.status || 'To Do');



    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: initialData.id || Date.now().toString(),
            title,
            description,
            status
        };
        onSubmit(newTask);

        //  clear form
        setTitle('');
        setDescription('');
        setStatus('To Do');
        onCancel?.();
    }
    return (

        <>
            <div className="bg-[#7B2CBF] text-white p-4 rounded-xl flex flex-col w-100 py-10 relative">

                <button
                    type="button"
                    onClick={onCancel}
                    className="absolute top-1 right-2  text-gray-500 hover:text-gray-800"
                >
                    <IoIosClose className="text-5xl" />
                </button>
                <form onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-medium mb-3 text-center">New Task</h1>
                    <div>
                        <div className="mb-3 border px-2 py-2 rounded-md ">
                            <label htmlFor="title" className="text-lg mr-2" >Title :</label>
                            <input id="title" type="text" placeholder="......" className="w-4/5  outline-0" onChange={(e) => { setTitle(e.target.value) }} value={title} />
                        </div>
                        <div className="mb-3 border px-2 py-2 rounded-md flex">
                            <label htmlFor="description" className="text-lg mr-2">Description :</label>
                            <input id="description" type="text" placeholder="......" className="w-69/100  outline-0"
                                onChange={(e) => { setDescription(e.target.value) }} value={description} />
                        </div>

                        <div className="mb-3 border px-2 py-2 rounded-md flex ">
                            <label htmlFor="status" className="text-lg mr-2">Status : </label>
                            <select name="status" id="Status" className="w-81/100 text-lg outline-0 text-center text-black " onChange={(e) => { setStatus(e.target.value) }} value={status}>
                                <option className="text-black" value="To Do">Yet To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        <div className="flex justify-center py-2">
                            <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded-md  ">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TaskForm