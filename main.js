import {buscaDadosMusica, scrapingWeb} from './utils.js';

const submitBnt = dpcument.querySlector('#submit');

submitBnt.addEventListener('click', ()=>{
    const songName = submitBnt.textContent;
    const musicasComEsseNome = buscaDadosMusica(songName);
});