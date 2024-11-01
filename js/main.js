$(function () {
    function nextStep() {
        $('.step:visible').hide().next().fadeIn();
    }

    $('.js-next').on('click', function (e) {
        e.preventDefault();
        nextStep();

        if ($('.step:visible').hasClass('step-loader')) {
            setTimeout(() => {
                nextStep();
            }, 2500);
        }
    });
});