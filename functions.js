const R = require('r-integration');

exports.chart = (type, data) => {
    R.callMethod('./charts.r', type, {
        x: data.x,
        title: data.title,
        xtitle: data.xtitle,
        ytitle: data.ytitle,
        color: data.color
    });
}