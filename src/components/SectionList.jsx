
// components/Preview.jsx
import React, { useState } from 'react';
import { useSectionContext } from './SectionContenxt';

import { SectionItem } from './SectionItem';

export const SectionList = () => {
    const { selectedSections, removeSection, updateSections, setActiveSection } = useSectionContext();
    const [activeId, setActiveId] = useState(null);
  
    const handleDelete = (id) => {
      removeSection(id);
      if (activeId === id) {
        setActiveId(null);
        setActiveSection(null);
      }
    };
  
    const handleSelect = (section) => {
      setActiveId(section.id);
      setActiveSection(section);
    };
  
    const handleDrag = (dragIndex, hoverIndex) => {
      const draggedSection = selectedSections[dragIndex];
      const updatedSections = [...selectedSections];
      updatedSections.splice(dragIndex, 1);
      updatedSections.splice(hoverIndex, 0, draggedSection);
      updateSections(updatedSections);
    };
  
    return (
      <ul className="space-y-3">
        {selectedSections.map((section, index) => (
          <SectionItem
            key={section.id}
            index={index}
            section={section}
            onDelete={handleDelete}
            onSelect={handleSelect}
            isActive={section.id === activeId}
            onDrag={handleDrag}
          />
        ))}
      </ul>
    );
  };