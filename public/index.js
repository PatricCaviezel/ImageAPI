let select = () => {
    let selected = document.getElementById("charts").value;
    if (selected == "-") return;
    window.location = window.location + selected;
}

let check = () => {
    let data = {}
    let values = {};
    data.type = (window.location.toString()).split("/").pop()+"chart";
    let div = document.getElementById("data");
    let elements = div.querySelectorAll("input");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value == "") return;
        if (elements[i].value.includes(",")) {
            values[elements[i].id] = elements[i].value.split(",");
            for (let j = 0; j < values[elements[i].id].length; j++) {
                if (!isNaN(parseInt(values[elements[i].id]))) {
                values[elements[i].id][j] = parseInt(values[elements[i].id][j])
            } else {
                values[elements[i].id][j] = values[elements[i].id][j];
            }
            }
            continue;
        }
        if (!isNaN(parseInt(elements[i].value))) {
            values[elements[i].id] = parseInt(elements[i].value)
        } else {
            values[elements[i].id] = elements[i].value;
        }
    }
    data.values = values;
    console.log(data.values);
    console.log(data.type);
    fetch('http://localhost:3000/image', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    });
}