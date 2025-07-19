import { IoIosClose } from 'react-icons/io';
import { useTasks } from '../context/TaskContext'
import TaskForm from './TaskForm'


const CreateTask = ({ onClose }) => {
  const { addTask } = useTasks()

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-100  bg-opacity-50 flex items-center justify-center">

      <TaskForm onSubmit={addTask} onCancel={onClose} />
      
    </div>
  )
}

export default CreateTask