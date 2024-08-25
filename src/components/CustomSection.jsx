
import { FiPlus } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs

import React, {  } from 'react';
import { useSectionContext } from './SectionContenxt';

export const CustomSectionButton = () => {
  const { addSection } = useSectionContext();
  const handleAddCustomSection=(e)=>{
    e.preventDefault();
    const customSection=
    {
      id:uuidv4(),
      title:" Custom Section",
      content:"Add content to your custom section"
    }
    addSection(customSection)
  }
    return (
      <button
      onClick={handleAddCustomSection}
        className="w-full flex items-center justify-center p-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors mb-3"
      >
        <FiPlus className="mr-2" />
        <span>Custom Section</span>
      </button>
    );
  };
  