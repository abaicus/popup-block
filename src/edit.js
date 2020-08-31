import { __ } from '@wordpress/i18n';
import { Button, Icon } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { nanoid } from 'nanoid';

import { CloseIcon } from './components/icons';
import './scss/editor.scss';
import InspectorSettings from './inspector-settings';
import BlockIcon from './icon';
const Edit = ( props ) => {
	const [ previewing, setPreviewing ] = useState( false );
	const { attributes, setAttributes } = props;
	const {
		width,
		backgroundColor,
		gradientBackground,
		showCloseButton,
		closeButtonColor,
		closeButtonSize,
		borderRadius,
		overlayColor,
		overlayOpacity,
		uuid,
	} = attributes;

	if ( uuid === null ) {
		setAttributes( { uuid: nanoid() } ); // Medium int max value is 8388607;
	}

	const style = {
		minWidth: width,
		borderRadius,
	};
	const closeButtonStyle = {};

	if ( backgroundColor ) {
		style.backgroundColor = backgroundColor;
	}

	if ( gradientBackground ) {
		style.background = gradientBackground;
	}

	if ( closeButtonColor ) {
		closeButtonStyle.color = closeButtonColor;
	}

	const togglePreview = ( e ) => {
		e.preventDefault();
		setPreviewing( ! previewing );
	};

	const showPreview = () => {
		if ( ! previewing ) {
			setPreviewing( true );
		}
	};

	return (
		<>
			<div className="abs-popup">
				<div className="popup-preview">
					<Button isPrimary onClick={ togglePreview }>
						<Icon icon={ BlockIcon } />
						{ __( 'Show Popup', 'abs-popup' ) }
					</Button>
				</div>
				{ previewing && (
					<div className="abs-modal-wrap">
						<div
							style={ {
								backgroundColor: overlayColor,
								opacity: overlayOpacity / 100,
							} }
							role="presentation"
							className="overlay"
							onClick={ togglePreview }
						/>
						<div className="modal-content" style={ style }>
							{ showCloseButton && (
								<div className="modal-header">
									<button
										className="close"
										style={ closeButtonStyle }
										onClick={ togglePreview }
									>
										<CloseIcon
											color={ closeButtonColor }
											size={ closeButtonSize }
										/>
									</button>
								</div>
							) }
							<div className="modal-body">
								<InnerBlocks />
							</div>
						</div>
					</div>
				) }
			</div>
			<InspectorSettings
				{ ...props }
				showPreview={ () => {
					showPreview();
				} }
			/>
		</>
	);
};

export default Edit;
