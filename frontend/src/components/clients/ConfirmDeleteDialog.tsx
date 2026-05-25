'use client';

import type { Client } from '@/lib/types';

interface ConfirmDeleteDialogProps {
  client: Client | null;
  open: boolean;
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDeleteDialog({
  client,
  open,
  loading,
  onConfirm,
  onCancel,
}: ConfirmDeleteDialogProps) {
  if (!open || !client) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
      >
        <h3 className="text-lg font-semibold text-zinc-900">Confirmar exclusão</h3>
        <p className="mt-2 text-sm text-zinc-600">
          Deseja inativar o cliente <strong>{client.nome}</strong>? Esta ação realiza exclusão
          lógica (status INACTIVE).
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? 'Excluindo...' : 'Confirmar'}
          </button>
        </div>
      </div>
    </div>
  );
}
