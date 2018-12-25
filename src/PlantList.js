import React from 'react';
import PlantFace from './PlantFace';

const PlantList = (props) => (
    props.plants.map((p, index) => (
        <PlantFace key={index} id={p.id} data={p} handleModalMenu={this.handleModalMenu}/>
    ))
);
export default PlantList;