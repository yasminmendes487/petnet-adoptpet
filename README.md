# Petnet

|O Petnet é uma aplicação web desenvolvida que ajuda a modernizar e simplificar o processo de adoção. O objetivo é gerenciar de forma eficiente os dados dos animais disponíveis para adoção, facilitar o cadastro de interessados e monitorar o processo de adoção. O sistema permite o cadastro e visualização de pets, o registro de adotantes e o acompanhamento de adoções, proporcionando uma experiência mais acessível e organizada tanto para o abrigo quanto para os adotantes.|
|:--|

---
# Tecnologias Utilizadas ⚙
Este projeto foi desenvolvido utilizando uma combinação de tecnologias que garantem uma aplicação escalável e de fácil manutenção. As ferramentas e frameworks escolhidos são fundamentais para a criação de uma API eficiente, com o banco de dados e uma estrutura sólida para o back-end da aplicação.

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,nodejs,express,prisma,postgresql" />
  </a>
</p>

- **JavaScript**: Linguagem de programação utilizada para construir uma aplicação dinâmica.
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor, permitindo o desenvolvimento de aplicações escaláveis.
- **Express**: Framework para Node.js que facilita a criação de APIs RESTful, tornando o gerenciamento de rotas e requisições mais simples e eficiente.
- **Prisma**: ORM que possibilita uma interação com o banco de dados de forma mais intuitiva e segura.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar dados de maneira estruturada e confiável, garantindo consistência nas informações dos pets e adotantes.

---
# Estrutura do Projeto 📐

## Estrutura do Projeto
A estrutura do projeto foi organizada de maneira a facilitar a escalabilidade e a manutenção do código. Cada diretório possui uma responsabilidade específica, permitindo que os componentes da aplicação sejam facilmente localizados e modificados conforme necessário. A divisão modular do código ajuda a manter a aplicação limpa e bem organizada.


![image](https://github.com/user-attachments/assets/838531e5-91cc-4309-acab-ae5b8d9ef645)

- **Controllers**: Contém a lógica dos endpoints da API, processando as requisições e retornando as respostas.
- **Database**: Configura a conexão com o banco de dados usando o Prisma.
- **Routes**: Define as rotas da API e as associa aos métodos dos controladores.
- **Teste**: Inclui arquivos para testar a conexão com o banco e outras funcionalidades auxiliares.
- **Utils**: Funções auxiliares utilizadas em várias partes do projeto, como manipulação de dados.
- **Index.js**: Arquivo principal que inicializa a aplicação e configura o servidor.
  
---

# Endpoints da API

## Pets
### 1. **Cadastrar Pet**
- **Método**: `POST`  
- **URL**: `/api/pets`  
- **Descrição**: Cadastra um pet disponível para adoção.

### 2. **Obter Todos os Pets**
- **Método**: `GET`  
- **URL**: `/api/pets`  
- **Descrição**: Retorna todos os pets cadastrados.

### 3. **Obter Pet por ID**
- **Método**: `GET`  
- **URL**: `/api/pets/{id}`  
- **Descrição**: Retorna as informações de um pet específico.

### 4. **Atualizar Pet**
- **Método**: `PUT`  
- **URL**: `/api/pets/{id}`  
- **Descrição**: Atualiza os dados de um pet existente.

### 5. **Deletar Pet**
- **Método**: `DELETE`  
- **URL**: `/api/pets/{id}`  
- **Descrição**: Deleta um pet do banco de dados.

## Adotantes
### 6. **Cadastrar Adotante**
- **Método**: `POST`  
- **URL**: `/api/adotantes`  
- **Descrição**: Registra um adotante interessado em adotar um pet.

### 7. **Obter Todos os Adotantes**
- **Método**: `GET`  
- **URL**: `/api/adotantes`  
- **Descrição**: Retorna todos os adotantes cadastrados.

### 8. **Obter Adotante por ID**
- **Método**: `GET`  
- **URL**: `/api/adotantes/{id}`  
- **Descrição**: Retorna as informações de um adotante específico.

### 9. **Atualizar Adotante**
- **Método**: `PUT`  
- **URL**: `/api/adotantes/{id}`  
- **Descrição**: Atualiza as informações de um adotante existente.

### 10. **Deletar Adotante**
- **Método**: `DELETE`  
- **URL**: `/api/adotantes/{id}`  
- **Descrição**: Deleta um adotante do banco de dados.