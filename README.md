# FIAP Landing Page

Este projeto faz parte do desafio técnico da FIAP. Consiste em uma Landing Page desenvolvida com Next.js e TypeScript, utilizando SCSS para estilização e responsividade. O objetivo é fornecer uma base visual moderna e eficiente para apresentação de produtos, serviços ou campanhas.

## Funcionalidades

- Layout responsivo e moderno
- Animações de rolagem e transição
- Uso de fontes personalizadas (Gotham, PT Sans)
- Estrutura modular de componentes
- Otimização de imagens e assets

## Estrutura do Projeto

```
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
README.md
tsconfig.json
public/
  fonts/
  img/
src/
  app/
    globals.scss
    layout.tsx
    page.tsx
    ui/
  assets/
    img/
    svg/
  context/
  styles/
    breakpoints.scss
    variables.scss
```

## Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Como rodar o projeto

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse `http://localhost:3000` no navegador para visualizar a landing page.

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a build de produção
- `npm run start` — Inicia o servidor em modo produção
- `npm run lint` — Executa o linter

## Personalização

- As variáveis de estilo estão em `src/styles/variables.scss`.
- Os breakpoints de responsividade estão em `src/styles/breakpoints.scss`.
- Imagens e fontes podem ser adicionadas nas pastas `public/img` e `public/fonts`.

## Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por Bianca Shiromoto.
