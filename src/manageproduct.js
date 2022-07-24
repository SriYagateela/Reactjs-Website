import React, {useState, useEffect} from 'react';
import axios from 'axios';

import AdminHeader from './adminheader';

function Manageproduct(){ 
    const[productlist, updateProduct] = useState([]);
    const getProduct = () =>{
        axios.get("http://localhost:1234/product")
        .then(response=>{
            updateProduct(response.data);
        })
    }

    useEffect(()=>{
        getProduct();
    },[true]);

    const[itemname, pickItem] = useState("");
    const[itemprice, pickPrice] = useState("");
    const[itemphoto, pickPhoto] = useState("");
    const[itemdetails, pickDetails] = useState("");
    const[message, updateMessage] = useState("");
    
    const save = () =>{
        var newitem = {
            "pname": itemname,
            "price": itemprice,
            "photo": itemphoto,
            "details": itemdetails
        };
        var url = "http://localhost:1234/product";
        axios.post(url, newitem)
        .then(response=>{
            updateMessage(itemname + " Save Successfully ! ");
            pickItem("");
            pickPrice("");
            pickPhoto("");
            pickDetails("");
            getProduct(); //to reload the product after adding
        })
    }
    
    const delProduct = (id) =>{
        axios.delete("http://localhost:1234/product/"+id)
        .then(response=>{
        updateMessage("Product Deleted Successfully");
        getProduct();
      })
    }
    

    return(
        <>
         <AdminHeader/>
        <div className='container'>
        <div className="row">
        <div className="col-lg-3">
         <div className="p-4 shadow">
           <h4 className='text-center text-primary'>New Product</h4>
           <div className="mb-3">
            <label>Product Name</label>
            <input type="text" className='form-control'
            onChange={obj=>pickItem(obj.target.value)} value={itemname}/>
            </div>
            <div className="mb-3">
            <label>Price</label>
            <input type="text" className='form-control'
            onChange={obj=>pickPrice(obj.target.value)} value={itemprice}/>
            </div>
            <div className="mb-3">
            <label>Product Pic</label>
            <input type="text" className='form-control'
            onChange={obj=>pickPhoto(obj.target.value)} value={itemphoto}/>
            </div>
            <div className="mb-3">
            <label>Product Details</label>
            <textarea className='form-control'
            onChange={obj=>pickDetails(obj.target.value)} value={itemdetails}></textarea>
            </div>
            <div className="text-center">
               <button className="btn btn-primary btn-lg" onClick={save}> Save Product </button>
            </div>
        </div>
        </div>
        <div className="col-lg-9">
         <div className="p-2 shadow">
            <h4 className='text-center text-info'> {productlist.length} : Manage Product </h4> 
            <p className='text-center text-danger'>{message}</p>
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
                     productlist.map((product, index)=>{
                         return(
                             <tr key={index}>
                              <td>{index}</td>
                              <td>{product.pname}</td>
                              <td>{product.price}</td>
                              <td><img src={product.photo} height="50" width="70"/></td>
                              <td>{product.details}</td>
                              <td>
                                  <button className='btn btn-danger btn-sm' 
                                  onClick={delProduct.bind(this, product.id)}>
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

export default Manageproduct; 