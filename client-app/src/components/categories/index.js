import React, { Component } from 'react';
import './styles/main.css'

class Categories extends Component {
    render() {
        return (
            <div id="jumbos">
                <div id="jumbo1" className="jumbotron jumbotron-fluid">
                    <div id="C1" className="container">
                        <h1 id="" className="display-4">Category 1</h1>
                        <p id="" className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <div id="jumbo2" className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 id="C2" className="display-4">Category 2</h1>
                        <p id="" className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <div id="jumbo3" className="jumbotron jumbotron-fluid">
                    <div id="" className="container">
                        <h1 id="C3" className="display-4">Category 3</h1>
                        <p id="" className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <div id="jumbo4" className="jumbotron jumbotron-fluid">
                    <div id="" className="container">
                        <h1 id="C4" className="display-4">Category 4</h1>
                        <p id="" className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Categories