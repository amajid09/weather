const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const place = new FormData(event.target);
    
});