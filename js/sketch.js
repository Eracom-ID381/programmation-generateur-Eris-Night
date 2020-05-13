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
    // if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
    //     // Appel de notre fonction generator
    //     generator(width / 2, height / 2, height - 150);
    // }
    // circle(200, 200, 200);
    noStroke();
    lines();
    rond();
    tour();
}

function rond() {
    noStroke();
    fill(0);
    circle(width / 2, height / 2, 300);
}

function tour() {
    fill(20);
    rect(width / 2, height / 1.97, 350, 50, 20);
}

function lines() {
    stroke(color(255, 0, 0));
    strokeWeight(50);
    line(width / 2, height / 1.97, width / 2, 1000);

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