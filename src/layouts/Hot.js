import React from 'react';
import '../assets/css/hot.css'
import List from '../page/List'
import List2 from '../page/List2'
import List3 from '../page/List3'


export default class Hot extends React.Component{
    render(){
        return(
            <div className="aui-flexView">
                <header className="aui-navBar">
                    <a href="javascript:;" className="aui-navBar-item">
                        <i className="aui-icon aui-icon-back"></i>
                    </a>
                    <div className="aui-navBar-center">
                        <span className="aui-navBar-title">推荐</span>
                    </div>
                    <a href="javascript:;" className="aui-navBar-item">
                        <i className="aui-icon aui-icon-user"></i>
                    </a>
                </header>

                <section className="aui-scrollView">
                    <div className="aui-content">
                        <div className="aui-load">
                            <p>为你精选10条推荐</p>
                        </div>
                        <List/> 
                        <List2/>
                        <List3/>
                        <List2/>
                        <div className="divR"></div>
                        <div className="aui-label-box">
					<div className="aui-label-content">
						<ul>
							<li>
								<a href="special.html">独家</a>
							</li>
							<li>
								<a href="special.html">宠物</a>
							</li>
							<li>
								<a href="special.html">娱乐</a>
							</li>
							<li>
								<a href="special.html">画家</a>
							</li>
							<li>
								<a href="special.html">时尚</a>
							</li>
							<li>
								<a href="special.html">文学</a>
							</li>
							<li>
								<a href="special.html">汽车</a>
							</li>
							<li>
								<a href="special.html">历史</a>
							</li>
						</ul>
                        <div className="divR"></div>
					
				</div>
                          
                        </div>
                    </div>
                
                </section> 
                </div>
        )
    }
}

