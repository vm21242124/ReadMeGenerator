
import { FiMenu, FiTrash2 } from 'react-icons/fi';
// components/Preview.jsx
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

export const SectionItem = ({ section, index, onDelete, onSelect, isActive, onDrag }) => {
    const ref = useRef(null);
  
    const [, drop] = useDrop({
      accept: 'section',
      hover(item) {
        if (item.index === index) return;
        onDrag(item.index, index);
        item.index = index;
      },
    });
  
    const [{ isDragging }, drag] = useDrag({
      type: 'section',
      item: { id: section.id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    drag(drop(ref));
  
    return (
      <li
        ref={ref}
        onClick={() => onSelect(section)}
        className={`p-2 flex items-center justify-between rounded shadow cursor-pointer ${
          isDragging ? 'opacity-50' : 'opacity-100'
        } ${isActive ? 'bg-blue-100 dark:bg-blue-600' : 'bg-white dark:bg-gray-700'}`}
      >
        <div className="flex items-center">
          <FiMenu className="mr-2 cursor-move text-gray-500" />
          <p className="text-gray-800 dark:text-gray-200">{section.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(section.id);
            }}
            className="text-red-500 hover:text-red-700"
          >
            <FiTrash2 />
          </button>
        </div>
      </li>
    );
  };