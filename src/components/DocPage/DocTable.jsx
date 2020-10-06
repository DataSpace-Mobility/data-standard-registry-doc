import React from 'react';

import './DocTable.scss';

function DocTable(props) {

    let standardFileJSON = props.standardFileJSON

    function parseRows(i) {
        let res = []
       standardFileJSON.messages[i].fields.forEach((f, idx) => {
           res.push(
               <tr key={idx}>
                    <td className="field-name">{f.name}</td>
                    <td>{f.type}</td>
                    <td>{f.description}</td>
                </tr>
           )
       })
       return res
    }

    function renderTable(i) {
        return(
            <div key={i} id={standardFileJSON.messages[i].name} className="msg-table">
                <div className="msg-name-box">
                    {/* <span className="msg-name-tag">Message</span> */}
                    <span className="msg-name">{standardFileJSON.messages[i].name}</span>
                </div>
                <p className="msg-description">{standardFileJSON.messages[i].description}</p>
                <table className="table">
                    <thead className="header">
                        <tr>
                        <th scope="col" width="10%">Field Name</th>
                        <th scope="col" width="10%">Type</th>
                        <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parseRows(i)}
                    </tbody>
                </table>
            </div>
        )
    }

    function renderAllTables() {
        let res = []
        for(let i=0; i<standardFileJSON.messages.length; i++) {
            res.push(renderTable(i))
        }
        return res
    }

    return(
        <section className="DocTable">
            <div className="nav-path">Data Standards > Transit > GTFS</div>
            <div className="standard-description">
                <h1>General Transit Feed Specification</h1>
                <h5>
                    The General Transit Feed Specification (GTFS), also known as GTFS static or static transit to differentiate it from the GTFS realtime extension, defines a common format for public transportation schedules and associated geographic information. GTFS "feeds" let public transit agencies publish their transit data and developers write applications that consume that data in an interoperable way.
                </h5>
            </div>
            {renderAllTables()}
        </section>
    )
}

export default DocTable;
