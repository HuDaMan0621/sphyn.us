import React, { useEffect, useState } from 'react';
import GoogleMaps from './GoogleMaps';

export default function ShowcaseFilter() {
    const [filteredServices, setFilteredServices] = useState([]);
    const [email, setEmail] = useState(" ");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail({
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        fetch(`/api/v1/selectserviceslist/${email}`)  //!todo
            .then(data => data.json())
            .then(data => {
                setFilteredServices(data.Services) //how to make a copy of services? and access it 
                // const newServices = data.Services
                // console.log('this is the new services')
                // console.log(newServices)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input htmlFor="email" className="emailInput" onChange={(e) => setEmail(e.target.value)}
                    value={email} type="email" name="email" placeholder="Email address"></input>
                <button type="submit">the somewhat working button</button>
            </form>
            {email === "" ? <div></div> :
                filteredServices.map((service, i) => {
                    // console.log(filteredServices)
                    // console.log(service)
                    return (
                        <div key={i}>
                            <p><span>{service.nick_name}</span>{service.sq_ft}<span>{service.address}</span><br /></p>
                            {!service.img_url ? < iframe width="853" height="480" src="https://my.matterport.com/show/?m=rvKhT7rSPML" frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe> :
                                <iframe width="853" height="480" src={service.img_url} frameBorder="0" allowFullScreen allow="xr-spatial-tracking"></iframe>}
                            <GoogleMaps address={service.address} city={service.city} state={service.state} zipcode={service.zipcode} />
                        </div>
                    )
                }
                )
            }
        </>)
}