
/*
A. Para etiquetar uma remessa de correspondência, crie uma query que apresente o nome da
pessoa e seu endereço. Importante: Apenas pessoas com endereço devem ser exibidas na
lista;
*/

select nome, Enderecos.cep, logradouro, bairro, cidade, uf, numero, complemento  from Pessoas
JOIN Enderecos on Pessoas.id = Enderecos.id_pessoa
JOIN Cep on Enderecos.cep = Cep.cep;

/*
B. Para que possamos alertar a equipe responsável, crie uma query que identifique eventuais
pessoas que não possuam endereço;
*/

select nome from Pessoas
where id not in (
	select Pessoas.id from Pessoas
	JOIN Enderecos on Enderecos.id_pessoa = Pessoas.id -- Seleciona Pessoas que possuem endereço
); -- Seleciona Pessoas quenão estão entre as que possuem endereço

/*
C. Levando em conta que todos os campos do cadastro dos dados pessoa são obrigatórios, crie
uma query que apresente as pessoas que possuem erro em seu cadastro, para que a equipe
possa complementá-lo;
*/

select * from Pessoas
where 
	(nome is null) or
    (rg is null) or 
    (data_nascimento is null) or
    ( sexo is null);


/*
D. Monte uma lista telefônica com “Nome”, “Sexo”, “Telefone” e “Contato”, onde telefone deve
exibir celular ou fixo. Importante: Todas as pessoas devem ser exibidas na lista, mesmo quem
não tenha telefone;
*/
select 
	nome, sexo, valor as telefone, contato
from Pessoas
LEFT JOIN Contatos
on Pessoas.id = Contatos.id_pessoa and Contatos.tipo in ("Celular", "Fixo");

/*
E. Crie uma query que apresente as pessoas com mais de 1 filho;
*/

select Pessoas.nome, count(*) as filhos from Pessoas
join Dependentes
on Dependentes.id_pessoa = Pessoas.id
GROUP BY Pessoas.id
having filhos > 1;