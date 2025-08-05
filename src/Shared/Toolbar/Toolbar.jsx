// src/components/Toolbar.jsx
import React from 'react';

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  const buttonStyle =
    'px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100';

  return (
    <div className="flex flex-wrap gap-2 border-b px-3 py-2 bg-gray-50">
      <button
        className={buttonStyle}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <b>B</b>
      </button>

      <button
        className={buttonStyle}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i>I</i>
      </button>

      <button
        className={buttonStyle}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <u>U</u>
      </button>

      <button
        className={buttonStyle}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        • List
      </button>

      <button
        className={buttonStyle}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        1. List
      </button>

      <button
        className={buttonStyle}
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        Left
      </button>

      <button
        className={buttonStyle}
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        Center
      </button>

      <button
        className={buttonStyle}
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        Right
      </button>
    </div>
  );
};

export default Toolbar;
