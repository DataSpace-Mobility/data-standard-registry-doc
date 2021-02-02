import React, { useState, useEffect } from 'react';
import Highlight from 'react-highlight.js';

import GraphView from './GraphView';
import DocTable from './DocTable';

import Like from './img/like.svg'
import Share from './img/share.svg'
import Subscribe from './img/subscribe.svg'

import 'highlight.js/styles/color-brewer.css';
// import 'highlight.js/styles/atom-one-light.css'
import './DocMainContent.scss';

function DocMainContent(props) {

    const [protoContent, setProtoContent] = useState(undefined)
    const [sampleDataContent, setSampleDataContent] = useState(undefined)

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchData()        
    }, [props.StandardJSON.protoURL])

    function fetchData() {
        fetch(props.StandardJSON.protoURL)
            .then(res => res.text())
            .then(setProtoContent)
        
        fetch('/sample/' + props.standardId + '.json')
            .then(res => res.text())
            .then(res => {
                if(res[0] != '<') {
                    setSampleDataContent(res)
                } else {
                    setSampleDataContent('Sample data not available for this standard')
                }
            })
    }

    function renderProto() {
        if(protoContent != undefined) {
            return (
                <Highlight language="proto">
                    {protoContent}
                </Highlight>
            )
        }
    }

    function renderSampleData() {
        if(sampleDataContent != undefined) {
            return (
                <Highlight language="json">
                    {sampleDataContent}
                </Highlight>
            )
        }
    }

    return (
        <section className="DocMainContent">
            <div className="nav-path">Data Standards > {props.StandardJSON.info.sector} > {props.StandardJSON.info.category}</div>
            <div className="standard-description">
                <h1>{props.StandardJSON.info.name}</h1>
                
                <h5>
                    {props.StandardJSON.info.description}
                </h5>
                <br/>
                Entry Point: <a href="#FeedMessage">FeedMessage</a>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="doc-tab" data-toggle="tab" href="#doc" role="tab" aria-controls="doc" aria-selected="true">Documentation</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="graph-tab" data-toggle="tab" href="#graph" role="tab" aria-controls="graph" aria-selected="false">Graph Visualisation</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="sample-tab" data-toggle="tab" href="#sample" role="tab" aria-controls="sample" aria-selected="false">Sample Dataset</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="proto-tab" data-toggle="tab" href="#proto" role="tab" aria-controls="proto" aria-selected="false">Protobuf</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="doc" role="tabpanel" aria-labelledby="doc-tab">
                    <DocTable standardFileJSONArr={props.StandardJSON.files}/>
                </div>
                <div className="tab-pane fade" id="graph" role="tabpanel" aria-labelledby="graph-tab">
                    <GraphView StandardJSON={props.StandardJSON}/>
                </div>
                <div className="tab-pane fade" id="sample" role="tabpanel" aria-labelledby="sample-tab">
                    {renderSampleData()}
                </div>
                <div className="tab-pane fade" id="proto" role="tabpanel" aria-labelledby="proto-tab">
                    {renderProto()}
                </div>
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
        </section> 
    );
}

export default DocMainContent;