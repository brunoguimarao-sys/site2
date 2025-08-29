Projeto Overnit - Landing Page
Este repositório contém o código-fonte da landing page do projeto Overnit, uma aplicação web moderna construída com React e servida através de um proxy reverso Nginx. Este documento detalha a arquitetura do projeto, os desafios encontrados e um guia passo a passo para a sua implementação num ambiente Proxmox com contentores Debian.

📜 Visão Geral da Arquitetura
A arquitetura foi desenhada para ser segura, escalável e alinhada com as práticas modernas de DevOps. Ela consiste em dois contentores (CTs) Debian separados no Proxmox:

CT Aplicação (Node.js): Um contentor isolado que contém apenas o código da aplicação. Ele constrói o projeto e serve os ficheiros estáticos numa porta de rede interna (ex: 5000). Não é acessível diretamente pela internet.

CT Proxy Reverso (Nginx): Este contentor fica "à frente" da aplicação. Ele é o único exposto à internet (através de um túnel Cloudflare) e tem a função de receber todo o tráfego e encaminhá-lo de forma segura para o contentor da aplicação.

🚀 Jornada e Desafios Superados
Durante a configuração deste ambiente, enfrentámos alguns desafios comuns que serviram como grandes oportunidades de aprendizagem:

Invalid Host header: O nosso primeiro grande obstáculo. Ao tentar expor o servidor de desenvolvimento (npm start) através de um túnel, aprendemos que, por segurança, ele só aceita requisições de localhost. A solução temporária (DANGEROUSLY_DISABLE_HOST_CHECK=true) ensinou-nos a diferença crucial entre um servidor de desenvolvimento e um de produção.

Servidor de Desenvolvimento vs. Produção: Percebemos que npm start não é adequado para produção. O passo correto foi usar npm run build para gerar ficheiros estáticos otimizados e servi-los com um servidor de produção leve, como o serve.

A Página de Boas-Vindas do Nginx: Ao configurar o Nginx, deparámo-nos com a página padrão. Isto levou-nos a aprender sobre o sistema de sites-available e sites-enabled do Nginx, um mecanismo fundamental para gerir múltiplas configurações de sites num mesmo servidor.

Versionamento com Git (.gitignore): Na ânsia de subir o projeto para o GitHub, esquecemo-nos do ficheiro .gitignore. Isto resultou no envio da pesada pasta node_modules, ensinando-nos na prática a importância de ignorar dependências e ficheiros de build do controlo de versão.

🛠️ Guia de Implementação Passo a Passo
Siga estes passos para clonar e executar o projeto num ambiente Debian.

1. Configuração do Projeto (Frontend e Backend)
Este projeto utiliza Node.js e npm para gerenciar tanto o frontend (React) quanto o backend (Express).

a. Pré-requisitos:
Certifique-se de ter Node.js (versão 18 ou superior) e npm instalados no seu ambiente.

b. Clonar o Repositório:
Clone o repositório do GitHub para o seu ambiente local ou no seu contentor.

# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Entre na pasta do projeto
cd seu-repositorio

c. Configuração Inicial e Instalação de Dependências:
Execute o script de 'setup' para instalar todas as dependências do frontend e do backend.

npm run setup

d. Variáveis de Ambiente:
O projeto utiliza variáveis de ambiente para configurar a URL da API.
- Para desenvolvimento local, crie um arquivo `.env.development` na raiz do projeto com:
  REACT_APP_API_URL=http://localhost:3001
- Para produção, o arquivo `.env.production` deve conter:
  REACT_APP_API_URL=https://api.overnit.com
  (Certifique-se de que este arquivo esteja presente no ambiente de build de produção.)

e. Executando o Projeto:
You can initiate the project in development or production mode with a single command.

# Para iniciar em modo de desenvolvimento (frontend e backend):
npm run start:dev

# Para iniciar em modo de produção (compila o frontend, inicia o backend e serve o frontend):
npm run start:prod
(Certifique-se de ter 'serve' instalado globalmente: 'npm install -g serve')

Nota: Para ambientes de produção em contentores, após um 'git pull' ou 'git clone', você precisará executar 'npm run setup' e, em seguida, 'npm run start:prod' (ou o comando de inicialização do seu contentor que invoca 'npm run start:prod').

2. Configuração do Contentor do Proxy Reverso (Nginx)
a. Instalação do Nginx:
No seu segundo contentor Debian, instale o Nginx.

sudo apt update && sudo apt install nginx -y

b. Criar o Ficheiro de Configuração:
Crie um ficheiro de configuração para o seu site.

sudo nano /etc/nginx/sites-available/overnit.com

c. Cole a Configuração Abaixo:
Este código diz ao Nginx para encaminhar todo o tráfego para o contentor da sua aplicação. Lembre-se de substituir 192.168.0.34 pelo IP real do seu contentor da aplicação.

server {
    listen 80;
    server_name overnit.com www.overnit.com;

    location / {
        proxy_pass http://192.168.0.34:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }
}

server {
    listen 80;
    listen [::]:80;

    server_name api.overnit.com;

    location / {
        proxy_pass http://192.168.0.34:3001; # Aponta para o seu backend
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }
}

d. Ativar a Configuração:
Crie um link simbólico para ativar o seu site e remova a configuração padrão.

# Ative o seu site
sudo ln -s /etc/nginx/sites-available/overnit.com /etc/nginx/sites-enabled/

# Desative o site padrão
sudo rm /etc/nginx/sites-enabled/default

e. Testar e Recarregar o Nginx:
Verifique se não há erros e aplique as alterações.

sudo nginx -t
sudo systemctl reload nginx

Neste ponto, basta apontar o seu túnel do Cloudflare para o IP do contentor Nginx na porta 80, e o seu site estará no ar!
