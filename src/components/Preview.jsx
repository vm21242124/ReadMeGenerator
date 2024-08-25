

// components/Preview.jsx
import React, {  } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

const Preview = ({ markdown }) => {


  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold mb-2">Preview</h3>
      <div className="prose border p-4 rounded bg-white">
        <MarkdownPreview
          source={markdown}
          style={{ padding: 16 }}
          rehypeRewrite={(node, index, parent) => {
            if (node.tagName === "a" && parent && /^h(1|2|3|4|5|6)/.test(parent.tagName)) {
              parent.children = parent.children.slice(1);
            }
          }}
        />
      </div>
     
    </div>
  );
};
export default Preview;