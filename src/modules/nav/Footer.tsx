const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex w-full flex-col md:flex-row items-center justify-center gap-x-12 gap-y-1 border-t border-surface py-4 text-center md:justify-center ">
      <h1>&copy; {YEAR} De Elegance</h1>
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <p>
          {" "}
          Made With &#x2665;&#xfe0f; from{" "}
          <a href="https://github.com/Afolabiyinka" target="_blank">
            Olayinka
          </a>
        </p>
      </ul>
    </footer>
  );
}
