document.addEventListener("DOMContentLoaded", function() {

    var boxTitle = document.querySelectorAll('.hide');


    for (var i = 0; i < boxTitle.length; i++) {

        boxTitle[i].addEventListener('click', function() {
            var imgBoxText = this.nextElementSibling;
            if (imgBoxText.style.visibility === 'hidden') {

                imgBoxText.style.visibility = 'visible';

            } else {

                imgBoxText.style.visibility = 'hidden'
                    // imgBoxText.addEventListener('click', function () {
                    //   imgBoxText.style.visibility === 'initial';
                    // })



                // imgBoxText.style.display = 'none';
            };

            // for (var i = 0; i < imgBoxText.length; i++) {
            //     imgBoxText.classList.toggle('showText');
            // };
        });
    };
});
