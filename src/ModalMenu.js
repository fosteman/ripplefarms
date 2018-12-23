import PropTypes from "prop-types";
import React from "react";
import {Modal, Button, Input, Segment} from 'semantic-ui-react';
const ModalMenu = (props) => {
    return (
        <Modal open={props.isOpen} onClose={props.handleModalMenu}>
            <ModalMenuContent data={props.data}/>
            <ModalMenuFields data={props.data} handleModalMenu={props.handleModalMenu}/>
        </Modal>
    );
};
const ModalMenuContent = (props) => {
    return (
        <Modal.Content>
            <h3>Selected plant: {props.data.title} </h3>
            <p>ID: {props.data.id}</p>
            <p>Description: {props.data.desc}</p>
        </Modal.Content>
    );
};
class ModalMenuFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                title: this.props.data.title,
                desc: this.props.data.desc,
                pic_src: this.props.data.img_src,
                id: this.props.data.id,
                timer: {},
                progress: 51,
            }
        }
    }
    //TODO propTypes
    handleSubmit = () => {
        //TODO: this.props.onSubmit();
        //this.props.closeMenu();
        //clear fields
    };
    handleChange = (e) => {
        switch (e.target.name) {
            case 'title': {
                this.setState({
                    fields: {
                        title: e.target.value,
                    },
                });
                break;
            }
            case 'desc': {
                this.setState({
                    fields: {
                        desc: e.target.value,
                    },
                });
                break;
            }
            default: { console.log('Unknown change event')}
        }
    };
    render() {
        return (
        <Modal.Actions>
            <Segment.Group>
                <Segment><Input
                    label='Title'
                    labelPosition='left'
                    placeholder={this.state.fields.title}
                    onChange={this.handleChange}
                /></Segment>
                <Segment><Input
                    label='Description'
                    labelPosition='left'
                    placeholder={this.state.fields.desc}
                    onChange={this.handleChange}
                /></Segment>
                <Segment>
                    <Button color='green' onClick={this.handleSubmit}>Save</Button>
                    <Button onClick={this.props.handleModalMenu}>Close</Button>
                </Segment>
            </Segment.Group>
        </Modal.Actions>
        )
    }
}


export default ModalMenu;