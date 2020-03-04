import React from 'react';
import './App.css';
import Disp from './starters/Disp';
import TableBookingDetails from './TableBookingDetails/tableBookingDetails';

function App() {
 
const arr=[{ReferenceNumber:'1234',GuestName:'x',NumberOfGuest:'Guest of 4',status:'active'},
{ReferenceNumber:'12',GuestName:'x',NumberOfGuest:'Guest of 4',status:'active'}];
console.log(arr);
 
  return (
    <div>
  <table border="1">
    <tr>
      <th>ReferenceNumber</th>
      <th>GuestName</th>
      <th> NumberOfGuest</th>
      <th>TableStatus</th>
      </tr>
   <TableBookingDetails ReferenceNumber={arr[0].ReferenceNumber} GuestName={arr[0].GuestName} NumberOfGuest={arr[0].NumberOfGuest} status={arr[0].status}></TableBookingDetails>  
  <TableBookingDetails ReferenceNumber={arr[1].ReferenceNumber} GuestName={arr[1].GuestName} NumberOfGuest={arr[1].NumberOfGuest} status={arr[1].status}></TableBookingDetails>  
        
    </table>    
    </div>
  );
}

export default App;
