import React from 'react';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <>
      <Sidebar>
        <p><a onClick={() => console.log('clicked')}>Child1</a></p>
        <p><a onClick={() => console.log('child2 clicked')}>Child2</a></p>
        <p><a onClick={() => console.log('child3 clicked')}>Child3</a></p>
      </Sidebar>
      <h1>{}</h1>
    </>
  );
}
