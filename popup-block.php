<?php
/**
 * Plugin Name:       Popup / Modal Block
 * Plugin URI:        https://github.com/abaicus/popup-block
 * Description:       A popup/modal block for the WordPress block editor.
 * Version:           0.0.1
 * Requires at least: 5.2
 * Requires PHP:      5.6
 * Author:            abaicus
 * Author URI:        https://abaic.us
 * License:           GPLv2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       abs-popup-block
 *
 * @package           ABS\Popup_Block
 */

namespace ABS\Popup_Block;

define( 'ABS_POPUP_VERSION', '0.0.2' );
define( 'ABS_POPUP_URL', plugin_dir_url( __FILE__ ) );
define( 'ABS_POPUP_PATH', dirname( __FILE__ ) . '/' );
define( 'ABS_POPUP_INC', ABS_POPUP_PATH . 'includes/' );
define( 'ABS_POPUP_BASENAME', plugin_basename( __FILE__ ) );

/**
 * Require WP version 5.2+
 */
register_activation_hook( __FILE__, __NAMESPACE__ . '\activation_callback' );

/**
 * Called on activation.
 */
function activation_callback() {
	if ( ! version_compare( $GLOBALS['wp_version'], '5.2', '>=' ) ) {
		wp_die(
			esc_html__( 'Popup block requires WordPress version 5.2 or greater.', 'abs-popup-block' ),
			esc_html__( 'Error Activating', 'abs-popup-block' )
		);
	}
}

require_once ABS_POPUP_INC . 'assets.php';
