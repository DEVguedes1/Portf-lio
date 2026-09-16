# 🚀 Portfólio Profissional — Nicolas Guedes (Full Stack Developer)

> Single Page Application (SPA) moderna, responsiva e de alta conversão, desenvolvida com estética *dark tech* premium, microinterações e dados reais integrados diretamente do perfil do GitHub [@DEVguedes1](https://github.com/DEVguedes1).

---

## 🌟 Visão Geral do Projeto

Este portfólio foi concebido e estruturado segundo as melhores práticas de Engenharia Front-end e UI/UX:
- **Design Dark Tech**: Paleta balanceada em tons de grafite e slate escuro, com acentos de luz em ciano elétrico e violeta tecnológico.
- **Glassmorphism & Microinterações**: Efeito de vidro com desfoque (*backdrop-filter*), cards com elevação e *glow borders* dinâmicos ao passar o mouse.
- **Canvas de Partículas no Hero**: Rede sutil de nós e conexões gerada via HTML5 Canvas com interação fluida de proximidade do cursor.
- **Projetos Reais do GitHub**: Apresentação detalhada dos principais repositórios de Nicolas Guedes (*Specta, SISMON/IFPB, FinanceFlow, TaskFlow API, Cardápio Original Burguer e Order System*).
- **Filtro Dinâmico de Projetos**: Alternância instantânea entre categorias (*Todos, Full Stack, Backend/Java, Frontend/UI*).
- **Modal de Detalhes Técnicos**: Janela com visualização aprofundada do problema resolvido, arquitetura de software, tecnologias empregadas, link para o código no GitHub e acesso ao deploy online.
- **Conversão Otimizada**: Botão de cópia rápida do e-mail com notificação *Toast*, link direto para o WhatsApp e formulário de contato integrado.

---

## 🛠️ Tecnologias & Arquitetura

- **Core**: HTML5 Semântico com tags estruturais (`header`, `nav`, `main`, `section`, `article`, `footer`) otimizadas para SEO e acessibilidade.
- **Estilização**: CSS3 Moderno com Design System baseado em variáveis CSS (Design Tokens), aceleração gráfica por GPU e responsividade completa (Mobile, Tablet e Desktop).
- **Lógica & Reatividade**: JavaScript modular moderno (ES Modules):
  - `js/data.js`: Centraliza dados de perfil, habilidades, estatísticas e projetos reais.
  - `js/main.js`: Orquestra renderização dinâmica, partículas interativas, scrollspy, modais e feedback ao usuário.
- **Ícones**: [Lucide Icons](https://lucide.dev/) para interface limpa e minimalista.
- **Tipografia**: Fontes `Outfit`, `Inter` e `JetBrains Mono` via Google Fonts.

---

## 📂 Estrutura de Arquivos

```
portifolio/
├── index.html                   # Estrutura completa da SPA e meta tags de SEO
├── vercel.json                  # Cabeçalhos de segurança e cache para Vercel
├── README.md                    # Documentação do projeto e guia de deploy
├── css/
│   └── style.css                # Design system, tokens, glassmorphism e animações
├── js/
│   ├── data.js                  # Dados dinâmicos de projetos, habilidades e contato
│   └── main.js                  # Lógica interativa, canvas, filtros, modais e toasts
└── assets/
    ├── avatar/
    │   └── nicolas.jpg          # Foto de perfil de Nicolas Guedes
    └── projects/
        ├── specta.jpg           # Preview do sistema Specta
        ├── sismon.jpg           # Preview do sistema SISMON (IFPB)
        ├── financeflow.jpg      # Preview do sistema FinanceFlow
        ├── taskflow.jpg         # Preview da API TaskFlow
        └── burguer.jpg          # Preview do Cardápio Original Burguer
```

---

## 💻 Como Rodar Localmente

Por se tratar de uma SPA moderna construída com ES Modules, basta servi-la com qualquer servidor HTTP local:

### Opção 1: Usando Node.js (Recomendado)
```bash
# Na pasta do projeto:
npx serve .
# Ou com http-server:
npx http-server . -p 3000
```
Abra o navegador em `http://localhost:3000`.

### Opção 2: Extensão Live Server (VS Code)
1. Clique com o botão direito no arquivo `index.html`.
2. Selecione **"Open with Live Server"**.

---

## 🚀 Como Fazer Deploy

### 1. Deploy na Vercel (Recomendado — 1 Clique)
1. Crie um repositório no seu GitHub (ex: `portifolio`).
2. Faça commit e push dos arquivos:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio modernizado de alta conversao"
   git branch -M main
   git remote add origin https://github.com/DEVguedes1/portifolio.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com), clique em **"Add New Project"** e importe o repositório `portifolio`.
4. O Vercel detectará automaticamente como projeto estático e o arquivo `vercel.json` cuidará do resto!

### 2. Deploy no GitHub Pages
1. Acesse o repositório no GitHub.
2. Vá em **Settings** > **Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/(root)`.
4. Clique em **Save**. O site estará no ar em poucos segundos em `https://DEVguedes1.github.io/portifolio`.

---

## ✏️ Como Personalizar

- **Adicionar ou Atualizar Projetos**: Abra o arquivo `js/data.js` e edite o array `projectsData`. Novos projetos aparecerão automaticamente no grid e no modal.
- **Atualizar Habilidades**: No arquivo `js/data.js`, ajuste o array `skillsCategories`.
- **Alterar Links de Contato**: Edite as propriedades em `personalData` no `js/data.js`.
