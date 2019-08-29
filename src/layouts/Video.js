import React from 'react';
import '../assets/css/video.css'
import List4 from '../page/List4'

export default class Video extends React.Component{
    render(){
        return(
            <section className="aui-flexView">
		<section className="aui-scrollView">
			<div className="aui-content">
				
				<div className="aui-nav-top">
					<div className="aui-nav-scroll">
						<div className="aui-nav-main">
							<div className="aui-nav-track">
								<a href="javascript:;" className="aui-nav-list current">推荐</a>
								<a href="javascript:;" className="aui-nav-list">直播</a>
								<a href="javascript:;" className="aui-nav-list">网红</a>
								<a href="javascript:;" className="aui-nav-list">搞笑</a>
								<a href="javascript:;" className="aui-nav-list">生活</a>
								<a href="javascript:;" className="aui-nav-list">军事</a>
								<a href="javascript:;" className="aui-nav-list">科技</a>
								<a href="javascript:;" className="aui-nav-list">汽车</a>
								<a href="javascript:;" className="aui-nav-list">体育</a>
								<a href="javascript:;" className="aui-nav-list">财经</a>
								<a href="javascript:;" className="aui-nav-list">国际</a>
								<a href="javascript:;" className="aui-nav-list">时尚</a>
								<a href="javascript:;" className="aui-nav-list">时尚</a>
								<a href="javascript:;" className="aui-nav-list">房产</a>
								<a href="javascript:;" className="aui-nav-list">历史</a>
								<a href="javascript:;" className="aui-nav-list">酷站</a>
							</div>
						</div>
						<div className="aui-nav-more">
							<a href="javascript:;" className="aui-icon aui-icon-add"></a>
						</div>
					</div>
				</div>
                </div>
				<List4/>
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
                        </section>
                        </section>
        )
    }
}