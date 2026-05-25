'use client';

import { useEffect, useState } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { ClientFilters } from '@/components/clients/ClientFilters';
import { ClientTable } from '@/components/clients/ClientTable';
import { ConfirmDeleteDialog } from '@/components/clients/ConfirmDeleteDialog';
import { useClients } from '@/hooks/useClients';
import type { Client } from '@/lib/types';

export default function ClientListPage() {
  const {
    clients,
    total,
    filters,
    setFilters,
    loading,
    error,
    fetchClients,
    removeClient,
  } = useClients();

  const [clientToDelete, setClientToDelete] = useState<Client | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // TODO (candidato): garantir fetch ao montar e quando filtros mudarem
    void fetchClients();
  }, [fetchClients]);

  const handleConfirmDelete = async () => {
    if (!clientToDelete) return;
    setDeleting(true);
    try {
      await removeClient(clientToDelete.id);
      setClientToDelete(null);
    } catch {
      // erro já tratado no hook
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <AppHeader />
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
        <ClientFilters
          filters={filters}
          onChange={setFilters}
          onSearch={fetchClients}
          loading={loading}
        />

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-zinc-500">
          <span>{total} cliente(s) encontrado(s)</span>
        </div>

        <ClientTable
          clients={clients}
          loading={loading}
          onDelete={setClientToDelete}
        />
      </main>

      <ConfirmDeleteDialog
        client={clientToDelete}
        open={Boolean(clientToDelete)}
        loading={deleting}
        onConfirm={handleConfirmDelete}
        onCancel={() => setClientToDelete(null)}
      />
    </div>
  );
}
