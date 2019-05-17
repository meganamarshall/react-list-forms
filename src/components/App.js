import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function App() {

  const [selected, updateSelected] = useState('home');

  const message = {
    home: 'You haven\'t clicked anything yet',
    child1: 'I am a child',
    child2: 'I am a child too',
    child3: 'I am also a child'
  };


  return (
    <>
      <Sidebar>
        <p><a onClick={() => updateSelected('child1')}>Child1</a></p>
        <p><a onClick={() => updateSelected('child2')}>Child2</a></p>
        <p><a onClick={() => updateSelected('child3')}>Child3</a></p>
      </Sidebar>
      <h1>{message[selected]}</h1>
    </>
  );
}
