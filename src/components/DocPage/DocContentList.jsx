import React from 'react';

import './DocContentList.scss';

function DocContentList(props) {

    function parseContentList() {
        let res = []
        props.StandardJSON.files.forEach(f => {
            f.messages.forEach((msg, idx) => {
                res.push(
                    <a key={msg.fullName} href={"#" + msg.longName}><li>{msg.name}</li></a>
                )
            })
        })

        props.StandardJSON.files.forEach(f => {
            f.enums.forEach((msg, idx) => {
                res.push(
                    <a key={msg.fullName + 100} href={"#" + msg.longName}><li>{msg.name}</li></a>
                )
            })
        })
        
        return res
    }

    return (
        <section className="DocContentList">
            <ul>
                {parseContentList()}
            </ul>
        </section>
    );
}

export default DocContentList;