import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Kitchen House</h1>
                <Typed
                    className="typed-text"
                    strings={['Welcome to Our Website', 'Cafe and Resto']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <p><b><i>" Satu langkah kecil dari sebuah
                    <p>niat baik mampu membawa kita
                        <p> menuju sesuatu yang diluar
                            <p> imajinasi "</p></p></p>
                </i></b></p>

                <div>  <Button as={Link} to="/menu" className="btn-main-offer"> order now</Button></div>
            </div>

        </div >
    )
}

export default Header
