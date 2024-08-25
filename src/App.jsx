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
const DownloadHeader=()=>{
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
    <header >
      <div className="sticky w-12/12 flex justify-between py-4">
    <h1 className='font-bold text-black hover:bg-emerald-600 text-xl'>Readme Creator</h1>
      <button
        onClick={handleDownload}
        className=" px-4 py-2 float-end bg-emerald-500 text-white rounded hover:bg-emerald-600 w-12/12"
        >
        Download Markdown
        </button>
      </div>
    </header>
  )
}
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



  return (
 
    <div className="flex">

      <Drawer />

      <div className="flex-1 p-4 h-screen">
      {/* <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 float-end bg-emerald-500 text-white rounded hover:bg-emerald-600"
        >
        Download Markdown
        </button> */}
        <DownloadHeader/>
        <div className="flex-1 p-4 h-[80vh] overflow-y-auto">

        <EditorMono />
        <Preview markdown={markdown} />
        </div>
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
