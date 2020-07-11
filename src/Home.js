import React from 'react';
import {Link} from 'react-router-dom';

export function Home() {
    return (
        <div className="homeContainer">
            <h1>Welcome to Official Website of Men's Shoes</h1>

            <h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Vitae deleniti dignissimos perspiciatis quibusdam autem qui animi veniam,
                itaque dolores culpa consequuntur. Quidem distinctio incidunt sequi
                laboriosam nemo provident explicabo illo!
                <br/>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Vitae deleniti dignissimos perspiciatis quibusdam autem qui animi veniam,
                itaque dolores culpa consequuntur. Quidem distinctio incidunt sequi
                laboriosam nemo provident explicabo illo!
            </h3>
            <Link to="/products">
                <button className="checkOutButton">Shop Now</button>
            </Link>
        </div>
    )

}