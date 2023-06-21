import { dateConversion } from "./DateConversion.js";
import { refresh } from "./Refresh.js";

function createTable(pessoa, i) {
    
    const tabela = document.createElement("tr");
    tabela.innerHTML = `
          <th scope="row">${i}</th>
          <td>${pessoa.nome}</td>
          <td>${dateConversion(pessoa)}</td>
          <td class="button">
            <input type="button" class="btnEdit" id="${i}" value="Editar">
            <input type="button" class="btnRemove" id="${i}" value="Remover">
          </td>
        `;
    document.querySelector("#tabelaDOM>tbody").appendChild(tabela);

    return tabela;
}

function createModal(pessoa) {

    const modal = document.createElement("dialog");
    modal.id = "modal"
    modal.className = "dialog-container"
    modal.innerHTML = `
    
    <div class="dialog-box">
        <form id="makeChange">
            <label for="editName">
                Nome
                <input type="text" value="${pessoa.nome}" id="editName" minlength="3" maxlength="120" pattern="[A-Za-z ]+" required>
            </label>

            <label for="editDate">
                Data de Nascimento
                <input type="date" value="${pessoa.aniversario}" id="editDate" min="1900-01-01" max="2100-12-31" required>
            </label>

            <input type="submit" value="Salvar">
        </form>
    </div>
        `;
    document.querySelector("body").appendChild(modal);
    document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
            refresh()
        };
    });
};

export { createModal, createTable }