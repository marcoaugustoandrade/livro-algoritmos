# Capítulo 3 - Laços de repetição
Nesse capítulo iremos aprender a utilizar os laços de repetição, que servem para **repetir** comandos. No caso de precisarmos ler 10 números e calcular sua soma faria sentido escrever 10 comandos **leia()** ou **repetir** o comando 10 vezes?

Vamos estudar 3 laços que podem ser utilizados nas situações em que: 1) sabemos a quantidade de vezes que queremos repetir; 2) quando não sabemos quantas vezes queremos repetir e 3) quando queremos garantir que a repetição ocorrerá pelo menos uma vez.

Os subtópicos deste capítulo são os seguintes:
* [Laço para](#laco-para)
* [Laço enquanto](#laco-enquanto)
* [Laço faca-enquanto](#laco-faca-enquanto)


## Laço para
O laço **para** é utilizado quando você sabe exatamente quantas repetições são necessárias. Há 3 parâmetros essencias informados nele: uma variável para contar a quantidade de repetições, uma condição de parada e uma iteração na variável contador, geralmente incrementando-a ou decrementado-a. No exemplo a seguir vamos escrever 5 vezes a palavra "Iteração" com o seu respectivo número.
{% highlight portugol %}
para (inteiro i = 0; i < 5; i++){
    escreva("Iteração: " + i)
}
{% endhighlight %}

Na primeira parte do laço criamos a variável **i**, do tipo inteiro e inicializada com o valor 0. Em seguida, definimos que o laço será executado enquanto o valor da variável i for menor que 5. Por fim, dizemos que após a execução do laço a variável i será incrementada em 1.

Ao executar o laço acima temos o seguinte resultado:
{% highlight portugol %}
Iteração: 0
Iteração: 1
Iteração: 2
Iteração: 3
Iteração: 4
{% endhighlight %}

Em um teste de mesa teríamos:
* O valor de **i** é **0**. 0 é menor que 10. É impresso no console "Iteração: 0". O valor de i é incrementado em 1, passando a ser 1.
* O valor de **i** é **1**. 1 é menor que 10. É impresso no console "Iteração: 1". O valor de i é incrementado em 1, passando a ser 2.
* O valor de **i** é **2**. 2 é menor que 10. É impresso no console "Iteração: 2". O valor de i é incrementado em 1, passando a ser 3.
* O valor de **i** é **3**. 3 é menor que 10. É impresso no console "Iteração: 3". O valor de i é incrementado em 1, passando a ser 4.
* O valor de **i** é **4**. 4 é menor que 10. É impresso no console "Iteração: 4". O valor de i é incrementado em 1, passando a ser 5.
* O valor de **i** é **5**. 5 não é menor que 5. O laço acaba.

O laço **para** pode ser utilizado para percorrer em ordem crescente ou decrescente, iniciando ou terminando em variadas faixas de valores:
* para **(inteiro i = 2; i < 10; i++)** vai percorrer de 2 até 9, sendo incrementado em 1 unidade.
* para **(inteiro i = 5; i > 0; i--)** vai percorrer de 5 até 1, sendo decrementado em 1 unidade.
* para **(inteiro i = 20; i > 10; i--)** vai percorrer de 20 até 11, sendo decrementado em 1 unidade.


## Laço enquanto
O laço **enquanto** é utilizado quando não sabemos a quantidade de vezes que queremos repetição e estabelecemos uma condição para parada. Sua estrutura básica é a seguinte:
{% highlight portugol %}
enquanto (condição_for_verdadeira){
    // Faça alguma coisa
}
{% endhighlight %}

Por exemplo, se estamos desenvolvendo um algoritmo para ler números informados pelo pelo usuário, enquanto o mesmo não informar um número negativo, e ao final ter a soma desses números, não sabemos quantas vezes esse laço será repetido. Sendo assim, poderíamos implementa-lo da seguinte forma:
{% highlight portugol %}
inteiro numero = 0
inteiro soma = 0
enquanto(numero >= 0){
    escreva("Informe um número: ")
    leia(numero)
    soma = soma + numero
}
escreva("A soma dos números coletados é: " + soma)
{% endhighlight %}

A condição de parada desse algoritmo é **quando for informado um número negativo**, ou seja, menor do que 0.

Um outro exemplo seria desenvolver um algoritmo para ler números informados pelo usuário, e contar quantos números são pares. Uma possível solução seria a seguinte:
{% highlight portugol %}
inteiro numero = 0
inteiro quantidade = 0
enquanto (numero % 2 == 0){
    escreva("Informe um número: ")
    leia(numero)
    se (numero % 2 == 0){
        quantidade++
    }
}
escreva("A quantidade de números pares informados é " + quantidade)
{% endhighlight %}

A codição de parada desse algoritmo é **enquanto forem informados números pares**, ou seja, caso seja informado um número ímpar o laço de repetição acaba.


## Laço faca-enquanto
Em breve.

