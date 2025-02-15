import { useRecoilState } from 'recoil';
import { filestate, imageBlobState, orderState } from 'recoil/upload';
import { textState } from 'recoil/upload';
import { useRef, useState } from 'react';
import { deleteAlert, editAlert } from 'components/upload/both/showToast';

interface FileInfo {
  name: string;
  size: number;
  url: string;
}

const useAddFile = () => {
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [items, setItems] = useRecoilState<DndTextTypes[]>(textState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);
  const [images, setImages] = useRecoilState<BlobImages[]>(imageBlobState);
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState<FileInfo>({
    name: '',
    size: 0,
    url: '',
  });

  const divClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    handleFileInfo(selectedFile);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files?.[0];
    handleFileInfo(selectedFile);
  };

  const handleFileInfo = (selectedFile: File | undefined) => {
    if (selectedFile) {
      setFileInfo({
        name: selectedFile.name,
        size: selectedFile.size,
        url: URL.createObjectURL(selectedFile),
      });
    } else {
      alert('올바른 파일이 선택되지 않았습니다!');
    }
  };

  const handleConfirm = (fileType: string) => {
    const selectedFile = inputRef.current?.files?.[0];
    if (selectedFile) {
      if (fileType === '이미지') {
        addFile(selectedFile, 'image');
      } else if (fileType === '문서') {
        addFile(selectedFile, 'docs');
      } else if (fileType === '영상') {
        addFile(selectedFile, 'video');
      }
    } else {
      alert('선택된 파일이 없습니다.');
    }
  };

  const updateFile = async (id: string, fileType: string) => {
    const file = inputRef.current?.files?.[0];
    if (file) {
      if (fileType === '이미지') {
        setImages((prevImages) =>
          prevImages.map((image) =>
            image.id === id
              ? { id: id, imageFile: file, filename: file.name }
              : image,
          ),
        );
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, data: fileInfo.url, file: file } : item,
          ),
        );
      } else {
        setFiles((prevFiles) =>
          prevFiles.map((item) =>
            item.id === id
              ? {
                  ...item,
                  id: file.name,
                  data: file.name,
                  url: fileInfo.url,
                  file: file,
                }
              : item,
          ),
        );
      }
      editAlert();
    }
  };

  const addFile = async (file: File, type: string) => {
    if (type === 'image') {
      setItems((prevData) => [
        ...prevData,
        {
          id: String(orderId),
          type: type,
          data: fileInfo.url,
          file: file,
        },
      ]);

      setImages((prevImages) => [
        ...prevImages,
        {
          id: String(orderId),
          imageFile: file,
          filename: file.name,
        },
      ]);
      setOrderId(orderId + 1);
    } else {
      setFiles((prevData) => [
        ...prevData,
        {
          id: file.name,
          type: type,
          data: file.name,
          url: fileInfo.url,
          file: file,
        },
      ]);
    }
  };

  const removeFile = (id: string, fileType: string) => {
    if (fileType === 'image') {
      setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    } else {
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    }
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    deleteAlert();
  };

  const removeAllFile = () => {
    setFiles([]);
    deleteAlert();
  };

  return {
    fileInfo,
    handleConfirm,
    inputRef,
    divClick,
    handleFileChange,
    handleDrop,
    updateFile,
    removeFile,
    removeAllFile,
  };
};
export default useAddFile;
