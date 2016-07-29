/**
 * Created by IliyanGogov on 7/29/2016.
 */
function solve() {
    return function (selector, count) {

        var $element;
        if (typeof selector !== 'string') {
            throw new Error('Invalid selector!');
        }

        $element = $(selector);
        if (!$element) {
            return;
        }

        var $ul = $('<ul />').addClass('items-list'),
            i;

        if (!count || isNaN(count) || count < 1) {
            throw new Error('Invalid COUNT!');
        }

        for (i = 0; i < count; i+= 1) {
            var $li = $('<li />');

            $li.html('List item #' + i).addClass('list-item').appendTo($ul);
        }

        $element.html($ul);

    };
}
