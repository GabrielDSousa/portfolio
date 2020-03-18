$(document).ready(function () {
    $('.carousel').carousel();
});

$('.collapsible').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function (el) { }, // Callback for Collapsible open
    onClose: function (el) { } // Callback for Collapsible close
});