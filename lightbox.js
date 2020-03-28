import * as photoloader from './photoloader.js';
import * as gallery from "./gallery.js";
import {loadDescription} from "./gallery.js";

let server_url;
let vignette ;
let container ;

export function initialisation(u){
    container = $('#lightbox-info');
    server_url = u ;
    let fermer = $('#lightbox_close');
    fermer.click(close);

    let lightSuivante = $('#btn_light_suiv');
    let lightPrecedente = $('#btn_light_prec');

    lightSuivante.click(nextLightbox);
    lightPrecedente.click(backLightbox);


}

export function newDesc(photo){
    let desc = $("<div>").addClass('description');


    $('<p>').text('nom: ' + photo.titre).appendTo(desc);
        $('<p>').text('description: ' + photo.descr).appendTo(desc);
        $('<p>').text('format: ' + photo.format).appendTo(desc);
        $('<p>').text('taille: ' + photo.size).appendTo(desc);
        $('<p>').text('largeur: ' + photo.width).appendTo(desc);
        $('<p>').text('hauteur: ' + photo.height).appendTo(desc);



    return $('#lightbox-info').append(desc);

}

export function afficheLight(v){
    if (typeof v.target == 'undefined') {
        vignette = v;
    } else {
        vignette = v.currentTarget;
    }

    $('#lightbox_full_img').attr('src',vignette.firstElementChild.attributes.src.nodeValue);
    $('#lightbox_title').text(vignette.lastElementChild.textContent);
    //ajout de la description d'un photo
    let info =  $('#lightbox-info');
    info.empty();
    info.text(loadDescription(vignette.firstElementChild.attributes.name.nodeValue));

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

