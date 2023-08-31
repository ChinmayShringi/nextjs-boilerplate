import { useRouter } from 'next/router';

import { Sponsors } from '@/components/Sponsors';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
          width="600"
        />
      </a>
      <h2 className="mt-5 text-2xl font-bold">Sponsors</h2>
      <Sponsors />
      <h2 className="mt-5 text-2xl font-bold">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h2>
    </Main>
  );
};

export default Index;
