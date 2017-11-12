(function (global) {
    'use strict';

    const canvas = d3
        .select('#container')
        .append('canvas')
            .attr('width', global.store.WIDTH)
            .attr('height', global.store.HEIGHT);

    window.store.context = canvas.node().getContext('2d');

})(window);