// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
}

function draw() {
    // Conditionellle nous permettant de savoir si la souris est appuyée
    // et si le timer est écoulé
    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
        clear();
        // Appel de notre fonction generator
        noStroke();
        lines(width / 2, height / 1.97, width / 2, random(700, 1000));
        rond(width / 2, height / 2, random(100, 500));
        tour(width / 2, height / 1.97, random(50, 600), random(10, 100), 20);
    }
}

function rond(x, y, size) {
    noStroke();
    fill(color(random(0, 255), random(0, 255), random(0, 255)));
    circle(x, y, size);
}

function tour(x, y, sizeA, sizeB, angle) {
    fill(color(random(0, 255), random(0, 255), random(0, 255)));
    rect(x, y, sizeA, sizeB, angle);
}

function lines(x1, y1, x2, y2) {
    stroke(color(random(0, 255), random(0, 255), random(0, 255)));
    strokeWeight(random(10, 100));
    line(x1, y1, x2, y2);

}
// Fonction avec quatres paramètres
// function generator(x, y, size) {
//     // fill utilise le paramètre de notre fonction
//     // for (let offset = size; offset > 0; offset -= 10) {
//     //     fill(random(0, 230));
//     //     circle(x, y, offset, offset);
//     //     console.log(offset);
//     // }
// }

function mousePressed() {
    // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
    save();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}