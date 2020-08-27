import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const InspectorSettings = () => {
	return (
		<InspectorControls>
			<PanelBody title={ __( 'Appearance', 'abs-popup' ) }>
				<p>Appearance</p>
			</PanelBody>
			<PanelBody
				initialOpen={ false }
				title={ __( 'Open Behaviour', 'abs-popup' ) }
			>
				<p>Open Behaviour</p>
			</PanelBody>
			<PanelBody
				initialOpen={ false }
				title={ __( 'Close Behaviour', 'abs-popup' ) }
			>
				<p>Close Behaviour</p>
			</PanelBody>
		</InspectorControls>
	);
};

export default InspectorSettings;
