(function (global) {
    'use strict';

    global.store = global.store || {};

    const custom = document.createElement('custom');

    const colorScale = d3.scaleLinear()
        .domain(d3.extent(window.store.data, d => d.value))
        .interpolate(d3.interpolateRgb)
        .range(['white', 'black']);

    const update = d3.select(custom)
        .selectAll('custom.rect')
        .data(global.store.data);

    const enter = update
        .enter()
        .append('custom')
        .attr('class', 'rect')
        .attr('x', (d, i) => {
            const x0 = Math.floor(i / 100) % 10,
                x1 = Math.floor(i % 10);

            return global.store.GROUP_SPACING * x0 +
                (global.store.CELL_SPACING + global.store.CELL_SIZE) *
                (x1 + x0 * 10);
        })
        .attr('y', (d, i) => {
            const y0 = Math.floor(i / 1000),
                y1 = Math.floor(i % 100 / 10);

            return global.store.GROUP_SPACING * y0 +
                (global.store.CELL_SPACING + global.store.CELL_SIZE) *
                (y1 + y0 * 10);
        })
        .attr('width', 0)
        .attr('height', 0);

        update
            .merge(enter)
            .transition()
            .attr('width', global.store.CELL_SIZE)
            .attr('height', global.store.CELL_SIZE)
            .attr('fillStyle', d => colorScale(d.value))

        update.exit()
            .transition()
            .attr('width', 0)
            .attr('height', 0)
            .remove();

})(window);