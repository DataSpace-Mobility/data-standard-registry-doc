import React from 'react';
import DocMainContent from './DocMainContent';
import DocContentList from './DocContentList';

import './DocContent.scss';

function DocContent(props) {

    return (
        <section className="DocContent">
            <div className="registry-name">Data Standards Registry</div>
            
            
            <div className="row">
                <div className="col-10">
                    <DocMainContent StandardJSON={props.StandardJSON} standardId={props.standardId}/>
                </div>
                <div className="col-2 nopadding">
                    <DocContentList StandardJSON={props.StandardJSON}/>
                </div>
            </div>
        </section>
    );
}

export default DocContent;