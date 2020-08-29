<p align="center">
  <img src="https://wmbr.s3.amazonaws.com/img/logo_webmaniabr_github.png">
</p>

# NFe-npm

Através do emissor de Nota Fiscal da WebmaniaBR®, você conta com a emissão e arquivamento das suas notas fiscais, cálculo automático de impostos, geração do Danfe para impressão e envio automático de e-mails para os clientes. Realize a integração com o seu sistema utilizando a nossa REST API.

- Emissor de Nota Fiscal WebmaniaBR®: [Saiba mais](https://webmaniabr.com/nota-fiscal-eletronica/)
- Documentação REST API: [Visualizar](https://webmaniabr.com/docs/rest-api-nfe/)
- Repositório NPM: [Visualizar]()

## Requisitos
- Contrate um dos planos de Nota Fiscal Eletrônica da WebmaniaBR® a partir de R$34,90/mês: [Assine agora mesmo](https://webmaniabr.com/nota-fiscal-eletronica/).
- Ter o [Node.js](https://www.npmjs.com/get-npm) instalado.
- Realizar a integração com seu sistema

## Como usar
Primeiramente instale o nosso módulo via npm:
```js
npm i @webmaniabr/nfe
```

Importe o módulo para a parte do seu sistema que deseja tratar esse tipo de informação:
```js
var nfe = require("@webmaniabr/nfe")
```

Informe as credenciais de acesso que é disponibilizado após a contratação de um plano da WebmaniaBR®:
```js
nfe.credenciais("seu_x_consumer_key", "seu_x_consumer_secret", "seu_x_access_token", "seu_x_access_token_secret")
```

Com isso já está apto a utilizar o módulo da WebmaniaBR®, como por exemplo, consultar o status sefaz que retorna um callback com a resposta da API.
```js
nfe.statusSefaz(function(callback){
     console.log(callback.status)
})
```

Existem metodos, como por exemplo o de emissão de NF-e, onde é necessário ser informado um JSON com os dados da NF-e. Para maiores informações quais dados são solicitado por determinado metodo da API, consulte a [documentação](https://webmaniabr.com/docs/rest-api-nfe/).

No exemplo abaixo é detalhado o funcionamento do módulo. Deve ser passado como primeiro parâmetro um JSON com seus respectivos dados para emissão de NF-e, segundo parâmetro é uma função callback que retorna a resposta da API, no exemplo abaixo essa resposta é exibida no console.
```js
nfe.emitirNFe(json, function(callback){
     console.log(callback)
})
```

## Funções disponíveis

- cancelaNFe(json, callback)
- cartaCorrecao(json, callback)
- consultarNFe(json, callback)
- emitirNFe(json, callback)
- emitirNFeAjuste(json, callback)
- emitirNFeComplementar(json, callback)
- emitirNFeDevolucao(json, callback)
- inutilizarNumeracao(json, callback)
- statusSefaz(callback)
- validadeCertificadoA1(callback)
- credenciais("consumer_key", "consumer_secret", "access_token", "access_token_secret")

## Suporte

Qualquer dúvida entre em contato na nossa [Central de Ajuda](https://ajuda.webmaniabr.com) ou acesse o [Painel de Controle](https://webmaniabr.com/painel/) para conversar em tempo real no Chat ou Abrir um chamado.
