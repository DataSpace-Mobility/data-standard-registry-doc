import React from 'react';

import './DocTable.scss';

function DocTable(props) {

    let standardFileJSONArr = props.standardFileJSONArr

    function parseMessageRows(fields) {
        let res = []
       fields.forEach((f, idx) => {
           console.log(f)
           let typeLink = f.type
           let repeated = ''
           if(f.type[0] === f.type[0].toUpperCase()) {
               typeLink = <a href={"#" + f.longType}>{f.type}</a>
           }
           if(f.label === 'repeated') {
               repeated = 'Many'
           } else {
               repeated = 'One'
           }
           res.push(
               <tr key={idx}>
                    <td className="field-name">{f.name}</td>
                    <td>{typeLink}</td>
                    <td>{repeated}</td>
                    <td>{f.description}</td>
                </tr>
           )
       })
       return res
    }

    function renderMessageTable(obj) {
        return(
            <div key={obj.fullName} id={obj.longName} className="msg-table">
                <div className="msg-name-box">
                    <span className="msg-name">{obj.name}</span>
                </div>
                <p className="msg-description">{obj.description}</p>
                <table className="table">
                    <thead className="header">
                        <tr>
                        <th scope="col" width="10%">Field Name</th>
                        <th scope="col" width="20%">Type</th>
                        <th scope="col" width="10%">Cardinality</th>
                        <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parseMessageRows(obj.fields)}
                    </tbody>
                </table>
            </div>
        )
    }

    function renderEnumTable(obj) {
        return(
            <div key={obj.fullName} id={obj.longName} className="msg-table">
                <div className="msg-name-box">
                    <span className="msg-name">{obj.name}</span>
                </div>
                <p className="msg-description">{obj.description}</p>
                <table className="table">
                    <thead className="header">
                        <tr>
                        <th scope="col" width="10%">Number</th>
                        <th scope="col" width="10%">Value</th>
                        <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parseEnumRows(obj.values)}
                    </tbody>
                </table>
            </div>
        )
    }

    function parseEnumRows(fields) {
        let res = []
       fields.forEach((f, idx) => {
           res.push(
               <tr key={idx}>
                    <td className="field-name">{f.number}</td>
                    <td>{f.name}</td>
                    <td>{f.description}</td>
                </tr>
           )
       })
       return res
    }

    function renderAllTables() {
        let res = []
        standardFileJSONArr.forEach(file => {
            for(let i=0; i<file.messages.length; i++) {
                res.push(renderMessageTable(file.messages[i]))
            }
        })

        standardFileJSONArr.forEach(file => {
            for(let i=0; i<file.enums.length; i++) {
                res.push(renderEnumTable(file.enums[i]))
            }
        })

        return res
    }

    return(
        <section className="DocTable">
            {renderAllTables()}
        </section>
    )
}

export default DocTable;
