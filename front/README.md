# Frontend - Interface do Calendário de Visitas

Bem-vindo à pasta principal do código do "Frontend"! Esta é a interface de usuário (o site) que as pessoas verão no navegador.

Ele é construído com **React** e **TypeScript**, usando **Vite** como ferramenta de "build" (construção).

## O que você precisa ter instalado?

Antes de começar, garanta que você tem essas ferramentas no seu computador:

1.  **Node.js**: É o ambiente que permite rodar JavaScript (e TypeScript) fora do navegador.
2.  **Yarn**: É o "gerenciador de pacotes" que usamos. Ele é responsável por baixar e instalar todas as "peças" (dependências) que o projeto precisa.
3.  **Um editor de código**: Como o VS Code.

---

## Passo a Passo para Rodar (Desenvolvimento)

Siga estas etapas para fazer o site funcionar na sua máquina.

### 1. Navegue até a Pasta

Abra seu terminal ou prompt de comando e certifique-se de que você está **dentro desta pasta `/front`**.
(Onde arquivos como `package.json` e `vite.config.ts` estão localizados).

### 2. Instale as "Peças" (Dependências)

Vamos usar o Yarn para baixar todas as ferramentas que o projeto listou no arquivo `package.json`.

* *No terminal, dentro desta pasta `/front`:*

    ```bash
    yarn install
    ```

* **O que isso faz?** Ele lê o `package.json` e o `yarn.lock` e baixa todas as bibliotecas (como o React, Vite, etc.) para uma nova pasta chamada `node_modules`.

### 3. Rode o Site

Tudo está pronto. Para iniciar o servidor de desenvolvimento, execute:

```bash
yarn dev
```

* Este comando usa o "script" dev definido no package.json, que por sua vez inicia o Vite.

* O Vite é super rápido e irá reiniciar o site no navegador automaticamente sempre que você salvar uma alteração no código.

### 4. Verifique se Funcionou

Com o servidor rodando, o terminal mostrará um endereço local.

Abra seu navegador de internet e acesse: <http://localhost:3000>

(Definimos a porta 3000 no arquivo vite.config.ts).

Você deve ver a página inicial de exemplo, que mostra o texto "PÁGINA INICIAL" e um contador.

---

## Estrutura da Pasta /front (Onde mexer)

Se você precisa adicionar ou alterar algo, aqui está o mapa:

`package.json`: O coração do projeto. Lista todas as "peças" (dependências) e os "atalhos" (scripts) como yarn dev e yarn build.

`vite.config.ts`: Arquivo de configuração do Vite. É aqui que definimos a porta 3000 e outras configurações.

`index.html`: A "porta de entrada" do site. É um HTML simples que possui uma `<div id="root"></div>`. É aqui que o React irá "injetar" todo o site.
`src/`: É aqui que você vai passar 99% do seu tempo. Contém todo o código-fonte do aplicativo.

`main.tsx`: É o arquivo que "liga" o React. Ele diz ao React para pegar o componente App e colocá-lo dentro da `<div id="root"></div>` do index.html.

`App.tsx`: O componente principal do site. É a primeira página que você vê rodando.

`components/`: Pasta para guardar "blocos de montar" reutilizáveis.

`ui/button.tsx`: Um exemplo de componente de botão do shadcn/ui.

`lib/utils.ts`: Funções úteis (como a cn para juntar classes de estilo).

`styles/global.css`: Arquivo de estilo global, onde o Tailwind CSS é importado.

`tsconfig.json` / `tsconfig.app.json`: Arquivos de configuração do TypeScript. Eles definem os "atalhos" de importação, como @/* que aponta para src/.