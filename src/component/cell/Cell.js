import React from 'react';
import '../../assets/css/cell.css';
import {NavLink} from 'react-router-dom';

// import ad1jpg from './assets/img/ad/ad1.jpg'


class Cell extends React.Component {

    render() {
        let {data,dataName} = this.props;
        // console.log(data)
         return (
            <NavLink to="/detail"
             className="aui-news-item">
                <div className="aui-news-item-img">
                    <img src={'http://localhost:3001'+ data.img} title="" alt="" />
                </div>
                <div className="aui-news-item-text">
                    <h2 className="aui-news-item-text-title">{data.title}</h2>
                    <p className="aui-news-item-text-text">{data.content}</p>
                    <div className="aui-news-item-text-info">
                        <span className="aui-news-item-text-info-time"><i className="aui-icon aui-icon-time"></i> {data.time}</span>
                        <span className="aui-news-item-text-info-text">{data.net}</span>
                    </div>
                </div>
            </NavLink>
        )
    }
}

export default Cell;
