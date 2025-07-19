import { closestCorners, DndContext, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import Column from './components/Column'
import { useTasks } from './context/TaskContext';
import CreateTask from './components/CreateTask';
import { useState } from 'react';

const status = ['To Do','In Progress','Done']
const Board = () => {

  const [showCreate, setShowCreate] = useState(false); 

  const {updateTask} = useTasks();
  const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: {
      distance: 1,  
    },
  }),

 useSensor(TouchSensor, {
    activationConstraint: {
      delay: 0,    
      tolerance: 1, 
    },
  }))



  const handledragend = (event) =>{
    const {active,over} = event;
    if (!over) return;

   const taskId = active.id;
  const overId = over.id;
    
  if (status.includes(overId)) {
    updateTask(taskId, overId);
  } else {
    // If dropped over a task (inside another column)
    const overElement = document.querySelector(`[data-id='${overId}']`);
    if (!overElement) return;
    const column = overElement?.closest('[data-column-id]');
    const newStatus = column?.getAttribute('data-column-id');

    if (status.includes(newStatus)) {
      updateTask(taskId, newStatus);
    }
  }
  }

  return (
   <>
   
  {showCreate && <CreateTask onClose={() => setShowCreate(false)}/>}
    <DndContext onDragEnd={handledragend} sensors={sensors }  collisionDetection={closestCorners}>
    <div className='bg-[#10002B]'>
    <div className='bg-[#5A189A] min-h-screen container mx-auto  '>
      <div className='py-4'>
          <h1 className='text-4xl text-white text-center font-medium'>Kanban Board</h1>
      <div className='flex justify-center sm:justify-end'>
        <button className='bg-indigo-500 px-4 py-2 rounded text-white mr-2 my-2 ' onClick={() => setShowCreate(true)}>
          Add Task
        </button>
      </div>
      </div>

     <div className='flex w-full'>
       {status.map((status)=>{
        return <Column key={status} status={status}/>
      })}
     </div>
    </div>

    </div>

   
    </DndContext>

   

   </>
    
  )
}

export default Board


