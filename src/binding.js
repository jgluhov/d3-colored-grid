(function (global) {
    'use strict';

    global.store = global.store || {};

    const colorScale = d3.scaleLinear()
        .domain( d3.extent(window.store.data, d => d.value))
        .interpolate(d3.interpolateRgb)
        .range(['white', 'black']);

})(window);