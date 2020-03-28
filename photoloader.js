import * as gallery from './gallery.js';


let server_url ;
let btnLoadGallery;
let btnNextPage;
let btnPrevPage;
let offset = 8 ;

    export function initialisation(u){
        server_url = u ;
        btnLoadGallery = $('#load_gallery');
        btnLoadGallery.click(load);

        btnNextPage = $('#next');
        btnPrevPage = $('#previous');

        btnNextPage.click(prochaine);
        btnPrevPage.click(precedente);

    }

    export function chargementPhotos(uri){
        return axios.request({
                url: server_url + uri,
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


    export function prochaine() {
        gallery.reset();
        offset += 12;
        return chargementPhotos('/www/canals5/photobox/photos/?offset='+ offset +'&size=12').then((results) => {
            gallery.domCharging(results.data.photos);
        }).catch((error) => {

            console.log(error);
        });
    }

    export function precedente() {
            gallery.reset();
            offset -= 12;


            return chargementPhotos('/www/canals5/photobox/photos/?offset='+ offset +'&size=12').then((results) => {
                gallery.domCharging(results.data.photos);
            }).catch((error) => {

                console.log(error);
            });
    }















