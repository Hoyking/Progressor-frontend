$(function() {
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                950:{
                    items: 2
                },
                1280: {
                    items: 3
                },
                1600: {
                    items: 4
                }
            }
        });
    });
})

