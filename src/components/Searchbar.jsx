
// components/Preview.jsx
import React, { useState } from 'react';
export const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
  
    const handleChange = (e) => {
      setQuery(e.target.value);
      if (onSearch) onSearch(e.target.value);
    };
  
    return (
      <input
        type="text"
        placeholder="Search for a section"
        value={query}
        onChange={handleChange}
        className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 mb-3"
      />
    );
  };