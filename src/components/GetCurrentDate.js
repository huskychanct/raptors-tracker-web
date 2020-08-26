import React from 'react';

function GetCurrentDate() {
    const date = new Date().toLocaleDateString();
    return(
      <div className="text-white rounded-full py-2 bg-red-400 mx-64"> {date} </div>
    )
}
export default GetCurrentDate;