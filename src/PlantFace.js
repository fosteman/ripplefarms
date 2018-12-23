import React from 'react';
import {Button} from 'semantic-ui-react';

class PlantFace extends React.Component {
    state = {
        faceDetails: false,
    };
    handleModalMenu = () => {
        this.props.handleModalMenu(this.props.id);
    };
    render() {
        if (this.state.faceDetails === true)
            return (
                <div className='ui card' onMouseLeave={() => (this.setState({faceDetails: false}))} onMouseEnter={() => (this.setState({faceDetails: true}))}>
                    <h4>{this.props.data.title}</h4>
                    <Button className='ui button' onClick={this.handleModalMenu}>Open ModalMenu</Button>
                </div>
            );
        else
            return (
                <div className='ui card' onMouseLeave={() => {this.setState({faceDetails: false})}} onMouseEnter={() => {this.setState({faceDetails: true})}}>
                    <img src={this.props.data.img} alt={this.props.data.title}/>
                </div>
            );
    }
}

export default PlantFace;