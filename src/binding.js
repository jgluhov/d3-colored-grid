(function (global) {
    'use strict';

    global.store = global.store || {};

    global.store.custom = d3.select(document.createElement('custom'));

    window.store.bind = function (data) {
        const colorScale = d3.scaleSequential(d3.interpolateSpectral)
            .domain(d3.extent(data, d => d));

        const update = global.store.custom
            .selectAll('custom.rect')
            .data(data);

        update
            .exit()
            .transition()
            .duration(1000)
            .attr('globalAlpha', 0)
            .remove();


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
            .attr('width', global.store.CELL_SIZE)
            .attr('height', global.store.CELL_SIZE)
            .attr('globalAlpha', 0);

        update
            .merge(enter)
            .transition()
            .duration(1000)
            .attr('globalAlpha', 1)
            .attr('fillStyle', d =>  colorScale(d))
    }

})(window);