import * as photoloader from "./photoloader.js";
import * as gallery from './gallery.js';
import * as lightbox from './lightbox.js';



$(document).ready(function(){
    photoloader.initialisation('https://webetu.iutnc.univ-lorraine.fr');
    gallery.initialisation('https://webetu.iutnc.univ-lorraine.fr');
    lightbox.initialisation('https://webetu.iutnc.univ-lorraine.fr');
       });
