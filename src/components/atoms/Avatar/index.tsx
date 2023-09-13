import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
export interface AvatarProps {
  src?: string;
  alt?: string;
}


const StyledAvatar = styled(Avatar)`
  width:"32px";
  height:"32px";
  border-radius: 50%;
`;

const CustomAvatar = ({ src, alt }: AvatarProps) => {
  return <StyledAvatar src={src} alt={alt} />;
};

export default CustomAvatar;
