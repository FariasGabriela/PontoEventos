# PontoEventos
Ponto Eventos é sua plataforma de cadastro de eventos

**O sistema possui:**
- *Cadastro instituição*: Contém nome e tipo;
- *Cadastro evento*: Contém data de ínicio e data de final. A situação do evento (ativo/inativo) é alterada de acordo com a data de vigência, e é necessário selecionar uma instituição organizadora do evento.


---

##Projeto Backend

Tecnologias utilizadas:
* Quarkus: Framerwork;
* Banco de dados: PostgreSQL;
* Flyway: Ferramenta de migração de banco de dados em ambientes JVM;
* Schedule: Dependecia que possibilita executar tarefas específicas periodicamente;


Utilizei uma arquitetura que separa as classes:
1. Service: Contém a lógica da aplicação;
2: Model: Representa as tabelas do banco de dados,  e cada instância desse objeto representa uma linha da tabela, é uma entidade JPA;
3: Controller: Recebe solicitações do usuário, nele ficam os GET, PUT, POST e DELETE;
4: Repository: Para nao criar métodos para operações de CRUD, podemos usar o Repository, herdando um Model dentro dele;
5: Converter: Converte um Model em DTO e vice versa;
6. DTO: Para não devolver as entidades JPA na requisição, usamos um DTO como boa prática para não enviar dados sensível ou confidenciais;

Para a execução das tarefas periocamento, foi usado uma extensão do quarkus chamada quarkus-scheduler, a qual possibilita a configuração de um horário para executar tarefas periodicamento, nesse caso configurei para meia noite, assim, ao iniciar uma nova data já é feita a validação de quais eventos precisam ser ativados e quais necessitam ser inativados.

~criar tutorial para mudar a hora e fazer testes ~

Além disso, há um utils com uma classe de exceção tratada ( detalhar )


# Existe um postman caso queira testar validações que o frontend não possibita


