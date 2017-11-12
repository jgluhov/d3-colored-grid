(function (global) {
    'use strict';

    window.store.position = function (groupIndex, cellIndex) {
        return global.store.GROUP_SPACING * groupIndex +
        (global.store.CELL_SPACING + global.store.CELL_SIZE) *
        (cellIndex + groupIndex * global.store.GROUP_SIZE);
    };

})(window);

