export const projects = [
  {
    id: 1,
    title: "Carteira Digital API",
    image: "/Frames/CarteiraDigital.png",
    description:
      "API RESTful completa para sistema de pagamentos digitais. Permite cadastro de usuários, gestão de saldo, transferências entre contas e consulta de histórico de transações. Desenvolvida com foco em segurança, escalabilidade e boas práticas de arquitetura backend.",
    link: "https://github.com/degu0/Api_Carteira_Digital",
    languages: [
      { src: "/logo/typscript.png", alt: "TypeScript" },
      { src: "/logo/node.svg", alt: "Node.js" },
      { src: "/logo/Fastify.png", alt: "Fastify" },
      { src: "/logo/SQLite.png", alt: "SQLite" },
    ],
  },
  {
    id: 2,
    title: "Dose Certa Aplicativo",
    image: "/Frames/DoseCerta.png",
    description:
      "Aplicativo mobile integrado a dispensador automático de medicamentos. Auxilia na adesão ao tratamento médico, reduz erros de dosagem e facilita a rotina de pacientes que precisam de cuidados contínuos. Interface intuitiva e notificações em tempo real.",
    link: "https://github.com/degu0/DispenserApp",
    languages: [
      { src: "/logo/typscript.png", alt: "TypeScript" },
      { src: "/logo/react.svg", alt: "React Native" },
      { src: "/logo/csharp.svg", alt: "C#" },
    ],
  },
  {
    id: 3,
    title: "Feira Inteligente",
    image: "/Frames/Feira.png",
    description:
      "Sistema web para localização inteligente de barracas e produtos em feiras. Oferece navegação por categorias, sugestões personalizadas e rotas otimizadas. Diferencia entre perfis de turistas, moradores e feirantes, com funcionalidades específicas para cada usuário.",
    link: "https://github.com/degu0/Feira-front",
    languages: [
      { src: "/logo/typscript.png", alt: "TypeScript" },
      { src: "/logo/react.svg", alt: "React" },
      { src: "/logo/tailwind.svg", alt: "Tailwind" },
      { src: "/logo/PostgresSQL.png", alt: "PostgreSQL" },
    ],
  },
  {
    id: 4,
    title: "Help Desk API",
    image: "/Frames/HelpDesk.png",
    description:
      "API REST robusta para gerenciamento empresarial de chamados de suporte. Sistema completo de tickets, categorização automática, priorização inteligente e acompanhamento de SLA. Arquitetura escalável preparada para alto volume de requisições.",
    link: "https://github.com/degu0/HelpDeskApi",
    languages: [
      { src: "/logo/csharp.svg", alt: "C#" },
      { src: "/logo/NETcore.png", alt: ".NET" },
      { src: "/logo/PostgresSQL.png", alt: "PostgreSQL" },
      { src: "/logo/Docker.png", alt: "Docker" },
    ],
  },
  {
    id: 5,
    title: "Feira Inteligente TOTEM",
    image: "/Frames/FeiraTotem.png",
    description:
      "Interface touchscreen interativa para totens de autoatendimento em feiras. Permite que visitantes localizem lojas rapidamente através de navegação por categorias, filtros avançados e mapa interativo. Design otimizado para uso em ambientes públicos.",
    link: "https://github.com/degu0/Feira-front-totem",
    languages: [
      { src: "/logo/typscript.png", alt: "TypeScript" },
      { src: "/logo/react.svg", alt: "React" },
      { src: "/logo/tailwind.svg", alt: "Tailwind" },
      { src: "/logo/PostgresSQL.png", alt: "PostgreSQL" },
    ],
  },
  {
    id: 6,
    title: "E-commerce",
    image: "/Frames/Eccormece.png",
    description:
      "Frontend moderno de plataforma e-commerce com catálogo de produtos, carrinho de compras, sistema de busca e filtros avançados. Interface responsiva e otimizada para conversão, com foco em experiência do usuário e performance.",
    link: "https://e-commerce-degu.vercel.app/",
    languages: [
      { src: "/logo/typscript.png", alt: "TypeScript" },
      { src: "/logo/react.svg", alt: "React" },
      { src: "/logo/tailwind.svg", alt: "Tailwind" },
    ],
  },
  {
    id: 7,
    title: "Conecta Transporte",
    image: "/Frames/Transporte.png",
    description:
      "Aplicativo de gestão de transporte escolar público para a Prefeitura de Toritama. Facilita o acompanhamento de rotas, horários e comunicação entre escola, pais e motoristas. Sistema de notificações em tempo real e rastreamento de veículos.",
    link: "https://github.com/degu0/Transporte_Front_End",
    languages: [
      { src: "/logo/typscript.png", alt: "TypeScript" },
      { src: "/logo/react.svg", alt: "React Native" },
      { src: "/logo/node.svg", alt: "Node.js" },
      { src: "/logo/Firebase.png", alt: "Firebase" },
    ],
  },
];

interface Skill {
  src: string;
  alt: string;
  shadowColor: string;
}

export const skills: Skill[] = [
  { src: "/logo/js.svg", alt: "JavaScript", shadowColor: "yellow" },
  { src: "/logo/typscript.png", alt: "TypeScript", shadowColor: "blue" },
  { src: "/logo/react.svg", alt: "React", shadowColor: "blue" },
  { src: "/logo/node.svg", alt: "Node.js", shadowColor: "green" },
  { src: "/logo/tailwind.svg", alt: "Tailwind CSS", shadowColor: "blue" },
  { src: "/logo/csharp.svg", alt: "C#", shadowColor: "purple" },
  { src: "/logo/NETcore.png", alt: ".NET Core", shadowColor: "purple" },
  { src: "/logo/sql.svg", alt: "SQL", shadowColor: "red" },
  { src: "/logo/Docker.png", alt: "Docker", shadowColor: "blue" },
];
