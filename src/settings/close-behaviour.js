import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	CheckboxControl,
	TextControl,
	RangeControl,
	Radio,
	RadioGroup,
	Icon,
} from '@wordpress/components';

const CloseBehaviour = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		showCloseButton,
		closeButtonAlignment,
		closeOnClickOutside,
		closeOnAnchorClick,
		closeAnchor,
		dismissForVisitors,
		dismissPeriod,
	} = attributes;

	const changeAttribute = ( slug, val ) => {
		setAttributes( { [ slug ]: val } );
	};

	return (
		<PanelBody
			initialOpen={ false }
			title={ __( 'Close Behaviour', 'abs-popup' ) }
		>
			<PanelRow>
				<CheckboxControl
					label={ __( 'Show Close Button', 'abs-popup' ) }
					checked={ showCloseButton }
					onChange={ ( value ) =>
						changeAttribute( 'showCloseButton', value )
					}
				/>
			</PanelRow>
			<PanelRow>
				<CheckboxControl
					label={ __( 'Close On Click Outside', 'abs-popup' ) }
					checked={ closeOnClickOutside }
					onChange={ ( value ) =>
						changeAttribute( 'closeOnClickOutside', value )
					}
				/>
			</PanelRow>
			<PanelRow>
				<CheckboxControl
					label={ __( 'Close On Anchor Click', 'abs-popup' ) }
					checked={ closeOnAnchorClick }
					onChange={ ( value ) =>
						changeAttribute( 'closeOnAnchorClick', value )
					}
				/>
			</PanelRow>
			{ closeOnAnchorClick && (
				<PanelRow>
					<TextControl
						value={ closeAnchor }
						label={ __( 'Anchor', 'abs-popup' ) }
						help={
							<small>
								{ __(
									'You can add anchors to button blocks. Using the same anchor here will close the modal when you click the respective button.',
									'abs-popup'
								) }
							</small>
						}
						onChange={ ( value ) =>
							changeAttribute( 'closeAnchor', value )
						}
					/>
				</PanelRow>
			) }
			<PanelRow>
				<CheckboxControl
					label={ __(
						'Dismiss for Recurrent Visitors',
						'abs-popup'
					) }
					checked={ dismissForVisitors }
					onChange={ ( value ) =>
						changeAttribute( 'dismissForVisitors', value )
					}
				/>
			</PanelRow>
			{ dismissForVisitors && (
				<PanelRow>
					<RangeControl
						value={ dismissPeriod }
						label={ __(
							'Number of Days Until the Notice is Shown again',
							'abs-popup'
						) }
						onChange={ ( val ) => {
							setAttributes( { dismissPeriod: val } );
						} }
						min={ 0 }
						max={ 100 }
					/>
				</PanelRow>
			) }
		</PanelBody>
	);
};

export default CloseBehaviour;
