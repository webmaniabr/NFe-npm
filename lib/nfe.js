// Dependencias
var request = require("request")

//Credenciais
var x_consumer_key = ""
var x_consumer_secret = ""
var x_access_token = ""
var x_access_token_secret = ""

// Outras variaveis
var url = "https://webmaniabr.com/api/1/nfe/"
var header = {}

//Cancelar Nota Fiscal Eletrônica
function cancelaNFe(data, callback){
  if(verificaCredenciais()){
  
    var options = { 
      method: 'PUT',
      url: url + "cancelar/",
      headers: prepareHeader(),
      body: data,
      json: true
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      callback(body)
    })
    
  }
}
exports.cancelaNFe = cancelaNFe

// Carta de Correção
function cartaCorrecao(data, callback) {
  if(verificaCredenciais()){
    var options = { 
      method: 'POST',
      url: url + "cartacorrecao/",
      headers: prepareHeader(),
      body: data,
      json: true
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      callback(body)
    })
  }
}
exports.cartaCorrecao = cartaCorrecao

// Consultar Nota Fiscal Eletrônica
function consultarNFe(data, callback) {
  if(verificaCredenciais()){
    var options = { 
      method: 'GET',
      url: url + "consulta/",
      headers: prepareHeader(),
      qs: data,
      json: true
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      callback(body)
    })
  }
}
exports.consultarNFe = consultarNFe

// Emissão de Nota Fiscal Eletrônica
function emitirNFe(data, callback) {
  if(verificaCredenciais()){
    var options = { 
      method: 'POST',
      url: url + "emissao/",
      headers: prepareHeader(),
      body: data,
      json: true
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      callback(body)
    })
  }
}

// Emitir Nota Fiscal de Ajuste
function emitirNFeAjuste(data, callback){
  if(verificaCredenciais()){
    var options = { 
      method: 'POST',
      url: url + "ajuste/",
      headers: prepareHeader(),
      body: data,
      json: true
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      callback(body)
    })
  }
}
exports.emitirNFeAjuste = emitirNFeAjuste

// Emitir Nota Fiscal Complementar
function emitirNFeComplementar(data, callback) {
  if(verificaCredenciais()){
    var options = { 
      method: 'POST',
      url: url + "complementar/",
      headers: prepareHeader(),
      body: data,
      json: true
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      callback(body)
    })
  }
}
exports.emitirNFeComplementar = emitirNFeComplementar

// Emitir Nota Fiscal de Devolução
function emitirNFeDevolucao(data, callback) {
  if(verificaCredenciais()){
    var options = { 
      method: 'POST',
      url: url + "devolucao/",
      headers: prepareHeader(),
      body: data,
      json: true
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      callback(body)
    })
  }
}
exports.emitirNFeDevolucao = emitirNFeDevolucao

// Inutilizar Numeração
function inutilizarNumeracao(data, callback){
  if(verificaCredenciais()){
    var options = { 
      method: 'PUT',
      url: url + "inutilizar/",
      headers: prepareHeader(),
      body: data,
      json: true
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      callback(body)
    })
  }
}
exports.inutilizarNumeracao = inutilizarNumeracao

// Status SEFAZ
function statusSefaz(callback) {
  if(verificaCredenciais()){
  
    var options = { 
      method: 'GET',
      url: url + "sefaz/",
      headers: prepareHeader(),
      json: true
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      callback(body)
    })
    
  }
}
exports.statusSefaz = statusSefaz

// Validade Certificado A1
function validadeCertificadoA1(callback) {
  if(verificaCredenciais()){
    var options = { 
      method: 'GET',
      url: url + "certificado/",
      headers: prepareHeader(),
      json: true
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      callback(body)
    })
  }
}
exports.validadeCertificadoA1 = validadeCertificadoA1

// Salvar credenciais de acesso
function credenciais(consumer_key, consumer_secret, access_token, access_token_secret) {
    x_consumer_key = consumer_key;
    x_consumer_secret = consumer_secret;
    x_access_token = access_token;
    x_access_token_secret = access_token_secret;
}
exports.credenciais = credenciais

// Validar se as credenciais estão inseridas
function verificaCredenciais() {
  if((x_consumer_key !== undefined && x_consumer_key !== "") && (x_consumer_secret !== undefined && x_consumer_secret !== "") && (x_access_token !== undefined && x_access_token !== "") && (x_access_token_secret !== undefined && x_access_token_secret !== "") ){
    return true
  }else{
    console.log("Uma ou mais credenciais não foram inseridas, favor verificar !")
    return false
  }
}

// Preparar headers
function prepareHeader() {
  return header = {
      'content-type': 'application/json',
      'cache-control': 'no-cache',
      'x-consumer-key': x_consumer_key,
      'x-consumer-secret': x_consumer_secret,
      'x-access-token': x_access_token,
      'x-access-token-secret': x_access_token_secret
  }
}
