import React, { useEffect } from 'react';

import DocContent from './DocContent';
import DocSearch from './DocSearch';

import './DocPage.scss';

// Temp import
import StandardJSON from './ev.json'

function DocPage() {

    

    useEffect(() => {
        const observer = new IntersectionObserver(elems => {
            console.log(elems)
        });
        const elemsWithIds = document.querySelectorAll("*[id] .msg-table");
        console.log(elemsWithIds)
        elemsWithIds.forEach(elem => observer.observe(elem));
    }, [])

    

    /* window.addEventListener('scroll', onScroll)
    function onScroll(event){
        //console.log(event)
        
        console.log(document.querySelectorAll('*[id]'))
    } */

    

    return(
        <section className="DocPage">
            <div className="left-panel">
                <DocSearch/>
            </div>   
            <div className="right-panel">
                <DocContent StandardJSON={StandardJSON}/>
            </div>
            
            
        </section>
    )
}

export default DocPage;