# Desafio #2 ***Go Beyond 3 (Corebiz)*** **•** ***Front-end →*** Cadastro de vendedores em Javascript, com saída no console 🕵️‍♀️📝

❗❕ Desenvolvimento da segunda atividade *front-end web* proposta para o intensivo ***Go Beyond 3*** da ***Corebiz*** ➡️ construir um código em *Javascript* com o cadastro de vendedores e impressão em forma de tabela no *console*.

🟨 **Escopo:** Faça um programa que leia o *nome de um vendedor*, o seu *salário fixo* e o *total de vendas* efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o *total a receber no final do mês, com duas casas decimais*.

🟩 **Ideia de execução do projeto:**

![Diagrama em branco](https://user-images.githubusercontent.com/72312529/133709807-c92deede-7c6a-4a6c-89b0-d87ad6c72dff.png)

🟪 **Um exemplo simples:**

✈ Inicie dando um ***npm start*** dentro da pasta do projeto (⚠ verifique se realmente está dentro da página do projeto, no caso, estou utilizando o terminal do próprio *vs code* (👗 tema → ***Dracula Refined***));

💫 Passe o nome do vendedor, se você apenas der um *enter* será considerado vazio e o código pedirá novamente pelo nome!

![print1](https://user-images.githubusercontent.com/72312529/133709839-6af6860e-ff55-4bf4-a4b9-efcc4a4939f6.png)

✈ Agora passe o valor do salário fixo do vendedor. Lembrando que o valor não pode ser composto por letras, símbolos, ser vazio e um salário menor que o salário mínimo estipulado (*const SALARIO_MINIMO = 1045;* → arquivo *app.js*).

![print2](https://user-images.githubusercontent.com/72312529/133709852-3916c743-1a0e-473e-9fc1-bacbd97a9557.png)

💫 Então será pedido o valor de vendas do mês, as regras são as mesmas do tópico anterior, apenas desconsiderando o último ponto → salário mínimo, uma vez que o total de vendas pode, até mesmo, ser 0.

✈ Seremos perguntados se gostaríamos de continuar cadastrando, se colocarmos o valor "1", tudo se repetirá e estaremos salvando um novo vendedor, agora, para parar de cadastrar apenas informe qualquer valor diferente de "1".

💫 Assim, quando a resposta for parar (flag != 1), teremos a impressão de todos os vendedores e as informações necessárias (nome, salário fixo, total de vendas no mês em dinheiro, e salário final (fixo com comissão de 15% sobre vendas) impressos em uma tabela no console.

![PRINT3](https://user-images.githubusercontent.com/72312529/133710367-1e3a22fe-d1f8-47ed-8f7d-ac329266cacd.png)

Obrigada! 😘💖