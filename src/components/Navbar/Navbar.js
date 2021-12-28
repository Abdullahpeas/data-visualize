import React from 'react';
import images from '../../images/whole.png';
import vector from '../../images/Vector.png';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand"> <img src={images} alt="" /></a>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Explore <img src={vector} alt="" /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Support</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Report Download</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;