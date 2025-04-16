import {FC} from 'react';

interface IButton{
	/** Button text. */
	readonly children: string
	/** Button disable modifier. */
	readonly disabled?: boolean
	/** The function is executed when the button is pressed. */
	readonly onClick?: () => void
}

export const Button: FC<IButton> = (props) => {
	const {
		children,
		disabled = false,
		onClick,
	} = props

	return (
		<button
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};