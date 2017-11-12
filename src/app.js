(function (global, doc) {
    'use strict';

    doc.addEventListener('DOMContentLoaded', function () {
        global.store.bind();
        global.store.draw();
    });

})(window, document);