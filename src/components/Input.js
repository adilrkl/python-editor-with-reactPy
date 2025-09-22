import React, { useEffect, useRef, useState } from 'react';

export default function Input({ prompt, onSubmit }) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleSubmit = () => {
    const submitted = `${input}\n`;
    console.log('Submitting input:', JSON.stringify(submitted));
    onSubmit(submitted);
    setInput(''); // Clear input after submit
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <label htmlFor="stdin-input" style={{ display: 'block', marginBottom: 4 }}>Input</label>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          ref={inputRef}
          id="stdin-input"
          type="text"
          placeholder={prompt || ''}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ flex: 1, padding: '8px 10px' }}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}


