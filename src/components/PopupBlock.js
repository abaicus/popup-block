/*global localStorage*/
class PopupBlock {
	constructor( element ) {
		this.element = element;
		this.happened = false;
		this.storageKey = 'abs-popup-dismiss';

		const { dismiss } = element.dataset;

		if ( this.isItemDismissed() && dismiss ) {
			return false;
		}
		this.init();
	}

	init() {
		this.bindOpen();
		this.bindClose();
	}

	openModal() {
		this.element.classList.add( 'active' );
		this.happened = true;
	}

	closeModal() {
		this.element.classList.remove( 'active' );
		this.dismissModal();
	}

	dismissModal() {
		const { dismiss, anchor, created } = this.element.dataset;
		if ( ! dismiss || ! created || anchor ) {
			return false;
		}

		const now = new Date();
		const cache =
			JSON.parse( localStorage.getItem( this.storageKey ) ) || [];
		const exists = cache.some( ( entry ) => entry.modalID === created );

		if ( exists ) {
			return false;
		}

		const ttl = 1000 * 60 * 60 * 24 * dismiss;
		const item = {
			expiry: now.getTime() + ttl,
			modalID: created,
		};
		localStorage.setItem(
			this.storageKey,
			JSON.stringify( [ ...cache, item ] )
		);
	}

	isItemDismissed() {
		const { created } = this.element.dataset;
		const cache =
			JSON.parse( localStorage.getItem( this.storageKey ) ) || [];
		const inCache = cache.filter( ( entry ) => entry.modalID === created );

		if ( inCache.length === 0 ) {
			return false;
		}

		const item = inCache[ 0 ];

		const now = new Date();

		if ( item.expiry > now.getTime() ) {
			return true;
		}
		const newCache = cache.filter( ( i ) => {
			return i !== inCache[ 0 ];
		} );
		localStorage.setItem( this.storageKey, JSON.stringify( newCache ) );

		return false;
	}

	bindOpen() {
		const { open } = this.element.dataset;
		switch ( open ) {
			case 'anchor':
				this.bindAnchors();
				break;
			case 'scroll':
				this.bindOpenAfterScroll();
				break;
			case 'exit':
				this.bindExitIntent();
				break;
			default:
			case 'load':
				this.bindOnLoad();
				break;
		}
	}

	bindAnchors() {
		const { anchor } = this.element.dataset;
		if ( ! anchor ) {
			return false;
		}

		const buttons = document.querySelectorAll( `#${ anchor }` );
		const hrefs = document.querySelectorAll( `[href='#${anchor}']` );
		[...buttons, ...hrefs].forEach( ( button ) => {
			button.addEventListener( 'click', ( e ) => {
				e.preventDefault();
				this.openModal();
			} );
		} );
	}

	bindOpenAfterScroll() {
		window.document.addEventListener( 'scroll', () => {
			if ( this.happened ) {
				return false;
			}

			const { offset } = this.element.dataset;

			if ( parseInt( offset ) >= parseInt( this.getScrolledPercent() ) ) {
				return false;
			}

			this.openModal();
		} );
	}

	bindOnLoad() {
		const { time } = this.element.dataset;
		setTimeout( () => {
			this.openModal();
		}, time * 1000 );
	}

	bindExitIntent() {
		document.body.addEventListener( 'mouseleave', ( e ) => {
			if ( this.happened ) {
				return false;
			}

			if ( e.clientY < 0 ) {
				this.openModal();
			}
		} );
	}

	getScrolledPercent() {
		const height = document.documentElement;
		const body = document.body;
		const st = 'scrollTop';
		const sh = 'scrollHeight';

		return (
			( ( height[ st ] || body[ st ] ) /
				( ( height[ sh ] || body[ sh ] ) - height.clientHeight ) ) *
			100
		);
	}

	bindClose() {
		this.bindCloseButtons();
		this.bindAnchorClose();
		this.bindOverlayClosing();
	}

	bindAnchorClose() {
		const { anchorclose } = this.element.dataset;

		if ( ! anchorclose ) {
			return false;
		}

		const buttons = document.querySelectorAll( `#${ anchorclose }` );
		buttons.forEach( ( button ) => {
			button.addEventListener( 'click', ( e ) => {
				e.preventDefault();
				this.closeModal();
			} );
		} );
	}

	bindCloseButtons() {
		const modal = this.element;
		const closes = modal.querySelectorAll( '.close' );

		closes.forEach( ( close ) => {
			close.addEventListener( 'click', () => {
				this.closeModal();
			} );
		} );
	}

	bindOverlayClosing() {
		const { outside } = this.element.dataset;
		if ( ! outside ) {
			return false;
		}
		const overlay = this.element.querySelector( '.overlay' );
		overlay.addEventListener( 'click', () => {
			this.closeModal();
		} );
	}
}

export { PopupBlock };
