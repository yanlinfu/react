import React from 'react'
import Header from './header'
import Footer from './footer'
import Home from '../layouts/Home'
import {Switch,Route,Redirect} from 'react-router-dom'
import User from '../layouts/User'
import Hot from '../layouts/Hot'
import ErrorPage from "../layouts/ErrorPage";
import Video from '../layouts/Video'
import Login from '../layouts/Login'
import Reg from '../layouts/Reg'
import Loading from '../component/loading/Loading'
import PubSub from 'pubsub-js'
import Detail from '../layouts/Detail'

import '../assets/css/app.css'
import '../assets/css/base.css'
import '../assets/css/icon.css'
class App extends React.Component {
    state = {
        bHead:true,
        bFoot:true,
        bLoad:false
    };

    token = null;
    constructor(){
      super();

      this.token = PubSub.subscribe('VIEW_LOADING',(evname,payload)=>{
            console.log('app',evname,payload)
            this.setState({bLoad:payload})
      })

    }

    checkPath(path){
            if(/home/.test(path)){
            this.setState({bHead:true,bFoot:true})}
            if (/login|reg|detail|login|reg/.test(path)){
                this.setState({bHead:false,bFoot:false})
              }
            if (/user|hot|video/.test(path)){
                this.setState({bHead:false,bFoot:true})
              }
            }

            componentWillReceiveProps(nextProps){
             console.log('app',nextProps.location.pathname);
             let path = nextProps.location.pathname;
             this.checkPath(path) 
        }
        
        componentDidMount(){
            let path = this.props.location.pathname;
            this.checkPath(path)   
        }

    render(){
        return(
            <div className="App aui-flexView">
                {this.state.bLoad && <Loading/>}
                {this.state.bHead && <Header/>}
                  
            <Switch>
            <Route path="/hot" component={Hot}/>
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/video" component={Video}/>
            <Route path="/login" component={Login}/>
            <Route path="/reg" component={Reg}/>
            <Route path="/detail" component={Detail}/>
            <Redirect exact from="/" to="/home" />
            <Route component={ErrorPage}/>
            </Switch>
            {this.state.bFoot ? <Footer/> : null}
           
            </div>
        )          
    }
}

export default App