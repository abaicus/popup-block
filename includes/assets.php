<?php
/**
 * Register Block Assets
 *
 * @package ABS\Popup_Block
 */

namespace ABS\Popup_Block;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\assets_editor' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\assets_frontend' );

/**
 * Register block assets
 */
function assets_editor() {
	$dependencies = ( include ABS_POPUP_PATH . 'build/index.asset.php' );
	wp_register_script(
		'abs-popup-block',
		ABS_POPUP_URL . 'build/index.js',
		array_merge( $dependencies['dependencies'] ),
		$dependencies['version'],
		false
	);

	wp_register_style(
		'abs-popup',
		ABS_POPUP_URL . 'build/index.css',
		[],
		$dependencies['version']
	);

	wp_register_style(
		'abs-popup-editor-style',
		ABS_POPUP_URL . 'editor.css',
		[],
		$dependencies['version']
	);

	register_block_type(
		'abs/popup-block',
		[
			'editor_script' => 'abs-popup-block',
			'editor_style'  => 'abs-popup-editor-style',
			'style'         => 'abs-popup',
		]
	);

}

/**
 * Register block assets
 */
function assets_frontend() {
	if ( is_admin() ) {
		return;
	}

	$dependencies = ( include ABS_POPUP_PATH . 'build/frontend.asset.php' );
	wp_enqueue_script(
		'abs-popup',
		ABS_POPUP_URL . 'build/frontend.js',
		array_merge( $dependencies['dependencies'] ),
		$dependencies['version'],
		false
	);

	wp_enqueue_style(
		'abs-popup-style',
		ABS_POPUP_URL . 'build/frontend.css',
		[],
		$dependencies['version']
	);
}
