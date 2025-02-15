'use client';
import Icons from 'components/common/Icons';
import { closeIcon } from 'ui/IconsPath';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import useAddText from 'hooks/upload/useAddText';
import { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { uploadDataState } from 'recoil/upload';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { textLimitAlert } from '../../showToast';

interface UploadTextProps {
  uploadInfo: UploadPropTypes;
  closeModal?: () => void;
  isEdit?: boolean;
  id?: string;
}

const UploadText = ({
  uploadInfo,
  closeModal,
  isEdit,
  id,
}: UploadTextProps) => {
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const { fileType, announcement, rule } = uploadInfo;
  const { text, setText, handleConfirm, isEditing, startEdit, updateText } =
    useAddText();
  const isShare = fileType === '나누고 싶은 큰 문장';

  const writeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const nowText = e.target.value;
    if (nowText.length > 255) {
      textLimitAlert();
      return;
    } else {
      setText(nowText);
    }
  };

  useEffect(() => {
    if (id) {
      if (id === 'share') {
        setText(uploadData.sharedText || '');
      } else {
        const content = uploadData.content.find((item) => item.id === id);
        if (content) {
          if (content.type === 'text' || 'link' || 'audio') {
            setText(content.data);
          }
        }
      }
    }
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="flex flex-col w-[922px] h-[360px] bg-white rounded-[9px]">
        <div className="flex flex-row-reverse mt-[15px] mr-[15px]">
          <div onClick={closeModal}>
            <Icons name={closeIcon} className="cursor-pointer" />
          </div>
        </div>
        <div className="px-[40px]">
          <div className="text-black text-lg font-bold">{fileType}</div>
          <div
            className="w-[843px] h-[184px] flex flex-col items-center justify-center rounded-[9px] border-2 border-dashed border-neutral-700 mt-[26px]  text-[#D9D9D9]"
            onClick={startEdit}
          >
            {isEditing || text ? (
              <div className="flex text-sm font-normal overflow-y-auto">
                <textarea
                  value={text}
                  className="w-[782px] h-[124px] border-none text-black font-semibold focus:outline-none focus:border-none"
                  onChange={(e) => {
                    writeText(e);
                  }}
                  autoFocus
                ></textarea>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-y-[6px] text-[#D9D9D9] font-semibold">
                <span className="text-base">{announcement}</span>
                <span className="text-xs">{rule}</span>
              </div>
            )}
            <ToastContainer />
          </div>
          <div className="flex flex-row-reverse mt-[24px]">
            <div onClick={closeModal}>
              <ConfirmButton
                btnClick={
                  !isEdit
                    ? () => handleConfirm(fileType)
                    : () => {
                        if (isShare) {
                          setUploadData({ ...uploadData, sharedText: text });
                        } else {
                          updateText(id || '', text);
                        }
                      }
                }
                btnText={text}
                isWritten={text.trim() === ''}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadText;
