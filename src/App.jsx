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
const DownloadHeader = lazy(() => import('./components/DownloadHeader'));

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
        <DownloadHeader markdown={markdown}/>
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
