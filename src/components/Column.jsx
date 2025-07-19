import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { useDroppable } from "@dnd-kit/core";
import SortableList from "./SortableList";
import EditTaskModal from "./EditTaskModal";



const Column = ({ status }) => {
  const { tasks, deleteTask } = useTasks();
  const [selectedTask, setSelectedTask] = useState(null);

  const filteredTasks = tasks.filter((task) => task.status === status);
  const { setNodeRef } = useDroppable({
    id: status, // important!
  });

  return (
    <div ref={setNodeRef} className="bg-[#3C096C]  shadow p-4 w-full   "  data-column-id={status}>



      <h2 className="text-xl font-medium mb-3 text-white text-center ">{status}</h2>

      {filteredTasks.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-white text-2xl ">No tasks</p>
        </div>
      )}





      <SortableList
        items={filteredTasks}
        onDelete={deleteTask}
        onEdit={(task) => setSelectedTask(task)}
      />

      {selectedTask && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-[100] flex items-center justify-center">
          <EditTaskModal
            task={selectedTask}
            onClose={() => setSelectedTask(null)}
          />
        </div>
      )}
    </div>


  );
};

export default Column;
