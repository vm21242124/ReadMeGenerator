import React, { createContext, useContext, useState, useEffect ,lazy} from 'react';
import { selectedSections as initialSections } from './AvailableSections.js';

const SectionContext = createContext();

export const useSectionContext = () => {
  return useContext(SectionContext);
};

export const SectionProvider = ({ children }) => {
  const [selectedSections, setSelectedSections] = useState(() => {
    // Load sections from localStorage, or fallback to initialSections if not available
    const savedSections = localStorage.getItem('selectedSections');
    return savedSections ? JSON.parse(savedSections) : initialSections;
  });

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Save selectedSections to localStorage whenever they change
    localStorage.setItem('selectedSections', JSON.stringify(selectedSections));
  }, [selectedSections]);

  const addSection = (section) => {
    setSelectedSections((prevSections) => [...prevSections, section]);
  };

  const removeSection = (id) => {
    setSelectedSections((prevSections) =>
      prevSections.filter((section) => section.id !== id)
    );
  };

  const updateSections = (newSections) => {
    setSelectedSections(newSections);
  };

  return (
    <SectionContext.Provider
      value={{
        selectedSections,
        activeSection,
        addSection,
        removeSection,
        updateSections,
        setActiveSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};
