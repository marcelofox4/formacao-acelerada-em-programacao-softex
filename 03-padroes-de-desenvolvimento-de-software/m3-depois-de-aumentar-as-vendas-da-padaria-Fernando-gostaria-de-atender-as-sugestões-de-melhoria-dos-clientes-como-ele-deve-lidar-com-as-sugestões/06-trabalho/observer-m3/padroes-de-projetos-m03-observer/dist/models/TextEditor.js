"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextEditor = void 0;
const Editor_1 = require("./Editor");
class TextEditor extends Editor_1.Editor {
    constructor() {
        super();
        this.edit = false;
    }
    insertLine(lineNumber, text) {
        if (this.edit) {
            if (text === "EOF") {
                this.save();
                return;
            }
            else {
                this.text[(lineNumber - 1)] = text;
                return;
            }
        }
        throw new Error("É necessário abrir o editor");
    }
    removeLine(lineNumber) {
        if (this.edit) {
            this.text.splice((lineNumber - 1), 1);
            return;
        }
        throw new Error("É necessário abrir o editor");
    }
    save() {
        for (let i = 0; i < this.text.length; i++) {
            if (this.text[i] == undefined) {
                this.text[i] = "";
            }
            console.log(`${i + 1} - ${this.text[i]}`);
        }
        this.closed();
    }
    open() {
        this.edit = true;
    }
    closed() {
        this.edit = false;
    }
}
exports.TextEditor = TextEditor;
