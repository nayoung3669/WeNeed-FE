'use client';

import Input from 'components/common/Input';
import DetailCategories from 'components/main/common/DetailCategories';
import { APPLICANT_QUESTIONS, CREW_KEYWORDS } from 'constants/crew';
import useInputChange from 'hooks/upload/useInputChange';
import { ChangeEvent } from 'react';

interface MyAnswerContainerProps {
  user: WriterProfile;
  crewQuestions: string[];
}

const MyAnswerContainer = ({ user, crewQuestions }: MyAnswerContainerProps) => {
  const {
    applicantData,
    onChangeInput,
    onChangeInputArray,
    onChangeInputFile,
    onSelectKeyword,
  } = useInputChange('applicant');

  return (
    <div className="flex flex-col w-[80%] h-[901px] bg-white rounded-lg p-[30px] gap-[20px]">
      <h5 className="flex gap-1 mb-[50px] font-semibold">{`${user.nickname}님이 궁금한 질문`}</h5>
      {crewQuestions.map((question, i) => (
        <div className="w-full" key={question}>
          <div className="flex gap-1">{question}</div>
          <Input
            name="crewAnswers"
            type="upload_recruiter"
            onChange={(e) => onChangeInputArray(e, i)}
            textValue={applicantData.crewAnswers[i]}
            placeholder="입력해주세요."
          />
        </div>
      ))}
      <div className="w-full">
        <div className="flex gap-1">{APPLICANT_QUESTIONS.appeal[0]}</div>
        <Input
          name="appeal"
          type="upload_recruiter"
          inputType="file"
          onChange={(e) => onChangeInputFile(e)}
          placeholder="파일"
          className="flex pt-2.5"
        />
      </div>
      {renderInputField(
        'aboutMe',
        APPLICANT_QUESTIONS.aboutMe,
        '입력해주세요.',
        applicantData,
        onChangeInput,
      )}

      <div>
        <div className="flex gap-1 ">{APPLICANT_QUESTIONS.content}</div>
        <textarea
          name="content"
          className="h-36 w-full rounded-lg border-1.5 border-black resize-none mt-[5px] py-[16px] px-[31px]  text-neutral-500 text-sm font-normal "
          placeholder="입력해주세요"
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div>
        <div className="flex gap-1 mb-[10px] ">
          {APPLICANT_QUESTIONS.keywords}
        </div>
        <div className="text-white flex w-full flex-wrap gap-[10px]">
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

export default MyAnswerContainer;

export const renderInputField = (
  name: string,
  question: string,
  placeholder: string,
  applicantData: ApplicationForm,
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void,
  additionalText?: string,
) => {
  return (
    <div className={`w-[30%] ${name === 'phone' && 'mt-[63px]'}`}>
      <div className={`flex gap-1`}>{question}</div>
      <Input
        name={name}
        type="upload_recruiter"
        onChange={(e) => onChangeInput(e)}
        textValue={applicantData[name] as string}
        placeholder={placeholder}
      />
      {additionalText && (
        <p className="text-neutral-500 text-xs font-light ">{additionalText}</p>
      )}
    </div>
  );
};