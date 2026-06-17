# Convite e Gestão de Casamento

> Uma plataforma digital completa e elegante projetada para facilitar a interação dos convidados com o evento, oferecendo ferramentas práticas para os noivos gerenciarem presentes, arrecadações e mensagens de carinho.

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=flat&logo=vue.js&logoColor=4FC08D)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)

## Visão Geral

Planejar um casamento exige muita organização. Este sistema foi desenvolvido para centralizar a comunicação com os convidados através de um convite digital interativo. Além disso, conta com uma vitrine virtual de presentes e um **Painel de Gestão Exclusivo** (CMS) para os noivos administrarem as cotas, recados e o valor total arrecadado de forma segura.

### Funcionalidades Principais

* **Convite Interativo & Guia Local:** Cronômetro regressivo dinâmico para a data do evento e um guia personalizado de hospedagem e alimentação na cidade (Elói Mendes - MG).
* **Vitrine de Presentes Inteligente:** Lista de presentes com filtros dinâmicos (categorias, maior/menor valor) e integração visual para chave Pix.
* **Mural de Recados:** Formulário para os convidados deixarem mensagens para os noivos no momento de presentear, contando inclusive com a opção de "envio anônimo".
* **Painel Administrativo (Dashboard):** Área restrita protegida por autenticação para gestão completa do sistema.
* **CRUD de Presentes:** Criação, edição, exclusão e ocultação de presentes, além de controle de categorias e destaques na página inicial.
* **Segurança Refinada:** Proteção de rotas (Navigation Guards) via Vue Router, garantindo que o painel seja acessado apenas com credenciais válidas do Firebase Auth.

## Tecnologias e Ferramentas

* **Frontend:** Vue.js 3 (Composition API), Vite, Vue Router.
* **Estilização:** Tailwind CSS (com variáveis customizadas para paleta de cores e tipografia temática).
* **Backend (BaaS):** Firebase (Firestore Database para persistência e Firebase Authentication para controle de acesso).

## Como executar o projeto localmente

Para rodar este projeto em sua máquina, você precisará do [Node.js](https://nodejs.org/en/) instalado e de um projeto configurado no Firebase.

**1. Clone o repositório:**
```bash
git clone [https://github.com/LauroBreno/convite-casamento-digital.git](https://github.com/LauroBreno/convite-casamento-digital.git)
```

**2. Acesse a pasta do projeto:**
cd convite-casamento-digital

**3. Instale as dependências:**
npm install

**4. Configure as Variáveis do Firebase:**
No arquivo firebase.js, substitua as chaves do objeto firebaseConfig pelas credenciais do seu próprio projeto criado no console do Firebase.

**5. Execute o servidor de desenvolvimento:**
npm run dev

## Autor
Criado por Lauro Breno
Da Engenharia Química para o Desenvolvimento de Software.