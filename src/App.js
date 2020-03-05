import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Disp from './starters/Disp';
import TableBookingDetails from './TableBookingDetails/tableBookingDetails';
import logo from './img/logo.jpg';
function App() {
//  document.body.style = 'background:#0A4C6D;';
const arr=[{ReferenceNumber:'1234',GuestName:'x',NumberOfGuest:'Guest of 4',status:'active'},
{ReferenceNumber:'12',GuestName:'x',NumberOfGuest:'Guest of 4',status:'In progress'}];
console.log(arr);
 
  return (
    
      <div>
    <div class="container-fluid">
      <div name="row">
      <nav class="navbar navbar-light " id="navBar">
        
          <div class="col-1">
        <img src={logo} width="50" height="50"/>
        </div>
        <div class="col-3"></div>
        <div class="col">
          <h3 id="heading">Table Booking Details</h3>
          </div>
          </nav>
        </div>
      </div>
      <div class="container">
  <table class="table table-striped " id="t1">
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
    </div>
  );
 
}

export default App;
