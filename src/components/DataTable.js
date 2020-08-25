import React from 'react';
import { useTable } from 'react-table'
 
 function DataTable() {
   const data = React.useMemo(
     () => [
       {
         gameDate: 'test',
         gameOpponent: 'World',
         gameScore: 'Test'
       },
       {
         gameDate: 'react-table',
         gameOpponent: 'rocks',
         gameScore: 'Test',
       },
       {
         gameDate: 'whatever',
         gameOpponent: 'you want',
         gameScore: 'Test',
       },
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'Date',
         accessor: 'gameDate', // accessor is the "key" in the data
       },
       {
         Header: 'Opponent',
         accessor: 'gameOpponent',
       },
       {
         Header: 'Score',
         accessor: 'gameScore',
       }
     ], 
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   color: 'black',
                   fontWeight: 'bold',
                   width: 250,
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       textAlign: 'center',
                       //background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }

 export default DataTable