(function (global) {
    'use strict';

    global.store = global.store || {};

    global.store.WIDTH = 640;
    global.store.HEIGHT = 480;
    global.store.GROUP_SPACING = 4;
    global.store.CELL_SPACING = 2;
    global.store.OFFSET_TOP = 50;
    global.store.CELL_SIZE = Math.floor((global.store.WIDTH - 11 * global.store.GROUP_SPACING) / 100) - global.store.CELL_SPACING;

})(window);