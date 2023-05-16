let select = () => {
    let selected = document.getElementById("charts").value;
    if (selected == "-") return;
    window.location = window.location + selected;
}

let getData = () => {
    let div = document.getElementById("data");
    let elements = div.querySelectorAll("input");
    return elements;
}

let createDiagram = async (data) => {
    let returnData = await fetch('http://localhost:3000/image', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    });
    returnData = await returnData.json()
    return returnData;
}

let writeBuffer = async (returnData) => {
    let json = {
        "name": document.getElementById("title").value,
        "timestamp": new Date,
        "buffer": returnData.src
    }
    await fetch('http://localhost:3000/write', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json)
    });
}

let check = async () => {
    let values = {};
    let data = {};
    let elements = getData();
    data.type = (window.location.toString()).split("/").pop() + "chart";
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
    let returnData = await createDiagram(data);
    let diagram = document.getElementById('diagram');
    diagram.src = returnData.src;
    await writeBuffer(returnData);
}