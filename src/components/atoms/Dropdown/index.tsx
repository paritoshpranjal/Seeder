import { IconButton } from '@mui/material';
import DropdownIcon from '../../../assets/icons/Dropdown.svg';

export interface DropdownProps {
  width?: string,
  height?: string
}


const Dropdown = (props: DropdownProps) => {
  const { width, height } = props
  return (

    <IconButton> {<img src={DropdownIcon} width={width} height={height} />}</IconButton>
  );
};

export default Dropdown;
