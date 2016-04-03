import $ from 'jquery';
import d3 from 'd3';
import {line_chart} from './main/transit';
// {} to refer to the specific function exported from transit (not default)

var transitMap = '#transitMap';

//call funcion from transit.js to draw profile map
line_chart();

$(function(){
var windowWidth = $(window).width();

$(window).resize(function() {
    if(windowWidth != $(window).width()){
    location.reload();
    return;
    }
    });
});

// // change hash 
// $(window).hashchange(function() {
//     var hash = location.hash.slice(1);
//     console.log('hash changed: ', hash);

//     if (hash === '') {
//         location.hash = '#about';
//     }

//     $('.tab').hide();
//     $('#' + hash + '-tab').show();
// });

// $(window).hashchange();
