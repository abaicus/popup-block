import { __ } from '@wordpress/i18n';
import { Button, Icon } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

import './scss/editor.scss';
import InspectorSettings from './inspector-settings';
import BlockIcon from './icon';
const Edit = () => {
	const [ previewing, setPreviewing ] = useState( false );

	const togglePreview = ( e ) => {
		e.preventDefault();
		setPreviewing( ! previewing );
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
					<div className="modal-wrap">
						<div className="modal-content">
							<div className="modal-header">
								<Button onClick={ togglePreview }>
									<Icon icon="no" />
								</Button>
							</div>
							<div className="modal-body">
								<InnerBlocks />
							</div>
						</div>
					</div>
				) }
			</div>
			<InspectorSettings />
		</>
	);
};

export default Edit;
