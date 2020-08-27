import { InnerBlocks } from '@wordpress/block-editor';
import { Icon, Button } from '@wordpress/components';

const Save = () => {
	return (
		<div className="abs-popup">
			<div className="modal-wrap">
				<div className="modal-content">
					<div className="modal-header">
						<Button className="close">
							<Icon icon="no" />
						</Button>
					</div>
					<div className="modal-body">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
