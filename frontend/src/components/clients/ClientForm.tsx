'use client';

import Link from 'next/link';
import { ClientStatus } from '@/lib/types';
import type { ClientFormValues } from '@/hooks/useClientForm';

interface ClientFormProps {
  values: ClientFormValues;
  fieldErrors?: Record<string, string>;
  loading?: boolean;
  error?: string | null;
  success?: string | null;
  isEditing?: boolean;
  onChange: <K extends keyof ClientFormValues>(
    key: K,
    value: ClientFormValues[K],
  ) => void;
  onSubmit: () => void;
}

export function ClientForm({
  values,
  fieldErrors = {},
  loading,
  error,
  success,
  isEditing,
  onChange,
  onSubmit,
}: ClientFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-5 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {success}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Nome"
          name="nome"
          value={values.nome}
          error={fieldErrors.nome}
          onChange={(v) => onChange('nome', v)}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={fieldErrors.email}
          onChange={(v) => onChange('email', v)}
          required
        />
        <Field
          label="Telefone"
          name="telefone"
          value={values.telefone}
          error={fieldErrors.telefone}
          onChange={(v) => onChange('telefone', v)}
          required
        />
        <Field
          label="Documento"
          name="documento"
          value={values.documento}
          error={fieldErrors.documento}
          onChange={(v) => onChange('documento', v)}
          required
        />
        <label className="flex flex-col gap-1 text-sm sm:col-span-2">
          <span className="font-medium text-zinc-700">Status</span>
          <select
            value={values.status}
            onChange={(e) => onChange('status', e.target.value as ClientStatus)}
            className="rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value={ClientStatus.ACTIVE}>Ativo</option>
            <option value={ClientStatus.INACTIVE}>Inativo</option>
          </select>
        </label>
      </div>

      <div className="flex flex-wrap justify-end gap-3 border-t border-zinc-100 pt-4">
        <Link
          href="/clients"
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          Voltar
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? 'Salvando...' : isEditing ? 'Salvar alterações' : 'Cadastrar cliente'}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium text-zinc-700">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className={`rounded-lg border px-3 py-2 outline-none focus:ring-2 ${
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
            : 'border-zinc-300 focus:border-blue-500 focus:ring-blue-100'
        }`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
