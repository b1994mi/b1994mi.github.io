window.addEventListener('load',function(){
    new Glider(document.querySelector('#glider0'), {
        slidesToShow: 'auto',
        draggable: false,
        scrollLock: true,
        dots: '#dots',
        rewind: true,
        arrows: {
            prev: '#glider-prev',
            next: '#glider-next'
        },
        responsive: [
            {
                breakpoint: 300,
                settings: {slidesToShow: 1, draggable: true,}
            },
            {
                breakpoint: 600,
                settings: {slidesToShow: 2, draggable: true,}
            },
            {
                breakpoint: 993,
                settings: {slidesToShow: 3}
            },
        ]
    });

    new Glider(document.querySelector('#glider1'), {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: false,
        scrollLock: true,
        dots: '#dots1',
        rewind: true,
        arrows: {
            prev: '#glider-prev1',
            next: '#glider-next1'
        },
        responsive: [
            {
                breakpoint: 300,
                settings: {slidesToShow: 1, slidesToScroll: 1, draggable: true,}
            },
            {
                breakpoint: 600,
                settings: {slidesToShow: 2, draggable: true,}
            },
        ]
    });
});