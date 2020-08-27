import domReady from '@wordpress/dom-ready';

import { PopupBlock } from './components/PopupBlock';
import './scss/frontend.scss';

domReady( async () => {
	const popups = document.querySelectorAll( '.abs-popup' );

	if ( ! popups.length ) {
		return;
	}

	popups.forEach( ( block ) => {
		new PopupBlock( block );
	} );
} );
