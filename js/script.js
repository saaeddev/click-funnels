$(document).ready(function () {
    $('footer .links span').click(function () {
        let targeted = $(this).attr('data-target');
        $('footer .links span').each(function () {
            $(this).removeClass('active');
        })
        $('footer .wanted div').each(function () {
            $(this).css('display', 'none');
            $(this).css('margin', '0');
        })
        $(this).addClass('active');
        $("#" + targeted).css('display', 'block');
        $("#" + targeted).css('margin', '10px');
    })

    // spinner
    $(".spinner").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });
})