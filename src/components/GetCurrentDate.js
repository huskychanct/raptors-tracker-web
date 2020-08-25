import React from 'react';

function GetCurrentDate() {
    const date = new Date();
    return date.toDateString();
}

export default GetCurrentDate;