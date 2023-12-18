import React, { useRef, useState } from "react";
import { ImageBox, PageBox, PageTitle } from "./imageCropper.styled";
import Modal from "./Modal";
import Button from "../../components/utils/Button";
import EditIcon from "../../components/utils/EditIcon";
const Cropper = () => {
  const avatarUrl = useRef(
    "https://avatarfiles.alphacoders.com/161/161002.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };
  return (
    <>
      <PageBox>
        <PageTitle>Image Cropper</PageTitle>
      </PageBox>
      <ImageBox>
        <img
          src={avatarUrl.current}
          alt="Avatar"
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
        />
        <Button onClick={() => setModalOpen(true)}>
          <EditIcon />
        </Button>
      </ImageBox>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </>
  );
};
export default Cropper;
