import React from 'react';

import './DocContentList.scss';

import Version from './img/version.svg'
import License from './img/license.svg'
import Clock from './img/clock.svg'
import Like from './img/like.svg'
import Share from './img/share.svg'
import Subscribe from './img/subscribe.svg'

function DocContentList(props) {

    function parseContentList() {
        let res = []
        props.StandardJSON.files.forEach(f => {
            f.messages.forEach((msg, idx) => {
                res.push(
                    <a key={msg.fullName} href={"#" + msg.longName}><li>{msg.name}</li></a>
                )
            })
        })

        props.StandardJSON.files.forEach(f => {
            f.enums.forEach((msg, idx) => {
                res.push(
                    <a key={msg.fullName + 100} href={"#" + msg.longName}><li>{msg.name}</li></a>
                )
            })
        })
        
        return res
    }

    return (
        <section className="DocContentList">
            {/* <h5>About</h5> */}
            <div className="shadow-box vert-align">
                <img src={Version} alt=""/>
                <div className="content version">v0.0.3</div>
            </div>
            <div className="shadow-box vert-align">
                <img src={License} alt=""/>
                <div className="content">Apache 2.0</div>
            </div>
            <div className="shadow-box vert-align">
                <img src={Clock} alt=""/>
                <div className="content last-updated"><b>Last Updated:</b><br/> 11:30 AM 21st Oct, 2020 IST</div>
            </div>

            <div className="row shadow-box like-share-box">
                <div className="col-4 vert-align nopadding">
                    <img src={Like} alt=""/>
                    <div className="content like-share-button">Like</div>
                </div>
                <div className="col-4 vert-align nopadding">
                    <img src={Share} alt=""/>
                    <div className="content like-share-button">Share</div>
                </div>
                <div className="col-4 vert-align nopadding">
                    <img src={Subscribe} alt=""/>
                    <div className="content like-share-button">Subscribe</div>
                </div>
            </div>

            <div className="index">
                <h5>Index</h5>
                <ul>
                    {parseContentList()}
                </ul>
            </div>
        </section>
    );
}

export default DocContentList;