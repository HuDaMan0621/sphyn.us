import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import react from 'react-router-dom';

// const id  = req.match.params;
// console.log(id); //user id 

//get the user id from redux/global state
//once they login, 
//get the id off use selector


export default function ProfilePage() {
    const [data, setData] = useState([]) //this is the state for the customer 
    const [isLoading, setIsLoading] = useState(false) //displays loading when user clicks 

    useEffect(() => {
        let didCancel = false
        const fetchCustomer = async () => {
            // console.log(id);
            setIsLoading(true);
            const result = await axios(`http://localhost:3010/customer/1/profile`); //await takes care of .then /customer/:id/profile
            console.log(result, 'this should be the result')
            setData(result.data); setIsLoading(false);
            console.log(result.data)
        }; fetchCustomer();

        return () => {
            didCancel = true;
        };
        // if (!didCancel) {
        //     dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        //   }
        // } catch (error) {
        //   if (!didCancel) {
        //     dispatch({ type: 'FETCH_FAILURE' });
        //   }
        // }
    }, []
    );  //fetching all users

    return (
        <div>
            <div>
    <h1>{data.first_name}</h1>
    <h1>{data.last_name}</h1>
                <form onSubmit={e => {
                    e.preventDefault();
                    // fetchCustomer();
                }}>
                    <button type="submit">
                        submit
                </button>
                </form>
            </div>
        </div>
    )
}


