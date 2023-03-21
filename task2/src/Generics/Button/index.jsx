import React, { Component } from "react";
import './index.css'
class Button extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className="btn" style={{
                background: this.props.type === 'secondary' ? '#FFF' : '#6347F9',
                color: this.props.type === 'secondary' ? '#6347F9' : '#FFF',
                border: this.props.type === 'secondary' ? '1px solid #6347F9' : '',
                marginTop: this.props.mt?`${this.props.mt}px`:'0px',
                marginBottom: this.props.mb?`${this.props.mb}px`:'0px',
                marginLeft: this.props.ml?`${this.props.ml}px`:'0px',
                marginRight: this.props.mr?`${this.props.mr}px`:'0px'
            }} >{ this.props.children}</button>
        )
    }
}
export default Button;