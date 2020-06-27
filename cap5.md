# Capítulo 5 - Funções
A medida que desenvolvemos nossos algoritmos fica evidente que o código cresce, com dezenas ou centenas de linhas de código, e entender ou modificá-lo fica cada vez mais difícil.

Outra situação é que começamos a repetir muito código. Imagine que você queira realizar uma verificação se um determinado CPF é válido ou inválido. O código para realizar essa verificação pode ser um tanto complexo ou até mesmo grande. Assim, utilizar o recurso `copiar` e `colar` sempre que precisar realizar tal verificação talvez não seja uma boa opção.

Para melhorar nosso código vamos recorrer ao conceito de modularização e utilizar funções para organizar nosso código. Funções são blocos de código que podem ser reutilizados nos nossos algoritmos. Você está escrevendo seu código dentro da função `início` desde que começou a escrever seus algoritmos no Portugol Studio 😯️. Essa é uma função especial que é executada sempre que o algoritmo é executado.

As funções, no Portugol Studio, são declaradas precedidas da palavra `funcao`, e retornam valores, que podem ser `cadeia`, `caracter`, `inteiro`, `lógico` ou `real`, e podem receber parâmetros entre os parênteses. Estes parâmetros, são variáveis que poderão ser manipuladas pela função. Observe o código a seguir:
{% highlight portugol %}
programa
{
	
	funcao real calcularDescontoPrevidencia(real salario)
	{
		real desconto = (salario / 100) * 11
		retorne desconto
	}

	funcao inicio(){
		real salario = 1800.00
		real descontoPrevidencia = calcularDescontoPrevidencia(salario)
		escreva("Com um salário de " + salario + ", haverá um desconto de " + descontoPrevidencia)
    }
}
{% endhighlight %}

Nós declaramos um variável `salario` com o valor 1800.00 (normalmente você vai pedir para o usuário digitar o valor da salário, mas simplificamos para o entendimento), e queremos saber qual será o desconto da Previdência Social.

Assim, criamos uma `descontoPrevidencia`, do tipo `real`, que recebe o `retorno` da função `calcularDescontoPrevidencia`, que também retorna um valor do tipo `real`.

Até aqui identificamos que uma função retorna valores de um tipo, pode receber parâmetros e ser executada em qualquer parte do código, e até dentro dela mesmo (mas é assunto para o próximo capítulo).

No exemplo a seguir, modificamos a função `calcularDescontoPrevidencia` para receber dois parâmetros: o salário e a quantidade de dependentes, e com isso calcular qual será o desconto.
{% highlight portugol %}
programa
{
	
	funcao real calcularDescontoPrevidencia(real salario, inteiro dependentes)
	{
		real desconto = 0.00
		se (dependentes < 2){
			desconto = (salario / 100) * 11
		} senao {
			desconto = (salario / 100) * 10
		}
		retorne desconto
	}

	funcao inicio(){
		real salario = 1800.00
		inteiro dependentes = 2
		real descontoPrevidencia = calcularDescontoPrevidencia(salario, dependentes)
		escreva("Com um salário de " + salario + ", haverá um desconto de " + descontoPrevidencia)
	}
}
{% endhighlight %}

Uma função pode não ter retorno, ou seja, ter um retorno `vazio`, e normalmente você pode encontrar esses tipos de funções nomeadas como `procedimentos`. No exemplo a seguir, vamos criar e utilizar uma função que imprime se o aluno é maior ou menor de idade:
{% highlight portugol %}
programa
{

	funcao vazio maioridade(inteiro idade)
	{
		se (idade >= 18){
			escreva("É maior de idade")
		} senao {
			escreva("É menor de idade")
		}
	}
	
	funcao inicio()
	{
		maioridade(17)
	}
}
{% endhighlight %}

Observe que a função não retornou um valor, mas imprimiu no console se o aluno é maior ou menor de idade.

## Passagem de parâmetros
Até o momento os parâmetros informados em uma função são passados como uma cópia, ou seja, caso haja modificação de seus valores não é alterado o valor da variável original. Essa forma é definida como `passagem de parâmetros por valor`. Vamos utilizar o exemplo a seguir para enteder melhor esse conceito:
{% highlight portugol %}
programa
{

	funcao real precoFinal(real preco)
	{
		preco = preco * 1.5
		retorne preco
	}
	
	funcao inicio()
	{
		real preco = 100.0
		escreva("Preço do produto: " + preco)
		escreva("Preço final do produto: " + precoFinal(preco))
		escreva("Preço do produto: " + preco)
	}
}
{% endhighlight %}

Na função início é declarada uma variável preco, do tipo `real`, que recebe o valor 100.00. Em seguida, imprimimos no console o seu valor e, obviamente, será impresso o valor 100.0.

Em seguida, queremos imprimir o preço final de um produto, que é calculado pela função `precoFinal` que recebe como parâmetro um variável `preco` do tipo `real`. Dentro desta função, modificamos o valor do preco, multiplicando por 1.5 e retornamos seu valor. E a partir do uso desta função imprimimos o preço final que é 150.0.

Por fim, imprimimos novamente o preço, que retorna o valor de 100.0.

Você deve estar se perguntando, mas eu não modifiquei o valor da variável `preco`.

A resposta é não!

A variável `real preco = 100.0` declarada dentro da função início é uma coisa, a variável `real preco` que é o parâmetro da função `precoFinal` é outra coisa.


Entrentanto, há casos em que é necessário que os parâmetros sejam as variáveis de fato. Assim, utilizamos a `passagem de parâmetros por referência`. A única diferença é que utilizamos o `&` no parâmetro da função, veja:
{% highlight portugol %}
programa
{

	funcao real precoFinal(real &preco)
	{
		preco = preco * 1.5
		retorne preco
	}
	
	funcao inicio()
	{
		real preco = 100.0
		escreva("Preço do produto: " + preco)
		escreva("Preço final do produto: " + precoFinal(preco))
		escreva("Preço do produto: " + preco)
	}
}
{% endhighlight %}

Qual serão os valores impressos? 100.0, 150.0 e 150, respectivamente, pois após a execução da função `precoFinal` o valor da variável `preco` foi alterado.

Também podemos passar um vetor ou matriz como parâmetro de uma função. O detalhe é que esse valor será passado, no caso do Portugol Stuio, sempre por *referência*, e não precisamos utilizar o *&* para simbolizar.
{% highlight portugol %}
programa
{

	funcao vazio incrementarIdade(inteiro idades[])
	{
		para (inteiro i = 0; i < 5; i++){
			idades[i] = idades[i] + 1
		}
	}
	
	funcao inicio()
	{
		inteiro idades[5] = {10, 12, 10, 11, 9}
		escreva("Imprimindo os valores do vetor:\n")
		para (inteiro i = 0; i < 5; i++){
			escreva(idades[i] + "\n")
		}

		// Utilizando a função incrementarIdade para alterar, por referência os valores do vetor
		incrementarIdade(idades)
		escreva("Imprimindo os novos valores do vetor:\n")
		para (inteiro i = 0; i < 5; i++){
			escreva(idades[i] + "\n")
		}
	}
}
{% endhighlight %}
