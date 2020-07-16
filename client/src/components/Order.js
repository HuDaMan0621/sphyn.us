import React, { useEffect, useState } from 'react';

export default function Order() {
    const [orderInfo, setOrderInfo] = useState([]);


    useEffect(() => {
        fetch(`/api/v1/customer/order-status`)
            .then(data => data.json())
            .then(data => {
                setOrderInfo(data)
            })
            .catch(error => console.log('Please Login')
            )
    }, [])

    return (
        <div>
            <div>Order List:</div>
            {orderInfo.map((order, i) => {
                return (
                    <div key={i}>
                        <p>
                            <span>{order.completed}</span>{order.reschedule}<span>{order.schedule_conform}</span><span>{order.payment_received}</span>
                            <span>{order.service_date}</span><br />
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
