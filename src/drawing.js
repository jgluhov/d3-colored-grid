(function (global) {
    'use strict';

    global.store = global.store || {};

    const context = global.store.context;

    window.store.draw = function () {
        context.clearRect(0, 0, global.store.WIDTH, global.store.HEIGHT);

        const elements = global.store.custom.selectAll('custom.rect');

        elements.each(function() {
            const node = d3.select(this);

            context.beginPath();

            context.fillStyle = node.attr('fillStyle');
            context.fillRect(
                node.attr('x'),
                node.attr('y'),
                node.attr('width'),
                node.attr('height')
            );

            context.closePath();
        });
    }
})(window);