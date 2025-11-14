# Calendário de Visitas - FCJA (Frontend)

Este repositório contém o código do "frontend" (a parte da frente, a interface) do sistema de agendamento de visitas da Fundação Casa José Américo (FCJA).

## O que é isso?

Continuando a analogia do restaurante:

- A "cozinha" (o **backend**, o outro projeto) prepara a comida e gerencia o estoque (banco de dados).
- Este projeto é o **cardápio** e o **garçom**. É a parte visual com a qual o usuário interage no navegador.

Este projeto é o site em si. É ele que:

- Mostra as datas disponíveis, os botões e os formulários.
- "Conversa" com o backend para fazer pedidos (como "quero agendar uma visita").
- Recebe as respostas da "cozinha" (backend) e as exibe de forma bonita para o usuário.

## Tecnologias Principais

- **React:** A "biblioteca" principal para construir a interface (os "blocos de montar" do site).
- **TypeScript:** Uma "camada" sobre o JavaScript que nos ajuda a escrever um código mais seguro, pegando erros antes que eles aconteçam.
- **Vite:** A ferramenta que "constrói" o site e o atualiza no navegador em tempo real enquanto programamos.
- **shadcn/ui:** Uma coleção de componentes de interface (botões, caixas de diálogo, etc.) prontos e bonitos.

## Estrutura do Projeto

- `/front`: Contém todo o código-fonte do site (o cardápio e o garçom). **É aqui que a maior parte do trabalho acontece.**
- `LICENSE`: A licença de uso do projeto (MIT).

## Como Começar

Para entender como instalar e rodar o projeto, vá para a pasta principal do código:

- **[front/README.md](front/README.md)** (Clique aqui ou abra o arquivo na pasta `front`)

Esse arquivo tem o passo a passo detalhado.
