function solve() {
    return function(selector, isCaseSensitive) {
        isCaseSensitive = !!isCaseSensitive;
        var element=selector;

        if (typeof element === "string") {
            element = document.querySelector(element);
        }
        if (!element || !(element instanceof HTMLElement)) {
            throw new Error("Invalid HTML element or selector");
        }

        var fragment=document.createDocumentFragment();

        // Add section:
        var addDiv=document.createElement('div');
        addDiv.className='add-controls';
        var addDivLabel=document.createElement('label');
        addDivLabel.innerHTML='Enter text';
        var addDivInput=document.createElement('input');
        addDivLabel.appendChild(addDivInput);
        var addDivButton=document.createElement('button');
        addDivButton.className='button';
        addDivButton.innerHTML='Add';
        addDivButton.addEventListener('click',addButtonOnClick,false);
        addDiv.appendChild(addDivLabel);
        addDiv.appendChild(addDivButton);

        //Search section:
        var searchDiv=document.createElement('div');
        searchDiv.className='search-controls';
        var searchDivLabel=document.createElement('label');
        searchDivLabel.innerHTML='Search';
        var searchDivInput=document.createElement('input');
        searchDivInput.addEventListener('input',searchOnInput,false);
        searchDivLabel.appendChild(searchDivInput);
        searchDiv.appendChild(searchDivLabel);

        //Result section:
        var resultDiv=document.createElement('div');
        resultDiv.className='result-controls';
        var ul=document.createElement('ul');
        ul.className='items-list';

        resultDiv.appendChild(ul);



        fragment.appendChild(addDiv);
        fragment.appendChild(searchDiv);
        fragment.appendChild(resultDiv);
        element.appendChild(fragment);
        element.className += "items-control";

        //Functions:
        function addButtonOnClick(){
            var text=addDivInput.value;
            addDivInput.value='';
            var li=document.createElement('li');
            li.className='list-item';
            var liButton=document.createElement('button');
            liButton.className='button';
            liButton.innerHTML='X';
            var liText=document.createElement('strong');
            li.appendChild(liButton);
            li.appendChild(liText);
            ul.appendChild(li);
            liText.innerHTML=text;
            liButton.addEventListener('click',removeOnClick,false);
        }

        function removeOnClick(ev){
            var target=ev.target;
            ul.removeChild(target.parentNode);
        }

        function searchOnInput(){
            var pattern=searchDivInput.value;
            var li=element.getElementsByClassName("list-item");
            var len=li.length;

            if (!isCaseSensitive) {
                pattern = pattern.toLowerCase();
            }

            for(var i=0;i<len;i+=1){
                var content = li[i].getElementsByTagName("strong")[0].innerHTML;

                if (!isCaseSensitive) {
                    content = content.toLowerCase();
                }
                if(content.indexOf(pattern)<0){
                    li[i].style.display='none';
                }else{
                    li[i].style.display='';
                }

            }
        }
    };
}
