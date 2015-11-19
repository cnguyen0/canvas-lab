/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var canvas = document.getElementById('drawCanvas');
    var ctx = canvas.getContext('2d');


    var truth = false;

    document.addEventListener('mousedown', function(evt) {
        var canvasY = evt.clientY - canvas.offsetTop;
        //properties evt.clientX evt.clientY

        ctx.beginPath();
        ctx.moveTo(evt.clientX,canvasY);
        ctx.stroke();
        truth = true;

        document.addEventListener('mouseup', function(evt) {
            truth = false;
        });

        document.addEventListener('mousemove', function(evt) {
            var canvasY = evt.clientY - canvas.offsetTop;
            if (truth) {
                ctx.strokeStyle = (document.getElementById('line-color-inp')).value;
                ctx.lineTo(evt.clientX,canvasY);
                ctx.stroke();
            }
        });
    });
}); //DOMContentLoaded
