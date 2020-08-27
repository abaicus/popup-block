export const CloseIcon = ( props ) => {
	return (
		<svg
			aria-hidden="true"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			width={ props.size || 16 }
			height={ props.size || 16 }
			viewBox="0 0 20 20"
			fill={ props.color || '#000000' }
		>
			<path
				width={ props.size || 16 }
				height={ props.size || 16 }
				d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"
			/>
		</svg>
	);
};
