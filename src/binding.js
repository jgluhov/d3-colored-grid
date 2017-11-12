(function (global) {
    'use strict';

    global.store = global.store || {};

    global.store.custom = d3.select(document.createElement('custom'));

    global.store.bind = function (data) {
        this.colorScale = d3.scaleSequential(d3.interpolateSpectral)
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
                const groupIndex = Math.floor(i / 100) % 10,
                    cellIndex = Math.floor(i % global.store.GROUP_SIZE);

                return global.store.position(groupIndex, cellIndex);
            })
            .attr('y', (d, i) => {
                const groupIndex = Math.floor(i / 1000),
                    cellIndex = Math.floor(i % 100 / global.store.GROUP_SIZE);

                return global.store.position(groupIndex, cellIndex);
            })
            .attr('width', global.store.CELL_SIZE)
            .attr('height', global.store.CELL_SIZE)
            .attr('globalAlpha', 0);

        update
            .merge(enter)
            .transition()
            .duration(1000)
            .attr('globalAlpha', 1)
            .attr('fillStyle', d =>  this.colorScale(d));

        global.store.custom
            .attr('max-width', () => global.store.position(9, 9))
            .attr('max-height', () => {
                const groupIndex = Math.floor(data[data.length - 1] / 1000);
                return global.store.position(groupIndex, 9);
            });
    }

})(window);