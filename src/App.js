import React from 'react';
import PlantList from './PlantList';
import SideBar from './SideBar';
import PlantFace from './PlantFace';
import uuid from 'uuid';
import ModalMenu from "./ModalMenu";


const initialData = {
  plants: [
      {
          title: 'Synaptolepis Kirkii',
          img_src: '/plants/img/test.jpg',
          desc: 'description sample',
          id: 0, /*uuid*/
      },
      {
          title: 'Lepidum Mayenii',
          img_src: './plants/img/Lepidum_Mayenii.img',
          desc: 'description sample',
          id: 1,
      },
      {
          title: 'Epimedium Grandiflorum',
          img_src: './plants/img/Epimedium Grandiflorum.img',
          desc: 'description sample',
          id: 2,
      },
      {
          title: 'Synaptolepis Kirkii',
          img_src: './plants/img/Synaptolepis_Kirkii.img',
          desc: 'description sample',
          id: 3, /*uuid*/
      },
      {
          title: 'Lepidum Mayenii',
          img_src: './plants/img/Lepidum_Mayenii.img',
          desc: 'description sample',
          id: 4,
      },
      {
          title: 'Epimedium Grandiflorum',
          img_src: './plants/img/Epimedium Grandiflorum.img',
          desc: 'description sample',
          id: 5,
      },
      {
          title: 'Synaptolepis Kirkii',
          img_src: './plants/img/Synaptolepis_Kirkii.img',
          desc: 'description sample',
          id: 6, /*uuid*/
      },
      {
          title: 'Lepidum Mayenii',
          img_src: './plants/img/Lepidum_Mayenii.img',
          desc: 'description sample',
          id: 7,
      },
      {
          title: 'Epimedium Grandiflorum',
          img_src: './plants/img/Epimedium Grandiflorum.img',
          desc: 'description sample',
          id: 8,
      },
  ],

};





class App extends React.Component {
    state = {
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
    handleModalMenu = (id) => {
        const p = initialData.plants.find((pl) => (pl.id === id));
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

    plants = initialData.plants.map((p, index) => (
            <PlantFace key={index} id={p.id} data={p} handleModalMenu={this.handleModalMenu}/>
    ));

    render() {
        return (
        <div className='ui main'>
            <div className='ui segment'>
                <div className='ui aligned grid equal width equal height'>
                    <PlantList plants={this.plants}/>
                </div>
                <ModalMenu handleModalMenu={this.closeModalMenu} isOpen={this.state.ModalMenu.isOpen} data={this.state.ModalMenu.data}/>
                <SideBar />
            </div>
        </div>
        );
    }
}



export default App;