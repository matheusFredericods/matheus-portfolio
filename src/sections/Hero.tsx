import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-bg-primary border-b border-border-divider text-text-primary"
    >
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-10 pb-24 md:grid-cols-[1.2fr_0.8fr] md:pt-0">
        {/* LADO ESQUERDO */}
        <div className="flex w-full min-w-0 flex-col items-start">
          {/* Título */}
          <h1 className="text-[clamp(3.5rem,7vw,101px)] leading-[0.85] tracking-tight">
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
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#contato"
              className="flex items-center gap-5 rounded-full bg-primary px-6 py-3 font-semibold text-natural-black transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              ENTRE EM CONTATO
              <span aria-hidden="true">●</span>
            </a>

            <a
              href="https://github.com/matheusFredericods"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-12 items-center justify-center rounded-full border border-border-primary bg-card text-primary transition-all hover:border-primary hover:bg-primary hover:text-natural-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/matheus-santos-webdev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-12 items-center justify-center rounded-full border border-border-primary bg-card text-primary transition-all hover:border-primary hover:bg-primary hover:text-natural-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>

        {/* LADO DIREITO - FOTO */}
        <div className="relative mx-auto aspect-2/3 w-full max-w-95 overflow-hidden rounded-2xl">
          <Image
            src="/images/foto-perfil.png"
            alt="Matheus Santos"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
