import React, { Component } from "react";
import './index.css'

class Input extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <input
                name={this.props.name}
                value={this.props.totalAmount}
                type={this.props.type}
                onChange={this.props.onChange}
                placeholder={this.props.placeholder ? this.props.placeholder : 'Enter something'}
                className="input"
                style={{
                marginTop: this.props.mt?`${this.props.mt}px`:'0px',
                marginBottom: this.props.mb?`${this.props.mb}px`:'0px',
                marginLeft: this.props.ml?`${this.props.ml}px`:'0px',
                marginRight: this.props.mr?`${this.props.mr}px`:'0px'
                }}     
            />
        )
    }
}

export default Input;