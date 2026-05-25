import type {
  ApiErrorBody,
  Client,
  CreateClientPayload,
  ListClientsFilters,
  PaginatedClients,
  UpdateClientPayload,
} from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';

async function parseError(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as ApiErrorBody;
    if (Array.isArray(body.message)) return body.message.join(', ');
    if (body.message) return String(body.message);
    if (body.error) return body.error;
  } catch {
    // resposta não-JSON
  }
  return `Erro na requisição (${response.status})`;
}

async function request<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

function buildQuery(filters: ListClientsFilters): string {
  const params = new URLSearchParams();
  if (filters.nome) params.set('nome', filters.nome);
  if (filters.email) params.set('email', filters.email);
  if (filters.status) params.set('status', filters.status);
  if (filters.page) params.set('page', String(filters.page));
  if (filters.limit) params.set('limit', String(filters.limit));
  const query = params.toString();
  return query ? `?${query}` : '';
}

export const clientsApi = {
  list(filters: ListClientsFilters = {}) {
    return request<PaginatedClients>(`/clients${buildQuery(filters)}`);
  },

  getById(id: string) {
    return request<Client>(`/clients/${id}`);
  },

  create(payload: CreateClientPayload) {
    return request<Client>('/clients', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  update(id: string, payload: UpdateClientPayload) {
    return request<Client>(`/clients/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },

  remove(id: string) {
    return request<void>(`/clients/${id}`, { method: 'DELETE' });
  },
};
