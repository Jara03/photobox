import * as lightbox from "./lightbox.js";
import {chargementPhotos} from "./photoloader.js";

let server_url;
let gal ;
let vignette;

export function initialisation(u){
    gal = $('#photobox-gallery');
    server_url = u ;
}

export function loadDescription(id){
    chargementPhotos('/www/canals5/photobox/photos/'+id).then((results)=> {
        lightbox.newDesc(results.data.photo);
    });
}
 export function domCharging(listePhoto) {
     listePhoto.forEach(p => {
         newVignette(p);
     });

 }
export function reset(){
    $(".vignette").remove();
}

function newVignette(photo){
    let vign = $("<div>").addClass('vignette');


    $('<img />').attr('src', server_url+photo.photo.original.href)
        .attr('data-img',server_url+photo.photo.original.href)
        .attr('uri',server_url+photo.links.self.href)
        .attr('name',photo.photo.id).appendTo(vign);

    $("<div>").addClass('title').text(photo.photo.titre).appendTo(vign);
    vign.click(
        lightbox.afficheLight
);

    return gal.append(vign);
}



