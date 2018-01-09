var template = Handlebars.compile(document.querySelector('#template').innerHTML);

function makeUI(data) {

    document.querySelector('#wrap').innerHTML = template(data);

}



makeUI(recipes);
