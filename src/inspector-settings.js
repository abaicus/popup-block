import { InspectorControls } from '@wordpress/block-editor';

import Appearance from './settings/appearance';
import OpenBehaviour from './settings/open-behaviour';
import CloseBehaviour from './settings/close-behaviour';
const InspectorSettings = ( props ) => {
	return (
		<InspectorControls>
			<Appearance { ...props } />
			<OpenBehaviour { ...props } />
			<CloseBehaviour { ...props } />
		</InspectorControls>
	);
};

export default InspectorSettings;
