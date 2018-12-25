import React from 'react';
import PropTypes from 'prop-types';
import PlantList from './PlantList';
import SideBar from './SideBar';
import uuid from 'uuid';
import ModalMenu from "./ModalMenu";
import {store} from './reduxCore';

class App extends React.Component {
    /*static propTypes = { //TODO: fix undefined PropTypes
        plants: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        isUploading: PropTypes.bool.isRequired,
        loadStatus: PropTypes.string.isRequired,
        uploadStatus: PropTypes.string.isRequired,
        fields: PropTypes.object,
        onSubmit: PropTypes.func.isRequired,
    };*/
    state = {
        Errors: [],
        ModalMenu: {
            isOpen: false,
            id: 0,
            data: {
                title: '',
                desc: '',
                img_src: '',
            },
        },
    };
    isValid = () => {
        if (this.state.ModalMenu.data.title.length < 2) return false;
        if (this.state.ModalMenu.data.desc.length < 2) return false;
        if (!this.state.ModalMenu.data.img_src) return false;
        return true;
    };
    handleModalMenu = (id) => {
        const p = this.props.plants.find((pl) => (pl.id === id));
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
    }; //TODO:Junction the Interconnection that appeared between <ModalMenu/> and <PlantFace.Button/>
    closeModalMenu = () => {
        this.setState({ModalMenu: {isOpen: false}});
    };
    onFormSubmit = (evt) => {
        const plant = this.state.ModalMenu.data;
        evt.preventDefault();
        if (!this.isValid())
            return;
        this.props.onSubmit(...this.props.plants, plant);
    };

    render() {
        if (this.props.isLoading) {
            return <img alt='loading' src='/img/loading.gif'/>;
        }
        return (
        <div className='ui main'>
            <div className='ui segment'>
                <div className='ui aligned grid equal width equal height'>
                    <PlantList plants={this.props.plants}/> TODO:connecttoredux-store
                </div>
                <ModalMenu handleModalMenu={this.closeModalMenu} isOpen={this.state.ModalMenu.isOpen} data={this.state.ModalMenu.data}/>
                <SideBar />
            </div>
        </div>
        );
    }
}



export default App;