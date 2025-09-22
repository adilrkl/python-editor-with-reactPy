import React, { useState } from 'react';
import { PythonProvider, usePython } from 'react-py';
import './App.css';
import Input from './components/Input';

function PythonEditor() {
  const [code, setCode] = useState('');

  const { runPython, stdout, stderr, isLoading, isRunning, isAwaitingInput, sendInput, prompt } = usePython();

  const handleRunClick = () => {
    // react-py already patches pyodide-http internally; just run user code
    runPython(code);
  };

  return (
    <div className="App">
      <div className="editor-pane">
        <h1>Python Kodu</h1>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Python kodunuzu buraya yazın..."
          style={{ height: '80%', width: '100%' }}
        />
        <button onClick={handleRunClick} disabled={isLoading || isRunning}>
          {isLoading ? 'Yükleniyor...' : isRunning ? 'Çalışıyor...' : 'Çalıştır'}
        </button>
      </div>
      <div className="output-pane">
        <h1>Çıktı</h1>
        <pre>{stdout}</pre>
        {stderr && (
          <>
            <h1>Hata</h1>
            <pre style={{ color: 'red' }}>{stderr}</pre>
          </>
        )}
        {isAwaitingInput && (
          <Input
            prompt={prompt}
            onSubmit={(value) => sendInput(value)}
          />
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <PythonProvider>
      <PythonEditor />
    </PythonProvider>
  );
}

export default App;