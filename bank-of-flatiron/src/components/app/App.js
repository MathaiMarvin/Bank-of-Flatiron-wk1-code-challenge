import React from 'react';
import OutputShowing from './OutputShowing';
import './App.css'; 

function App() {
  
  
  return (
    <center>
      <div className=" h-20 rounded-lg bg-gray-400 shadow-lg shadow-indigo-500/50">
        <p className='uppercase font-medium text-[28px]'>Royal Bank of Flatiron</p>
      </div>
      <OutputShowing/>
    </center>
  );
}

export default App;
