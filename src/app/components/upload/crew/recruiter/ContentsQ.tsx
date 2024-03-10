'use client';

import Icons from 'components/common/Icons';
import Input from 'components/common/Input';
import DetailCategories from 'components/main/common/DetailCategories';
import { CREW_KEYWORDS, RECRUITER_QUESTIONS } from 'constants/crew';
import useInputChange from 'hooks/upload/useInputChange';
import { useState } from 'react';
import { questions_plus } from 'ui/IconsPath';

const ContentsQ = () => {
  const { recruiterData, onChangeInput, onChangeInputArray, onSelectKeyword } =
    useInputChange('recruiter');
  const [qCount, setQCount] = useState<number>(1);

  return (
    <div className="font-semibold w-[80%] flex flex-col bg-white rounded-lg p-[30px]">
      <div>
        <div className="flex gap-1">{RECRUITER_QUESTIONS.crew_questions}</div>
        {Array.from({ length: qCount }).map((_, index) => (
          <Input
            key={index}
            type="upload_recruiter"
            name="crewQuestions"
            onChange={(e) => onChangeInputArray(e, index - 1)}
            textValue={recruiterData.crewQuestions[qCount - 1]}
            placeholder="입력해주세요."
          />
        ))}
        <div className="w-full flex justify-center mt-[30px] mb-[50px] cursor-pointer">
          <Icons
            name={questions_plus}
            onClick={() => setQCount((prev) => prev + 1)}
          />
        </div>
      </div>
      <div>
        <div className="flex gap-1 ">{RECRUITER_QUESTIONS.content}</div>
        <textarea
          name="content"
          className="h-36 w-full rounded-lg border-1.5 border-black resize-none mt-[5px] py-[16px] px-[31px] text-neutral-500 text-sm font-normal "
          placeholder="입력해주세요"
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div>
        <div className="flex gap-1">{RECRUITER_QUESTIONS.keywords}</div>
        <div className="flex text-white h-[130px] flex-wrap">
          {CREW_KEYWORDS.map((keyword) => (
            <div
              key={keyword}
              onClick={() => onSelectKeyword('keywords', keyword)}
            >
              <DetailCategories category={keyword} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContentsQ;