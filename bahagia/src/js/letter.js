var heartClicked = 0;
$('.js-open-envelope').on('click', function (event) {
    event.preventDefault();
    var $self = $(this);
    heartClicked = heartClicked + 1;
    $self.find('.envelope').removeClass('tossing').addClass('open');
    $self.find('.envelope__card').addClass('open');
});