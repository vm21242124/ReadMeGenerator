// src/App.jsx

import React, { useEffect, useState, Suspense, lazy } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { SectionProvider, useSectionContext } from './components/SectionContenxt';
import Footer from './components/Footer';
import { FullScreenLoader } from './components/Loader';

const Drawer = lazy(() => import('./components/Drawer'));
const EditorMono = lazy(() => import('./components/Editor'));
const Preview = lazy(() => import('./components/Preview'));

const AppContent = () => {
  const { selectedSections } = useSectionContext();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    setMarkdown(
      selectedSections
        .map((section) => `${section.content.split('\n').map(cont=>cont).join('\n \n')}`)
        .join('\n')
    );
  }, [selectedSections]);

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md'; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Clean up the URL object
  };

  return (
 
    <div className="flex">

      <Drawer />
      <div className="flex-1 p-4 ">
      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 float-end bg-emerald-500 text-white rounded hover:bg-emerald-600"
      >
        Download Markdown
      </button>
        <EditorMono />
        <Preview markdown={markdown} />
      </div>
    </div>

  );
};

const App = () => {
  return (
    <SectionProvider>
       <Suspense fallback={<FullScreenLoader/>}>
      <DndProvider backend={HTML5Backend}>
        <AppContent />
        <Footer/>
      </DndProvider>
       </Suspense>
    </SectionProvider>
  );
};
export default App;
