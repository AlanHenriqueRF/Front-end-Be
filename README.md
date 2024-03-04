# Teste Técnico Front-end BeMobile

Este é um repositório para o Teste Técnico em Front-end da BeMobile. O projeto foi desenvolvido com o intuito de criar uma visualização de uma tabela com dados fornecidos por uma API simulada. O objetivo principal é demonstrar habilidades em desenvolvimento front-end.



# Como Rodar o Projeto
### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* Git
* Node.js
* Yarn ou outro gerenciador de pacotes de sua preferência

### Passos

1. Clone este repositório em sua máquina local: 
    ```
    git clone https://github.com/BeMobile/desafio-front-end.git
    ```

2. Instale as dependências do projeto:
    ```
    npm install
    ```

3. Configure o arquivo .env :

    3.1. Instale o pacote json-server caso ainda não tenha:

    ```
    npm install -g json-server
    ```
    3.2. Para consumir a API, é necessário ter um arquivo db.json no diretório onde o json-server está sendo executado. Abaixo está um exemplo simples do conteúdo do arquivo db.json:

    ```
    {
        "employees": [
            {
            "id": 1,
            "name": "João",
            "job": "Back-end",
            "admission_date": "2019-12-02T00:00:00.000Z",
            "phone": "5551234567890",
            "image": "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
            },
            {
            "id": 2,
            "name": "Roberto",
            "job": "Front-end",
            "admission_date": "2020-03-12T00:00:00.000Z",
            "phone": "5550321654789",
            "image": "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"
            }
        ]
    }
    ```

    3.3. Inicie o json-server para consumir a API simulada:
    ```
    json-server --watch db.json
    ```
    
4. Inicie o projeto:

    ```
    npm run dev
    ```
5. Acesse o projeto pelo link fornecido pelo Vite.

# Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

* React.js: Para construir a interface do usuário.
* JavaScript: Linguagem de programação utilizada para a lógica do aplicativo.
* json-server: Para criar uma API simulada e fornecer dados para a aplicação.
* styled-components: Para estilização dos componentes.
* axios: Para realizar requisições HTTP para a API simulada.

# EmployesPage
A página EmployesPage é a única do projeto e foi desenvolvida para exibir informações detalhadas dos funcionários. Ela inclui dados como foto, nome, cargo, data de admissão e telefone. A página é responsiva, adaptando-se tanto para dispositivos móveis quanto para desktop. Além disso, há um input de pesquisa que permite filtrar a tabela por nome, telefone ou cargo dos funcionários.

# Deploy

Você pode acessar o deploy do projeto neste link https://be-front-end.vercel.app/.

