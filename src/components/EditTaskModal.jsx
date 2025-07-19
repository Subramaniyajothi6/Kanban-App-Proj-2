import React, { useEffect, useRef} from 'react'
import TaskForm from './TaskForm'
import { useTasks } from '../context/TaskContext'
import { DndContext } from '@dnd-kit/core';


const EditTaskModal = ({task,onClose}) => {

    const {editTask} = useTasks();
    const modalref = useRef(null);
    useEffect(()=>{
        const handleClickOutside = ((e)=>{
            if(modalref.current && !modalref.current.contains(e.target)){
                onClose();
            }
        });
        document.addEventListener('mousedown',handleClickOutside);
        return() => document.removeEventListener('mousedown',handleClickOutside);

    },[onClose]
    )

  return (
    <>
    <div>
        <div ref={modalref}>
            <TaskForm initialData={task} 
            onSubmit={(updatedTask)=>{editTask(updatedTask)
                onClose()}
            } onCancel={onClose}/>            
        </div>
    </div>
    </>
  )
}

export default EditTaskModal





// const [items, setItems] = useState([
//     { id: 1, Content: 'apple' },
//     { id: 2, Content: 'banana' },
//     { id: 3, Content: 'carrot' },
//     { id: 4, Content: 'cherry' },
// ]); 

// function sortableItem({id,children}){

//     const{attributes,listeners,setNodeRef,transform,transition} = useSortable({id})
//     const style = {
//         transform:CSS.Transform.toString(transform),
//         transition,
//     } 

//     return(
//         <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//             {children}
//         </div>
//     )
    
// }

// <DndContext>
// <SortableContext items={items.map((item)=>item.id)}>    
//     <div>
//        { items.map((item) =>
//             <SortableItem key={item.id} id={item.id}>
//                 {item.Content}
//             </SortableItem>
//         )}
//     </div>
// </SortableContext>
// </DndContext>