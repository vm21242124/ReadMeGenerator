
// components/Preview.jsx
import React, { useState } from 'react';
import { SectionList } from './SectionList';
import { SearchBar } from './Searchbar';
import { CustomSectionButton } from './CustomSection';
import { availableSections } from './AvailableSections';
import { AvailableSectionsComp } from './AvailableSectionsComp';

const Drawer = () => {
  const [searchitems,setSearchItems]=useState(availableSections);
  const handlesearch=(value)=>{
    if(value.length>0){
      setSearchItems(availableSections.filter(item=>item.title.toLowerCase().includes(value.toLowerCase())));
    }else{
      setSearchItems(availableSections);
    }
  }
    return (
      <div className="flex flex-col w-64 bg-gray-800 p-4 h-screen overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-white">Sections</h2>
        <SectionList />
        <h4 className="mt-6 mb-2 text-sm font-medium text-gray-300">
          Click on a section below to add it to your readme
        </h4>
        <SearchBar onSearch={handlesearch}/>
        <CustomSectionButton />
        <AvailableSectionsComp availableSections={searchitems}/>
      </div>
    );
  };
  export default Drawer