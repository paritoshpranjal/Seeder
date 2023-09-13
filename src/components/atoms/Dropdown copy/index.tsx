// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// interface ControlledOpenSelectProps {
//   name?: string;
//   handleChange?: (event: SelectChangeEvent<string>) => void;
//   selectWidth?: number | string;
//   selectHeight?: number | string;
//   component?: React.JSX.Element;
//   handleClose?: () => void;
//   handleOpen?: () => void;
// }

// export default function ControlledOpenSelect(props: ControlledOpenSelectProps) {
//   const { name, handleChange, selectWidth, selectHeight, component } = props;
//   const [open, setOpen] = React.useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, minWidth: selectWidth }}>
//         <InputLabel htmlFor="demo-controlled-open-select">{name}</InputLabel>
//         <Select
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}
//           label={name}
//           onChange={handleChange}
//           sx={{ height: selectHeight }}
//           data-testid="dropdown"
//         >
//           {component}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }


import React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface ControlledOpenSelectProps {
  name?: string;
  handleChange?: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  selectWidth?: number | string;
  selectHeight?: number | string;
  component?: React.ReactNode;
  handleClose?: () => void;
  handleOpen?: () => void;
}

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  // Other FormControl styles
}));

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  // Custom styling for the input label
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  // Custom styling for the select component
}));

export default function ControlledOpenSelect(props: ControlledOpenSelectProps) {
  const { name, handleChange, selectWidth, selectHeight, component } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <StyledFormControl sx={{ minWidth: selectWidth }}>
        <StyledInputLabel htmlFor="demo-controlled-open-select">
          {name}
        </StyledInputLabel>
        <StyledSelect
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          label={name}
          onChange={handleChange}
          sx={{ height: selectHeight }}
          data-testid="dropdown"
        >
          {component}
        </StyledSelect>
      </StyledFormControl>
    </div>
  );
}
