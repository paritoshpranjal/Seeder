import { Box, BoxProps } from "@mui/material";
import CustomAvatar from "../../atoms/Avatar/index";
import DropdownButton from "../../atoms/Dropdown/index";
import avatar from "../../../assets/images/avatar.svg"


interface ProfileProps extends BoxProps {}

const Profile = (props: ProfileProps) => {
  return (
    <>
      <Box component="span" sx={{ display: "flex" }}>


        <CustomAvatar src={avatar} />

        <DropdownButton />
      </Box>
    </>
  );
};
export default Profile;
