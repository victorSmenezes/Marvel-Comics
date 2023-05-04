const timeStamp = '1680032266592'
const publicKey = 'e187e79cf0de61308b19050431647dd0'
const MD5hash = 'b7a47d57a28af2179f449749b980f378' // MD5 = TimeStamp + privateKey + publicKey

fetch(`https://gateway.marvel.com/v1/public/comics?format=digest&formatType=comic&noVariants=false&ts=
${timeStamp}
&apikey=${publicKey}
&hash=${MD5hash}` //Consumo da API - Marvel
).then((response) => {
    return response.json();

}).then(async (jsonParsed) => {

    const divComic = document.querySelector('.Comics-Heroes')
    await jsonParsed.data.results.forEach(element => {
        const Image = element.thumbnail.path + '.' + element.thumbnail.extension
        const Title = element.title
        const description = element.description

        createComics(Image, Title, divComic, description)
    })
    console.log(jsonParsed)
})

// Parte Central, onde aparece os comics
const createComics = (Image, title, divToAppend, description) => {
    const comicContainer = document.createElement('div')
    const titleBox = document.createElement('div')
    const titleComic = document.createElement('p')
    const img = document.createElement('img')

    img.src = Image
    titleComic.textContent = title


    titleBox.appendChild(img)
    titleBox.appendChild(titleComic)
    comicContainer.appendChild(titleBox)
    divToAppend.appendChild(comicContainer)

    comicContainer.classList.add('Struture', 'comic')
    img.classList.add("imgs")
    titleComic.classList.add('text')

    comicContainer.addEventListener('click', () => {
        Description(Image, title, description);
    });


    // Modal de descricao
    function Description(Logo, title, description) {
        const modal = document.querySelector('.modal')
        const modalContent = modal.querySelector('.modal-content')
        const imgModal = document.createElement('img')
        const titleModal = document.createElement('h3')
        const descriptionText = document.createElement('p')

        imgModal.src = Logo
        titleModal.textContent = title


        if (description !== null && description !== undefined && description !== "") { //Caso nao haja descricao
            descriptionText.textContent = description
        } else {
            descriptionText.textContent = 'Description unavailable'
        }

        imgModal.classList.add('imgModal')
        descriptionText.classList.add('description-text')

        modalContent.appendChild(imgModal)
        modalContent.appendChild(titleModal)
        modalContent.appendChild(descriptionText)

        modal.style.display = 'block'

        const closeButton = document.querySelector('.close-button')
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none'
            titleModal.remove()
            imgModal.remove()
            descriptionText.remove()
        })

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                titleModal.remove()
                imgModal.remove()
                descriptionText.remove()
            }
        }
    }
}

