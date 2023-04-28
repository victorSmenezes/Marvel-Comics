
// Array para armazenar os marcadores criados
const markers = [];

async function initMap() {
    if (typeof google === 'undefined') { // Verifica se a variavel esta definida
        setTimeout(initMap, 1000);
        return;
    }
    const myLatLng = { lat: -23.550520, lng: -46.633308 };

    map = await new google.maps.Map(document.querySelector("#map"), {
        mapId: 'c772d974e576c695',
        zoom: 8,
        center: myLatLng,
    });

    // Cria um marcador para a localização inicial
    const marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Endereço do comics",
    });

    // Guarda o marcador ao array de marcadores
    markers.push(marker);

    marker.addListener('click', () => {
        // Remove o marcador do mapa
        marker.setMap(null);

        const index = markers.indexOf(marker);
        markers.splice(index, 1);
    });

    // Adiciona no mapa novos marcadores
    map.addListener("click", (event) => {
        const clickedLatLng = event.latLng;

        const marker = new google.maps.Marker({
            position: clickedLatLng,
            map,
            title: "Novo local",
        });

        markers.push(marker);
    // Apaga os anteriores
        marker.addListener('click', () => {
            marker.setMap(null);

            const index = markers.indexOf(marker);
            markers.splice(index, 1);
        });
    });
}

initMap();


//Botão de envio
SendComic = () => {
    const btn = document.querySelector('.button-map')

    window.alert('Congratulations! Comic Sent')
}