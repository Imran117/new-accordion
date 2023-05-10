const accordionHead = document.querySelectorAll('.wrapper__block-head'),
    accordionBody = document.querySelectorAll('.wrapper__block-body');

accordionHead.forEach((el, i) => {
    el.addEventListener('click', function () {
        this.classList.toggle('active')
        openOrClose(this, i)
    })
})

function openOrClose(el, elIndex) {
    let parent = el.closest('.wrapper__block-item'),
        parentEl = parent.querySelector('.wrapper__block-body');

    parentEl.classList.toggle('is-open')
    clearClass(elIndex)
}

function clearClass(index) {
    accordionBody.forEach((el,i) => {
        if(i !== index) {
            el.classList.remove('is-open')
            accordionHead[i].classList.remove('active')
        }
    })
}