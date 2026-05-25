'use client';

import Link from 'next/link';
import { StatusBadge } from './StatusBadge';
import type { Client } from '@/lib/types';

interface ClientTableProps {
  clients: Client[];
  loading?: boolean;
  onDelete: (client: Client) => void;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(value));
}

export function ClientTable({ clients, loading, onDelete }: ClientTableProps) {
  if (loading) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center text-zinc-500">
        Carregando clientes...
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-500">
        Nenhum cliente encontrado. Implemente a integração com a API ou cadastre o primeiro
        cliente.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200 text-sm">
          <thead className="bg-zinc-50 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Telefone</th>
              <th className="px-4 py-3">Documento</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Criado em</th>
              <th className="px-4 py-3 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-zinc-50/80">
                <td className="px-4 py-3 font-medium text-zinc-900">{client.nome}</td>
                <td className="px-4 py-3 text-zinc-600">{client.email}</td>
                <td className="px-4 py-3 text-zinc-600">{client.telefone}</td>
                <td className="px-4 py-3 text-zinc-600">{client.documento}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={client.status} />
                </td>
                <td className="px-4 py-3 text-zinc-600">{formatDate(client.createdAt)}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/clients/${client.id}/edit`}
                      className="rounded-md border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
                    >
                      Editar
                    </Link>
                    <button
                      type="button"
                      onClick={() => onDelete(client)}
                      className="rounded-md border border-red-200 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-50"
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
