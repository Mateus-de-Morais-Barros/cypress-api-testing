
# Reqres Cypress Automation 

Esse é um projeto de automação de testes de API usando cypress. O objetivo do projeto vai além do estudo de automação, como também fiz uso de técnicas e procedimentos que vemos em uma atuação real em grandes empresas do mercado.

O quadro kanban foi feito no [Notion](https://www.notion.so/Task-Board-18b63fea5bac80eb99ddf0320d7da6bd?pvs=4) e contém links para o [plano de testes](https://docs.google.com/document/d/1Bx3HUjIUrf4ww-i4IWgJjao8oXyCgjqAoZrW2si5r8s/edit?usp=sharing) e para os [cenários e casos de teste](https://docs.google.com/document/d/1bq1MrGgBzF0IhFSVTATTnrDizXwLRRrI/edit?usp=sharing&ouid=103010263055064496196&rtpof=true&sd=true).


## Funcionalidades

- Testes funcionais
- Testes de contrato
- Testes de saúde
- Geração de relatório de testes
- Screenshots dos cenários que falham

## Instalação

Instale as dependências com npm

```bash
  npm install
```

## Rodando o programa

Criei 3 comandos principais:
- ``npm run tests`` executa os testes no cypress sem gerar um relatório ou abrir o navegador
- ``npm run allure_fresh`` gera o relatório com os dados dos testes que foram executados e abre no navegador
- ``npm run new_tests`` executa os testes no cypress, gera um relatório e abre no navegador

## Quero ver ação

Comando que já faz tudo pra você:

```bash
  npm install && npm run tests && npm run allure_fresh
```
    
## Screenshots

<div style="display:flex; flex-direction:column; gap:10px;">
    <img src="./images/project%20board%20on%20notion.png" width="100%" heigth="auto">
<div style="display:flex; flex-direction:row; gap:2%;">
    <img src="./images/test%20cases%20on%20docs.png" width="49%" heigth="auto">
    <img src="./images/test%20cases%20on%20docs%202.png" width="49%" heigth="auto">
</div>
</div>


## Referência

 - [Reqres API](https://reqres.in/)
 - [Cypress Docs](https://docs.cypress.io/app/get-started/why-cypress)
 - [Allure Report Cypress](https://allurereport.org/docs/cypress/)

## Autores

- [@Mateus-de-Morais-Barros](https://github.com/Mateus-de-Morais-Barros)

