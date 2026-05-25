export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Desafio Fullstack JR
      </p>
      <h1 className="mt-2 text-3xl font-bold">CRUD de Clientes</h1>
      <p className="mt-4 text-zinc-600">
        O frontend ainda não foi implementado. Crie as rotas, componentes e hooks conforme a
        pasta <code className="rounded bg-zinc-100 px-1">examples/</code> e o checklist em{' '}
        <code className="rounded bg-zinc-100 px-1">arquitetura.md</code>.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-zinc-700">
        <li>
          <strong>Rotas a criar:</strong> /clients, /clients/new, /clients/[id]/edit
        </li>
        <li>
          <strong>Pastas sugeridas:</strong> app/, components/, hooks/, lib/
        </li>
        <li>
          <strong>Referência:</strong> copie/adapte os arquivos .example em examples/
        </li>
      </ul>
    </main>
  );
}
