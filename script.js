// https://cdnjs.cloudflare.com/ajax/libs/two.js/0.8.7/two.min.js

// Get drawing for drawing
const container = document.querySelector("section");

// Set parameters for container
let params = {
  width: 500,
  height: 500
};

// `new` instantiation Two.js
const two = new Two(params);
// append to `container`
two.appendTo(container);

// Draw Shape
let shape = two.makeRectangle(250, 250, 100, 100);

// PROPERTY: set fill to red
shape.fill = "red";
// METHOD: run method to remove stroke
shape.noStroke();

// rotate shape. Default is radians
shape.rotation = Math.PI * 0.25;

// Bind to "Update" function
two.bind("update", () => {
  shape.rotation += 0.05;
});

// Draw to page
two.play();
