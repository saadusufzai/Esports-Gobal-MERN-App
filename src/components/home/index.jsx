import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import LiveStream from './LiveStream'

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel />
            <LiveStream/>
            <Footer/>
        </div>
    )
}

export default Home
