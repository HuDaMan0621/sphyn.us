import React  from 'react'  //

export default  function RegisterPage() {
        return (
            <div>
                <form>
                    <label htmlFor="firstName">First Name<input className="firstName" placeholder="First name"></input></label>
                    <label htmlFor="lastName">Last Name<input className="lastName" placeholder="Last name"></input></label>
                    <label htmlFor="email"><input className="email" placeholder="Email@Email.com"></input></label>
                    <label htmlFor="loginName"><input className="loginName" placeholder="User Name"></input></label>
                    <label htmlFor="loginPassword"><input className="loginPassword" placeholder="Password"></input></label>
                    <label htmlFor="phoneNumber"><label htmlFor="phoneNumber"><input className="phoneNumber" placeholder="Phone Number"></input></label>
                    <label htmlFor="address_line_1"><input className="address_line_1" placeholder="Address"></input></label>
                    <label htmlFor="address_line_2"><input className="address_line_2" placeholder="Unit/Suite/Apt #"></input></label>
                    <label htmlFor="address_line_3"><input className="address_line_3" placeholder="Address Line 3"></input></label>
                    <label htmlFor="city"><input className="city" placeholder="City"></input></label>
                    <label htmlFor="state"><input className="state" placeholder="State"></input></label>
                    <label htmlFor="zipcode"></label><input className="zipcode" placeholder="Zip Code"></input></label>
                    <button className="submit" type="submit" >Submit</button>
                </form>
            </div>
        )
}

