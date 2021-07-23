$(document).ready(function () {
    $("body").on('click', '.item-active',  function() {
        idItem = this.id;
        if(idItem){
            if ($('#' + idItem).hasClass('open')) {
                $('#' + idItem).removeClass('open');
            } else {
                $('#' + idItem).addClass('open');
            }
        }
    });
});
