const links = document.querySelectorAll('.link');
const cards = document.querySelectorAll('.cards');
console.log(cards);

fetch("data.json").then((response) => response.json())
.then((data) => {
    cards.forEach((card, index) => {
        const cardTitle = card.querySelector('.card_title');
        const current = card.querySelector('.hours_completed');
        const previous = card.querySelector('.last_week');

        cardTitle.textContent = data[index].title;
        current.textContent = data[index].timeframes.weekly.current + 'hrs';
        previous.textContent = 'Last Week - ' + data[index].timeframes.weekly.previous + 'hrs';


    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const timeframe = link.getAttribute('data-timeframe');
            current.textContent = data[index].timeframes[timeframe].current + 'hrs';
            const reducedName = timeframe.replace(/ly$/i, "");
            const goodName = reducedName.replace(/i/i, "y");
            previous.textContent = 'Last ' + goodName + ' - ' + data[index].timeframes[timeframe].previous + 'hrs';
            links.forEach((link) => link.classList.remove('activated'));
            link.classList.add('activated');

         })
    })
    })
})
.catch((error) => console.log(error));


