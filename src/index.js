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
	title: __( 'Popup Block', 'abs-popup' ),
	description: __( 'A popup block.', 'abs-popup' ),
	category: 'design',
	icon: Icon,
	attributes,
	edit: Edit,
	save: Save,
} );
