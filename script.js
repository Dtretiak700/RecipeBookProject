gsap.to('.main-container', {
    opacity: 1,
    duration: 2
})

const inputField = document.querySelector('.field');
const button = document.querySelector('#submit');
const recipesContainer = document.querySelectorAll('.recipe');


inputField.addEventListener('keyup', (event) => {
    const word = event.target.value.toLowerCase();
    button.addEventListener('click', () => {
        gsap.fromTo('.recipe', {
            opacity: 0
        }, {
            opacity: 1,
            stagger: .3
        })
        if (inputField.value.length === 0) {
            return false;
        }    
        recipesContainer.forEach(item => {
            item.querySelector('ul').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none' );
        })
    })
})

