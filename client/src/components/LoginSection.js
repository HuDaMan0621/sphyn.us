import React from 'react'

export default function LoginSection() {
    return (
        <div>
            <form>
                <label htmlFor="loginName"><input className="loginName" placeholder="User Name"></input></label>
                <label htmlFor="loginPassword"><input className="loginPassword" placeholder="Password"></input></label>
                <button className="submit" type="submit" >Submit</button>
            </form>
        </div>
    )
}
