import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AdminHeader from './adminheader';

function Myorder(){

    const[orderlist, updateOrder] = useState([]);
    const getorder = () =>{
        axios.get("http://localhost:1234/order")
        .then(response=>{
            updateOrder(response.data.reverse());
        })
    }
  
    useEffect(()=>{
        getorder();
    }, [1]);

    return(
        <>
         <AdminHeader/>
         <div className='container mt-5'>
         {
         orderlist.map((order, index)=>{
         return(
        <div className="row">
        <div className="col-lg-4">
            <br/><br/>
           <h4 className='text-center text-primary'>Customer Details</h4>
           <p> Full Name : {order.customername} </p>
           <p> Mobile No : {order.mobileno} </p>
           <p> Email Id : {order.emailid} </p>
           <p> Address : {order.address} </p>
        </div>
        <div className="col-lg-8">
            <br/>
            <h4 className='text-center text-info'>Order Details</h4> 
            <table className='table table-bordered table-hover shadow'>
             <thead>
               <tr className="bg-light text-primary">
                   <th>Product Id</th>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Photo</th>
                   <th>Details</th>
                   <th>Action</th>
                </tr>
             </thead>
             <tbody>
                 {
                     order.myproduct.map((product, index2)=>{
                         return(
                             <tr key={index2}>
                                 <td> {product.id} </td>
                                 <td> {product.pname} </td>
                                 <td> {product.price} </td>
                                 <td> 
                                     <img src={product.photo} height="50" width="80" />
                                 </td>
                                 <td> {product.details} </td>
                             </tr>
                         )
                     })
                 }
             </tbody>
            </table>
           </div>    
          </div>
           )
          })
         }
         </div>
        </>
    )
}

export default Myorder; 