# sms-app
Aplicação destinada a realizar requisição de código via SMS

<br>
<br>

**Objetivo**

Criar uma aplicação consumidora de API externa para envio de SMS para o usuário. A ideia é simular o envio de um código de validação de login, a exemplo de uma autenticação de dois fatores ou definição de nova senha.

<br>
<br>

**Zenvia**

Esta é a ferramenta utilizada para realização dos envios de SMS através de uma API conectada via Node.js. Além de envio de SMS, a [Zenvia](www.zenvia.com) trás uma série de outras aplicações disponíveis.

<br>
<br>
<br>

### Tecnologias 🔧

As seguintes ferramentas foram utilizadas para construção desta aplicação:

- Node.js ([nodejs.org](http://nodejs.org/))
- Axios ([axios-http.com](https://axios-http.com/))
- Nodemon ([nodemon.io](https://nodemon.io/))
- Express ([expressjs.com](http://expressjs.com/))
- DotEnv ([GitHub DotEnv](https://github.com/motdotla/dotenv))
- API Zenvia - Totalvoice ([GitHub Totalvoice](https://github.com/totalvoice/totalvoice-node))

<br>
<br> 


### Pré-requisitos 📦

Antes de começar será necessário ter instalado em sua máquina o [Node.js](http://nodejs.org/) que será o responsável por toda a comunicação da nossa aplicação. 

<br>
<br>

### Rodando a aplicação 🏈

```bash
# Clonar repositório
$ git clone https://github.com/leodoima/sms-app.git

# Ir para pasta raiz do projeto
$ cd sms-app

# Configurar variáveis de ambiente 
Renomear arquivo .env.example para .env
Alterar o conteúdo das chaves para aqueles desejados

# Rodar a aplicação
$ npm start

# Testar a aplicação
$ http://localhost:3333/

```

<br>
<br>

**Enviar SMS**

Realizar POST através da rota http://localhost:3333/send com o conteúdo abaixo:

```json
{
    "recipientTelephone": "9999999999999"
}
```

Telefone deverá conter código do país + código de área + número do telefone. 


<br>
<br>


### Melhorias futuras 🔨

- [x]  Criar uma página web para requisição de envio de código via SMS (similar a um login)

<br>
<br>
<br>

Este código foi baseado neste vídeo do <b>Rodrigo Branas<b>:

https://www.youtube.com/watch?v=keaoofSGPAE&t=580s