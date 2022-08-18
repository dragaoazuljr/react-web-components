import './App.css';
import React, { createRef, useEffect, useRef, useState } from 'react';

function App() {
  const [title, setTitle] = useState('child');
  const [show, setShow] = useState(false);
  const ngChildRef = useRef(null);
  const reactChildRef = useRef(title);
  
  return (
    <div className="app">
      <h1>root</h1>
      <input onChange={(e) => setTitle(e?.target?.value)} />
      <button onClick={() => setShow(!show)}>Mostrar</button>
      { show && <react-child title={title} ></react-child> }
      {/* { show && <ng-child ref={ngChildRef} title={title}></ng-child>} */}
    </div>
  );
}

export default App;
