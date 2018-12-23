import React, {Component} from 'react';
import ModalMenu from './ModalMenu';

class PlantList extends Component {
    state = {
        id: '',
    };
    render() {
        console.log(this.props);
        return (
            <div className='ui five column grid'>
                {this.props.plants}
            </div>
        );
    }
}
export default PlantList;