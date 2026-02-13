# Chat Assistente UI

Este projeto apresenta uma interface de chat moderna e minimalista, desenvolvida para simular a interação com assistentes de IA. O layout é focado em uma experiência de usuário limpa, utilizando renderização de Markdown e sanitização de dados para segurança.

---

## Funcionalidades

* **Interface de Mensagens**: Área dedicada para exibição dinâmica de mensagens enviadas e recebidas.
* **Input Interativo**: Campo de texto estilizado com botão de envio contendo ícone em SVG.
* **Renderização de Markdown**: Integração com a biblioteca `marked.min.js` para permitir que as respostas do chat exibam formatação rica (negrito, listas, blocos de código).
* **Segurança (Sanitização)**: Uso da biblioteca `DOMPurify` para limpar o conteúdo HTML e prevenir ataques de XSS (Cross-Site Scripting) ao renderizar mensagens.

---

## Tecnologias Utilizadas

O projeto utiliza tecnologias web essenciais e bibliotecas focadas em performance:

* **HTML5**: Estruturação semântica dos elementos do chat.
* **CSS3**: Estilização customizada (referenciada via `style.css`).
* **JavaScript (ES6+)**: Lógica de manipulação do DOM e integração de bibliotecas.
* **Marked.js**: Conversor de Markdown para HTML em tempo real.
* **DOMPurify**: Sanitizador de HTML para garantir que o conteúdo renderizado seja seguro.

---

## Estrutura de Arquivos

* `index.html`: Contém a estrutura da janela de chat e a importação dos scripts.
* `style.css`: Define a aparência do container, balões de mensagem e input.
* `script.js`: Gerencia o envio de mensagens e a renderização no histórico.

---

## Como Utilizar

1.  Certifique-se de que os arquivos `style.css` e `script.js` estejam no mesmo diretório que o `index.html`.
2.  Abra o `index.html` em seu navegador.
3.  Digite mensagens no campo de input para visualizar a interação na interface.

---
Projeto desenvolvido para estudos de Front-end focado em interfaces de comunicação e segurança de dados no cliente.
