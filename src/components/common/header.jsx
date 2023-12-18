import React from "react";
import { HeaderBox, Image, RightPart } from "./header.styled";
import profile from "../../images/profile.png";
import Button from "../utils/Button";
const DashboardHeader = ({ onSignOut }) => {
  return (
    <HeaderBox>
      <RightPart>
        <Image src={profile} alt="profile" />
        <Button type="button" onClick={onSignOut}>
          Signout
        </Button>
      </RightPart>
    </HeaderBox>
  );
};
export default DashboardHeader;
