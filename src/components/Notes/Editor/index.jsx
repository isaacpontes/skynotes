/* eslint-disable react/prop-types */
import { Input } from 'rbx';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function NotesEditor({ note, updateNote }) {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContent, setCurrentContent] = useState('');
  const [timer, setTimer] = useState(null);

  function handleUpdate(title, body) {
    updateNote(note, { title, body });
  }

  function handleChange(content, delta, source) {
    clearTimeout(timer);
    if (source === 'user') {
      setCurrentContent(content);
      setTimer(setTimeout(() => {
        handleUpdate(currentTitle, content);
      }, 3 * 1000));
    }
  }

  useEffect(() => {
    setCurrentTitle(note.title);
    setCurrentContent(note.body);
  }, [note]);

  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }, { header: '1' }, { header: '2' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' },
        { indent: '-1' }, { indent: '+1' }],
      ['link'],
      ['clean'],
    ],
  };

  return (
    <>
      <Input
        color="light"
        placeholder="Insert a Title..."
        rounded={false}
        size="large"
        value={currentTitle}
        onChange={(e) => {
          clearTimeout(timer);
          setCurrentTitle(e.target.value);
          setTimer(setTimeout(() => {
            handleUpdate(e.target.value, currentContent);
          }, 3 * 1000));
        }}
      />
      <ReactQuill
        modules={modules}
        value={currentContent}
        onChange={handleChange}
      />
    </>
  );
}

export default NotesEditor;
