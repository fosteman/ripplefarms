import React from 'react';
import PlantFace from './PlantFace';
import {store } from './reduxCore';
import ModalMenu from "./ModalMenu";


class PlantList extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
    state = {
        isLoading: false,
        ModalMenu: {
            isOpen: false,
            data: {
                id: '',
                title: '',
                desc: '',
                img_src: '',
            },
        },
    };
    handleModalMenu = (id) => {
        const reduxState = store.getState(); //TODO: remove multiple call to storage: either pass data from plant item, either subscribe parent to props
        const p = reduxState.plants.find((pl) => (pl.id === id));
        this.setState({
            ModalMenu: {
                isOpen: true,
                data: {
                    id: p.id,
                    title: p.title,
                    desc: p.desc,
                    img_src: p.img_src,
                },
            },
        });
    };
    closeModalMenu = () => {
        this.setState({ModalMenu: {isOpen: false}});
    };

    render() {
        if (this.props.isLoading) {
            return <img alt='loading' src='/img/loading.gif'/>;
        }
        const reduxState = store.getState(); //TODO: remove multiple call to storage
        const plantFaces = reduxState.plants.map((p, index) => (<PlantFace key={index} id={p.id} data={p} handleModalMenu={this.handleModalMenu}/>));
        return (
            <React.Fragment>
                {plantFaces}
                <ModalMenu closeModalMenu={this.closeModalMenu} isOpen={this.state.ModalMenu.isOpen} fields={this.state.ModalMenu.data}/>
            </React.Fragment>
        ); //React 16 can return multiple elements :heart
}
}
export default PlantList;
