import React from 'react';
import {Button, Image} from 'semantic-ui-react';

const DetailedContainer = props => (
    <div>
        <h4>{props.data.title}</h4>
        <div className='ui placeholder very padded' >
            <div className='image header'>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <div className='paragraph'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
        </div>
        <Button attached='bottom' className='ui fluid basic button' onClick={() => (props.handleModalMenu(props.id))}>Open ModalMenu</Button>
    </div>
);
const FaceContainer = props => (
    <div className='content'>
        <div className='square image header'>
            <Image src={props.data.img_src} size='large' alt={props.data.title}/>
        </div>
        <p><metadata>Position: depends on ID: props.data.id}</metadata></p>
        <p><metadata>Progress: calculated with Object.Date()</metadata></p>
    </div>
);

class PlantFace extends React.Component {
    state = {
        faceDetails: false,
    };
    handleModalMenu = () => {
        this.props.handleModalMenu(this.props.id);
    };
    render() {
        return (
            <div className='column five wide'>
                <div className='ui segment center aligned vertically padded' onMouseLeave={() => (this.setState({faceDetails: false}))} onMouseEnter={() => (this.setState({faceDetails: true}))}>
                    {this.state.faceDetails ? DetailedContainer(this.props) : FaceContainer(this.props)}
                    </div>
            </div>
        );
    }
}

export default PlantFace;
