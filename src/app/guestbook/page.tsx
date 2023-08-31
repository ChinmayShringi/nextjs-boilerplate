import type { Metadata } from 'next';

import { GuestbookForm } from '@/components/GuestbookForm';
import { Main } from '@/templates/Main';

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'An example of CRUD operation',
};

const Guestbook = async () => {
  return (
    <Main>
      <GuestbookForm />

      <div className="mt-5" />

      <div className="mt-2 text-center text-sm">
        Database powered by{' '}
        <a
          href="https://turso.tech/?utm_source=nextjsstarterbp"
          target="_blank"
        >
          Turso
        </a>
      </div>
    </Main>
  );
};

export const dynamic = 'force-dynamic';

export default Guestbook;
