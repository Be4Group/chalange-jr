'use client';

import { useCallback, useState } from 'react';
import { clientsApi } from '@/lib/api';
import type { Client, ListClientsFilters } from '@/lib/types';

/**
 * TODO (candidato): implementar integração completa com a API.
 * - Carregar lista ao montar e quando filtros mudarem
 * - Tratar loading e erros
 * - Expor refetch após exclusão
 */
export function useClients(initialFilters: ListClientsFilters = {}) {
  const [clients, setClients] = useState<Client[]>([]);
  const [filters, setFilters] = useState<ListClientsFilters>(initialFilters);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  const fetchClients = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // TODO: descomentar quando o backend estiver implementado
      // const result = await clientsApi.list(filters);
      // setClients(result.items);
      // setTotal(result.total);
      void clientsApi;
      setClients([]);
      setTotal(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar clientes');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const removeClient = useCallback(
    async (id: string) => {
      setLoading(true);
      setError(null);
      try {
        // TODO: await clientsApi.remove(id);
        // await fetchClients();
        void id;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao excluir cliente');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    clients,
    total,
    filters,
    setFilters,
    loading,
    error,
    fetchClients,
    removeClient,
  };
}
