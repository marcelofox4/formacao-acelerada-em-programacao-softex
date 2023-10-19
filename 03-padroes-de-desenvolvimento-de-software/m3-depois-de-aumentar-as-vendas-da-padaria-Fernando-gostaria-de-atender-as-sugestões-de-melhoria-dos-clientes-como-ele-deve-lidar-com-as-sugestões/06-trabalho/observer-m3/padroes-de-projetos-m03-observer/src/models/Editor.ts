export abstract class Editor {

    text: String[];
    edit: boolean = false;

    constructor() {
        this.text = [];
    }

    open(): void {
        this.edit = true;
    }

    closed(): void {
        this.edit = false;
    }
}