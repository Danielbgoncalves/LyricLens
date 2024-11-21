const axios = require('axios');
const cheerio = require('cheerio');

const GENIUS_TOKEN = process.env.GENIUS_API_KEY;
const GENIUS_URL = 'https://api.genius.com/search';
let song_url;

async function buscaDadosMusica(nomeMusica){
    try{
        const resposta = await axios.get(GENIUS_URL, {
            params: { q: nomeMusica},
            headers: {
                Authorization: `Bearer ${GENIUS_TOKEN}`,
            }
        });
        const musicas = resposta.data.response.hits;
        return musicas;
        /*musicas.forEach((musica, index) => {
            if (isBandaAlvo(musica)) {
                return musica;
                console.log(`Música ${index + 1}: ${musica.result.full_title}`);
                song_url = musica.result.url;
                //scrapingWeb(song_url);
                //return;
            }
        });*/
    } catch(erro){
        console.error('Erro ao buscar música: ', erro);
    }
}

function isBandaAlvo(musica) {
    const bandName = 'Linkin'
    const nomeCompleto = musica.result.full_title;
    nomeCompleto.toLowerCase();
    const thereIsTheName = nomeCompleto.indexOf(bandName);

    if(thereIsTheName !== -1) return true;
    else return false;
    
}

async function scrapingWeb(song_url){
    const { data } = await axios.get(song_url); // pega o data da requisição
    const $ = cheerio.load(data); // carrega o DOM como ums string
    const conteudoDiv =  $('.Lyrics__Container-sc-1ynbvzw-1').html();

    let letra = conteudoDiv.replace(/<br\s*\/?>/g, '\n');
    letra = letra.replace(/<\/?[^>]+(>|$)/g, '');

    console.log(letra);
}

buscaDadosMusica('Castle of glass');
//scrapingWeb(song_url);
