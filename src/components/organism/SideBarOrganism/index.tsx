import React from "react";
import { Link, useLocation } from "react-router-dom";
import theme from "../../../theme/theme";
import Box from "@mui/material/Box";
import SideBarElement from "../../molecules/SideBarElement";
import homeicon from "../../../assets/home-2.png";
import cashicon from "../../../assets/coin.png";
import logoicon from "../../../assets/logo.png";
import flashicon from "../../../assets/flash.png";
interface MyLinkProps {
  to: string;
  children: (props: { isActive: boolean }) => React.ReactNode;
}
const CustomLink = ({ to, children }: MyLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      {children({ isActive })}
    </Link>
  );
};
const SideBar = () => {
  return (
    <>
      <Box
        sx={{
          width: `${theme.spacing(62.5)}`,
          height: "100vh",
          backgroundColor: `${theme.palette.background.elevation1}`,
        }}
        display="flex"
        alignItems="center"
        flexDirection={"column"}
        position="fixed"
      >
        <Box position="absolute" top={theme.spacing(7.5)}>
          <SideBarElement
            icon={logoicon}
            content={"Seeder"}
            color={theme.palette.white[500]}
            variant={"logo"}
          />
        </Box>
        <Box position="absolute" top={theme.spacing(25)}>
          <CustomLink to="/">
            {({ isActive }) => (
              <SideBarElement
                backgroundColor={
                  isActive
                    ? `${theme.palette.background.elevation2}`
                    : `${theme.palette.background.elevation1}`
                }
                icon={homeicon}
                content={"Home"}
                color={
                  isActive
                    ? `${theme.palette.textColor.highemp}`
                    : `${theme.palette.textColor.lowemp}`
                }
                variant={"caption"}
              />
            )}
          </CustomLink>
        </Box>
        <Box position="absolute" top={theme.spacing(40)}>
          <CustomLink to="/cash-acceleration">
            {({ isActive }) => (
              <SideBarElement
                backgroundColor={
                  isActive
                    ? `${theme.palette.background.elevation2}`
                    : `${theme.palette.background.elevation1}`
                }
                icon={cashicon}
                content={"Cash Accleration"}
                color={
                  isActive
                    ? `${theme.palette.textColor.highemp}`
                    : `${theme.palette.textColor.lowemp}`
                }
                variant={"caption"}
              />
            )}
          </CustomLink>
        </Box>
        <Box position="absolute" bottom={theme.spacing(7.5)}>
          <CustomLink to="/watch">
            {({ isActive }) => (
              <SideBarElement
                backgroundColor={
                  isActive
                    ? `${theme.palette.background.elevation2}`
                    : `${theme.palette.background.elevation1}`
                }
                icon={flashicon}
                content={"Watch how to"}
                color={
                  isActive
                    ? `${theme.palette.textColor.highemp}`
                    : `${theme.palette.textColor.lowemp}`
                }
                variant={"caption"}
              />
            )}
          </CustomLink>
        </Box>
      </Box>
    </>
  );
};
export default SideBar;
