import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import MyHeader from './header';

function Home(){
    const[product, updateProduct] = useState([]);
    const getproduct = () =>{
        axios.get("http://localhost:1234/product")
        .then(response=>{
            updateProduct(response.data);
        })
    }

    useEffect(()=>{
        getproduct();
    }, [1]);

    const[message, updateMessage] = useState();

    const addtoCart = (pdata) =>{
        updateMessage("Adding to Cart...");
        var url = "http://localhost:1234/cart";
        axios.post(url, pdata)
        .then(response=>{
            updateMessage(pdata.pname + "Added in Cart Successfully");
        })
    }

	return( 
		<>
			<MyHeader/>
            <div className='container mt-5'>
                <div className="row">
                    <p className="col-lg-12 text-center text-danger"> {message} </p>
                   {
                       product.map((pdata, index)=>{
                        return(
                        <div className='col-lg-3 mb-4' key={index}>
                        <div className='bg-light p-3 rounded text-center'>
                            <h5> {pdata.pname} </h5>
                            <img src={pdata.photo} className='mt-2 mb-2 img-fluid rounded' />
                            <p> {pdata.details} </p>
                            <p> {pdata.price} </p>
                            <button 
                                className='btn btn-danger btn-sm'
                                onClick={addtoCart.bind(this, pdata)}> 
                                <i className='fa fa-shopping-cart'></i> Add To Cart 
                            </button>
                        </div>
                    </div>   
                   )
                })
            }

                </div>
            </div>
		</>
	)
}

export default Home;