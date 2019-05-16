import React from 'react';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <>
      <Sidebar>
        <a onClick={() => console.log('clicked')}>Child1</a>
        <a onClick={() => console.log('child2 clicked')}>Child2</a>
        <a onClick={() => console.log('child3 clicked')}>Child3</a>
      </Sidebar>
    </>
  );
}
