#imagem oficial da microsoft 
FROM node:20-bookworm

#Diretorio de trabalho dentro do container
WORKDIR /app

#Copia apenas os arquivos de dependencias primeiro para o container
COPY package*.json ./

#Instala as dependencias do projeto
RUN npm ci 

#Pede para o Playwright baixar os navegadores e instalar as dependências do Linux manualmente
RUN npx playwright install --with-deps

#Copia o restante dos arquivos do projeto para o container
COPY . .

#comando para rodar o projeto
CMD ["npx", "playwright", "test"]