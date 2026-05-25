'use client';

import { useCallback, useState } from 'react';
import { clientsApi } from '@/lib/api';
import { ClientStatus, type Client, type CreateClientPayload } from '@/lib/types';

export interface ClientFormValues {
  nome: string;
  email: string;
  telefone: string;
  documento: string;
  status: ClientStatus;
}

const emptyValues: ClientFormValues = {
  nome: '',
  email: '',
  telefone: '',
  documento: '',
  status: ClientStatus.ACTIVE,
};

export function validateClientForm(values: ClientFormValues): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!values.nome.trim()) errors.nome = 'Nome é obrigatório';
  if (!values.email.trim()) errors.email = 'Email é obrigatório';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Email inválido';
  }
  if (!values.telefone.trim()) errors.telefone = 'Telefone é obrigatório';
  if (!values.documento.trim()) errors.documento = 'Documento é obrigatório';
  return errors;
}

/**
 * TODO (candidato): implementar create/update e carregamento por id na edição.
 */
export function useClientForm(clientId?: string) {
  const [values, setValues] = useState<ClientFormValues>(emptyValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const isEditing = Boolean(clientId);

  const loadClient = useCallback(async () => {
    if (!clientId) return;
    setLoading(true);
    setError(null);
    try {
      // TODO: const client = await clientsApi.getById(clientId);
      // setValues({ nome: client.nome, ... });
      void clientsApi;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar cliente');
    } finally {
      setLoading(false);
    }
  }, [clientId]);

  const submit = useCallback(async () => {
    const fieldErrors = validateClientForm(values);
    if (Object.keys(fieldErrors).length > 0) {
      setError('Corrija os campos destacados antes de salvar.');
      return { ok: false as const, fieldErrors };
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    const payload: CreateClientPayload = {
      nome: values.nome.trim(),
      email: values.email.trim(),
      telefone: values.telefone.trim(),
      documento: values.documento.trim(),
      status: values.status,
    };

    try {
      // TODO: if (isEditing && clientId) await clientsApi.update(clientId, payload);
      // else await clientsApi.create(payload);
      void payload;
      setSuccess(isEditing ? 'Cliente atualizado!' : 'Cliente cadastrado!');
      return { ok: true as const, fieldErrors: {} };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar cliente');
      return { ok: false as const, fieldErrors: {} };
    } finally {
      setLoading(false);
    }
  }, [clientId, isEditing, values]);

  const setField = useCallback(
    <K extends keyof ClientFormValues>(key: K, value: ClientFormValues[K]) => {
      setValues((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const hydrate = useCallback((client: Client) => {
    setValues({
      nome: client.nome,
      email: client.email,
      telefone: client.telefone,
      documento: client.documento,
      status: client.status,
    });
  }, []);

  return {
    values,
    setField,
    hydrate,
    loading,
    error,
    success,
    isEditing,
    loadClient,
    submit,
  };
}
