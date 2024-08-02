$(document).ready(function(){
    $('#movingText').hover(
        function() {
            $(this).find('p').addClass('paused');
        },
        function() {
            $(this).find('p').removeClass('paused');
        }
    );
});