// Minha chave de API
var apikey = {
    key: 'Aqui vai a chave da API'
};

// Requisição do Fetch
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
        apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        var texto = '';
        for (let i = 0; i < 10; i++) {
            texto = texto + `
            <div class="media">
                <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                <div class="media-body">
                <h5 class="mt-2">${api.data[i].name} </h5>
                <h6> First historical data: ${api.data[i].first_historical_data}</h6>
                <p>${api.data[i].symbol}</p>
                </div>
            </div>`;
            document.getElementById("coins").innerHTML = texto;
        }

        console.log(api);
    })
    .catch((error) => {
        console.error(error.message);
    });