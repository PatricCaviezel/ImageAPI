const R = require('r-integration');

exports.chart = (type, data) => {
    R.callMethod('./charts.r', type, data);
}