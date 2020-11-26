import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import './Footer.scss';

function Footer() {
    return (
        <section className="Footer">
            <div className="row">
                <div className="col-md-4">
                    <div className="section">
                        <h5>Learn</h5>
                        <ul>
                            <li><a href="https://dataspace.mobi">Know more about data standards</a></li>
                            <li><a href="https://dataspace.mobi">Learn to create new data standards</a></li>
                        </ul>
                    </div>

                    <div className="section">
                        <h5>Collaborate</h5>
                        <ul>
                            <li><a href="https://dataspace.mobi">Improve existing standards</a></li>
                            <li><a href="https://dataspace.mobi">Create new data standards</a></li>
                        </ul>
                    </div>

                    <div className="section">
                        <h5>Connect</h5>
                        <ul>
                            <li><a href="https://dataspace.mobi">Github</a></li>
                            <li><a href="https://dataspace.mobi">Blog</a></li>
                        </ul>
                    </div>
                    <small>Made in India with <AiFillHeart className="heart-color"/> from <b>Government of India</b></small>
                    <small>&copy; Ministry of Housing and Urban  Affairs</small>
                </div>
                <div className="col-md-5"></div>
                <div className="col-md-3">
                    <div className="section">
                        <h5>Explore DataSpace</h5>
                        <ul>
                            <li><a href="https://dataspace.mobi">Data Platform</a></li>
                            <li><a href="https://dataspace.mobi">Data Licenses</a></li>
                            <li><a href="https://dataspace.mobi">Explore Use Cases</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;