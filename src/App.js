import React from 'react';
import Tabs from './components/Tabs';
import './App.css';
import './Tabs.css';

const items = [
  {
    label: 'Tab 1',
    content: <p>This is the content of Tab 1.</p>,
    callback: () => {
      console.log('Tab 1 clicked');
    },
  },
  {
    label: 'Tab 2',
    content: <p>This is the content of Tab 2.</p>,
    callback: () => {
      console.log('Tab 2 clicked');
    },
  },
  {
    label: 'Tab 3',
    content: <p>This is the content of Tab 3.</p>,
    callback: () => {
      console.log('Tab 3 clicked');
    },
  },
];

function App() {
  return (
    <div>
      <Tabs items={items} />
    </div>
  );
}

export default App;