/**
 * Created by IliyanGogov on 7/29/2016.
 */
function solve() {
    return function (selector) {


        if (typeof selector !== 'string') {
            throw new Error('Invalid selector');
        }

        var $element = $(selector);
        if(!$element.length){
            throw new Error();
        }

        var $buttons = $element.find('.button');

        $buttons.html('hide');

        function handler() {
            var $button = $(this),
                $content = $button.next();


            while(!($content.hasClass('content'))) {
                if ($content.hasClass('button')) {
                    break;
                }
                $content = $content.next();
            }

            if ($content.hasClass('button')) {
                return;
            }

            if ($content.css('display') === 'none') {
                $content.css('display', '');
                $button.html('hide');
            } else {
                $content.css('display', 'none');
                $button.html('show');
            }
        }

        $element.on('click', '.button', handler);
    };
};

