let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

const dados_loja = () : string => {
  if (!dados.nome_loja) {
    throw new Error(`O campo nome da loja é obrigatório`);
  }

  if(!dados.logradouro) {
    throw new Error("O campo logradouro do endereço é obrigatório")
  }

  const _logradouro : string = dados.logradouro + ", "
  const _numero : string = dados.numero? `${dados.numero}` : "s/n"
  const _complemento : string = dados.complemento? " " + dados.complemento : ""
  const _bairro : string = dados.bairro? dados.bairro + " - " : ""

  if(!dados.municipio) {
    throw new Error("O campo município do endereço é obrigatório")
  }

  const _municipio = dados.municipio + " - "
  
  if(!dados.estado) {
    throw new Error("O campo estado do endereço é obrigatório")
  }

  const _cep : string = dados.cep? `CEP:${dados.cep}` : ""
  let _telefone : string = dados.telefone? `Tel ${dados.telefone}` : ""
  _telefone = _cep && _telefone? " " + _telefone : _telefone
  const _observacao : string = dados.observacao? dados.observacao : ""

  if(!dados.cnpj) {
    throw new Error("O campo CNPJ da loja é obrigatório")
  }

  const _cnpj : string = `CNPJ: ${dados.cnpj}`
  
  if(!dados.inscricao_estadual) {
    throw new Error("O campo inscrição estadual da loja é obrigatório")
  }

  const _inscricao_estadual : string = `IE: ${dados.inscricao_estadual}`

  return (
`${dados.nome_loja}
${_logradouro}${_numero}${_complemento}
${_bairro}${_municipio}${dados.estado}
${_cep}${_telefone}
${_observacao}
${_cnpj}
${_inscricao_estadual}
`
  );
}

module.exports = {
  dados: dados,
  dados_loja:  dados_loja
};
