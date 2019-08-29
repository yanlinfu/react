import React from 'react'
import Nav from './Nav'
import Swipe from './Swipe'
import Cell from '../component/cell/Cell'
import List from '../page/List'
import More from '../layouts/More'
import '../assets/css/home.css'

class Home extends React.Component{
    render(){
        return(
            <section className="aui-scrollView">
            <div className="aui-content ">
            <Nav/>
            <Swipe/>
            <List/>
            <More/>
            <List/>
            </div>
            </section>
        )
    }
}

export default Home