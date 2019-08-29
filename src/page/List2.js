import React from 'react'
import Cell2 from '../component/cell/Cell2'
import axios from '../utils/axios'

export default class List2 extends React.Component{

    state = {
        list:[]
    }
    componentDidMount(){
        // console.log(axios)
        axios({
            url:"/api/follow",
            params:{_page:1,_limit:2}
        }).then(
            res =>  
            this.setState({list:res.data.data})
            //  console.log(res.data)
        )

    }


    render(){
        let {list} = this.state
        return(
            <div className="aui-news-box">
                <article className="aui-news-list">
                {  list.map((item)=>{
                                        return (
                                            <Cell2 
                                                key={item._id}
                                                data={item}
                                                dataName = "hot"
                                            />
                                        )
                                })
                            }
                </article>
             
            </div>
        )
    }
}