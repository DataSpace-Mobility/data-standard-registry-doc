import React, { useEffect, useRef } from 'react';
import * as d3Hierarchy from 'd3-hierarchy';
import * as d3Zoom from 'd3-zoom';
import * as d3 from 'd3';

import './GraphView.scss'

function GraphView(props) {

    let feedMsgFullName = ''
    const treeContainer = useRef(null)

    function processNode(objMap, nodeType, nodeName) {
        let obj = objMap[nodeType]
        /* if(nodeType.indexOf('.') === -1) {
            return {
                //name: nodeType + ': ' + (nodeName || '')
                name: (nodeName || '')
            }
        } */

        let children = []
        if('fields' in obj) {
            
            obj.fields.forEach(field => {
                if(!(field.fullType in objMap)) {
                    children.push({
                        name: field.name
                    })
                } else {
                    children.push(processNode(objMap, field.fullType, field.name))
                }
            })
            
        } else {
            
            /* obj.values.forEach(value => {
                children.push({
                    name: value.name
                })
            }) */
        }

        let nName = ''
        if(nodeName != undefined) {
            // nName = ': ' + nodeName
            nName = nodeName
        } else {
            nName = 'FeedMessage'
        }

        if(children.length == 0) {
            return {
                name: nName
            }
        }
        
        return {
            //name: obj.name + nName,
            name: nName,
            children: children
        }
    }

    function parseAsTree(standardFileJSONArr) {
        console.log(treeContainer.current.getBoundingClientRect())
        let objMap = {}
        standardFileJSONArr.forEach(file => {
            for(let i=0; i<file.messages.length; i++) {
                objMap[file.messages[i].fullName.replace(/^\./, '')] = file.messages[i]

                if(file.messages[i].name == 'FeedMessage') {
                    feedMsgFullName = file.messages[i].fullName
                }
            }
        })

        standardFileJSONArr.forEach(file => {
            for(let i=0; i<file.enums.length; i++) {
                objMap[file.enums[i].fullName.replace(/^\./, '')] = file.enums[i]
            }
        })
        
        
        let data = processNode(objMap, feedMsgFullName, undefined)

        console.log(data)

        var width = 1000
        var height = 1000

        console.log(d3.select('#tree-container').node().getBoundingClientRect())

        const zoom = d3Zoom.zoom()
                        .scaleExtent([0.5, 32])
                        .on('zoom', (e) => {
                            svgContainer.attr("transform", e.transform)
                        })
        

        /* var svg = d3.select('#tree-container')
            .append('svg')
                .attr('width', width)
                .attr('height', height)
                .call(zoom) */

        var svg = d3.select('#tree-container-svg')
            .call(zoom)
        var svgG = svg.append('g')
                .attr("transform", "translate(90, 150)")
        var svgContainer = svgG.append('g')
                

        const root = d3Hierarchy.hierarchy(data)

        root.dx = 13;
        root.dy = width / (root.height + 2);

        var cluster = d3Hierarchy.cluster().nodeSize([root.dx, root.dy])

        cluster(root)

        console.log(root)

        svgContainer.append("g")
            .attr("fill", "none")
            .attr("stroke", "#42278E")
            .attr("stroke-opacity", 0.9)
            .attr("stroke-width", 2)
        .selectAll("path")
            .data(root.links())
            .join("path")
            .attr("d", d => `
                M${d.target.y},${d.target.x}
                C${d.source.y + root.dy / 2},${d.target.x}
                ${d.source.y + root.dy / 2},${d.source.x}
                ${d.source.y},${d.source.x}
            `);

        var nodes = svgContainer.append("g")
            .selectAll("circle")
            .data(root.descendants())
            .join("circle")
            .attr("cx", d => d.y)
            .attr("cy", d => d.x)
            .attr("fill", d => "#fff")
            .attr("stroke", d => d.children ? "#42278E" : "#42278E")
            .attr("stroke-width", 2)
            .attr("r", 3)
            .on('mouseover', (d, e) => {
                /* nodes.style('fill', node_d => node_d.data.name == e.data.name ? '#F7734F': '#fff')
                nodes.style('stroke', node_d => node_d.data.name == e.data.name ? '#F7734F': '#42278E')
                nodes.style('r', node_d => node_d.data.name == e.data.name ? 4: 2) */
                console.log(nodes)
                console.log(d3.select(e))
                // d3.select(e.ancestors()).style('fill', '#F7734F')
                //e.ancestors()[0].style('fill', node_d => node_d.data.name == e.data.name ? '#F7734F': '#fff')
                console.log(d)
                console.log(e)
            })
            .on('mouseout', (d, e) => {
                nodes.style('fill', '#fff')
                nodes.style('stroke', d => d.children ? "#42278E" : "#42278E")
                nodes.style('r', 2)
                console.log(d)
                console.log(e)
            })

        svgContainer.append("g")
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 3)
            .selectAll("text")
            .data(root.descendants())
            .join("text")
            .attr("fill", d => d.children ? "#42278E" : "#42278E")
            .attr("x", d => d.y)
            .attr("y", d => d.x)
            .attr("dy", d => d.children ? "1.51em" : "0.31em")
            .attr("dx", d => d.children ? 8 : 6)
            .text(d => d.data.name)
            .filter(d => d.children)
            .attr("text-anchor", "end")
            .clone(true).lower()
            .attr("stroke", "#fff");

            //svg.attr("viewBox", 0, 0, width, height)

            


    }

    function drawTree() {
        
    }

    useEffect(() => {
        console.log('useEffect')
        console.log(treeContainer)
        parseAsTree(props.StandardJSON.files)
    })

    return(
        <section className="GraphView">
            <div id="tree-container" ref={treeContainer}>
                <svg id="tree-container-svg"></svg>
            </div>
        </section>
    )
}

export default GraphView;