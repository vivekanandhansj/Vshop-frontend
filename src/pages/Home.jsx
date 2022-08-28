import React from 'react'
import { Link } from 'react-router-dom'
import Announcement from '../component/Announcement'
import Categories from '../component/Categories'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'
import Products from '../component/Products'
import Slider from '../component/Slider'

const Home = () => {
  return (
    <>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
   <Link to="/productList"><Products/></Link> 
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Home