"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdaptadorPato_1 = require("./models/AdaptadorPato");
const Galinha_1 = require("./models/Galinha");
let galinha = new Galinha_1.Galinha();
let pato = new AdaptadorPato_1.AdptadorPato(galinha);
console.log("Pato pensando que é galinha:");
pato.emitirSom();
