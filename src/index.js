const balloon = document.querySelector('p');


function inflate(balloon) {
    let fontSize = window.getComputedStyle(balloon).fontSize;
    let [size] = fontSize.split('px');
    size = Number(size) + 5;
    
    if (size > 600) {
        balloon.textContent = "💥";
    } else {
        balloon.style.fontSize = `${size}px`;
    }
    return size;
}



window.addEventListener('keydown', event => {
    console.log(inflate(balloon));
})