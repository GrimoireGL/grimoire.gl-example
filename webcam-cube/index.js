$(function () {
  $("input").on("change", function () {
    gr("#main")("mesh").setAttribute("color", this.value);
  });
});
