'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { ClientForm } from '@/components/clients/ClientForm';
import { useClientForm } from '@/hooks/useClientForm';

export default function EditClientPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const clientId = params.id;

  const {
    values,
    setField,
    loading,
    error,
    success,
    loadClient,
    submit,
    isEditing,
  } = useClientForm(clientId);

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    void loadClient();
  }, [loadClient]);

  const handleSubmit = async () => {
    const result = await submit();
    if (result.fieldErrors) setFieldErrors(result.fieldErrors);
    if (result.ok) {
      setTimeout(() => router.push('/clients'), 800);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <AppHeader title="Editar Cliente" action={null} />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {loading && !values.nome ? (
          <p className="text-sm text-zinc-500">Carregando cliente...</p>
        ) : (
          <ClientForm
            values={values}
            fieldErrors={fieldErrors}
            loading={loading}
            error={error}
            success={success}
            isEditing={isEditing}
            onChange={setField}
            onSubmit={handleSubmit}
          />
        )}
      </main>
    </div>
  );
}
