Handlebars.registerPartial('namePartial', document.getElementById("partial-template").innerHTML)
function renderMain() {
  let template = document.getElementById("main-template").innerHTML;
  let templateFunction = Handlebars.compile(template);
  let html = templateFunction({name: 'Gordon Ramsay'});
}

function init() {
  let recipe = {
    description: 'yummy chicken noodle soup',
    ingredients: [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "3 nanoliters", name: 'stock'},
      {quantity: "12", name: 'noodles'}
    ]
  }

  let template = document.getElementById("my-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let html = templateFn(recipe);
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
