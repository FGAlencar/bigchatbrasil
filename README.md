
# BigChatBrasil
## Back-end
### O que é 
Aplicação core para manutenção e execução dos serviços de SMS e WhatsApp

### Para executar
#### Versões necessárias
Java -> 21

Gradlew -> 8.11.1

Docker -> ^24.0.7

Docker-compose -> ^1.20.2

#### Banco de dados
No Bash ou PoweShell, navegar até a pasta "base", onde fica o arquivo docker-compose.yml, responsável por montar o container do PostgreSQL,
e executar o seguinte comando:

docker-compose up -d -> para poder iniciar uma instancia com o PostgreSQL;

Obs 1: Caso queira alterar dados de conexão ou banco de dados, basta alteras as variáveis POSTGRES_* para os dados que quiser;

Obs 2: Caso queira ter acesso aos volumes, basta descomentar as linhas 4 e 5 do arquivo docker-compose.yml

#### Server 
No Bash ou PoweShell, navegar até a pasta "Server", onde fica o backend e executar os seguintes comandos:

./gradlew assemble -> para buildar o projeto;

./gradlew bootRun -> para executar o projeto.


## Front-end
### Para executar
#### Versões necessárias
node -> 18.10.0

yarn -> 1.22.22

#### console-client e user client
No Bash ou PoweShell, navegar até a pasta "console-client" ou "user-client" e executar o seguinte comando:

Obs 1: Caso use o nvm, basta usar o comando "nvm use" para usar a versão correta do node

yarn  -> para baixar as dependencias

yarn start -> para executar o projeto 
