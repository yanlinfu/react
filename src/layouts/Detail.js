import React from 'react';
import '../assets/css/detail.css';
import img1 from '../assets/img/ad/page1.jpg';
import img2 from '../assets/img/ad/page2.jpg';
import img3 from '../assets/img/ad/page3.jpg';
import img4 from '../assets/img/ad/page4.jpg';

import img5 from '../assets/img/icon/btn1.png';
import img6 from '../assets/img/icon/btn2.png';
import img7 from '../assets/img/icon/btn3.png';


class Detail extends React.Component{
    render(){
        return(
        <section className="aui-flexView">
            <header className="aui-navBar">
                <a href="javascript:history.back(-1)" className="aui-navBar-item">
                    <i className="aui-icon aui-icon-back"></i>
                </a>
                <div className="aui-navBar-center">
                    <span className="aui-navBar-title">娱乐新闻网</span>
                </div>
                <a href="javascript:;" className="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
                    <i className="aui-icon aui-icon-share"></i>
                </a>
            </header>
            <section className="aui-scrollView">
                <div className="aui-content">
                    <div className="aui-special-box">
                        <div className="aui-special-head">
                            <h1>歌手巅峰夜直播意外！Jessie J偷亲何炅，何炅的反应太牛了</h1>
                            <p>娱乐新闻网 2018-04-21 12:00</p>
                        </div>
                        <div className="aui-pages-title">
                            <p>在昨晚《歌手》巅峰夜直播的最后环节，何炅即将宣布Jessie J通过手机直播吸引到的收看人数时，一旁的Jessie J微笑着凑过脸来，似乎有要和何炅互动的意思。</p>
                            <p>但敬业的何老师有他自己的任务，他要立刻宣布网络互动人数，并且cue流程：“今晚Jessie 通过手机直播，吸引到了……”</p>
                        </div>
                        <div className="aui-pages-img">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="aui-pages-title">
                            <p>为了让Jessie 也看到这个数字，何炅侧过身把手卡给Jessie J看了一眼。这时，Jessie J一个侧头，猛地朝着何炅脸上一吻！全场沸腾！</p>
                            <p>一边Jessie J的经纪人吉杰指着何炅的脸，似乎还留下了唇印。</p>
                        </div>
                        <div className="aui-pages-img">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="aui-pages-img">
                            <img src={img3} alt=""/>
                        </div>
                        <div className="aui-pages-img">
                            <img src={img4} alt=""/>
                        </div>
                        <div className="aui-pages-title">
                            <p>被突然的甜蜜击中，何炅一时语塞，中断了播报，呆滞地望着镜头。但他很快就接上了刚刚的主持串词：</p>
                            <p>作为湖南卫视的当家主持，何炅在处理各类直播突发面前，都展现出高智商高水准。</p>
                            <p>例如今年湖南卫视小年夜春晚，杜海涛说错了某银行广告商名字，何炅在第一时间反应过来海涛说错了，立马反问：“ZS银行？”</p>
                            <p>涛看了手卡后立马慌乱：“完了，完了”何炅笑道：“你是不是还有别的银行卡，没告诉我们！”</p>
                            <p>何老师随后说：“说三遍交通银行！”这样不仅更正了海涛的失误，还给足了海涛面子，更是用一种玩笑中带着正式的表态，当场给广告商道歉。</p>
                            <p>每一次，当何炅面临类似的直播突发时，它都不算是“直播事故”，而是成为他控场能力的表演舞台。从这个意义来说，真正是中国主持界难得的直播人才！</p>
                        </div>
                        <div className="divR"></div>
                       
                    </div>
                </div>
                <footer className="aui-pages-footer aui-footer-fixed">
                    <div className="aui-pages-footer-box">
                        <div className="aui-pages-footer-input">
                            <input type="text" placeholder="我来说俩句..."/>
                        </div>
                        <div className="aui-pages-footer-title">
                            <span>
                                    <img src={img5} alt=""/>
                                </span>
                            <span>
                                    <img src={img6} alt=""/>
                                </span>
                            <span>
                                   <img src={img7} alt=""/>
                                </span>
                        </div>
                    </div>
                </footer>
            </section>
        </section>
        )
    }
}

export default Detail;