(function (global, doc) {
    'use strict';

    global.store.render = (data) => {
        global.store.bind(data);

        const t = d3.timer((timestamp) => {
            global.store.draw();

            if (timestamp > 2000) {
                t.stop();
            }
        });
    };

    doc.addEventListener('DOMContentLoaded', function () {
        global.store.render(global.store.data);
    });

})(window, document);