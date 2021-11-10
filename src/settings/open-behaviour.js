import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	TextControl,
	RangeControl,
} from '@wordpress/components';

const OpenBehaviour = ( props ) => {
	const { attributes, setAttributes } = props;
	const { openBehaviour, anchor, waitTime, offset } = attributes;

	const handleChangeOpenBehaviour = ( value ) => {
		setAttributes( { openBehaviour: value } );
	};

	const updateAnchor = ( val ) => {
		setAttributes( { anchor: val } );
	};

	const updateWaitTime = ( val ) => {
		setAttributes( { waitTime: val } );
	};

	const updateScrollOffset = ( val ) => {
		setAttributes( { offset: val } );
	};

	const options = [
		{ label: __( 'Timer', 'abs-popup' ), value: 'load' },
		{ label: __( 'On Anchor Click', 'abs-popup' ), value: 'anchor' },
		{ label: __( 'On Scroll', 'abs-popup' ), value: 'scroll' },
		{ label: __( 'On Exit Intent', 'abs-popup' ), value: 'exit' },
	];

	return (
		<PanelBody
			initialOpen={ false }
			title={ __( 'Open Behaviour', 'abs-popup' ) }
		>
			<PanelRow>
				<RadioControl
					onChange={ handleChangeOpenBehaviour }
					selected={ openBehaviour }
					options={ options }
				/>
			</PanelRow>
			<PanelRow>
				{ openBehaviour === 'anchor' && (
					<TextControl
						value={ anchor }
						label={ __( 'Anchor', 'abs-popup' ) }
						help={
							<>
								<small>
									{__(
										'You can add anchors to button blocks. Using the same anchor here will open the modal when you click the respective button.',
										'abs-popup'
									)}
								</small>
								<br/>
								<hr/>
								<span><code>#example</code> - {__('for link href attributes', 'abs-popup')}</span>
								<br/>
								<span><code>example</code> - {__('for anchor attributes', 'abs-popup')}</span>
							</>
						}
						onChange={ updateAnchor }
					/>
				) }
				{ openBehaviour === 'scroll' && (
					<RangeControl
						label={ __(
							'Scroll Distance in Percent',
							'abs-popup'
						) }
						help={
							<small>
								{ __(
									'Show the modal when this percentage of the page has been scrolled.'
								) }
							</small>
						}
						beforeIcon="image-flip-vertical"
						value={ offset }
						onChange={ updateScrollOffset }
						min={ 0 }
						max={ 100 }
					/>
				) }
				{ openBehaviour === 'load' && (
					<RangeControl
						label={ __( 'Wait Time in Seconds', 'abs-popup' ) }
						help={
							<small>
								{ __(
									'How much time to wait before showing the popup.'
								) }
							</small>
						}
						beforeIcon="clock"
						value={ waitTime }
						onChange={ updateWaitTime }
						min={ 0 }
						max={ 100 }
					/>
				) }
				{ openBehaviour === 'exit' && (
					<small>
						{ __(
							'Shows the modal when the user moves the mouse outside of the top of the window',
							'abs-popup'
						) }
					</small>
				) }
			</PanelRow>
		</PanelBody>
	);
};

export default OpenBehaviour;
