import React from "react";
import InputRange from 'react-input-range';

export class Box extends React.Component {
    render() {
        return (
            <div class="box col-sm-3 col-6">
                <span style={{fontSize : 100, color : this.props.color}} class="material-icons">
                    {this.props.icon}
                </span>
                <p>{this.props.value}{this.props.unit}</p>
                if ( icon != "local_drink") {
                    <InputRange 
                     min = {this.props.min}
                     max = {this.props}
                     value = {this.props}
                     oninput = {this.props} />
                }
            </div>
        )
        
    }
}

export default Box;