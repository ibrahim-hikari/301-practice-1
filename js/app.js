`use strict`;

$('.list')

function Info(data) {
    this.name = data.name;
    this.age = data.age;
}

Info.prototype.render = function () {

    let templateMarkup = $('#people-template').html();
    let template = Handlebars.compile(templateMarkup);
    let onePreson = template(this);
    $('.names').append(onePreson);
}

$(document).ready(function () {

    $.getJSON("../data/a.json", function (data) {
        $.each(data, function (key, value) {
            let onePreson = new Info(value)
            onePreson.render();
        });
    });

});