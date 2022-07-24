import React from 'react';
import { Link } from 'react-router-dom';
const MyHeader = () =>{
    return(
        <div className='container mt-3'>
            <div className='row'>
                <div className="col-lg-4 text-center">
                    <i className='fa fa-shopping-cart fa-3x text-danger'> Shopping </i>
                </div>
                <div className="col-lg-8 text-end">
                    <div className='btn-group'>
<Link className='btn btn-primary pe-4 ps-4' to="/"> <i class="fa fa-home"></i> Home </Link>
<Link className='btn btn-primary pe-4 ps-4' to="/"> <i class="fa fa-suitcase"></i> Shopping </Link>
<Link className='btn btn-primary pe-4 ps-4' to="/cart"> <i class="fa fa-shopping-cart"></i> My Cart </Link>
<Link className='btn btn-primary pe-4 ps-4' to="/account"> <i class="fa fa-user"></i> Vendor </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyHeader;