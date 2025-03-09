let prevButton = document.getElementById('prev')
let nextButon = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0 
let firstPosition = 0 
let lastPosition = items.length -1 

function setslider(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

nextButon.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1 
    setslider()
    items[active].classList.add('active')


}

prevButton.onclick = () => {
    list.style.setProperty('--calculation',-1)
    active = active -1 < firstPosition ? lastPosition : active -1 
    setslider()
    items[active].classList.add('active')

  
}

const cardLinks = {
    Lamborghini: "https://fpsellection.com.br/selecao-de-carros/",
    Porsche: "https://fpsellection.com.br/?jsf=jet-engine&tax=marca:4;modelo:40",
    Ferrari: "https://fpsellection.com.br/selecao-de-carros/"
};

document.querySelectorAll('.information').forEach(button => {
    button.addEventListener('click', () => {
        const cardId = button.id;
        const url = cardLinks[cardId];
        if (url) {
            window.open(url, '_blank'); 
        } else {
            console.error(`nenhum link encontratrado: ${cardId}`);
        }
    });
});