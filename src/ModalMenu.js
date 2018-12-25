import React from "react";
import PropTypes from 'prop-types';
import {Modal, Button, Input, Segment} from 'semantic-ui-react';
import {SAVE_DATA_REQUEST, store} from "./reduxCore";


const ModalMenu = (props) => {
    return (
        <Modal open={props.isOpen} onClose={props.closeModalMenu}>
            <ModalMenuContent data={props.data}/>
            <ModalMenuFields fields={props.fields} closeModalMenu={props.closeModalMenu} handleUpload={props.handleUpload}/>
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
    propTypes = {
        fields: PropTypes.shape({
            title: PropTypes.string.isRequired,
            img_src: PropTypes.string,
            desc: PropTypes.string,
            id: PropTypes.string.isRequired,
        }),
    };
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                title: this.props.fields.title,
                desc: this.props.fields.desc,
                img_src: this.props.fields.img_src,
                id: this.props.fields.id,
            }
        }
    } //construct menu from props
    isValid = () => {
        if (this.state.fields.title.length < 2) return false;
        if (this.state.fields.desc.length < 2) return false;
        if (!this.state.fields.img_src) return false;
        return true;
    };
    onFormSubmit = (evt) => {
        const plant = this.state.ModalMenu.data;
        evt.preventDefault();
        if (!this.isValid()) return;
    };
    handleSubmit = () => {
        store.dispatch({
            type:'SAVE_DATA_REQUEST',
            fields: this.state.fields,
        });
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
        let status = 'READY'; //TODO: implement form, connect submit button
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
                            disabled={!this.isValid()}
                        />,
                        READY: <input
                            value='Submit'
                            type='submit'
                            disabled={!this.isValid()}
                        />,
                    }[status]} //TODO:html analogue of 'switch' for the Submit button and loading indicator.
                    <Button color='gray' onClick={this.props.closeModalMenu}>Close</Button>
                </Segment>
            </Segment.Group>
        </Modal.Actions>
        )
    }
}


export default ModalMenu;