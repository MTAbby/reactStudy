/*
 * @Author: shuman 
 * @Date: 2018-08-16 13:49:20 
 * @Last Modified by: shuman
 * @Description:   动画0 
 * @Last Modified time: 2018-08-21 14:59:18
 */
 
import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import './index.scss'

export default class Animation0 extends Component {

    componentDidMount() {
        // let tween1 = new TimelineMax()
        // tween1.from("#CSStransforms", 2, {x:300, opacity:0, ease:Bounce.easeOut})


        const canvas = document.querySelector("#glcanvas");
        // Initialize the GL context
        const gl = canvas.getContext("webgl");

        // Only continue if WebGL is available and working
        if (!gl) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.");
            return;
        }

        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 255, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
    
    render() {
        return (
            <div className="com-content">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>动效练习</Breadcrumb.Item>
                    <Breadcrumb.Item>animation0</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <div id="CSStransforms">
                        <canvas id="glcanvas" width="640" height="480">
                            Your browser doesn't appear to support the HTML5 <code>&lt;canvas&gt;</code> element.
                        </canvas>
                    </div>
                </div>
            </div>
        )
    }
}
