const R = require('r-integration');

exports.chart = (functionName, data) => {
    R.callMethod('./charts.r', functionName, {
        x: data.x,
        title: data.title,
        xtitle: data.xtitle,
        ytitle: data.ytitle,
        color: data.color
    });
}