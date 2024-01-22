import PortfolioCommentsContainer from 'components/details/portfolio/containers/PortfolioCommentsContainer';
import PortfolioDetailsContainer from 'components/details/portfolio/containers/PortfolioDetailsContainer';
import Header from 'components/layout/Header';

export default async function PortfolioPage() {
  const data: ResponsePortfolioDetails = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/portfolio`,
    { cache: 'no-store' },
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

  return (
    <section className="h-screen">
      <Header isLoggedIn type="main" />
      <PortfolioDetailsContainer user={data.user} portfolio={data.portfolio} />
      <PortfolioCommentsContainer comments={data.comments} />
    </section>
  );
}
