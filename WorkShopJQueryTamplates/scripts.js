
$.fn.gallery = function (collumns) {
        // your solution here
        var $cols = +collumns || 4;
        var $gallery = $(this);
        $gallery.addClass('gallery');

        var $galeryList = $('.gallery-list');
        var $imageContainers = $galeryList.find('.image-container');
        var $selectedContainer = $('.selected');
        var $midleImage = $selectedContainer.find('#current-image');
        var $previousImage = $selectedContainer.find('#previous-image');
        var $nextImage = $selectedContainer.find('#next-image');
        var $disabledDiv = $('<div />');
        $disabledDiv.appendTo($gallery);
        $disabledDiv.addClass('gallery');
        $selectedContainer.hide();

    $imageContainers.each(function (index, element) {
        if (index % $cols === 0) {
            var $element = $(element);
            $element.addClass('clearfix');
        }
    });

    $imageContainers.on('click',function(){

        var $clicked=$(this);
        var len=$imageContainers.length;

        var currPictureIndex=$clicked.find('img').data('info');
        var prevPictureIndex =currPictureIndex - 1;
        if(prevPictureIndex===0){
            prevPictureIndex=len;
        }
        var nextPictureIndex = currPictureIndex+1;
        if(nextPictureIndex>len){
            nextPictureIndex=1;
        }


        var currPictureSrc=$clicked.find('img[data-info="'+currPictureIndex+'"]').attr('src');
        var prevPictureSrc=$galeryList.find('img[data-info="'+prevPictureIndex+'"]').attr('src');
        var nextPictureSrc=$galeryList.find('img[data-info="'+nextPictureIndex+'"]').attr('src');

        $midleImage.attr('src',currPictureSrc);
        $previousImage.attr('src',prevPictureSrc);
        $nextImage.attr('src',nextPictureSrc);

        $selectedContainer.show();
        $galeryList.addClass('blurred');
        $disabledDiv.addClass('disabled-background');

        $previousImage.on('click',function(){
             currPictureIndex-=1;
            if(currPictureIndex===0){
                currPictureIndex=len;
            }
            prevPictureIndex =currPictureIndex - 1;
            if(prevPictureIndex===0){
                prevPictureIndex=len;
            }
            nextPictureIndex = currPictureIndex+1;
            if(nextPictureIndex>len){
                nextPictureIndex=1;
            }
             currPictureSrc=$galeryList.find('img[data-info="'+currPictureIndex+'"]').attr('src');
             prevPictureSrc=$galeryList.find('img[data-info="'+prevPictureIndex+'"]').attr('src');
             nextPictureSrc=$galeryList.find('img[data-info="'+nextPictureIndex+'"]').attr('src');

            $midleImage.attr('src',currPictureSrc);
            $previousImage.attr('src',prevPictureSrc);
            $nextImage.attr('src',nextPictureSrc);

        })

        $nextImage.on('click',function(){
            currPictureIndex+=1;
            if(currPictureIndex>len){
                currPictureIndex=1;
            }
             prevPictureIndex =currPictureIndex - 1;
            if(prevPictureIndex===0){
                prevPictureIndex=len;
            }
             nextPictureIndex = currPictureIndex+1;
            if(nextPictureIndex>len){
                nextPictureIndex=1;
            }
            currPictureSrc=$galeryList.find('img[data-info="'+currPictureIndex+'"]').attr('src');
            prevPictureSrc=$galeryList.find('img[data-info="'+prevPictureIndex+'"]').attr('src');
            nextPictureSrc=$galeryList.find('img[data-info="'+nextPictureIndex+'"]').attr('src');

            $midleImage.attr('src',currPictureSrc);
            $previousImage.attr('src',prevPictureSrc);
            $nextImage.attr('src',nextPictureSrc);

        })

    });

    $midleImage.on('click', function () {
        $selectedContainer.hide();
        $galeryList.removeClass('blurred');
        $disabledDiv.removeClass('disabled-background');
    })

       return this;
    };


