"use client";

import { ProjectCard } from "./projects-card";

const projects = [
  {
    title: "Landing Page + Dashboard",
    description:
      "Agora Sim! este projeto é uma versão dos dois primeiros projetos, mas muito melhorado! aqui temos uma landing page com o tema escuro fixo, quando você faz login com discord, e acessa o dashboard, você pode alterar temas, há um sistema de compras, inventário e informações, para comprar algo, você deve ter gemas! Além disso, quando você compra algo, uma mensagem é enviada para uma API no FiveM, a API faz o trabalho de adicionar os benefícios, que são: Propriedades, Carros, Vips e mais!",
    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "Nhost",
      "Typescript",
      "Javascript",
      "GraphQL",
    ],
    imageUrl: "https://r2.fivemanage.com/h1RaORAfpynzso56Pcf6Z/dnzdevox.png",
    isPrivate: true,
  },
  {
    title: "Painel Admin",
    description:
      "Você se lembra do projeto anterior? a landing page junto com um dashboard? Bem, se há produtos para serem vendidos, deve haver uma maneira de adicioná-los. No dashboard admin você pode fazer isso e outras coisas, como supervisionar seu servidor, jogadores e banimentos!",
    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "Typescript",
      "Javascript",
      "MySQL",
    ],
    imageUrl: "https://r2.fivemanage.com/h1RaORAfpynzso56Pcf6Z/im23age.png",
    isPrivate: true,
  },
  {
    title: "Armazenamento",
    description:
      "Este projeto atua como um armazenamento para imagens e arquivos, feito para uso básico, considerando que apenas arquivos dentro da pasta pública são aceitos, no futuro é possível adicionar suporte para alguma plataforma de hospedagem para facilitar o gerenciamento de arquivos!",
    technologies: ["Next.js", "React", "Tailwind", "Typescript"],
    imageUrl: "https://r2.fivemanage.com/h1RaORAfpynzso56Pcf6Z/im1age.png",
    isPrivate: true,
  },
  {
    title: "API - Licenças",
    description:
      "Bem, vamos para o Back End? aqui temos uma API que cria e verifica licenças no banco de dados supabase, este é um projeto antigo, na época eu não tinha tanta experiência, boa notícia, este é público!",
    technologies: ["Javascript", "Supabase"],
    isPrivate: false,
    github: {
      owner: "DnzxDev",
      repo: "api-supabase",
    },
  },
  {
    title: "Tablet de Gerenciamento - Fivem",
    description:
      "Este tablet foi desenvolvido para New Valley, um projeto de servidor para FiveM, foi feito apenas com HTML, Javascript E CSS, tendo um back end em Lua, facilitando a programação para FiveM, Todos devemos concordar que é mais fácil que C#.",
    technologies: ["Javascript", "HTML", "Css", "Lua"],
    isPrivate: false,
    github: {
      owner: "DnzxDev",
      repo: "dnzx-panel",
    },
  },
  {
    title: "Conexão Website",
    description:
      "Passando para o lado do fivem, tenho um sistema básico de conexão, para conectar seu servidor fivem a um website, o javascript executa eventos em lua, por método post ou get!",
    technologies: ["Lua", "Javascript"],
    isPrivate: false,
    github: {
      owner: "DnzxDev",
      repo: "connection",
      path: "backend",
    },
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold  bg-clip-text text-transparent mb-4">
            Meus Projetos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore meu trabalho mais recente e descubra as tecnologias pelas
            quais sou apaixonado
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interessado em trabalhar juntos ou quer ver mais do meu trabalho?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/DnzxDev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Ver Todos os Projetos
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
