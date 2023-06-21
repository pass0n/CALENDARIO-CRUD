import { createModal, createTable } from "./modules/InnerHTML.js";
import { refresh } from "./modules/Refresh.js";
import { checarDuplos } from "./modules/ChecarDuplos.js";

const form = document.querySelector("#form");
const dataInput = document.querySelector("#dateInput");
const nameInput = document.querySelector("#nameInput");

const db = JSON.parse(localStorage.getItem("db_pessoas")) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (checarDuplos(db, nameInput)) {
        
        alert("Este nome já está cadastrado.");
        return;
    }
    else {
        const cadastro = {
            nome: nameInput.value,
            aniversario: dataInput.value
        };
        db.push(cadastro);

        localStorage.setItem("db_pessoas", JSON.stringify(db));
        refresh();
    };
});

db.forEach((pessoa, i) => {
    
    const tabela = createTable(pessoa, i)
    const btnEdit = tabela.querySelector(".btnEdit");
    const btnRemove = tabela.querySelector(".btnRemove");

    btnEdit.addEventListener("click", (e) => {
        const id = e.target.getAttribute("id");
        const pessoa = db[id];

        createModal(pessoa);
        modal.showModal();

        makeChange.addEventListener("submit", () => {

            pessoa.nome = editName.value;
            pessoa.aniversario = editDate.value;

            localStorage.setItem("db_pessoas", JSON.stringify(db));
        });
    });

    btnRemove.addEventListener("click", (e) => {
        const id = e.target.getAttribute("id");
        db.splice(id, 1);

        localStorage.setItem("db_pessoas", JSON.stringify(db));
        refresh();
    });
});