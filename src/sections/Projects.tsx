import Image from "next/image";

export default function Projects() {
  return (
    <section id="projetos" className="bg-bg-primary text-text-primary">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* CABEÇALHO */}
        <div className="mb-12">
          <h2 className="text-5xl font-normal uppercase leading-none md:text-6xl">
            Projetos em Destaque
          </h2>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
            Conheça alguns dos projetos que desenvolvi, demonstrando minhas
            habilidades em desenvolvimento Full Stack.
          </p>
        </div>

        {/* LISTA DE PROJETOS */}
        <div className="flex flex-col gap-12">
          {/* PROJETO 01 - SIMULADOR DE EMPRÉSTIMO */}
          <article className="grid grid-cols-1 items-center gap-8 pb-12 md:grid-cols-2">
            {/* IMAGEM DO PROJETO */}
            <div className=" flex aspect-square w-full max-w-md items-center justify-center rounded-xl bg-card p-6 md:p-8">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/projeto-simulador.png"
                  alt="Simulador de Empréstimo Consignado"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* INFORMAÇÕES */}
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-sm text-primary">PROJETO 01</span>

                <h3 className="mt-2 text-3xl">
                  Simulador de Empréstimo Consignado
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-text-secondary">
                Aplicação web desenvolvida para simular empréstimos consignados,
                com cálculos e integração entre front-end e back-end.
              </p>

              {/* TECNOLOGIAS */}
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Vite",
                  "CSS",
                  "Node.js",
                  "Express",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border-primary px-3 py-1 text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/matheusFredericods/simulador-emprestimo-consignado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-primary pb-1 font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  GITHUB ↗
                </a>

                <a
                  href="https://simulador-emprestimo-consignado.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-primary pb-1 font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  VER PROJETO ↗
                </a>
              </div>
            </div>
          </article>

          {/* PROJETO 02 - LACREI SAÚDE */}
          <article className="grid grid-cols-1 items-center gap-8 pt-12 md:grid-cols-2">
            {/* IMAGEM DO PROJETO */}
            <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-xl bg-card p-6 md:p-8">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/lacrei-saude.png"
                  alt="Plataforma Lacrei Saúde"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* INFORMAÇÕES */}
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-sm text-primary">PROJETO 02</span>

                <h3 className="mt-2 text-3xl">Lacrei Saúde</h3>
              </div>

              <p className="text-sm leading-relaxed text-text-secondary">
                Atuação voluntária no desenvolvimento front-end da plataforma
                Lacrei Saúde, contribuindo com melhorias de responsividade,
                acessibilidade e experiência do usuário.
              </p>

              {/* TECNOLOGIAS */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "App Router",
                  "React",
                  "TypeScript",
                  "Styled-Components",
                  "Jest",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border-primary px-3 py-1 text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINK */}
              <div className="flex items-center gap-5">
                <a
                  href="https://lacreisaude.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-primary pb-1 font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  VER PROJETO ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
