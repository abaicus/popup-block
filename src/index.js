/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

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
	attributes: {
		// address: {
		// 	type: 'string',
		// 	default: '',
		// },
		// height: {
		// 	type: 'string',
		// 	default: '450',
		// },
		// latitude: {
		// 	type: 'number',
		// 	default: 51.48762585296625,
		// },
		// longitude: {
		// 	type: 'number',
		// 	default: -0.1326724377053381,
		// },
		// rotation: {
		// 	type: 'number',
		// 	default: 0,
		// },
		// zoom: {
		// 	type: 'number',
		// 	default: 15,
		// },
		// mapType: {
		// 	type: 'string',
		// 	default: Map.MapTypes.Standard,
		// },
		// showsMapTypeControl: {
		// 	type: 'boolean',
		// 	default: true,
		// },
		// isRotationEnabled: {
		// 	type: 'boolean',
		// 	default: true,
		// },
		// showsCompass: {
		// 	type: 'string',
		// 	default: FeatureVisibility.Adaptive,
		// },
		// isZoomEnabled: {
		// 	type: 'boolean',
		// 	default: true,
		// },
		// showsZoomControl: {
		// 	type: 'boolean',
		// 	default: true,
		// },
		// isScrollEnabled: {
		// 	type: 'boolean',
		// 	default: true,
		// },
		// showsScale: {
		// 	type: 'string',
		// 	default: FeatureVisibility.Adaptive,
		// },
		// markers: {
		// 	type: 'array',
		// 	default: [],
		// },
	},
	example: {
		// attributes: {
		// 	latitude: 51.48762585296625,
		// 	longitude: -0.1326724377053381,
		// },
	},
	supports: {
		// align: [ 'wide', 'full' ],
		// html: false,
	},
	edit: Edit,
	save: Save,
} );
