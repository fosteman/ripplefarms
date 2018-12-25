import React from "react";
import PropTypes from 'prop-types';
import {Modal, Button, Input, Segment} from 'semantic-ui-react';

const ModalMenu = (props) => {
    return (
        <Modal open={props.isOpen} onClose={props.handleModalMenu}>
            <ModalMenuContent data={props.data}/>
            <ModalMenuFields data={props.data} handleModalMenu={props.handleModalMenu} handleUpload={props.handleUpload}/>
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

class ModalMenuFields extends React.Component { //controlled element.
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                title: this.props.data.title,
                desc: this.props.data.desc,
                pic_src: this.props.data.img_src,
                id: this.props.data.id,
                //TODO:timer: {},
                //TODO:progress: 51,
            }
        }
    }
    static propTypes = { //TODO
        plants: PropTypes.array.isRequired,
    };
    handleSubmit = () => {
        this.props.handleUpload(this.state.fields);
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
        let status = 'READY'; //TODO:
        return (
        <Modal.Actions>
            <Segment.Group>
                <Segment>
                    <Input
                        name='title'
                        label='Title'
                        labelPosition='left'
                        placeholder={this.state.fields.title}
                        onChange={this.handleChange}/>
                </Segment>
                <Segment>
                    <Input
                        name='desc'
                        label='Description'
                        labelPosition='left'
                        placeholder={this.state.fields.desc}
                        onChange={this.handleChange}/>
                </Segment>
                <Segment>
                    {{

                        SAVING: <input value='Saving...' type='submit' disabled />,
                        SUCCESS: <input value='Saved!' type='submit' disabled />,
                        ERROR: <input
                            value='Save Failed - Retry?'
                            type='submit'
                            disabled={this.validate()}
                        />,
                        READY: <input
                            value='Submit'
                            type='submit'
                            disabled={this.validate()}
                        />,
                    }[status]} //TODO:html analogue of 'switch' for the Submit button and loading indicator.
                    <Button color='gray' onClick={this.props.handleModalMenu}>Close</Button>
                </Segment>
            </Segment.Group>
        </Modal.Actions>
        )
    }
}


export default ModalMenu;