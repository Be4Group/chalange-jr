import { ClientStatus } from '@/lib/types';

const labels: Record<ClientStatus, string> = {
  [ClientStatus.ACTIVE]: 'Ativo',
  [ClientStatus.INACTIVE]: 'Inativo',
};

const styles: Record<ClientStatus, string> = {
  [ClientStatus.ACTIVE]: 'bg-emerald-100 text-emerald-800',
  [ClientStatus.INACTIVE]: 'bg-zinc-100 text-zinc-600',
};

export function StatusBadge({ status }: { status: ClientStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
