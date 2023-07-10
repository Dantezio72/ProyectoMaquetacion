console.log(document.querySelector('title').textContent)

function ajax(url, metodo = 'GET') {
    const xhr = new XMLHttpRequest()
    xhr.open(metodo, url)
    xhr.send()

    return xhr
}

/* ------------------------------------------------------------------------ */
/* ------------------------- Load the Navigation bar ---------------------- */
/* ------------------------------------------------------------------------ */

function createNav() {
    const header = document.querySelector('header')

    let xhr = ajax('navbar.html')
    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            header.innerHTML = xhr.response

            // getTemplate()
            getTemplateWithHistory()
        } else {
            console.error('An error occurred')
        }
    })
}

/* ------------------------------------------------------------------------ */
/* ---------------------- SPA Navigation without History ------------------ */
/* ------------------------------------------------------------------------ */

// function getTemplate() {
//     const main = document.querySelector('main')

//     /* ------------------------------------------------------ */
//     /* ---------------------- Load Home --------------------- */
//     /* ------------------------------------------------------ */

//     let archive = 'home.html'
//     let xhr = ajax(archive)

//     xhr.addEventListener('load', () => {
//         if(xhr.status === 200) {
//             main.innerHTML = xhr.response
//         } else {
//             console.error('An error occurred')
//         }
//     })

//     /* ------------------------------------------------------ */
//     /* --------------- Load Remaining Content --------------- */
//     /* ------------------------------------------------------ */

//     const links = document.querySelectorAll('a')

//     links.forEach(link => {
//         link.addEventListener('click', e => {
//             e.preventDefault()

//             let id = link.id
//             let archive = id + '.html'
//             const xhr = ajax(archive)
//             xhr.addEventListener('load', () => {
//                 if(xhr.status === 200) {
//                     main.innerHTML = xhr.response
//                 } else {
//                     console.error('An error occurred')
//                 }
//             })
//         })
//     })
// }

/* ------------------------------------------------------------------------ */
/* ----------------------- SPA Navigation with History -------------------- */
/* ------------------------------------------------------------------------ */

function getTemplateWithHistory() {

    const main = document.querySelector('main')

    /* ------------------------------------------------------ */
    /* ---------------------- Load Home --------------------- */
    /* ------------------------------------------------------ */

    let hash = location.hash
    let archive = hash ? hash.slice(1) + '.html' : 'home.html'
    const xhr = ajax(archive)

    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            main.innerHTML = xhr.response
        } else {
            console.error('An error occurred')
        }
    })

    /* ------------------------------------------------------ */
    /* --------------- Load Remaining Content --------------- */
    /* ------------------------------------------------------ */

    const links = document.querySelectorAll('a')
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id

            location.hash = id

            let archive = id + '.html'
            const xhr = ajax(archive)
            xhr.addEventListener('load', () => {
                if (xhr.status === 200) {
                    main.innerHTML = xhr.response
                } else {
                    console.error('An error occurred')
                }
            })
        })
    })

    /* ------------------------------------------------------------------------ */
    /* ---------------------------- Event HASHCHANGE -------------------------- */
    /* ------------------------------------------------------------------------ */

    window.addEventListener('hashchange', e => {
        let hash = location.hash

        let archive = hash ? hash.slice(1) + '.html' : 'home.html'
        const xhr = ajax(archive)

        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                main.innerHTML = xhr.response
            } else {
                console.log('An error occurred', xhr.status)
            }
        })
    })
}

function start() {
    createNav()
}
start()