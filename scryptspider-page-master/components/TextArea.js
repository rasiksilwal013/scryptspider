import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'var(--subtitle-text-color)',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
      color: 'var(--subtitle-text-color)',
      border: 0,
      borderBottom: '1px solid',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

export default function CustomizedInputs({ children }) {
  return <CssTextField multiline fullWidth rows={5} label={children} />;
}
