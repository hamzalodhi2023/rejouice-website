let page1Content = document.querySelector("#page1-content");
let cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function (dats) {
  gsap.to(cursor, {
    x: dats.x,
    y: dats.y,
  });
});
