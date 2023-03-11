import React from 'react'
import FOODMANDU from "../img/foodmandu.png"
import FLANKSTEAK from "../img/flanksteak_cheddar.png"
import SALMON from "../img/salmon.png"
import TANDORI from "../img/tandoori_chicken.png"
import BACKGROUND from "../img/background.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <div>
    {/* <BrowserRouter>
      <Route path="/Login" exact component={Login} />
      <Route path="/" component={About} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>  */}
    <div>
      <ul className='justify-between flex mt-4'>
        <li className='justify-center'> <img src={FOODMANDU} className="h-8 ml-56 flex " alt="" /></li>
        <li className='text-end '><button className='bg-black text-yellow-300 px-2 h-10 w-20 rounded-3xl mr-10 text-2X1' ><Link to="/Login"> Login </Link></button> </li>
      </ul>
      <br />
    </div>
    <div className='' >
      <img src={BACKGROUND} className='mix-blend-overlay w-full object-cover absolute' alt="" />
      <img src={FLANKSTEAK} className='ml-44' alt="" />
      <img src={TANDORI} alt="" />
      <p className='text-3xl'>Order food from the widest range of restaurants.</p>
      <input className='h-10 w-9/12 mt-3 hover:border-black' type="text" placeholder='Resturant or Cuisine (leave it blank to browse all)' /> <button className='bg-yellow-400 h-10 p-2 pr-8'>Find Restaurants</button>
      <img src={SALMON} className='ml-80 mb-2' alt="" />

    </div>
    <div>
    </div>
  
      {/* <a href="#"> Logo</a>
      <nav>
        <ul>
          <li> 
            <Link to="/"> Navbar </Link>
            </li>
          <li>
            <Link to="/Login"> Login </Link>
          </li>

        </ul>
      </nav> */}
  </div>
}

export default Navbar
