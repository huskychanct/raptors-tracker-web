import React from 'react';
import GetCurrentDate from './components/GetCurrentDate'
import Header from './components/Header'
import DataTable from './components/DataTable'
import './tailwind.css'

function App() {
  return (
    <div>

      <div className="text-center border-b p-3"> 
        <Header/>
        <GetCurrentDate />
      </div>

      <div class="flex justify-center p-40">
        <DataTable />
      </div>


    </div>
  );
}

export default App;
