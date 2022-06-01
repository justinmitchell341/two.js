// https://cdnjs.cloudflare.com/ajax/libs/two.js/0.8.7/two.min.js

// Get drawing for drawing
const container = document.querySelector("section");

// Set parameters for container
let params = {
  width: 1000,
  height: 1000,
};

// `new` instantiation Two.js
const two = new Two(params);
// append to `container`
two.appendTo(container);
// Draw Shape
const TWO_PI = Math.PI * 2;
let shape = two.makeRectangle(500, 500, 1000, 1000);
let shape1 = two.makeRectangle(500, 500, 500, 500);
let shape2 = two.makeRectangle(500, 500, 500, 500);
let shape3 = two.makeCircle(500, 500, 200);
let circle1 = two.makeCircle(330, 350, 25);
let circle2 = two.makeCircle(270, 500, 25);
let circle3 = two.makeCircle(330, 650, 25);
let circle4 = two.makeCircle(500, 730, 25);
let circle5 = two.makeCircle(667, 650, 25);
let circle6 = two.makeCircle(730, 500, 25);
let circle7 = two.makeCircle(670, 350, 25);
let circle9 = two.makeCircle(500, 270, 25);
allCircles = two.makeGroup(circle1, circle2, circle3, circle4, circle5, circle6, circle7, circle9);
console.log(allCircles);
// PROPERTY: set fill to red
shape.fill = 'black';
shape1.fill = "#CC9602";
shape2.fill = "#CC9602";
shape3.fill="9D7300"
// METHOD: run method to remove stroke
shape.noStroke();
// rotate shape. Default is radians
shape2.rotation = Math.PI * 0.25;
allCircles.rotation = Math.Pi * .55;
// Bind to "Update" function
two.bind("update", () => {
  shape1.rotation += 0.005;
});
two.bind("update", () => {
    shape2.rotation += -0.005;
  });
two.bind("update", () => {
    shape3.rotation += 0.005;
    });
// two.bind("update", () => {
//     allCircles.rotation += 0.005;
//     });
allCircles.rotation += (TWO_PI - allCircles.rotation) * 0.0625;
allCircles.rotation = 0;
function generate(elapsed) {

    var circle = two.scene.children[0];

    if (!circle) {
      circle = two.makeCircle(0, 0, two.width / 3);
      circle.stroke = '#fff';
      circle.fill = '#fff';
      two.update();
    }
    
    allCircles.scale = new Two.Vector(1, Math.sin(elapsed * Math.PI));
}
    two.update();
// Draw to page
two.play();

two.update();
