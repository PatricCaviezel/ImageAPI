const R = require('r-integration');

exports.bar = (functionName, data) => {
    R.callMethod('./charts.r', functionName, {
        x: data.x,
        title: data.title,
        xtitle: data.xtitle,
        ytitle: data.ytitle,
        color: data.color
    });
}

exports.line = (functionName, data) => {
    R.callMethod('./charts.r', functionName, {
        x: data.x,
        y: data.y,
        title: data.title,
        xtitle: data.xtitle,
        ytitle: data.ytitle,
        color: data.color
    });
}

exports.pie = (functionName, data) => {
    console.log(data.slices);
    R.callMethod('./charts,r', functionName, {
        x: data.x,
        title: data.title,
        color: data.color
    });
}