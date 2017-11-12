(function (global) {
    'use strict';

    d3.select('#text-input').on('change', function () {
        if (isNaN(+this.value)) {
            return;
        }

        const count = +this.value;

        global.store.render(d3.range(count));
    });

    d3.select('#container > canvas').on('click', function () {

        const elements = global.store.custom
            .selectAll('custom.rect');

        const { offsetX, offsetY }  = d3.event;

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

        found.each((el) => {
            console.log(global.store.colorScale(el));
        });
    })

})(window);