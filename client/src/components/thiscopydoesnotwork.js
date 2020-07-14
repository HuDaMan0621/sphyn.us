import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import QRCode, { propTypes } from 'qrcode.react';
import Logout from './Logout';
import { render } from 'jade';
// import { Redirect } from 'react-router-dom';

export default function ProfilePage(props) {

    const [data2, setData2] = useState(null); //this is the state for the customer 
    const [isLoading, setIsLoading] = useState(true); //displays loading when user clicks 
    const [isError, setIsError] = useState(false); //
    const [errorMessage, setErrorMessage] = useState('');

    // console.log(data2)
    useEffect(() => {
        console.log(props.match.params.id)
        fetch(`/api/v1/customer/profile`)
            .then(data => data.json())
            .then(data => {
                setData2(data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log('Please Login')
                setIsError(true);
                setErrorMessage('Please Login')
                // <Redirect path='/'>       
            })
    }, [])

    console.log('this is data2', data2)
    if (!data2) {
        console.log('issue on if statement line 32')
        props.history.push('/')
    }
    if (isLoading) {
        render(<div>Loading...</div>)
    }
    return (
        <div>
            {/* if a user access this url and not logged in, we want to display please login*/}
            {/* {isLoading ? <div>Loading...</div> : isError ? <div>please login</div> : ( */}

            <div>
                <QRCode value={`http://localhost:3000/customer/${data2.data.id}/showcase`} />
                <h1>Profile Page!!!!!!</h1>
                <h1>{data2.data.first_name}</h1>
                {/* <h1>{data.last_name}</h1> */}
                <form onSubmit={e => {
                    e.preventDefault();
                    // fetchCustomer();
                }}>
                    <Logout />
                </form>
            </div>
            {/* )} */}
        </div>
    )
}

// import react from 'react-router-dom';

// const id  = req.match.params;
// console.log(id); //user id 

//get the user id from redux/global state
//once they login, 
//get the id off use selector

// {} object
// somename() = method 
// ({}) argument inside the method
// [{}] 


   // useEffect((data) => {
    //     isLoading ? (<div>Loading...</div>) : (

    //         let didCancel = false
    //         const fetchCustomer = async () => {
    //             fetch(`/customer/${data.id}/profile`, {
    //                 method: 'GET',
    //                 body: JSON.stringify(),
    //                 headers: {
    //                     'Content-Type': 'application/json;charset=UTF-8'
    //                 },
    //             }) .then(data => {
    //                 // this.props.history.push('/login')
    //             })
    //             setIsLoading(true);
    //             const result = await axios(`/customer/${data.id}/profile`); //await takes care of .then /customer/:id/profile
    //             // console.log(profile_data, 'this should be the result')
    //             setData2(result.data2); setIsLoading(false);
    //             console.log(result.data2)

    //         }; fetchCustomer();

    //         return () => {
    //             didCancel = true;
    //         };
    //         // if (!didCancel) {
    //         //     dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
    //         //   }
    //         // } catch (error) {
    //         //   if (!didCancel) {
    //         //     dispatch({ type: 'FETCH_FAILURE' });
    //         //   }
    //         // }
    //     }, []
    //     );  //fetching all users
    //     )



    // React.render(

    //     // mountNode
    // );

