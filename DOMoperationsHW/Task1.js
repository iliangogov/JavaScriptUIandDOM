function solve() {
     function solution (element, contents) {

        if (!contents || isNaN(contents.length)) {
            throw new Error('Contents is not a valid object');
        }
        var contsLen = contents.length,
            i,
            frag = document.createDocumentFragment(),
            div = document.createElement('div');

        contents = [].slice.call(contents);

        if (typeof(element) === 'string') {
            element = document.getElementById(element);
            if (!element) {
                throw new Error('No element with the provided id!');
            }
        } else if (!(element instanceof HTMLElement)) {
            throw new Error('Not a valid HTML element!');
        }

        for (i = 0; i < contsLen; i+= 1) {
            var content = contents[i],
                currentDiv = div.cloneNode(true);
            if (typeof(content) !== 'string' && typeof(content) !== 'number') {
                throw new Error('Invalid content!');
            }

            currentDiv.innerHTML = content;
            frag.appendChild(currentDiv);
        };

        element.innerHTML = '';
        element.appendChild(frag);
    };
    return solution;
}