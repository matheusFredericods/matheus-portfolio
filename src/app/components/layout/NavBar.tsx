"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="mx-4 my-5 flex max-w-6xl items-center justify-between px-3 py-2 md:mx-15">
        {/* Nome */}
        <h1 className="text-3xl md:text-4xl">Matheus Santos</h1>

        {/* Botão Mobile */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden items-center gap-8 text-base text-text-secondary md:flex">
          <li>
            <a
              href="#inicio"
              className="transition-colors duration-300 hover:text-primary"
            >
              Início
            </a>
          </li>

          <li>
            <a
              href="#projetos"
              className="transition-colors duration-300 hover:text-primary"
            >
              Projetos
            </a>
          </li>

          <li>
            <a
              href="#sobre"
              className="transition-colors duration-300 hover:text-primary"
            >
              Sobre
            </a>
          </li>

          <li>
            <a
              href="#contato"
              className="transition-colors duration-300 hover:text-primary"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile */}
      <ul
        id="mobile-menu"
        className={`flex flex-col gap-6 overflow-hidden px-6 text-text-secondary transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-64 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <li>
          <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
            Início
          </a>
        </li>

        <li>
          <a href="#projetos" onClick={() => setIsMenuOpen(false)}>
            Projetos
          </a>
        </li>

        <li>
          <a href="#sobre" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </a>
        </li>

        <li>
          <a href="#contato" onClick={() => setIsMenuOpen(false)}>
            Contato
          </a>
        </li>
      </ul>
    </header>
  );
}
