import React from 'react';
import { Link } from 'react-router-dom';
const AdminHeader = () =>{
    return(
        <div className='container mt-3'>
            <div className='row'>
                <div className="col-lg-4 text-center">
                    <i className='fa fa-shopping-cart fa-3x text-warning'> Shopping </i>
                </div>
                <div className="col-lg-8 text-end">
                    <div className='btn-group'>
<Link className='btn btn-primary pe-4 ps-4' to="/myproduct"> <i class="fa fa-home"></i> Manage Product </Link>
<Link className='btn btn-primary pe-4 ps-4' to="/order"> <i class="fa fa-suitcase"></i> My Orders </Link>
<button className='btn btn-primary pe-4 ps-4'> welcome - Pandu <i class="fa fa-power-off"></i> Log out </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminHeader;