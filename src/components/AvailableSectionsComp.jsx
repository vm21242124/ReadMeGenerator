
// components/Preview.jsx
import React, {  } from 'react';
import { useSectionContext } from './SectionContenxt';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs



export const AvailableSectionsComp = ({availableSections}) => {
    const { addSection } = useSectionContext();
  
    return (
      <ul className="space-y-2">
        {availableSections?.map((section, index) => (
          <li key={index}>
            <button
              onClick={() => addSection({id:uuidv4(),title:section.title,content:section.content})}
              className="w-full text-left p-2 bg-white dark:bg-gray-700 rounded shadow text-rose-50 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    );
  };