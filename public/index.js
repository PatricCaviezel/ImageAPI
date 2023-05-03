let select = () => {
    let selected = document.getElementById("charts").value;
    if (selected == "-") return;
    window.location = window.location + selected;
}

let check = () => {
    let data = {}
    let values = {};
    data.type = (window.location.toString()).split("/").pop();
    let div = document.getElementById("data");
    let elements = div.querySelectorAll("input");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value == "") return;
        values[elements[i].id] = elements[i].value;
    }
    data.values = values;
    console.log(data);
}