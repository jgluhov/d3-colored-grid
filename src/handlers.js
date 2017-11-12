(function (global) {
    'use strict';

    d3.select('#text-input').on('change', function () {
        if (isNaN(+this.value)) {
            return;
        }

        const count = +this.value;

        global.store.render(d3.range(count));
    });

})(window);