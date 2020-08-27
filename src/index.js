/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { attributes } from '../block.json';
/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import Icon from './icon';

registerBlockType( 'abs/popup-block', {
	title: __( 'Popup Block', 'maps-block-apple' ),
	description: __( 'A popup block.', 'maps-block-apple' ),
	category: 'design',
	icon: Icon,
	attributes,
	example: {
		// attributes: {
		// 	latitude: 51.48762585296625,
		// 	longitude: -0.1326724377053381,
		// },
	},
	supports: {},
	edit: Edit,
	save: Save,
} );
