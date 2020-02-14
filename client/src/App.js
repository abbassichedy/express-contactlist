import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './component/contact-list/ContactList';
import Nav from './component/contact-list/Nav';

function App() {
  return (
    <div>
      <Nav/>
     <ContactList/>
    </div>
  );
}

export default App;
