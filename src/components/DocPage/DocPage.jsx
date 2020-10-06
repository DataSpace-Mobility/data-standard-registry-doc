import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

import DocTable from './DocTable';

import Logo from './logo.svg'

import './DocPage.scss';
import './DocSearch.scss';
import './DocContentList.scss';

// Temp import
import StandardJSON from './gtfs.json'

function DocPage() {

    function parseContentList() {
        let res = []
        StandardJSON.files[0].messages.forEach((msg, idx) => {
            res.push(
                <a key={idx} href={"#" + msg.name}><li>{msg.name}</li></a>
            )
        })
        return res
    }

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
            <div className="container-fluid nopadding full-width-height">
                <div className="row nopadding full-width-height">
                    <div className="col-2 nopadding">
                        <section className="DocSearch">
                            <div className="logo-div">
                                <img src={Logo} alt="Logo"/>
                            </div>
                            <TextField
                                label="Search Data Standards"
                                id="outlined-start-adornment"
                                className="doc-search"
                                variant="outlined"
                                size="small"
                                InputLabelProps={{ style: 
                                    { fontSize: "1em" } 
                                }}
                            />
                        </section>
                    </div>
                    <div className="col-8 nopadding">
                        <DocTable standardFileJSON={StandardJSON.files[0]}/>
                    </div>
                    <div className="col-2 nopadding">
                        <section className="DocContentList">
                            <ul>
                                {parseContentList()}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DocPage;