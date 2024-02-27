'use client';
import Header from 'components/layout/Header';
import UploadContainerR from 'components/upload/recruiting/containers/UploadContainerR';
import { useSearchParams } from 'next/navigation';

export default function UploadRecruitPage() {
  const searchParams = useSearchParams();
  const nickname = searchParams.get('nickname') || '';
  const userId = searchParams.get('userId') || 0;
  return (
    <section className="flex flex-col items-center min-h-screen bg-black">
      <div className=" w-[1280px] mx-auto ">
        <Header nickname={nickname} userId={Number(userId)} />
        <div className="w-[100%] mx-auto">
          <UploadContainerR />
        </div>
      </div>
    </section>
  );
}
