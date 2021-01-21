import React, { Component } from 'react';
import PropTypes from 'prop-types';
import img from './images/gadgets.jpg';
class CartComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c1: 0,
            c2: 0,
            c3: 0
        }

    }
    onInc1CLick = () => {
        this.setState({ c1: this.state.c1 + 1 })
        alert("Added to card ")
    }
    onInc2CLick = () => {
        this.setState({ c2: this.state.c2 + 1 })
        alert("Added to card ")

    }
    onInc3CLick = () => {
        this.setState({ c3: this.state.c3 + 1 })
        alert("Added to card ")

    }
    onDc1CLick = () => {
        this.setState({ c1: this.state.c1 - 1 })
        alert("Removed from card ")

    }
    onDc2CLick = () => {
        this.setState({ c2: this.state.c2 - 1 })
        alert("Removed from card ")

    }
    onD3CLick = () => {
        this.setState({ c3: this.state.c3 - 1 })
        alert("Removed from card ")

    }


    render() {
        return (
            <div>
                <div class="form-row">
                    <div class="col col-md-2">
                        <p>Products are:</p>
                        <ul>
                            <li>TV</li> Add to Cart<button type="button" onClick={this.onInc1CLick}>+</button>{this.state.c1}<button type="button" onClick={this.onDc1CLick}>-</button>
                            <li>AC</li>Add to Cart<button type="button" onClick={this.onInc2CLick}>+</button>{this.state.c2}<button type="button" onClick={this.onDc2CLick}>-</button>
                            <li>Mobile</li>Add to Cart<button type="button" onClick={this.onInc3CLick}>+</button>{this.state.c3}<button type="button" onClick={this.onDc3CLick}>-</button>
                        </ul>
                    </div>
                
               
                    <div class="col col-md-10">
                        <img src={img} width="100%" height="500px"/>

                    </div>

                    </div>
            </div>
        );
    }
}


export default CartComp;