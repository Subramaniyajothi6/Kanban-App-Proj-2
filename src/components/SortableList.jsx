import {
  PointerSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

const SortableItem = ({ task, onDelete, onEdit }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: task.id,
    activationConstraint: {
      delay: 0,
      tolerance: 2,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? 'transform 200ms ease'
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-[#E0AAFF]  rounded p-3 shadow-sm cursor-pointer relative" data-id={task.id}
    >

      <div
        {...listeners}
        {...attributes}
        className="cursor-grab active:cursor-grabbing  absolute right-0 mr-5  "
      >
        <GripVertical size={16} />
      </div>
      <div >
        <h3 className="font-medium">{task.title}</h3>
        {task.description && (
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {task.description}
          </p>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onEdit(task);
          }}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mr-2 mt-2"
          type="button"
        >
          Edit
        </button>


        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete(task.id);
          }}
          className="relative z-50 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded cursor-pointer mt-2" type="button" >
          Delete
        </button>
      </div>
    </div>
  );
};

const SortableList = ({ items, onDelete, onEdit }) => {


  return (
    <SortableContext items={items.map((task) => task.id)} strategy={verticalListSortingStrategy}>
      <div className="space-y-3  ">
        {items.map((task) => (
          <SortableItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </SortableContext>

  );
};

export default SortableList;
