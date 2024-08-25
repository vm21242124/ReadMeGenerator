import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { useSectionContext } from './SectionContenxt';


 const EditorMono = () => {
  const { activeSection, updateSections } = useSectionContext();
  const [code, setCode] = useState('');

  useEffect(() => {
    if (activeSection) {
      setCode(activeSection.content);
    }
  }, [activeSection]);

  const handleEditorChange = (newValue) => {
    setCode(newValue);
    if (activeSection) {
      activeSection.content = newValue;
      updateSections((sections) =>
        sections.map((section) =>
          section.id === activeSection.id ? activeSection : section
        )
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault(); // Prevent the default Enter key behavior in the editor
      const newValue = activeSection.content + '\n';
      handleEditorChange(newValue);
    }
  };

  return (
    <div className=" h-6/12">
      <h3 className="text-lg font-semibold mb-2">Editor</h3>
      {activeSection ? (
        <Editor
          width="100%"
          height="300px"
          padding="20px"
          margin="10px"
          language="markdown"
          theme="vs-dark"
          value={code}
          onChange={handleEditorChange}
          options={{ selectOnLineNumbers: true }}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <p>Select a section to edit</p>
      )}
    </div>
  );
};
export default EditorMono