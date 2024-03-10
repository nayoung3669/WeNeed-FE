'use client';

import Profile from 'components/details/common/Profile';
import DetailCategories from 'components/main/common/DetailCategories';
import RecruitmentInfo from './RecruitmentInfo';
import { useEffect, useState } from 'react';

interface RecruitmentContainerProps {
  articleId: string;
}

const RecruitmentContainer = ({ articleId }: RecruitmentContainerProps) => {
  const [data, setData] = useState<ResponseCrewRecruiter | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/crew/recruitment?articleId=${articleId}`,
      );
      const responseData = await response.json();
      setData((prev) => responseData);
    };

    fetchData();
  }, [articleId]);

  if (data) {
    const { article, recruitForm, user } = data;
    const { viewCount, heartCount, bookmarkCount } = article;
    return (
      <div className="w-[80%] h-[1274px] bg-white rounded-lg px-[39px] py-[43px]">
        <Profile
          writer={user}
          size="large"
          date=""
          noBg
          count={[viewCount, heartCount, bookmarkCount]}
        />
        <div className="w-full flex mt-[40px] text-white">
          {recruitForm.detailTags.map((category) => (
            <DetailCategories key={category} category={category} />
          ))}
        </div>
        <RecruitmentInfo recruitForm={recruitForm} />
      </div>
    );
  }
};

export default RecruitmentContainer;