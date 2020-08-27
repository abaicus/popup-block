import { __ } from '@wordpress/i18n';
import { RangeControl, PanelBody, PanelRow } from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from '@wordpress/block-editor';

const Appearance = ( props ) => {
	const { attributes, setAttributes, showPreview } = props;
	const {
		width,
		backgroundColor,
		gradientBackground,
		closeButtonColor,
		closeButtonSize,
		borderRadius,
		overlayColor,
		overlayOpacity,
	} = attributes;

	return (
		<>
			<PanelBody title={ __( 'Modal Appearance', 'abs-popup' ) }>
				<PanelRow>
					<RangeControl
						value={ width }
						label={ __( 'Popup Minimum Width', 'abs-popup' ) }
						onChange={ ( val ) => {
							showPreview();
							setAttributes( { width: val } );
						} }
						min={ 0 }
						max={ 1000 }
					/>
				</PanelRow>
				<PanelRow>
					<RangeControl
						value={ borderRadius }
						label={ __( 'Popup Border Radius', 'abs-popup' ) }
						onChange={ ( val ) => {
							showPreview();
							setAttributes( { borderRadius: val } );
						} }
						min={ 0 }
						max={ 100 }
					/>
				</PanelRow>
				<PanelRow>
					<ColorGradientControl
						label={ __( 'Background Color', 'abs-popup' ) }
						colorValue={ backgroundColor }
						gradientValue={ gradientBackground }
						onGradientChange={ ( val ) => {
							showPreview();
							setAttributes( {
								gradientBackground: val || false,
							} );
						} }
						onColorChange={ ( val ) => {
							showPreview();
							setAttributes( { backgroundColor: val || false } );
						} }
					/>
				</PanelRow>
				<hr />
				<PanelRow>
					<RangeControl
						value={ closeButtonSize }
						label={ __( 'Close Icon Size', 'abs-popup' ) }
						onChange={ ( val ) => {
							showPreview();
							setAttributes( { closeButtonSize: val } );
						} }
						min={ 0 }
						max={ 60 }
					/>
				</PanelRow>
				<PanelRow>
					<ColorGradientControl
						label={ __( 'Close Button Color', 'abs-popup' ) }
						colorValue={ closeButtonColor }
						onColorChange={ ( val ) => {
							showPreview();
							setAttributes( {
								closeButtonColor: val || '#000000',
							} );
						} }
					/>
				</PanelRow>
				<hr />
				<PanelRow>
					<ColorGradientControl
						label={ __( 'Overlay Color', 'abs-popup' ) }
						colorValue={ overlayColor }
						onColorChange={ ( val ) => {
							showPreview();
							setAttributes( { overlayColor: val || '#000000' } );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<RangeControl
						value={ overlayOpacity }
						label={ __( 'Overlay Opacity', 'abs-popup' ) }
						onChange={ ( val ) => {
							showPreview();
							setAttributes( { overlayOpacity: val } );
						} }
						min={ 0 }
						max={ 100 }
					/>
				</PanelRow>
			</PanelBody>
		</>
	);
};

export default Appearance;
