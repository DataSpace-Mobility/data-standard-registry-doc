import React from 'react'; 
import TextField from '@material-ui/core/TextField';

import Logo from './logo_white.svg'

import './DocSearch.scss';

function DocSearch() {

    return (
        <section className="DocSearch">
            <div className="logo-div">
                <img src={Logo} alt="Logo"/>
            </div>
            <TextField
                label="Search"
                id="outlined-start-adornment"
                className="doc-search"
                variant="outlined"
                size="small"
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "5px"
                }}
                InputLabelProps={{ style: 
                    { 
                        fontSize: "1em",
                        color: "#bbb"
                    } 
                }}
            />
        </section>
    )
}

export default DocSearch;