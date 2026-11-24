import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-(--bg-primary) text-(--text-primary)">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <div className="flex w-full max-w-140 flex-col items-start">
          {/* Título */}
          <h1 className="text-[101px] leading-[0.85]">
            <span className="block">OLÁ, EU SOU</span>
            <span className="block">MATHEUS SANTOS.</span>
          </h1>

          {/* Descrição */}
          <p className="mt-3 max-w-lg text-base leading-relaxed text-text-secondary">
            Desenvolvedor Full Stack apaixonado por tecnologia, criando
            aplicações web modernas, acessíveis e funcionais. Sempre buscando
            aprender, evoluir e transformar ideias em soluções digitais.
          </p>

          {/* Ações */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#contato"
              className="flex items-center gap-5 rounded-full bg-(--primary) px-6 py-3 font-semibold text-(--natural-black) transition-colors hover:bg-primary-hover"
            >
              ENTRE EM CONTATO
              <span>●</span>
            </a>

            <a
              href="https://github.com/matheusFredericods"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-12 items-center justify-center rounded-full bg-card text-(--primary) transition-all hover:bg-(--primary) hover:text-(--natural-black)"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/matheus-santos-webdev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-12 items-center justify-center rounded-full bg-card text-(--primary) transition-all hover:bg-(--primary) hover:text-(--natural-black)"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
