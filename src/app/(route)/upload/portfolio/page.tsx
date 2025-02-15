'use client';
import Header from 'components/layout/Header';
import useInit from 'hooks/upload/useInit';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRecoilState } from 'recoil';
import { errorState } from 'recoil/upload';
import GlobalError from '(route)/error';

const UploadContainerP = dynamic(
  () => import('components/upload/portfolio/containers/UploadContainerP'),
  { loading: () => <p>Loading...</p> },
);

export default function UploadPortfolioPage() {
  const searchParams = useSearchParams();
  const nickname = searchParams.get('nickname') || '';
  const userId = searchParams.get('userId') || 0;
  const { initPF } = useInit();
  const [error, setError] = useRecoilState(errorState);

  useEffect(() => {
    initPF();
  }, []);
  if (error) {
    return (
      <GlobalError error={error} reset={() => (window.location.href = '/')} />
    );
  } else {
    return (
      <section className="flex flex-col items-center min-h-screen bg-black">
        <div className=" w-[1280px] mx-auto">
          <Header nickname={nickname} userId={Number(userId)} />
          <div className="w-[100%] mx-auto">
            <UploadContainerP isEdit={false} id={''} />
          </div>
        </div>
      </section>
    );
  }
}
