function checarDuplos(db, nameInput) {

  return db.some((pessoa) => pessoa.nome === nameInput.value);
}

export { checarDuplos }