function unselectGifts() {
    for (var i = 1; i < 11; i++) {
        var deSelectNumber = "#deselect" + i;
        $(deSelectNumber).css({ 'display': "none" });
    }
};

$(document).ready(function() {
    $('li').click(function() {
        index = $(this).index();
        $(':radio').eq(index).prop('checked', true);
    });
});

$(document).on("click", "#gift-list li", function(e) {
    e.preventDefault();
    $('#gift-list li').removeClass("active");
    $(this).addClass('active');
    $('#error').css({ 'display': "none" });
});

$(document).on("click", "#gift-list li", function(e) {
    $('.active[id]').each(function() {
        var item = document.getElementById(this.id);
        e.preventDefault();
        for (var i = 1; i < 11; i++) {
            var gift = "item" + i;
            var selectNumber = "#select" + i;
            var deSelectNumber = "#deselect" + i;
            if (this.id === gift) {
                $('.active p[id]').each(function() {
                    var select = document.getElementById(this.id);
                    $(deSelectNumber).css({ 'display': "block" });
                    $(selectNumber).css({ 'display': "none" });
                });
            } else {
                $('.active p[id]').each(function() {
                    var select = document.getElementById(this.id);
                    $(deSelectNumber).css({ 'display': "none" });
                    $(selectNumber).css({ 'display': "block" });
                });
            }
        }
    });
});

function validateGiftAndTerms() {
    // if ($("input[name='interested_event']:checked").length > 0) {
    //     // one ore more checkboxes are checked
    // } else {
    //     $("#error").html("<b>ERROR: Please accept our terms.</b>");
    // }
    if ($("input[name='Gift']:checked").length > 0) {
        // one ore more checkboxes are checked
    } else {
        $("#error").html("<b>Please choose a gift (<a href='#gifts'>click here</a>).</b>");
    }
};