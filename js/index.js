$(document).ready(function(){
    $('.mbars').click(function(){
        $(this).toggleClass('open');
        if($('header .menu li').is( ':hidden' ) ) {
            $('header .menu li').show();   
        }else{
            $('header .menu li').hide();
        };
    });
});

var buts = document.getElementsByClassName("showimg");
var images = document.getElementsByClassName("cars");

for(var i = 0; i<buts.length; i++){
    buts[i].onclick = function(){
        this.classList.toggle("hideimg");
        this.nextElementSibling.classList.toggle("mostrar");
    }
}