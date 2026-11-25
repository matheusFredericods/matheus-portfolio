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
          {/* PROJETO 01 */}
          <article className="grid grid-cols-1 items-center gap-8 pb-12 md:grid-cols-2">
            {/* IMAGEM */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-card">
              {/* Imagem do projeto será adicionada aqui */}
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
                <span className="rounded-full border border-border-primary px-3 py-1 text-xs text-text-secondary">
                  React
                </span>

                <span className="rounded-full border border-border-primary px-3 py-1 text-xs text-text-secondary">
                  TypeScript
                </span>

                <span className="rounded-full border border-border-primary px-3 py-1 text-xs text-text-secondary">
                  Node.js
                </span>
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
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
