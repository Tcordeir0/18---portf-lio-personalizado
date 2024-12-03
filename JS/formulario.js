/*Função do formulário preenchido no final da pág */
class FormSubmit {
    constructor(configuraçoes) {
        this.configuraçoes = configuraçoes;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
    }


displaySucces() {
    this.form.innerHTML = this.setting.sucess;
}

displayError() {
    this.form.innerHTML = this.setting.error;
}

}
