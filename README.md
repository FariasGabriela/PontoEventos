# PontoEventos
Ponto Eventos é sua plataforma de cadastro de eventos


##Projeto Backend

Tecnologias utilizadas:
* Quarkus: Framerwork
* Banco de dados: PostgreSQL
* Flyway: Ferramenta de migração de banco de dados em ambientes JVM


Utilizei uma arquitetura que separa as classes:
1. Service: Contém a lógica da aplicação;
2: Model: Representa as tabelas do banco de dados,  e cada instância desse objeto representa uma linha da tabela, é uma entidade JPA;
3: Controller: Recebe solicitações do usuário, nele ficam os GET, PUT, POST e DELETE;
4: Repository: Para nao criar métodos para operações de CRUD, podemos usar o Repository, herdando um Model dentro dele;
5: Converter: Converte um Model em DTO e vice versa;
6. DTO: Para não devolver as entidades JPA na requisição, usamos um DTO como boa prática para não enviar dados sensível ou confidenciais;

Além disso, há um utils com uma classe de exceção tratada ( detalhar )


# Existe um postman caso queira testar validações que o frontend não possibita


