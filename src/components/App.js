import React from 'react';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <>
      <Sidebar>
        <nav onClick={() => console.log('clicked')}>Child1</nav>
        <nav onClick={() => console.log('child2 clicked')}>Child2</nav>
        <nav onClick={() => console.log('child3 clicked')}>Child3</nav>
      </Sidebar>
    </>
  );
}
