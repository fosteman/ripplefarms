import { createStore, applyMiddleware } from 'redux'; //async actions support

const initialData = {
    isLoading: false,
    loadStatus: 'READY',
    isUploading: false,
    uploadStatus: 'READY',
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
/*action' macros*/
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SAVE_DATA_REQUEST = 'SAVE_DATA_REQUEST';
export const SAVE_DATA_SUCCESS = 'SAVE_DATA_SUCCESS';
export const SAVE_DATA_FAILURE = 'SAVE_DATA_FAILURE';

/*function: action*/
function fetchDataRequest() {
    return {type: FETCH_DATA_REQUEST};
}
function fetchDataSuccess (data) {
    return {type: FETCH_DATA_SUCCESS, data};
}
function fetchDataFailure (error) {
    return {type: FETCH_DATA_FAILURE, error};
}
function saveDataRequest () {
    return {type: SAVE_DATA_REQUEST};
}
function saveDataFailure (error) {
    return {type: SAVE_DATA_FAILURE, error};
}
function saveDataSuccess (data) {
    return {type: SAVE_DATA_SUCCESS, data};
}

/*TODO:async action creators*/
/*export function fetchData () {
    return function (dispatch) {
        dispatch(fetchDataRequest());
        apiClient.loadData().then((data) => {dispatch(fetchDataSuccess(data))});
    }
}
export function saveData (data) {
    return function (dispatch) {
        dispatch(saveDataRequest());
        apiClient.saveData(data)
            .then((respond) => {dispatch(saveDataSuccess(data))})
            .catch((error) => {dispatch(saveDataFailure(error))})
    }
}*/

/*api for localStorage
const apiClient = {
    loadData: function () {
        return {
            then: function (cb) {
                setTimeout(() => {
                    cb(JSON.parse(localStorage.data || '[]'))
                }, 1000);
            }
        }
    },
    uploadData: function (data) {
        const success = !!(this.count++ % 2);
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (!success) return reject({success});
                localStorage.data = JSON.stringify(data);
                resolve({success});
            }, 1000);
        });
    },
    count: 1,
};
*/
/*reducer TODO: move to reduxReducer.js*/
export function reducer (state = initialData, action) {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return Object.assign({}, state, {isLoading: true});
        case FETCH_DATA_SUCCESS:
            return Object.assign({}, state, {
                plants: action.data,
                isLoading: false,
            });
        case FETCH_DATA_FAILURE:
            return Object.assign({}, state, {loadStatus: 'ERR fetching'}); //TODO: implement this
        case SAVE_DATA_REQUEST:
            return Object.assign({}, state, {uploadStatus: 'UPLOADING'});
        case SAVE_DATA_SUCCESS:
            return Object.assign({}, state, {
                plants: action.data,
                uploadStatus: 'SUCCESS',
            });
        case SAVE_DATA_FAILURE:
            return Object.assign({}, state, {uploadStatus: 'ERR uploading'}); //TODO: and this
        default:
            return state;
    }
}

/*Junctions*/

/*Core*/
export const store = createStore(reducer);
