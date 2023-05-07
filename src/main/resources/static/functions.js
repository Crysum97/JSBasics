function onOkClick() {
    let list = document.getElementById("list");
    let textfield = document.getElementById("textfield");
    list.innerHTML += "<li class=\"mdl-list__item\">\n" +
        "    <span class=\"mdl-list__item-primary-content\">\n" +
        "      <i class=\"material-icons  mdl-list__item-avatar\">person</i>\n" +
        textfield.value +
        "    </span>\n" +
        "    <span class=\"mdl-list__item-secondary-action\">\n" +
        "      <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"list-checkbox-1\">\n" +
        "        <input type=\"checkbox\" id=\"list-checkbox-1\" class=\"mdl-checkbox__input\" />\n" +
        "      </label>\n" +
        "    </span>\n" +
        "  </li>"
}