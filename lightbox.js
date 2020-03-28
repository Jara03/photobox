import * as photoloader from './photoloader.js';

let server_url;
let vignette ;


export function initialisation(u){
    server_url = u ;
    let fermer = $('#lightbox_close');
    fermer.click(close);

    let lightSuivante = $('#btn_light_suiv');
    let lightPrecedente = $('#btn_light_prec');

    lightSuivante.click(nextLightbox);
    lightPrecedente.click(backLightbox);


}

export function afficheLight(v){
    if (typeof v.target == 'undefined') {
        vignette = v;
    } else {
        vignette = v.currentTarget;
    }

    $('#lightbox_full_img').attr('src',vignette.firstElementChild.attributes.src.nodeValue);
    let  container = $('#lightbox_container');
    container.css('display','block');


}

function close(){
   let  container = $('#lightbox_container');
    container.css('display','none');
}


function nextLightbox(){
    if(vignette.nextElementSibling == null){
        //passer à la premiere image de la page suivante
    }else{
        afficheLight(vignette.nextElementSibling);
    }
}

function backLightbox(){
    if(vignette.previousElementSibling == null){
        //passer à la dernière image de la page précedente
    }else{
        afficheLight(vignette.previousElementSibling);
    }
}

