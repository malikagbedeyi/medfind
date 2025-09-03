const tabs = document.querySelectorAll('.toggle_switch_img');
const trangle = document.querySelectorAll('.toggle_switch_triangle');
const all_content = document.querySelectorAll('.content_body');
const responsive_switch = document.querySelectorAll('.content_responsive_Container');
const iconDisplays = document.querySelectorAll('.header_icons_display');
const boxes = document.querySelectorAll('.box_display');

tabs.forEach((tab,index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => {tab.classList.remove('active')});
        tab.classList.add('active');

        trangle.forEach(trangles => {trangles.classList.remove('active')});
        trangle[index].classList.add('active');

        all_content.forEach(content => {content.classList.remove('active')});
        all_content[index].classList.add('active');

        responsive_switch.forEach(responsive_switchs => {responsive_switchs.classList.remove('active')});
        responsive_switch[index].classList.add('active');
    }) 

});
iconDisplays.forEach((iconDisplay, index) => {
    iconDisplay.addEventListener('click', (e) => {
        // Remove 'active' class from all icons and add to the clicked one
        iconDisplays.forEach(icon => icon.classList.remove('active'));
        iconDisplay.classList.add('active');
        // Remove 'active' class from all boxes and add to the corresponding one
        boxes.forEach(box => box.classList.remove('active'));
        boxes[index].classList.add('active');

    });
})
/////////////// LEFT TEXT  SWIPER SCRIPT \\\\\\\\\\\\\\\\\\\
document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.mySwiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.fa-greater-than',
            prevEl: '.fa-less-than',
        },
        autoplay: {
            delay: 10000, // 10 seconds
            disableOnInteraction: false, // Autoplay will not be disabled after interactions
        },
    });
});
/////////////// ROW SWIPER SCRIPT \\\\\\\\\\\\\\\\\\\
  document.addEventListener("DOMContentLoaded", function () {
    const swiperWrapper = document.getElementById('swiper-wrapper');
    const items = [
        'Image/06.png', 'Image/07.png', 'Image/08.png', 'Image/09.png', 'Image/10.png', 'Image/11.png',
        'Image/12.png', 'Image/13.png', 'Image/14.png', 'Image/15.png', 'Image/16.png', 'Image/17.png',
        'Image/18.png', 'Image/19.png', 'Image/20.png', 'Image/21.png', 'Image/22.png', 'Image/23.png'
    ];
     const colsPerPage = 6;

    for (let i = 0; i < items.length; i++) {
        if (i % colsPerPage === 0) {
            const swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide', 'row');
            swiperWrapper.appendChild(swiperSlide);
        }
        const currentSlide = swiperWrapper.lastChild;
        const col = document.createElement('div');
        col.classList.add('mainPaginateParent', 'col-md-4', 'col-sm-6', 'col-12');
        col.innerHTML = `
            <div class="mainPaginateChild">
                <a href="">
                    <img src="${items[i]}" alt="">
                </a>
            </div>
        `;
        currentSlide.appendChild(col);
    }

    const swiper = new Swiper('.swiper-container', {
         slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.fa-greater-than',
            prevEl: '.fa-less-than',
        },
    });
});

/////////////// CENTER SWIPER SCRIPT \\\\\\\\\\\\\\\\\\\
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.main_down_middle_card');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    leftArrow.addEventListener('click', function () {
        container.scrollBy({
            left: -300, // Adjust the value to scroll the desired amount
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function () {
        container.scrollBy({
            left: 300, // Adjust the value to scroll the desired amount
            behavior: 'smooth'
        });
    });
});