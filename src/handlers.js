(function (global) {
    'use strict';

    d3.select('#text-input').on('change', function () {
        if (isNaN(+this.value)) {
            return;
        }

        const count = +this.value;

        global.store.render(d3.range(count));
    });

    const tooltip = d3.select('#tooltip');

    d3.select('canvas').on('mouseleave', function () {
        // tooltip.classed('hidden', true);
        console.log('mouseleave')
    });

    d3.select('#container > canvas').on('mousemove', function () {
        const elements = global.store.custom
            .selectAll('custom.rect');

        let { offsetX, offsetY }  = d3.event;

        tooltip
            .style('transform', `translate(${offsetX + 10}px, ${offsetY + 15}px)`);

        const isContained = function(x, y) {
            return (x <= offsetX && offsetX <= x + global.store.CELL_SIZE &&
                y <= offsetY && offsetY <= y + global.store.CELL_SIZE);
        };

        const found = elements.filter(function() {
            const node = d3.select(this);

            const x = +node.attr('x'),
                y = +node.attr('y');

            return isContained(x, y);
        });

        found.each(() => {
            if (tooltip.classed('hidden')) {
                tooltip.classed('hidden', false);
            }
        });

    });

})(window);