import React, { useEffect, useState } from 'react';

import DocContent from './DocContent';
import DocSearch from './DocSearch';
import Footer from '../Footer/Footer';

import './DocPage.scss';

function DocPage(params) {

    const [standardJSON, setStandardJSON] = useState(undefined)
    const [standardId, setStandardId] = useState('atcs_static')

    /* useEffect(() => {
        // const observer = new IntersectionObserver(elems => {
        //     console.log(elems)
        // });
        // const elemsWithIds = document.querySelectorAll("*[id] .msg-table");
        // console.log(elemsWithIds)
        // elemsWithIds.forEach(elem => observer.observe(elem));

        fetchStandardJson(0)
    }, []) */

    useEffect(() => {
        if(params.match.params.id != undefined) {
            setStandardId(params.match.params.id)
        }       
    }, [params.match.params.id])

    useEffect(() => {
        fetch('/standards/' + standardId + '.json')
            .then(res => res.json())
            .then(value => {
                window.scrollTo(0, 0)
                setStandardJSON(value)
            }) 
                 
    }, [standardId])

    

    /* window.addEventListener('scroll', onScroll)
    function onScroll(event){
        //console.log(event)
        
        console.log(document.querySelectorAll('*[id]'))
    } */

    function renderContent() {
        if(standardJSON != undefined && standardId != undefined) {
            return <DocContent StandardJSON={standardJSON} standardId={standardId}/>
        }
    }

    return(
        <section className="DocPage">
            <div className="left-panel">
                <DocSearch/>
            </div>   
            <div className="right-panel">
                {renderContent()}
                <Footer/>
            </div>
            
            
        </section>
    )
}

export default DocPage;