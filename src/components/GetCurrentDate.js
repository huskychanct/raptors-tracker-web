import React from 'react';

function GetCurrentDate() {
    const date = new Date().toLocaleDateString();
    return date;
}


export default GetCurrentDate;