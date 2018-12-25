import React from 'react';
import SideBar from './SideBar';
import {store} from './reduxCore'; //context is still unused. v0.2.1b
import { Provider } from 'react-redux';
import PlantList from './PlantList';



const WrappedApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

const App = () => (
        <div className='ui main'>
            <SideBar />
            <div className='ui segment'>
                <div className='ui aligned grid equal width equal height'>
                    <PlantList/>
                </div>
            </div>
        </div>
);



export default WrappedApp;