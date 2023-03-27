import React from 'react';
import '../styles/styles.css';
import List from './list';

function Header() {
  return (
    <>
      <div>
        <h1>todos</h1>
        <h3>Items will persist in the browser local storage</h3>
      </div>
      <List />
    </>
  );
}

export default Header;
