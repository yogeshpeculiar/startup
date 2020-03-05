import React from 'react';
const tableBookingDetails=(props)=>{
//    console.log(props.ReferenceNumber);
let buttonStyle="btn";
console.log(props.status);
if(props.status==='active')
    buttonStyle="btn btn-success";
if(props.status==='Inactive')
    buttonStyle="btn btn-danger";
if(props.status==='In progress')
    buttonStyle="btn btn-warning";
 

    return(
       
        <tr id="rowElement">
            <td>{props.ReferenceNumber}</td>
            <td>{props.GuestName}</td>
            <td>{props.NumberOfGuest}</td>
            <td><button class={buttonStyle}>{props.status}</button></td>
        </tr>
    
   
    );

    

}

export default tableBookingDetails;