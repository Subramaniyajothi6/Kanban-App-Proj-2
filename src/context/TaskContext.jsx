import { createContext, useContext, useEffect, useState } from "react";

import { loadLocalStorage, saveLocalStorage } from "../utils/localStorage";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const updateTask = (id, newStatus) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    )
  );
};


    useEffect(
        () => {
            const savetasks = loadLocalStorage();
            console.log("Loaded from localStorage:", savetasks);
            if (savetasks.length > 0) {
                setTasks(savetasks);
                console.log("Loaded from localStorage:", savetasks); // ✅ Add this for debug
            }
        },[])

    const addTask = (task) => {
        setTasks((prev => [...prev, task]))
    }

    useEffect(() => {
        saveLocalStorage(tasks)
    }, [tasks])

    const deleteTask = (id) => {
        console.log("Deleting Task:", id);
        setTasks((prev) => prev.filter((task) => task.id !== id))
    }

    const editTask = (updatedTask) => {
        setTasks((prev) => prev.map((task) => task.id === updatedTask.id ? updatedTask : task))
        
    }
    const reorderTasks = (updatedTasks) => {
        setTasks(updatedTasks);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, reorderTasks , updateTask}}>
            {children}
        </TaskContext.Provider>
    )
}


export const useTasks = () => useContext(TaskContext); 