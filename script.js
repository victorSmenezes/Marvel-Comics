const timeStamp = '1680032266592'
const publicKey = 'e187e79cf0de61308b19050431647dd0'
const MD5hash = 'b7a47d57a28af2179f449749b980f378'

 fetch(`http://gateway.marvel.com/v1/public/comics?&ts=${timeStamp}&apikey=${publicKey}&hash=${MD5hash}`
).then((response) => {
    return response.json();

}).then((jsonParsed) => {
    console.log(jsonParsed)

    const divComic = document.querySelector('.Comics-Heroes')
    //const Title = document.querySelector('.title')
    jsonParsed.data.results.forEach(element => {
        const Image = element.thumbnail.path + '.' + element.thumbnail.extension
        const Title = element.title

        createComics(Image, Title, divComic)
    })
})

const createComics = (Logo, titleComic, divToAppend) => {
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const text1 = document.createElement('text')
    const img = document.createElement('img')

    text1.textContent = titleComic
    img.src = Logo


    div2.appendChild(img)
    div2.appendChild(text1)
    div1.appendChild(div2)
    divToAppend.appendChild(div1)

    div1.classList.add('.Struture')
}
