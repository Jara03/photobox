import * as phtoloader from './photoloader.js';

let server_url;




export function initialisation(u){
    server_url = u ;
    let fermer = $('#lightbox_close');
    fermer.click(close);


}

function creerLight(){

}

export function afficheLight(vign){

    $('#lightbox_title').text(vign.lastElementChild.textContent);
    $('#lightbox_full_img').attr('src',vign.firstElementChild.attributes.src.nodeValue);

 let  container = $('#lightbox_container');
   container.css('display','block');
}

function close(){
   let  container = $('#lightbox_container');
    container.css('display','none');
}

