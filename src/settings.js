(function (global) {
    'use strict';

    global.store = global.store || {};

    global.store.COUNT = 5000;

    global.store.WIDTH = 800;
    global.store.HEIGHT = 600;

    global.store.GROUP_SIZE = 10;
    global.store.GROUP_SPACING = 3;
    global.store.CELL_SPACING = 1;
    global.store.CELL_SIZE = Math.floor((global.store.WIDTH - 11 * global.store.GROUP_SPACING) / 100) - global.store.CELL_SPACING;

    console.log(global.store.CELL_SIZE )

})(window);