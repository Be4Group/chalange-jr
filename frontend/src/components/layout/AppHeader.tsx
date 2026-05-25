import Link from 'next/link';

interface AppHeaderProps {
  title?: string;
  action?: React.ReactNode;
}

export function AppHeader({ title = 'Gerenciamento de Clientes', action }: AppHeaderProps) {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Desafio Fullstack JR
          </p>
          <h1 className="text-2xl font-bold text-zinc-900">{title}</h1>
        </div>
        {action ?? (
          <Link
            href="/clients/new"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Novo Cliente
          </Link>
        )}
      </div>
    </header>
  );
}
