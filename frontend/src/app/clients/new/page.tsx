'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { ClientForm } from '@/components/clients/ClientForm';
import { useClientForm } from '@/hooks/useClientForm';

export default function NewClientPage() {
  const router = useRouter();
  const { values, setField, loading, error, success, submit } = useClientForm();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async () => {
    const result = await submit();
    if (result.fieldErrors) setFieldErrors(result.fieldErrors);
    if (result.ok) {
      // TODO (candidato): redirecionar após sucesso real da API
      setTimeout(() => router.push('/clients'), 800);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <AppHeader title="Novo Cliente" action={null} />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <ClientForm
          values={values}
          fieldErrors={fieldErrors}
          loading={loading}
          error={error}
          success={success}
          onChange={setField}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
