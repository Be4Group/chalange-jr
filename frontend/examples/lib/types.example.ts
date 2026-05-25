/**
 * Exemplo: tipos alinhados ao contrato da API.
 * Copie para lib/types.ts e ajuste se necessário.
 */

export enum ClientStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface Client {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  documento: string;
  status: ClientStatus;
  createdAt: string;
}

// TODO: CreateClientPayload, UpdateClientPayload, ListClientsFilters, PaginatedClients
