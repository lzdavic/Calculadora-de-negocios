import { NegociacaoController } from "./controllers/negociacao-controllers.js";
import { Negociacoes } from "./models/negociacoes.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
