import React,{useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';

const orderUrl = "https://nodebackend-xprf.onrender.com/orders"

const PlaceOrder = ( ) => {

    let params = useParams();
    let navigate = useNavigate()

    const initialValues = {
        id:Math.floor(Math.random()),
        rest_name: params.restName,
        orderId:`SIO${Math.floor(Math.random()*(1209900-49100)+49100)}`,
        name:'Nikita',
        email:'nikki@gmail.com',
        cost:Math.floor(Math.random()*(2000-400)+400),
        phone:'987654312',
        address:'Hno 12 Sec34 Noida'
    }

    const [values,setValues] = useState(initialValues)

    const handleInputChange = (e) => {
       const {name,value} = e.target;
       setValues({
           ...values,
           [name]:value
       })

    }


    const checkout = () => {
        console.log(values)
        fetch(orderUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/viewOrder'))

    }



    return(
        <>
        <div className='container'>
            <hr/>
            <div className='panel panel-primary'>
                <div className='panel-heading'>
                    <h3>Order for Restaurant {params.restName}</h3>
                </div>
                <div className='panel-body'>
                    <div className='row'>
                    <div className='col-md-12 form-group'>
                            <label for="fname" className='control-label'>OrderId</label>
                            <input className='form-control' id="orderid"
                            name="orderId" value={values.orderId} readOnly/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label for="fname" className='control-label'>Name</label>
                            <input className='form-control' id="fname"
                            name="name" value={values.name} onChange={handleInputChange}/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label for="fname" className='control-label'>Email</label>
                            <input className='form-control' id="fname"
                            name="email" value={values.email} onChange={handleInputChange}/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label for="fname" className='control-label'>Phone</label>
                            <input className='form-control' id="fname"
                            name="phone" value={values.phone} onChange={handleInputChange}/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label for="fname" className='control-label'>Address</label>
                            <input className='form-control' id="fname"
                            name="address" value={values.address} onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>Total Price is Rs. {values.cost}</h2>
                        </div>
                    </div>
                    <button className='btn btn-success' onClick={checkout}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}


export default PlaceOrder