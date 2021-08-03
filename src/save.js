import { InnerBlocks } from '@wordpress/block-editor';
import { CloseIcon } from './components/icons';

const Save = ( props ) => {
	const { attributes } = props;
	const {
		width,
		anchor,
		waitTime,
		offset,
		openBehaviour,
		backgroundColor,
		gradientBackground,
		closeButtonColor,
		closeButtonSize,
		borderRadius,
		overlayColor,
		overlayOpacity,
		closeAnchor,
		closeOnClickOutside,
		closeOnAnchorClick,
		dismissForVisitors,
		dismissPeriod,
		showCloseButton,
		uuid,
	} = attributes;
	const modalStyle = {
		minWidth: width,
		borderRadius,
	};

	if ( backgroundColor ) {
		modalStyle.backgroundColor = backgroundColor;
	}
	if ( gradientBackground ) {
		modalStyle.background = gradientBackground;
	}

	return (
		<div
			className="abs-popup front"
			data-open={ openBehaviour }
			data-anchor={ openBehaviour === 'anchor' ? anchor : '' }
			data-anchorclose={ closeOnAnchorClick ? closeAnchor : '' }
			data-time={ openBehaviour === 'load' ? waitTime : '' }
			data-dismiss={ dismissForVisitors ? dismissPeriod : '' }
			data-offset={ openBehaviour === 'scroll' ? offset : '' }
			data-outside={ closeOnClickOutside }
			data-created={ uuid }
		>
			<div className="abs-modal-wrap">
				<div
					role="presentation"
					className="overlay"
					style={ {
						backgroundColor: overlayColor,
						opacity: overlayOpacity / 100,
					} }
				/>
				<div className="modal-content" style={ modalStyle }>
					{ showCloseButton && (
						<div className="modal-header">
							<button className="close">
								<CloseIcon
									color={ closeButtonColor }
									size={ closeButtonSize }
								/>
							</button>
						</div>
					) }
					<div className="modal-body">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
