import React from 'react' 
import { Link } from "react-router-dom";
const Navbar = () => {

    return (
    <>
        <div className="p-5 bgheader text-white text-center">
            <h1>PetHaven</h1>
            <h3>Welcome to Pet Haven!</h3>
            <p>At Pet Haven, we believe that pets are more than just animals; they're beloved members of your family. Our mission is to provide a safe, nurturing, and loving environment for your furry, feathered, or scaly friends when you can't be there for them.</p> 
        </div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
             <Link to="/">
                <a class="nav-link active" href="#">Home</a>
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/register">
                <a class="nav-link" href="#">Book Services</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav> 
     </>
    )
}

export default Navbar;