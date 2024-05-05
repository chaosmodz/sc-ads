document.addEventListener('DOMContentLoaded', function () {
    const numberOfIcons = 13;
    const backgroundImages = [
        'sc_ads_logo.png',
        'sc_logo.png',
        'rsg_logo.gif',
        'scads_icon1.png',
        'scads_icon2.png',
        'scads_icon3.png',
        'scads_icon4.png',
        'scads_icon5.png',
        'scads_icon6.png',
        'scads_icon7.png',
        'scads_icon8.png',
        'scads_icon9.png',
        'scads_icon10.png'
    ];

    function randomPositionWithinViewport() {
        const randX = Math.random() * window.innerWidth;
        const randY = Math.random() * window.innerHeight;
        return { x: randX, y: randY };
    }

    function randomSize() {
        const minSize = 50;
        const maxSize = 350;
        return Math.random() * (maxSize - minSize) + minSize;
    }

    function animateIcon(icon) {
        const initialSize = 0;
        const maxSize = randomSize();
        const duration = 2000 + Math.random() * 4000;
        const startDelay = Math.random() * 10000;

        icon.style.width = initialSize + 'px';
        icon.style.height = initialSize + 'px';
        icon.style.opacity = 0;

        setTimeout(() => {
            icon.style.transition = `width ${duration}ms ease-in-out, height ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`;
            icon.style.width = maxSize + 'px';
            icon.style.height = maxSize + 'px';
            icon.style.opacity = 0.5;

            setTimeout(() => {
                icon.style.width = initialSize + 'px';
                icon.style.height = initialSize + 'px';
                icon.style.opacity = 0;

                setTimeout(() => {
                    animateIcon(icon);
                }, Math.random() * 5000);
            }, duration);
        }, startDelay);
    }

    const background = document.querySelector('.background');

    for (let i = 0; i < numberOfIcons; i++) {
        const icon = document.createElement('div');
        icon.classList.add('icon');
        const randomIconImage = 'images/' + backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
        icon.style.backgroundImage = `url(${randomIconImage})`;
        if (icon.style.backgroundImage == 'sc_logo.png') {
            icon.style.width *= 4;
            icon.style.height *= 4;
        }

        const hueOffset = Math.floor(Math.random() * 360);
        icon.style.filter = `hue-rotate(${hueOffset}deg)`;

        const pos = randomPositionWithinViewport();
        icon.style.left = pos.x + 'px';
        icon.style.top = pos.y + 'px';
        background.appendChild(icon);
        animateIcon(icon);
    }
});