function dateConversion(x) {
    
    const dataFormat = x.aniversario;

    const [ano, mes, dia] = dataFormat.split("-");
    const data = `${dia}/${mes}/${ano}`;
    
    return data;
};

export { dateConversion };