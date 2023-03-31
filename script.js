const timeStamp = '1680032266592'
const publicKey = 'e187e79cf0de61308b19050431647dd0'
const MD5hash = 'b7a47d57a28af2179f449749b980f378'

fetch(`http://gateway.marvel.com/v1/public/comics?&ts=${timeStamp}&apikey=${publicKey}&hash=${MD5hash}` //Consumo da API
).then((response) => {
    return response.json();

}).then(async(jsonParsed) => {
    console.log(jsonParsed)

    const divComic = document.querySelector('.Comics-Heroes')
    jsonParsed.data.results.forEach(element => {
        const Image = element.thumbnail.path + '.' + element.thumbnail.extension
        const Title = element.title
        

        createComics(Image, Title, divComic)
    })

/* jsonParsed.data.results.textObjects.forEach(element =>{
        console.log(element.text)
    }) */
})

const createComics = (Logo, title, divToAppend) => {
    const comicContainer = document.createElement('div')
    const titleBox = document.createElement('div')
    const titleComic = document.createElement('p')
    const img = document.createElement('img')

    titleComic.textContent = title
    img.src = Logo


    titleBox.appendChild(img)
    titleBox.appendChild(titleComic)
    comicContainer.appendChild(titleBox)
    divToAppend.appendChild(comicContainer)
    comicContainer.classList.add('Struture', 'comic')
    img.classList.add("imgs")
    titleComic.classList.add('text')

    
  

}

const Description = (description) => {
    
    const modal = document.querySelector('.modal')
    const modalContent = modal.querySelector('.modal-content')
    const descriptionText = modalContent.querySelector('.description-text')
    

    modal.style.display = 'block'
    descriptionText.textContent = description


    const closeButton = document.querySelector('.close-button')
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'
        }
    }
}