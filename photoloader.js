import * as gallery from './gallery.js';


let server_url ;
let btnLoadGallery;

export function initialisation(u){
    server_url = u ;
    btnLoadGallery = $('#load_gallery');
    btnLoadGallery.click(load)
}

export function chargementPhotos(uri){
    return axios.request({
            url: server_url+uri,
            method: 'get',
            withCredentials: true,
            responseType: 'json'
        }).catch((error) =>{
            console.log(error);
    });
}

function load(){
    chargementPhotos('/www/canals5/photobox/photos/?offset=8&size=12').then((results)=> {
        gallery.domCharging(results.data.photos);
    });
}


















