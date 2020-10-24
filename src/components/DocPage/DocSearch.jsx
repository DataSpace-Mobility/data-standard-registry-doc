import React from 'react'; 
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

import Logo from './logo_white.svg'

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
                <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                    <div className="card collapsible">
                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                            <div className="card-header " role="tab" id="headingOne1">
                            <b>Public Transport</b> <i class="fas fa-angle-down rotate-icon"></i>
                            </div>
                        </a>

                        <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                            <div className="card-body">
                                <ul>
                                    <li>Anim pariatur cliche </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Anim pariatur cliche </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card collapsible">
                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                            <div className="card-header " role="tab" id="headingOne2">
                            <b>Electric Mobility</b><i class="fas fa-angle-down rotate-icon"></i>
                            </div>
                        </a>

                        <div id="collapseOne2" class="collapse" role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordionEx">
                            <div className="card-body">
                                <ul>
                                    <li>EV Charging Infrastructure - realtime </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Electric Mobility Battery performance</li>
                                </ul>
                            </div>     
                        </div>
                    </div>
                    <div className="card collapsible">
                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                            <div className="card-header " role="tab" id="headingOne3">
                            <b>Non-Motorised Transport</b><i class="fas fa-angle-down rotate-icon"></i>
                            </div>
                        </a>

                        <div id="collapseOne3" class="collapse" role="tabpanel" aria-labelledby="headingOne3" data-parent="#accordionEx">
                            <div className="card-body">
                                <ul>
                                    <li>Anim pariatur cliche </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Anim pariatur cliche </li>
                                </ul>
                            </div>     
                        </div>
                    </div>

                    <div className="card collapsible">
                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                            <div className="card-header " role="tab" id="headingOne2">
                            <b>Parking</b><i class="fas fa-angle-down rotate-icon"></i>
                            </div>
                        </a>

                        <div id="collapseOne4" class="collapse" role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordionEx">
                            <div className="card-body">
                                <ul>
                                    <li>Anim pariatur cliche </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Anim pariatur cliche </li>
                                </ul>
                            </div>      
                        </div>
                    </div>

                    <div className="card collapsible">
                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
                            <div className="card-header " role="tab" id="headingOne2">
                            <b>Road Network</b><i class="fas fa-angle-down rotate-icon"></i>
                            </div>
                        </a>

                        <div id="collapseOne5" class="collapse " role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordionEx">
                            <div className="card-body">
                                <ul>
                                    <li>Anim pariatur cliche </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Anim pariatur cliche </li>
                                </ul>
                            </div>     
                        </div>
                    </div>

                    <div className="card collapsible">
                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne6" aria-expanded="true" aria-controls="collapseOne6">
                            <div className="card-header " role="tab" id="headingOne2">
                            <b>Road Infrastructure</b><i class="fas fa-angle-down rotate-icon"></i>
                            </div>
                        </a>

                        <div id="collapseOne6" class="collapse" role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordionEx">
                            <div className="card-body">
                                <ul>
                                    <li>Anim pariatur cliche </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Anim pariatur cliche </li>
                                </ul>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
    

        </section>
    )
}

export default DocSearch;