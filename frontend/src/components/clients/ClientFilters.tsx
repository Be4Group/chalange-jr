'use client';

import { ClientStatus, type ListClientsFilters } from '@/lib/types';

interface ClientFiltersProps {
  filters: ListClientsFilters;
  onChange: (filters: ListClientsFilters) => void;
  onSearch: () => void;
  loading?: boolean;
}

export function ClientFilters({
  filters,
  onChange,
  onSearch,
  loading,
}: ClientFiltersProps) {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-zinc-700">Filtros</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-zinc-600">Nome</span>
          <input
            type="text"
            value={filters.nome ?? ''}
            onChange={(e) => onChange({ ...filters, nome: e.target.value || undefined })}
            className="rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Buscar por nome"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-zinc-600">Email</span>
          <input
            type="text"
            value={filters.email ?? ''}
            onChange={(e) => onChange({ ...filters, email: e.target.value || undefined })}
            className="rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Buscar por email"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-zinc-600">Status</span>
          <select
            value={filters.status ?? ''}
            onChange={(e) =>
              onChange({
                ...filters,
                status: (e.target.value as ClientStatus) || undefined,
              })
            }
            className="rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Todos</option>
            <option value={ClientStatus.ACTIVE}>Ativo</option>
            <option value={ClientStatus.INACTIVE}>Inativo</option>
          </select>
        </label>
        <div className="flex items-end">
          <button
            type="button"
            onClick={onSearch}
            disabled={loading}
            className="w-full rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-60"
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
      </div>
    </section>
  );
}
