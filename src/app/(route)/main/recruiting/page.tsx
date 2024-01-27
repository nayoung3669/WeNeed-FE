import MainNavbar from 'components/main/common/MainNavbar';
import { DetailCategoriesContainer } from 'components/main/containers';
import RecruitingContainer from 'components/main/containers/RecruitingContainer';

export default async function MainRecruitingPage() {
  const { recrutingList, pageable, user }: ResponseRecruitingMain = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/recruiting`,
    { cache: 'no-store' },
  ).then((res) => res.json());

  return (
    <section className="flex flex-col items-center w-full min-h-screen text-white ">
      <MainNavbar />
      <DetailCategoriesContainer />
      <RecruitingContainer data={recrutingList} />
    </section>
  );
}
