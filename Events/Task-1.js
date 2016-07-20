function solve(){
     function solution(selector) {
        var element;

        if (typeof(selector) === 'string') {
            element = document.getElementById(selector);
            if (!element) {
                throw new Error('No element with such id!');
            }
        } else if (!(selector instanceof HTMLElement)) {
            throw new Error('No such element found in document!');
        } else {
            element = selector;
        }

        var buttons = element.querySelectorAll('.button');

        element.addEventListener('click', eventHandler);

        var i,
            len = buttons.length;

        for (i = 0; i < len; i+= 1) {
            buttons[i].innerHTML = 'hide';
        }

        function eventHandler(ev) {
            var button = ev.target;
            var element = button.nextElementSibling;
            while(element.className.indexOf('content') < 0) {
                if (element.className.indexOf('button') >= 0) {
                    break;
                }
                element = element.nextElementSibling;
            }

            if (element.className.indexOf('button') >= 0) {
                return;
            }
            if (element.style.display === 'none') {
                button.innerHTML = 'hide';
                element.style.display = '';
            } else {
                button.innerHTML = 'show';
                element.style.display = 'none';
            }
        }
    };
    return solution;
}
