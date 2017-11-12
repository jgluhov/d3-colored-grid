(function (global, doc) {
    'use strict';

    doc.addEventListener('DOMContentLoaded', function () {
        global.store.bind();

        const t = d3.timer((timestamp) => {
            global.store.draw();

            if (timestamp > 1000) {
                t.stop();
            }
        })

    });

})(window, document);