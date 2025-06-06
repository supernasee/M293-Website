window.addEventListener('load', async () => {
    const loader = document.querySelector('.loader');

    await new Promise(r => setTimeout(r, 700));
    loader.classList.add('loader-hidden');

    loader.addEventListener("transitionend", () => {
        loader.remove();
    });
});
