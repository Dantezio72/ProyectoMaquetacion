console.log(document.querySelector('title').textContent)

function create() {
    // const btnApi = document.querySelector('#btn_api')
    const champ = document.querySelector('#champ')
    // console.log(btnApi)
    /* const apiData = document.querySelector('#api_data')
    const base_experience = document.querySelector('#base_experience')
    const sprites = document.querySelector('#sprites') */

    /* const callAPI = () => {
        // alert('Llamando API')
        fetch('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json').then(res => res.json()).then(data => {
            console.log(data.data)

            container.innerHTML = JSON.stringify(data.data.Aatrox.name)

            apiData.innerHTML = JSON.stringify(data)
            base_experience.innerHTML = `Experiencia Base: ${JSON.stringify(data.base_experience)}`
            sprites.innerHTML = `Imagen: ${JSON.stringify(data.sprites.front_default)}`
        })
    } */

    fetch('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json').then(res => res.json()).then(data => {
        console.log(data)

        const name = data.data.Aatrox.name
        const blurb = data.data.Aatrox.blurb
        console.log(name, blurb)

        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        // const h3 = document.createElement('h3')
        // const image = document.createElement('img')

        h2.textContent = name
        p.textContent = blurb
        // h3.textContent = info
        // image.src = image

        champ.appendChild(h2)
        champ.appendChild(p)
        // container.appendChild(h3)
        // container.appendChild(image)
    })

    // btnApi.addEventListener('click', callAPI)
}

create()










