// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
import {play} from "./music.js"
import {decimalParaRomano} from "./roman.js"

const API_ENDPOINT = 'https://swapi.dev/api'
const MUSIC = {
    audioUrl:'audio/tema-sw.mp3',
    coverImageUrl:'imgs/logo.svg',
    title:'Intro',
    artist:'John Williams'
}
const filmes = await fetch(`${API_ENDPOINT}/films`)
    .then(resposta => resposta.json())
    .then(filmes => filmes.results)
    .catch(erro => console.error(`Deu ruim: ${erro}`));

const filmesNode = document.querySelector('#filmes ul');

play(MUSIC, document.body);

function preencheFilme(filmes){
    filmesNode.innerHTML = '';
    filmes.forEach(element => {
        let filmeEl = document.createElement('li');
        filmeEl.innerHTML = `Episode ${decimalParaRomano(element.episode_id).padEnd(3, ' ')} - ${element.title}`
        filmesNode.appendChild(filmeEl);
    });
}

preencheFilme(filmes);