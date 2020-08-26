import React, {Suspense} from 'react';
import GetCurrentDate from './components/GetCurrentDate'
import Header from './components/Header'
import DataTable from './components/DataTable'
//import GameDetails from './components/RaptorsData'
import games from './components/fetchData';
import './tailwind.css'



function App() {
  return (
    <div>

      <div className="flex-col text-center border-b mx-64 py-4"> 
        <Header/>
        <br></br>
        <GetCurrentDate/>
      </div>

      <div class="flex justify-center p-40">
        <DataTable />
        {console.log(games)}
      </div>


    </div>
  );
}

export default App;
