import React from 'react';
const tableBookingDetails=(props)=>{
//    console.log(props.ReferenceNumber);

    return(
        
        <tr>
            <td>{props.ReferenceNumber}</td>
            <td>{props.GuestName}</td>
            <td>{props.NumberOfGuest}</td>
            <td><button>{props.status}</button></td>
        </tr>
    
   
    );

    

}

export default tableBookingDetails;