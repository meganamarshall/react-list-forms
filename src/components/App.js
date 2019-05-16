import React from 'react';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <>
      <Sidebar>
        <nav>Child1</nav>
        <nav>Child2</nav>
        <nav>Child3</nav>
      </Sidebar>
    </>
  );
}
