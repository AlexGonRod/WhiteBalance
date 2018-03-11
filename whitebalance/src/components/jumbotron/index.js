import React, { Component } from 'react';
import Plx from "react-plx";
//import './styles/main.css'

const ParallaxData = [
    {
        start: 0,
        end: 100,
        properties: [
            {
                startValue: 1.1,
                endValue:1,
                property: "scale"
            },
        ]
    },
    {
        start: 100,
        end: 200,
        properties: [

            {
                startValue: 1,
                endValue: 0,
                property: "opacity"
            }
        ]
    },
]


class Jumbotron extends Component {
    render() {
        return (

            // <Plx className='MyJumbotron'
            //     parallaxData={ParallaxData}
            // >
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Fluid jumbotron</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            //</Plx>
        )
    }
}

export default Jumbotron













