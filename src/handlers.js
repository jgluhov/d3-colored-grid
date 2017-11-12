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

    const hide = () => {
        tooltip.classed('hidden', true);
    };

    const show = () => {
        tooltip.classed('hidden', false);
    }

    d3.select('canvas').on('mouseleave', function () {
        tooltip.classed('hidden', true);
    });

    d3.select('#container > canvas').on('mousemove', function () {
        const elements = global.store.custom
            .selectAll('custom.rect');

        const { offsetX, offsetY }  = d3.event;

        console.log(+global.store.custom.attr('max-height'));
        console.log(offsetY)

        if (offsetX > +global.store.custom.attr('max-width') ||
            offsetY > +global.store.custom.attr('max-height')) {
            hide();
        }

        tooltip
            .style('transform', `translate(${offsetX + 10}px, ${offsetY + 15}px)`)
            .text();

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

        found.each(function() {
            const node = d3.select(this);

            tooltip.text(node.attr('fillStyle'));
            show();
        });
    });

})(window);