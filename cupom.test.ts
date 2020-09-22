const cupom = require('./cupom');

function verificaCampoObrigatorio(mensagemEsperada: string) {
  try {
    cupom.dados_loja();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}

// Todas as variáveis preenchidas
cupom.dados.nome_loja = "Loja 1";
cupom.dados.logradouro = "Log 1";
cupom.dados.numero = 10;
cupom.dados.complemento = "C1";
cupom.dados.bairro = "Bai 1";
cupom.dados.municipio = "Mun 1";
cupom.dados.estado = "E1";
cupom.dados.cep = "11111-111";
cupom.dados.telefone = "(11) 1111-1111";
cupom.dados.observacao = "Obs 1";
cupom.dados.cnpj = "11.111.111/1111-11";
cupom.dados.inscricao_estadual = "123456789";

const TEXTO_ESPERADO_LOJA_COMPLETA: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_NUMERO: string = `Loja 1
Log 1, s/n C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_COMPLEMENTO: string = `Loja 1
Log 1, 10
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_BAIRRO: string = `Loja 1
Log 1, 10 C1
Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_CEP: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_TELEFONE: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_OBSERVACAO: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111

CNPJ: 11.111.111/1111-11
IE: 123456789
`;

test('Loja Completa', () => {
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_LOJA_COMPLETA);
});

test('Nome vazio', () => {
  cupom.dados.nome_loja = "";
  verificaCampoObrigatorio(`O campo nome da loja é obrigatório`);
  cupom.dados.nome_loja = "Arcos Dourados Com. de Alimentos LTDA";
});

test('Logradouro vazio', () => {
  cupom.dados.logradouro = "";
  verificaCampoObrigatorio(`O campo logradouro do endereço é obrigatório`);
  cupom.dados.logradouro = "Av. Projetada Leste";
});

test('Número zero', () => {
  cupom.dados.numero = 0;
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_NUMERO);
  cupom.dados.numero = 500;
});

test('Complemento vazio', () => {
  cupom.dados.complemento = "";
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_COMPLEMENTO);
  cupom.dados.numero = "C1";
});

test('Bairro vazio', () => {
  cupom.dados.bairro = "";
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_BAIRRO);
  cupom.dados.bairro = "Bai 1";
});

test('Município vazio', () => {
  cupom.dados.municipio = "";
  verificaCampoObrigatorio(`O campo município do endereço é obrigatório`);
  cupom.dados.municipio = "Campinas";
});

test('Estado vazio', () => {
  cupom.dados.estado = "";
  verificaCampoObrigatorio(`O campo estado do endereço é obrigatório`);
  cupom.dados.estado = "SP";
});

test('CEP vazio', () => {
  cupom.dados.cep = "";
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_CEP);
  cupom.dados.cep = "11111-111";
});

test('Telefone vazio', () => {
  cupom.dados.telefone = "";
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_TELEFONE);
  cupom.dados.telefone = "(11) 1111-1111";
});

test('Observação vazia', () => {
  cupom.dados.observacao = "";
  expect(cupom.dados_loja()).toBe(TEXTO_ESPERADO_SEM_OBSERVACAO);
  cupom.dados.observacao = "Obs 1";
});

test('CNPJ vazio', () => {
  cupom.dados.cnpj = "";
  verificaCampoObrigatorio(`O campo CNPJ da loja é obrigatório`);
  cupom.dados.cnpj = "42.591.651/0797-34";
});

test('Inscrição estadual vazia', () => {
  cupom.dados.inscricao_estadual = "";
  verificaCampoObrigatorio(`O campo inscrição estadual da loja é obrigatório`);
  cupom.dados.inscricao_estadual = "244.898.500.113";
});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "";
  cupom.dados.logradouro = "";
  cupom.dados.numero = 0;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "";
  cupom.dados.municipio = "";
  cupom.dados.estado = "";
  cupom.dados.cep = "";
  cupom.dados.telefone = "";
  cupom.dados.observacao = "";
  cupom.dados.cnpj = "";
  cupom.dados.inscricao_estadual = "";

  //E atualize o texto esperado abaixo
  expect(cupom.dados_loja()).toBe(
    `
`);
});
