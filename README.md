# Modulo NPM WebmaniaBR

Através do emissor de Nota Fiscal da WebmaniaBR®, você conta com a emissão e arquivamento das suas notas fiscais, cálculo automático de impostos, geração do Danfe para impressão e envio automático de e-mails para os clientes. Realize a integração com o seu sistema utilizando a nossa REST API.

- Emissor de NF-e da WebmaniaBR®: [Saiba mais](https://webmaniabr.com/smartsales/nota-fiscal-eletronica/)
- Documentação da REST API: [Visualizar](https://webmaniabr.com/docs/rest-api-nfe/)
- Repositório NPM: [Visualizar]()

## Requisitos
- Contrate um dos planos de Nota Fiscal Eletrônica da WebmaniaBR® a partir de R$29,90/mês: [Assine agora mesmo](https://webmaniabr.com/smartsales/nota-fiscal-eletronica/).
- Ter o [Node.js](https://www.npmjs.com/get-npm) instalado.
- Realizar a integração com seu sistema

## Como usar
Primeiramente instale o nosso modulo via npm:
```js
npm i @webmaniabr/nfe
```

Importe o modulo para a parte do seu sistema que deseja tratar esse tipo de informação:
```js
var nfe = require("@webmaniabr/nfe")
```

Informe as credenciais de acesso que é disponibilizado após a contratação de um plano da WebmaniaBR®:
```js
nfe.credenciais("seu_x_consumer_key", "seu_x_consumer_secret", "seu_x_access_token", "seu_x_access_token_secret")
```

Com isso já está apto a utilizar o modulo da WebmaniaBR®, como por exemplo consultar o status sefaz, ela retorna um callback com a resposta da API.
```js
nfe.statusSefaz(function(callback){
     console.log(callback.status)
})
```

Existem metodos, como por exemplo o de emissão de NF-e, onde é necessario ser informado um JSON com os dados da NF-e. Para maiores informações quais dados são solicitado por determinado metodo da API, consulte a [documentação](https://webmaniabr.com/docs/rest-api-nfe/).

No exemplo abaixo é detalhado o funcionamento do modulo. Deve ser passado como primeiro parametro o JSON com seu respectivos dados, segundo parametro é uma função callback, que retorna a resposta da API e a exibe no console.
```js
nfe.emitirNFe(json, function(callback){
     console.log(callback.status)
})
```
