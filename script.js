document.querySelectorAll('.number').forEach(number => {
    const defaultImg = number.getAttribute('data-default');
    const hoverImg = number.getAttribute('data-hover');
    const img = number.querySelector('img');

    number.addEventListener('mouseenter', function() {
        img.style.transform = 'rotateY(360deg)';
        setTimeout(() => {
            img.src = hoverImg;
        }, 300); // Wait for half the transition to swap the image
    });

    number.addEventListener('mouseleave', function() {
        img.style.transform = 'rotateY(0deg)';
        setTimeout(() => {
            img.src = defaultImg;
        }, 300); // Wait for half the transition to swap back the image
    });
});
