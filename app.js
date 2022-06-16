const reviews = [
    {
        id: 1,
        name:"Juan Vignole",
        job: "Trader profesional",
        img: 'img/Juanvignole.webp',
        text: "In excepturi error culpa commodi, illum pariatur est laudantium sed labore nesciunt nulla aperiam, facilis iusto fuga unde quod quaerat soluta illo."
    },
    {
        id: 2,
        name:"Laele Pe",
        job: "Cantautora",
        img: "img/Lae-Lepe.webp",
        text: "Ullam, optio beatae! Nostrum, doloribus labore laudantium qui laboriosam dolorem repellat totam saepe exercitationem voluptates. Ex, voluptatem odio corrupti numquam eum iste"
    },
    {
        id: 3,
        name:"Eldei llapu",
        job: "Doble de riesgo",
        img: "img/Eldei-llapu.webp",
        text: "Maxime nulla reiciendis tempore. Fuga, accusamus officia magni quidem sed aspernatur veniam quibusdam corrupti, aliquam aperiam iusto consequuntur, atque non magnam nisi"
    },
    {
        id: 4,
        name: 'Miaka Lifato',
        job:'Periodista',
        img: 'img/mknb.jpg',
        text: 'Voluptatum hic provident fugiat? Animi odio consequuntur deserunt cumque adipisci aperiam pariatur dolore est quod aspernatur consequatur ipsam et, saepe dolores dolor.'
    }

]
const d = document
const img = d.getElementById('rostro-img')
const autor = d.getElementById('autor')
const profesion = d.getElementById('profesion')
const info = d.getElementById('info')

const prevBtn = d.querySelector('.prevBtn')
const nextBtn = d.querySelector('.nextBtn')
const rdmBtn = d.querySelector('.rdmBtn')

let elemActual = 0

window.addEventListener('DOMContentLoaded',function () {
    const item = reviews[elemActual]
    img.src = item.img
    autor.textContent = item.name
    profesion.textContent = item.job
    info.textContent = item.text
})