# Capítulo 2 - Tomando decisões
Até o momento conseguimos escrever nossos algoritmos que são executados de forma sequencial. Declaramos variáveis e constantes, lemos dados informados pelo usuários e os atribuímos as variáveis, realizamos cálculos aritméticos e informamos aos usuários seus resultados.

Mas você pode imaginar que também precisamos tomar decisões: verificar se um número informado pelo usuário é par ou ímpar, se uma pessoa é maior de idade, dar um desconto em um produto conforme o tipo de pagamento, enviar um e-mail caso o pagamento não tenha sido realizado e assim por diante.

Para que essas decisões sejam tomada precisamos fazer verificações. Essas verificações podem ser realizadas a partir de expressões artiméticas (que vimos no [capítulo 1](cap1.html)), expressões relacionais, expressões lógicas, ou a mistura de tudo isso.

Os subtópicos deste capítulo são os seguintes:
* [Operadores relacionais](#operadores-relacionais)
* [Operadores lógicos](#operadores-lógicos)
* [Estrutura de decisão se](#estrutura-de-decisao-se)
* [Estrutura de decisão se senão](#estrutura-de-decisao-se-senao)
* [Estrutura de decisão se senão se](#estrutura-de-decisao-se-senao-se)
* [Escolha caso](#escolha-caso)


## Operadores relacionais
Os operadores relacionais utilizados aqui são os mesmos que você aprendeu em matemática e o seu uso em uma expressão retorna um valor **logico** (verdadeiro ou falso), veja a tabela a seguir:
<table class="table">
    <tr>
        <th>Operador</th>
        <th>Símbolo</th>
    </tr>
    <tr>
        <td>Maior</td>
        <td>></td>
    </tr>
    <tr>
        <td>Maior ou igual</td>
        <td>>=</td>
    </tr>
    <tr>
        <td>Menor</td>
        <td><</td>
    </tr>
    <tr>
        <td>Menor ou igual</td>
        <td><=</td>
    </tr>
    <tr>
        <td>Igual</td>
        <td>==</td>
    </tr>
    <tr>
        <td>Diferente</td>
        <td>!=</td>
    </tr>                        
</table>


Dessa forma:
* 3 > 4 é **falso**
* 10 - 1 == 9 é **verdadeiro**
* 10 > 7 + 1 é **verdadeiro**
* (10 + 2) != 12 é **falso**
* 10 + 2 == 12 é **verdadeiro**
* 3 - 3 <= -2 + 1 é **falso**

Tente você:
* a) 5 != 10 - 5 é __
* b) 6 > (3 * 1 + 2) é __
* c) (5 + 2) <= (2 + 5) é __
* d) 0 == 0 + 1 é __
* e) 32 - 2 * 2 >= 18 * 2 é __
* f) 18 * 2 != 36 é __

Respostas: << <a onclick="show('#ope-relacionais', this)">mostrar respostas</a>
<ul id="ope-relacionais" style="display:none">
    <li>a) falso</li>
    <li>b) verdadeiro</li>
    <li>c) verdadeiro</li>
    <li>d) falso</li>
    <li>e) verdadeiro</li>
    <li>f) falso</li>
</ul>


## Operadores lógicos
Em algumas situações necessitamos comparar os resultados de 2 (duas) ou mais expressões e para isso utilizamos os operadores lógicos. Vamos trabalhar com os operadores **ou** e **e** para comparar 2 expressões, e o operador **nao** para negar o resultado de uma expressão.

O operador **ou** é utilizado nos casos em que queremos comparar duas expressões (aritméticas e/ou relacionais) e vai retornar **verdadeiro** caso alguma das expressões seja verdadeira:

{% highlight portugol %}
inteiro  idade = 22
real     salario = 1800.00
logico   pagamento = verdadeiro
caracter sexo = 'F'
{% endhighlight %}

Assim:
* (sexo == 'F') ou (idade == 18) retorna **verdadeiro**
* (idade >= 18) ou (idade <= 30) retorna **verdadeiro**
* (sexo == 'M') ou (idade <= 18) retorna **falso**
* (pagmento == falso) ou (salario > 1000.00) retorna **verdadeiro**
* (salario > 2000.00) ou (pagamento == falso) retorna **falso**

Tabela verdade do operador **ou**:
<table class="table">
    <tr>
        <th>A</th>
        <th>B</th>
        <th>Saída</th>
    </tr>
    <tr>
        <td>V</td>
        <td>V</td>
        <td>V</td>
    </tr>
    <tr>
        <td>V</td>
        <td>F</td>
        <td>V</td>
    </tr>
    <tr>
        <td>F</td>
        <td>V</td>
        <td>V</td>
    </tr>
    <tr>
        <td>F</td>
        <td>F</td>
        <td>F</td>
    </tr>                
</table>

O operador **e** é utilizado nos casos em que queremos comparar duas expressões (artiméticas e/ou relacionais) e vai retorna **verdadeiro** somente se as duas expressões sejam verdadeiras:

{% highlight portugol %}
inteiro  idade = 22
real     salario = 1800.00
logico   pagamento = verdadeiro
caracter sexo = 'F'
{% endhighlight %}

Assim:
* (idade > 18) e (idade <= 30) retorna **verdadeiro**
* (idade < 22) e (salario > 1000.00) retorna **falso**
* (salario >= 1800.00) e (pagamento == falso) retorna **falso**
* (pagamento == verdadeiro) e (salario > 1000.00) retorna **verdadeiro**
* (salario >= 1800.00) e (idade < 30) retorna **verdadeiro**

Tabela verdade do operador **e**:
<table class="table">
    <tr>
        <th>A</th>
        <th>B</th>
        <th>Saída</th>
    </tr>
    <tr>
        <td>V</td>
        <td>V</td>
        <td>V</td>
    </tr>
    <tr>
        <td>V</td>
        <td>F</td>
        <td>F</td>
    </tr>
    <tr>
        <td>F</td>
        <td>V</td>
        <td>F</td>
    </tr>
    <tr>
        <td>F</td>
        <td>F</td>
        <td>F</td>
    </tr>                
</table>

O operador **nao** é utilizado para negar uma expressão (aritmética e/ou relacional):

{% highlight portugol %}
inteiro  idade = 22
real     salario = 1800.00
logico   pagamento = verdadeiro
caracter sexo = 'F'
{% endhighlight %}

Dessa forma:
* nao(idade < 18) retorna **verdadeiro**
* nao(pagamento) retorna **falso**
* nao(sexo == 'F') retorna **falso**
* nao(salario > 2000.00) retorna **verdadeiro**

Tabela verdade do operador **nao**:
<table>
    <tr>
        <th>Entrada</th>
        <th>Saída</th>
    </tr>
    <tr>
        <td>V</td>
        <td>F</td>
    </tr>
    <tr>
        <td>F</td>
        <td>V</td>
    </tr>        
</table>

Nós também podemos misturar os operadores. Mas precisamos levar em consideração as prioridades. Veja a tabela a seguir:
<table>
    <tr>
        <th>Operador</th>
        <th>Prioridade</th>
    </tr>
    <tr>
        <td>ou</td>
        <td>1</td>
    </tr>
    <tr>
        <td>e</td>
        <td>2</td>
    </tr>
    <tr>
        <td>não</td>
        <td>3</td>
    </tr>
</table>

<div class="message-danger">Quanto maior a prioridade maior preferência o operador tem.</div>

Vejamos:
{% highlight portugol %}
inteiro  idade = 18
real     salario = 2400.00
caracter sexo = 'M'
cadeia   endereco = "Rua das Flores nº 1010"
cadeia   nome = "Maria Oliveira"
logico   realizado = falso
{% endhighlight %}

* (sexo == 'M') e nao (idade < 18) retorna **verdadeiro**
* nao((salario < 2400.00) e (sexo == 'M')) retorna **verdadeiro**
* (idade < 10) e (nome = "Maria Oliveira") ou (sexo == 'F') retorna **falso**
* nao(idade == 18) e (idade == 18) retorna **falso**
* (idade == 18) ou nao(idade == 18) retorna **verdadeiro**

Tente você agora:
* a) (sexo == 'M') ou (sexo == 'F')
* b) (realizado == verdadeiro) e (realizado == falso)
* c) (realizado == verdadeiro) ou (realizado == falso)
* d) nao(salario <= 1000) e (salario >= 1000)
* e) (sexo == 'm') ou nao(sexo == 'M')
* f) (realizado == falso) e nao(endereco == "Rua das Flores")

Respostas: << <a onclick="show('#ope-relacionais-completo', this)">mostrar respostas</a>
<ul id="ope-relacionais-completo" style="display:none">
    <li>a) verdadeiro</li>
    <li>b) falso</li>
    <li>c) verdadeiro</li>
    <li>d) verdadeiro</li>
    <li>e) falso</li>
    <li>f) verdadeiro</li>
</ul>


## Estrutura de decisão se
Agora que entendemos as expressões (artiméticas, relacionais e lógicas) podemos tomar decisões. A primeira estrutura de decisão que vamos trabalhar é o **se**.

Pense assim:
* **Se** a idade for maior ou igual a 18 informa ao usuário que o aluno é maior de idade.
* **Se** o número informado for par informa ao usuário que o número é par.
* **Se** o salário estiver entre R$ 1.000,00 e R$ 2.500,00 faz o desconto de 7.5% relativo ao imposto de renda.
* **Se** o sexo informado for 'M' ou 'm' informa que a idade de aposentadoria é 65 anos.
* **Se** o pagamento não foi realizado informa que o usuário está em débito.

No Portugol Studio a estrutura **se** é implementada da seguinte forma:
{% highlight portugol %}
se(expressao_for_verdadeira){
    // Faz alguma coisa
}
{% endhighlight %}

Observe que as '{' chaves delimitam o que será executado pela estrutura de decisão **se** caso a expressão informada for verdadeira.

Agora vamos implementar os exemplos que pensamos no Portugol Studio. Lembre-se de colocar o código dentro da função **inicio**:

{% highlight portugol %}
// se a idade for maior ou igual a 18 informa ao usuário que o aluno é maior de idade
inteiro idade = 12
se (idade >= 18){
    escreva("O aluno é maior de idade")
}
{% endhighlight %}

O comando **escreva()** foi executado? Não, pois a idade é igual a 12, não sendo maior ou igual a dezoito. Mude o conteúdo da variável idade para 22 e veja se agora o comando escreva será executado.

{% highlight portugol %}
// se o número informado for par informa ao usuário que o número é par
inteiro num = 10
se (num % 2 == 0){
    escreva("O número informado é par!")
}
{% endhighlight %}

Agora o comando **escreva()** foi executado, certo? Se dividirmos 10 por 2 temos como resto da divisão 0, indicando que o número é par.

{% highlight portugol %}
// se o salário estiver entre R$ 1.000,00 e R$ 2.500,00 faz o desconto de 7,5% relativo ao imposto de renda.
real salario = 1400.00
se ((salario >= 1000.00) e (salario <= 2500.00)){
    salario = salario - (salario * 0.075)
}
escreva("O salário é de R$ " + salario)
{% endhighlight %}

Qual será o salário impresso ao final? Como é verdadeiro que o salário de R$ 1.400,00 está entre R$ 1.000,00 **e** R$ 2.500,00 será realizado o desconto de 7,5%. Assim, o salário impresso será de R$ 1.295,00. E se o salário fosse de R$ 980,00 o que seria impresso? Seria impresso os mesmos R$ 980,00 pois este é falso para a primeira expressão (salario >= 1000.00) e verdadeiro para a segunda expressão (salario <= 2500.00). E se o salaŕio fosse de R$ 3800,00? Seria impresso os mesmos R$ 3.800,00 pois este é verdadeiro para a primeira expressão (salario >= 1000.00) e falso para a segunda expressão (salario <= 2500.00).

{% highlight portugol %}
// Se o sexo informado for 'M' ou 'm' informa que a idade de aposentadoria é 65 anos
caracter sexo
leia(sexo)
se (sexo == 'M') ou (sexo == 'm'){
    escreva("A idade de aponsentadoria é de 65 anos")
}
{% endhighlight %}

E agora? Bom, vai depender do que o usuário informar através do comando **leia()**. Se o usuário informar o caracter 'M' **ou** o caracter 'm' o comando **escreva()** será executado informando que a idade de aposentadoria é de 65 anos. Caso o usuário informe qualquer outro caracter nada será executado.


## Estrutura de decisão se senão
Já deu pra perceber que em muitos casos queremos tomar decisões e, caso a expressão seja verdadeira, executar alguma coisa. Pois bem, pode ser que em caso contrário, executar outra coisa. Para isso, utilizamos a combinação da estrutura **se**, para que seja executado caso a expressão seja veradeira, com a estrutura **senao**, para que seja executado caso contrário, ou seja, quando a expressão for falsa.

No caso da idade poderíamos querer informar que caso a idade seja maior ou igual a dezoito que o o aluno é maior de idade, e caso contrário, que se for menor que dezoito que o aluno é menor de idade. Para isso vamos extender a estrutura de decisão **se()** com o **senao**:

{% highlight portugol %}
inteiro idade = 12
se (idade >= 18){
    escreva("O aluno é maior de idade")
} senao {
    escreva("O aluno é menor de idade")
}
{% endhighlight %}

O que será impresso? Como a idade é declarada como 12 será verificado que a idade não é maior ou igual a 18, e como o resultado dessa expressão é falso será executado o bloco de código que está dentro do **senao**.

Melhorou muito o nosso exemplo, que antes só informava ao usuário que o aluno era maior de idade. Agora, independente da idade é informado se ele é maior ou menor de idade.

Vamos modificar um pouco nosso algoritmo:
{% highlight portugol %}
inteiro idade
escreva("Informe a idade do aluno: ")
leia(idade)

se (idade >= 18){
    escreva("É maior de idade")
} senao {
    escreva("É menor de idade")
}
{% endhighlight %}

Melhoramos mais ainda o nosso algoritmo, pois agora é o próprio usuário que informa a idade do aluno.

Vamos pensar nos nossos outros exemplos. No caso do algoritmo que verifica se o número informado é par,faria bastante sentido informar caso o número seja ímpar.

{% highlight portugol %}
inteiro num = 10
se (num % 2 == 0){
    escreva("O número informado é par!")
} senao {
    escreva("O número informado é ímpar!")
}
{% endhighlight %}

Se o número informado módulo 2 retornar 0 o número é par, caso contrário o número é ímpar.

Modifique o algoritmo para que o próprio usuário informe o número para verificação.


## Estrutura de decisão se senão se
Até o momento aprendemos a tomar decisões baseado em uma pergunta. Se a resposta para essa pergunta for verdadeira executamos algumas instruções. Caso contrário, **podemos** executar outras instruções. Mas pode ser que você tenha mais de uma expressão para ser verificada se é verdadeira. Nesse caso, utilizamos uma combinação da estrutura **se**, para verificar a primeira expressão, com estruturas **senao se**, para verificar se as demais expressões são verdadeiras. Ao final, você também pode executar instruções caso nenhum das expressões seja verdadeiras com a estrutura **senao**.

Agora queremos que se o salário do funcionário estiver entre R$ 1.000,00 e R$ 2.500,00 faz o desconto de 7,5% relativo ao imposto de renda. Se for maior que R$ 2.500,00 faz o desconto de 12%. Caso contrário (nesse caso menor que R$ 1.000,00) não faz 2% de desconto.

{% highlight portugol %}
real salario = 1400.00
se (salario >= 1000.00) e (salario <= 2500.00){
    salario = salario - (salario * 0.075)
} senao se (salario > 2500.00){
    salario = salario - (salario * 0.12)
} senao {
    salario = salario - (salario * 0.02)
}
escreva("O salário é de R$ " + salario)
{% endhighlight %}

No exemplo da aposentadoria se o sexo informado for 'M' ou 'm' informa que a idade de aposentadoria é 65 anos. Mas queremos que se o sexo informado for 'F' ou 'f' que seja informado que a idade de aposentadoria é 60 anos.

{% highlight portugol %}
caracter sexo
leia(sexo)

se (sexo == 'M') ou (sexo == 'm'){
    escreva("A idade de aponsentadoria é de 65 anos")
} senao se (sexo == 'F) ou (sexo == 'f'){
    escreva("A idade de aposentadoria é de 60 anos")
}
{% endhighlight %}

O sexo lido for 'M' o algoritmo irá informar que a idade de aposentadoria é de 65 anos. Se o sexo lido for 'f' o algoritmo irá informar que a idade de aposentadoria é de 60 anos. Se o sexo lido for qualquer outro caracter diferente de 'F' 'f' 'M' 'm', como por exemplo 'a', nada será executado.


## Escolha caso
Você tem que, conforme a nota informada de um aluno, classifica-lo em conceitos. Assim, se a nota for 5 o conceito será A, se a nota for 4 o conceito será B, se a nota for 3 o conceito será C, se a nota for 2 o conceito será D e se a nota for 1 o conceito será E. Uma solução para este caso é utilizar um conjunto de **se senao** aninhados:

{% highlight portugol %}
inteiro nota
caracter conceito
leia(nota)

se (nota == 5){
    conceito = 'A'
} senao se (nota == 4){
    conceito = 'B'
} senao se (nota == 3){
    conceito = 'C'
} senao se (nota == 2){
    conceito = 'D'
} senao se (nota == 1){
    conceito = 'E'
}

escreva("O aluno é conceito " + conceito)
{% endhighlight %}

Entretant, temos uma estrutura mais elegante para tratar essas situações de escolha: o escolha caso.

{% highlight portugol %}
inteiro nota
caracter conceito
leia(nota)

escolha (nota){
    caso 1:
        conceito = 'A'
    pare
    caso 2:
        conceito = 'B'
    pare
    caso 3:
        conceito = 'C'
    pare
    caso 4:
        conceito = 'D'
    pare
    caso 5:
        conceito = 'E'
    pare                
}
escreva("O aluno é conceito " + conceito)
{% endhighlight %}

<script src="assets/js/script.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
