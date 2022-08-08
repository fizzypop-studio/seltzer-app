import { forwardRef, useRef } from 'react';
import { Controller } from 'react-hook-form';
import TextField, {
	TextFieldProps as MUITextFieldProps,
} from '@mui/material/TextField';
import * as S from './TextInput.styles';

type TextInputProps = MUITextFieldProps & {
	name: string;
	control?: any;
};

export const TextInput = forwardRef(({ ...props }: TextInputProps, ref) => {
	const componentRef = useRef<HTMLIFrameElement>(null);
	const { name, control } = { ...props };

	return (
		<S.Wrapper>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<TextField
						ref={componentRef || ref}
						onChange={onChange}
						value={value || ''}
						margin="dense"
						className="text-input"
						fullWidth
						{...props}
					/>
				)}
			/>
		</S.Wrapper>
	);
});
