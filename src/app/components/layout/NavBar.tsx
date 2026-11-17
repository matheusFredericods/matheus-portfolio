export default function NavBar() {
  return (
    <header className="w-full">
      <nav className="mx-[60] my-[36] flex max-w-6xl items-center justify-between">
        <h1>Matheus Santos</h1>

        <ul className="flex items-center gap-8 text-base color: text-text-secondary ">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
