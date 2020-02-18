$('.js-open-envelope').on('click', function (event) {
    event.preventDefault();
    var $self = $(this);
    $self.find('.envelope').removeClass('tossing').addClass('open');
    $self.find('.envelope__card').addClass('open');
});