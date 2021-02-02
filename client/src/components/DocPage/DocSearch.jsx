import React from 'react'; 
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

import Logo from './img/logo_white.svg'

import './DocSearch.scss';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
})(TextField);


function renderNavBar() {
    let items = {
        "Traffic Management": {
            "atcs_static": "Adaptive Traffic Control Specification - Static",
            "atcs_realtime": "Adaptive Traffic Control Specification - Realtime"
        },
        "Public Transport": {
            "afcs_realtime": "Automatic Fare Collection Specification - Realtime",
            "gtfs_static": "General Transit Feed Specification - Static",
            "gtfs_realtime": "General Transit Feed Specification - Realtime"
        },
        "Electric Mobility": {
            "ev_charging_infra_static": "EV Charging Infrastructure Specification - Static"
        }
    }

    let res = []

    Object.keys(items).forEach((domain, idx) => {

        let links = []

        Object.keys(items[domain]).forEach((st, stIdx) => {
            links.push(
                <li key={stIdx}><Link to={"/" + st}>{items[domain][st]}</Link></li>
            )
        })

        res.push(
            <div className="card collapsible" key={idx}>
                <a data-toggle="collapse" data-parent="accordionEx" href={"#collapse-" + idx} aria-expanded="true" aria-controls="collapseOne1">
                    <div className="card-header " role="tab" id={"header-" + idx}>
                    <b>{domain}</b> <i className="fas fa-angle-down rotate-icon"></i>
                    </div>
                </a>

                <div id={"#collapse-" + idx} className="collapse show" role="tabpanel" aria-labelledby={"header-" + idx} data-parent="accordionEx">
                    <div className="card-body">
                        <ul>
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
            {res}
        </div>
    )
}



function DocSearch() {

    return (
        <section className="DocSearch">
            <div className="logo-div">
                <img src={Logo} alt="Logo"/>
            </div>
            <CssTextField
                className='{classes.margin} doc-search'
                label="Search"
                variant="outlined"
                id="custom-css-outlined-input"
                size="small"
                style={{
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    color: "#fff"
                }}
                InputLabelProps={{ style: 
                    { 
                        fontSize: "1em",
                        color: "#fff"
                    } 
                }}
                />

            <div className="navigation">
                {renderNavBar()}
            </div>
    

        </section>
    )
}

export default DocSearch;