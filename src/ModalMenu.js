import React from "react";
import PropTypes from 'prop-types';
import {Modal, Form, Message, Button, Label} from 'semantic-ui-react';
import {SAVE_DATA_REQUEST, store} from "./reduxCore";


const ModalMenu = (props) => {
    return (
        <Modal open={props.isOpen} onClose={props.closeModalMenu}>
            <ModalMenuContent data={props.fields}/>
            <ModalMenuFields fields={props.fields} closeModalMenu={props.closeModalMenu}/>
        </Modal>
    );
};

const ModalMenuContent = (props) => {
    return (
        <React.Fragment>
            <Modal.Header>
                <h2>Selected plant: {props.data.title} </h2>
                Description: {props.data.desc}
                <Label>ID: {props.data.id}</Label>
            </Modal.Header>
        </React.Fragment>
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
            status: 'READY',
            fields: {
                title: this.props.fields.title,
                desc: this.props.fields.desc,
                img_src: this.props.fields.img_src,
                id: this.props.fields.id,
            }
        }
    } //construct menu from props
    isValid = () => {
        if (this.state.fields.title.length < 2) {this.setState({status: 'ERR_FIELD_TITLE'}); return false; }
        if (this.state.fields.desc.length < 2) {this.setState({status: 'ERR_FIELD_DESC'}); return false; }
        //if (!this.state.fields.img_src) return false;
        return true;
    }; //support func

    handleSubmit = () => {
        if (!this.isValid())
            this.setState({status: 'ERROR'});
        else
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
                /*ERROR handling: this.isValid() ? (
                    this.setState({
                        fields: {
                           title: e.target.value,
                        },
                    })) : (this.setState({
                    errors: [this.state.errors].concat(e.target.name)}));*/
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
            default: {
                console.log('[ERROR] ModalMenu: Unknown event.')
            }
        }
    }; //TODO: handle errors in fields
    render() {
        return (
            <React.Fragment>
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            {
                                (this.state.status === 'ERR_FIELD_TITLE') ?
                                (<Form.Input error width={4} label='Title' name='title' onChange={this.handleChange} value={this.state.fields.title}/>) :
                                (<Form.Input width={4} label='Title' name='title' onChange={this.handleChange} value={this.state.fields.title}/>)
                            }
                            {
                                (this.state.status === 'ERR_FIELD_DESC') ?
                                    (<Form.Input error width={8} label='Description' name='desc' onChange={this.handleChange} value={this.state.fields.desc}/>) :
                                    (<Form.Input width={8} label='Description' name='desc' onChange={this.handleChange} value={this.state.fields.desc}/>)
                            }
                        </Form.Group>
                        <Form.Group inline>
                            Status:
                            <Form.Radio label='code-1'/>
                            <Form.Radio label='code-2'/>
                            <Form.Radio label='code-3'/>
                        </Form.Group>
                        <Form.Checkbox label='Requires overwatch' value={this.state.fields.title}/>
                        <Form.TextArea label='Description' name='desc' onChange={this.handleChange}
                                       value={this.state.fields.desc}/>
                        <Message success header='Success' content='Data has been successfully uploaded to server'/>
                        <Message error header='Error occured' content=' d'/>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.handleSubmit}>Save</Button>
                    <Button onClick={this.props.closeModalMenu}>Close</Button>
                </Modal.Actions>
            </React.Fragment>
        )
    }
}


export default ModalMenu;