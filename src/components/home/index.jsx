import React from 'react'
import Carousel from './Carousel'
import Header from './Header'
import LiveStream from './LiveStream'

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel />
            <LiveStream/>
        </div>
    )
}

export default Home
