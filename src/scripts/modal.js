const modalTriggers = document.querySelectorAll('.popup-trigger');
const modalClose = document.querySelector('.popup-modal__close');
const bodyBlackout = document.querySelector('.body-blackout');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const { popupTrigger } = trigger.dataset
        const popupModal = document.querySelector(`[data-popup-modal="one"]`)
        
        console.log("popupModal", popupModal);

        popupModal.classList.add('is--visible')
        bodyBlackout.classList.add('is-blacked-out')

        popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
            popupModal.classList.remove('is--visible')
            bodyBlackout.classList.remove('is-blacked-out')
        })

        bodyBlackout.addEventListener('click', () => {
            popupModal.classList.remove('is--visible')
            bodyBlackout.classList.remove('is-blacked-out')
        })
    })
})