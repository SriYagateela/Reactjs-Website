import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import MyHeader from './header';

function Mycart(){

  const[product, updateProduct] = useState([]);
  const getproduct = () =>{
      axios.get("http://localhost:1234/cart")
      .then(response=>{
          updateProduct(response.data);
      })
  }

  useEffect(()=>{
      getproduct();
  }, [1]);

  const[message, updateMessage] = useState ();

  const delItem = (pid) =>{
    axios.delete("http://localhost:1234/cart/"+pid)
    .then(response =>{
      updateMessage("Item Removed from Cart");
      getproduct();
    })
  }

  const[customer, pickCustomer] = useState("");
  const[email, pickEmail] = useState("");
  const[mobile, pickMobile] = useState("");
  const[address, pickAddress] =useState("");
  
  const placeOrder = () =>{
    var myorder ={
        myproduct:product, // product will be multi dimensiaonal array
        customername:customer,
        mobileno:mobile,
        emailid:email,
        address:address
    };
    var url = "http://localhost:1234/order";
    axios.post(url, myorder)
    .then(response=>{
        updateMessage("Your Order Placed Successfully !");
    })
}


  return(
      <>
       <MyHeader/>
       <div className='container'>
        <div className="row">
        <div className="col-lg-3">
         <div className="p-4 shadow">
           <h4 className='text-center text-primary'>Customer Details</h4>
           <div className="mb-3">
            <label>Customer Name</label>
            <input type="text" className='form-control' 
            onChange={obj=>pickCustomer(obj.target.value)}/>
            </div>
            <div className="mb-3">
            <label>Mobile No</label>
            <input type="text" className='form-control' 
            onChange={obj=>pickMobile(obj.target.value)}/>
            </div>
            <div className="mb-3">
            <label>Email-Id</label>
            <input type="text" className='form-control' 
            onChange={obj=>pickEmail(obj.target.value)}/>
            </div>
            <div className="mb-3">
            <label>Delivery Address</label>
            <textarea className='form-control' 
            onChange={obj=>pickAddress(obj.target.value)}></textarea>
            </div>
            <div className="text-center">
               <button className="btn btn-primary btn-lg" 
               onClick={placeOrder}>Place Order</button>
            </div>
        </div>
        </div>
        <div className="col-lg-9">
         <div className="p-4 shadow">
            <h4 className='text-center text-info'>Items in cart</h4> 
            <table className='table table-bordered table-hover shadow'>
             <thead>
               <tr className="bg-light text-primary">
                   <th>Product Id</th>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Photo</th>
                   <th>Action</th>
                </tr>
             </thead>
             <tbody>
               {
                 product.map((pinfo, index)=>{
                   return(
                     <tr>
                       <td> {pinfo.id} </td>
                       <td> {pinfo.pname} </td>
                       <td> {pinfo.price} </td>
                       <td><img src={pinfo.photo} height="50" width="70"/></td>
                       <td>
                         <button className='btn btn-danger btn-sm' onClick={delItem.bind(this, pinfo.id)}>
                           <i className='fa fa-trash'></i>
                           </button>
                       </td>
                     </tr>
                   )
                 })
               }
             </tbody>
            </table>
            </div>    
        </div>
        </div>
        </div>
      </>
  )
}

export default Mycart;