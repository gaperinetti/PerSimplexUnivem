# PersimplexUnivem

## INTRODUÇÃO
Persimplex é capaz de resolver problemas de programação linear, possibilitando o usuário maximizar ou minimizar modelos de simplex, porém possibilita apenas restrições do tipo "<=". O mesmo apresenta o cálculo somente com o resultado final ou passo a passo, possibilitando um maior estudo sobre o problema, bem como a demonstração da analise de sensibilidade.

Os alunos responsáveis pelo projeto foram:
- Gabriel Valente Perinetti	RA: 52131-0
- Fábio Gregorio Cupertino	RA: 39880-2
- Pedro Henrique Abelha		RA: 47047-3
- Samuel Pereira de Oliveira	RA: 54982-7

## NOTA DE RELEASE A SER PUBLICADO
- Algoritmo Simplex para problemas de maximização
- Algoritmo Simplex para problemas de minimização
- Quantidade especifica de iterações
- É exibido o resultado final direto ou passo a passo das tabelas geradas pelo Simplex
- Tabela de Sensibilidade.

## PROBLEMAS CONHECIDOS E LIMITAÇÕES
- Em cada variável da função objetivo e das restrições deve conter apenas o número, sem a adição do 'x', separando os números por ';' e caso tenha alguma variável nula, é necessário inserir o 0.
- As restrições devem ser estritamente menores ou iguais a 0 (<=);
- MAX e MIN
- Os pesos devem ser inteiros

## DATAS IMPORTANTES

Data |	Evento
--------- | ------
09/05/2017 |	Início do planejamento
10/05/2017 |	Analises de projetos e forks
17/05/2017 |	Implementações minimizar e restrições.
23/05/2017 |	Fase testes
25/05/2017 |	Fim do teste
26/05/2017 |	Implementações maximizar / passo a passo
28/05/2017 |	Fase testes
31/05/2017 |	Fim do teste
31/05/2017 |	Liberação do Simplex na web
31/05/2017 |	Implementação sensibilidade / remocão restriçoes
03/06/2017 |	Implementação metodo apenas resultado final.
05/06/2017 |	Formulando nota de liberação do projeto
06/06/2017 |	Entrega final do projeto

## COMPATIBILIDADE

Requisitos | Ferramentas
--------- | ------
Navegadores	Browser | 	Mozila Firefox, Chrome, Internet Explorer
Sistema operacional | 	Ubuntu, Windows, MacOS.
	
Tecnologias | Ferramentas
--------- | ------
Front/Back-End     | HTML, CSS, Javascript/JavaScript
Editor de Texto  | Notepad++
Design pattern  | --
Servidor Web    | http://persimplexunivem.rf.gd/

## PROCEDIMENTO E ALTERAÇAO DE CONFIGURAÇÃO DO AMBIENTE
O Persimplex foi implantado através do web hosting InfinityFree (https://infinityfree.net/), nele criamos uma conta e através de FTP transferimos os arquivos, utilizamos o FileZilla.

## ATIVIDADES REALIZADAS NO PERÍODO

Código | Título | Tarefa | Situação | Observação 
--------- | ------ | -------| -------| -------
1 | Calcular | Montar a Tabela programação dinâmica, e possibilitar o usuário a calcular o algoritmo simplex. | Concluído |
2 | Adição de itens | Possibilitar o usuário a adicionar inputs para os itens. | Concluído  
3 | Maximizar | Montar a Tabela Simplex, e possibilitar o usuário a maximizar modelos de simplex com sistemas lineares. | Concluído | Apenas restrições de “<=”
4 | Adição de restrições | Possibilitar o usuário a adicionar inputs para maiores números de restrições. | Concluído |
5 | Demonstrar passo a passo | Demonstrar ao usuário as alterações na tabela causada pelas iterações do método simplex. | Concluído|
6  | Minimizar | Montar a Tabela Simplex, e possibilitar o usuário a minimizar modelos de simplex com sistemas lineares. |Concluído| Apenas restrições de “<=”
7 | Tabela de sensibilidade | Demonstrar ao usuário a tabela de sensibilidade. | Concluído |
8 | Remoção de restrições | Possibilitar o usuário a remover inputs para menores números de restrições. | Concluído|
9  | Calcular apenas Resultado Final | Não trazer o passo a passo das tabelas, apenas o resultado final. |Concluído| 

