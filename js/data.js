/**
 * PORTFOLIO DATA - Nicolas Guedes
 * Full Stack Developer | IFPB
 * GitHub: https://github.com/DEVguedes1
 */

export const personalData = {
  name: "Nicolas Guedes",
  initials: "NG",
  role: "Full Stack Developer",
  tagline: "Transformando código em eficiência e resultados de negócio",
  quote: "O código é o meio, o resultado é o fim.",
  subheadline: "Desenvolvedor focado em criar soluções que não apenas funcionam, mas que otimizam processos e escalam operações. Cursando Análise e Desenvolvimento de Sistemas no IFPB, com experiência em arquiteturas sólidas de backend em Java e Python, bancos relacionais e interfaces modernas com React e JavaScript.",
  status: "Disponível para Oportunidades & Projetos",
  location: "Pernambuco / Paraíba, Brasil",
  avatar: "assets/avatar/nicolas.jpg",
  email: "nicolasguedesguedes081@gmail.com",
  phone: "+55 (81) 99999-9999",
  whatsappUrl: "https://wa.me/5581999999999?text=Ol%C3%A1%20Nicolas,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!",
  social: {
    github: "https://github.com/DEVguedes1",
    linkedin: "https://www.linkedin.com/in/nicolas-guedes/",
    email: "mailto:nicolasguedesguedes081@gmail.com"
  },
  pokemonSquad: [
    { name: "Greninja", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/658.gif", width: 85 },
    { name: "Umbreon", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/197.gif", width: 55 },
    { name: "Gengar", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif", width: 75 },
    { name: "Rayquaza", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/384.gif", width: 80 },
    { name: "Chimchar", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/390.gif", width: 60 }
  ],
  stats: [
    { number: "+20", label: "Repositórios no GitHub" },
    { number: "Java & Python", label: "Especialidade Backend" },
    { number: "React & JS", label: "Interfaces Modernas" },
    { number: "IFPB", label: "Formação em ADS" }
  ]
};

export const aboutData = {
  title: "Sobre Mim",
  subtitle: "Desenvolvedor focado em criar soluções que otimizam processos e escalam operações",
  experienceHighlights: [
    {
      title: "Graduação em ADS (IFPB)",
      desc: "Cursando Análise e Desenvolvimento de Sistemas no Instituto Federal da Paraíba, com sólida formação em algoritmos, arquitetura de software e engenharia de dados."
    },
    {
      title: "Plataforma & Painel — Seu Gostoso",
      desc: "Atuação no desenvolvimento da plataforma e painel administrativo da Seu Gostoso, implementando regras de negócio, CRUDs completos e fluxos operacionais."
    },
    {
      title: "Landing Pages & Aplicações React",
      desc: "Construção de interfaces modernas, catálogos interativos e páginas de alta conversão em React com foco em usabilidade e performance Mobile-First."
    },
    {
      title: "Automação & APIs Backend",
      desc: "Automação de rotinas e processos com Python e Selenium, aliada ao desenvolvimento de APIs escaláveis em Java (Spring Boot) com persistência relacional."
    }
  ],
  resultsPillars: [
    {
      title: "Eficiência Operacional",
      desc: "Desenvolvimento de automações em Python que reduzem tarefas manuais repetitivas, economizando tempo e minimizando erros."
    },
    {
      title: "Sistemas Escaláveis",
      desc: "APIs e regras de negócio sólidas em Java e Python, garantindo estabilidade no fluxo de dados e facilidade de manutenção."
    },
    {
      title: "Experiência do Usuário (UX/UI)",
      desc: "Criação de interfaces modernas, responsivas e focadas em retenção e conversão (Mobile-First) com React e JavaScript."
    },
    {
      title: "Decisões Baseadas em Dados",
      desc: "Modelagem de bancos de dados relacionais em SQL, assegurando integridade e performance na consulta de dados críticos."
    }
  ]
};

export const skillsCategories = [
  {
    id: "backend",
    title: "Linguagens & Backend",
    description: "Servidores robustos, APIs RESTful e lógica de negócios consistente",
    skills: [
      { name: "Java (Spring Boot)", badge: "Core" },
      { name: "Python", badge: "Linguagem" },
      { name: "JPA / Hibernate", badge: "ORM" },
      { name: "APIs RESTful", badge: "Arquitetura" },
      { name: "Padrões GoF & SOLID", badge: "Design" },
      { name: "Arquitetura em Camadas (MVC)", badge: "Padrão" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & Interfaces",
    description: "Aplicações web modernas, responsivas e orientadas à experiência do usuário",
    skills: [
      { name: "React.js & Vite", badge: "SPA" },
      { name: "JavaScript (ES6+)", badge: "Core" },
      { name: "TypeScript", badge: "Linguagem" },
      { name: "HTML5 Semântico", badge: "Estrutura" },
      { name: "CSS3 Moderno", badge: "Estilização" },
      { name: "Design Responsivo (Mobile-First)", badge: "UX/UI" }
    ]
  },
  {
    id: "database",
    title: "Bancos de Dados",
    description: "Modelagem relacional e integridade de dados corporativos",
    skills: [
      { name: "MySQL", badge: "Relacional" },
      { name: "Modelagem Relacional (SQL)", badge: "Modelagem" },
      { name: "Consultas SQL & Índices", badge: "Queries" },
      { name: "Mapeamento Objeto-Relacional", badge: "Persistência" },
      { name: "Integridade Referencial & Transações", badge: "Estrutura" }
    ]
  },
  {
    id: "tools",
    title: "Automação & Ferramentas",
    description: "Automação de rotinas, versionamento e ambiente de desenvolvimento",
    skills: [
      { name: "Selenium (Automação)", badge: "Scripts" },
      { name: "Git & GitHub", badge: "Versionamento" },
      { name: "Docker", badge: "Containers" },
      { name: "VS Code & Eclipse", badge: "IDEs" },
      { name: "Linux & Shell", badge: "Ambiente" }
    ]
  }
];

export const projectsData = [
  {
    id: "specta",
    name: "Specta",
    title: "Sistema de Gestão para Teatro & Bilheteria",
    category: "fullstack",
    categoryLabel: "Full Stack",
    image: "./assets/projects/specta.png",
    hasDeploy: true,
    deployUrl: "https://specta-one.vercel.app",
    githubUrl: "https://github.com/DEVguedes1/Specta",
    shortDescription: "Plataforma para administração de espaços teatrais, peças em cartaz, contratos de locatários e bilheteria, com controle rigoroso contra conflitos de agenda.",
    problem: "Teatros enfrentam choques frequentes de datas entre produções, falta de controle sobre propostas de locação e fechamento manual demorado de vendas de ingressos.",
    solution: "Desenvolvimento de solução integrada com backend em Java + JPA/Hibernate para garantir regras de negócio rígidas e integridade transacional, aliada a uma interface web em produção na Vercel.",
    technologies: ["Java", "JPA / Hibernate", "JavaScript", "HTML5", "CSS3", "API REST", "Vercel"],
    highlights: [
      "Validação que bloqueia colisões de horários na pauta de espaços",
      "Persistência relacional via JPA/Hibernate com entidades estruturadas",
      "Geração de relatórios financeiros de ingressos e aluguéis",
      "Deploy em produção ativo na Vercel"
    ]
  },
  {
    id: "sismon",
    name: "SISMON",
    title: "Sistema de Gestão de Monitoria (IFPB)",
    category: "backend",
    categoryLabel: "Backend / Desktop",
    image: "./assets/projetos/sismon.png",
    hasDeploy: false,
    deployUrl: null,
    githubUrl: "https://github.com/DEVguedes1/cadastro-de-monitores-Ifpb",
    shortDescription: "Sistema desenvolvido para o IFPB que automatiza processos seletivos de monitoria, cálculo ponderado de classificação e relatórios em PDF.",
    problem: "A seleção de monitores no curso de ADS exigia análise manual de planilhas de CRE e notas individuais, tornando os resultados demorados e propensos a falhas.",
    solution: "Criação do SISMON em Java 21 com arquitetura em camadas: automatiza editais, calcula pontuação ponderada, ordena classificados, gera atas oficiais em PDF e dispara e-mails automáticos.",
    technologies: ["Java 21", "Arquitetura MVC", "Geração de PDF", "Automação de E-mail", "Swing UI"],
    highlights: [
      "Cálculo ponderado automático (Nota da Disciplina vs CRE)",
      "Exportação oficial de relatórios em PDF com 1 clique",
      "Disparo automático de e-mails para os discentes inscritos",
      "Módulos para o Coordenador do edital e para os Alunos"
    ]
  },
  {
    id: "tensorflow-api",
    name: "API com TensorFlow",
    title: "API Genérica para Processamento & Inferência com TensorFlow",
    category: "backend",
    categoryLabel: "Backend / Machine Learning",
    image: "./assets/projetos/tensorflow-api.png",
    hasDeploy: false,
    deployUrl: null,
    githubUrl: "https://github.com/DEVguedes1",
    shortDescription: "API genérica estruturada em Python com TensorFlow para inferência de modelos, desenvolvida para processamento escalável e futura integração com o front-end.",
    problem: "Aplicações que utilizam aprendizado de máquina exigem microsserviços desacoplados que recebam entradas de dados, façam inferências rápidas e retornem previsões estruturadas em JSON.",
    solution: "Construção de uma API REST genérica em Python com TensorFlow, com endpoints de inferência padronizados. A arquitetura foi concebida para permitir futura integração direta com interfaces web front-end.",
    technologies: ["Python", "TensorFlow", "APIs RESTful", "JSON Payloads", "Integração Front-end Planejada"],
    highlights: [
      "Pipeline de inferência estruturado para validação e predição",
      "Arquitetura desenhada para comunicação via HTTP com aplicações web",
      "Desacoplamento que permite conectar novos modelos de forma modular",
      "Backend de inferência pronto, com integração front-end planejada"
    ]
  },
  {
    id: "financeflow",
    name: "FinanceFlow",
    title: "Sistema de Gestão Financeira Pessoal",
    category: "backend",
    categoryLabel: "Backend / Clean Arch",
    image: "./assets/projects/financeFlow.png",
    hasDeploy: false,
    deployUrl: null,
    githubUrl: "https://github.com/DEVguedes1/FinanceFlow",
    shortDescription: "Aplicação de controle orçamentário e fluxo de caixa com validações em tempo real e arquitetura limpa (Clean Architecture).",
    problem: "O controle financeiro feito em planilhas carece de validações de integridade, acumula erros de lançamento e possui navegação pouco prática.",
    solution: "Desenvolvimento com foco em usabilidade e regras isoladas, proporcionando cálculo instantâneo de receitas, despesas e saldo líquido, além de validações estritas de entrada.",
    technologies: ["Java", "Clean Architecture", "Padrão MVC", "Validação de Dados", "POO"],
    highlights: [
      "Dashboard com resumo de receitas, despesas e saldo líquido atualizado",
      "Validação robusta para evitar dados nulos ou inconsistentes",
      "Arquitetura desacoplada e modular para fácil extensão",
      "Interface limpa e focada nas informações essenciais"
    ]
  },
  {
    id: "burguer",
    name: "Cardápio Original Burguer",
    title: "Cardápio Digital Responsivo",
    category: "frontend",
    categoryLabel: "Frontend / Mobile First",
    image: "./assets/projetos/original.jpeg",
    hasDeploy: false,
    deployUrl: null,
    githubUrl: "https://github.com/DEVguedes1/Cardapio_ORIGINAL-BURGUER",
    shortDescription: "Interface web moderna e responsiva para consulta ágil de itens, categorias e valores de hamburgueria artesanal.",
    problem: "Cardápios em arquivos PDF estáticos são desconfortáveis para leitura em celulares e não oferecem visualização fluida de produtos e categorias.",
    solution: "Construção de uma experiência web mobile-first limpa e de carregamento instantâneo, com organização clara por categorias de lanches, bebidas e acompanhamentos.",
    technologies: ["JavaScript (ES6)", "HTML5 Semântico", "CSS3 Flexbox/Grid", "Mobile First", "UI Design"],
    highlights: [
      "Layout adaptado para smartphones e desktops",
      "Organização categorizada com navegação ágil",
      "Carregamento ultra-rápido sem bibliotecas pesadas",
      "Experiência focada na rapidez de consulta do cliente"
    ]
  },
  {
    id: "falcoes-recicla",
    name: "Landing Page — Falcões Recicle",
    title: "Página Institucional & Conscientização Ambiental",
    category: "frontend",
    categoryLabel: "Frontend / Landing Page",
    image: "./assets/projetos/falcoes.png",
    hasDeploy: false,
    deployUrl: null,
    githubUrl: "https://github.com/DEVguedes1/falcoes_recicle",
    shortDescription: "Landing page institucional desenvolvida para divulgar a iniciativa de sustentabilidade, coleta e reciclagem do projeto Falcões Recicla.",
    problem: "Iniciativas ecológicas precisam de canais digitais claros e atrativos para divulgar ações de coleta seletiva e conscientizar a comunidade.",
    solution: "Criação de uma landing page institucional responsiva, com estrutura semântica acessível, apresentação do ciclo de reciclagem e canais de contato comunitário.",
    technologies: ["HTML5 Semântico", "CSS3 Moderno", "Design Responsivo", "UI/UX", "Acessibilidade"],
    highlights: [
      "Estrutura semântica acessível e focada em engajamento",
      "Design responsivo otimizado para celulares",
      "Seções informativas de impacto ecológico e sustentabilidade",
      "Código leve e de fácil manutenção"
    ]
  }
];
