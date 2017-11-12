(function (global) {
    'use strict';

    global.store = global.store || {};

    const data = [];

    d3.range(5000).forEach(value => data.push({value}));

    window.store.data = data;
})(window);