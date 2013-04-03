(function(bespoke) {

	var INVOKE_CHAR_CODE = 81; // q
	var SEARCH_SELECTORS = [
		function( slide ) { return slide.querySelectorAll( "header, h1, h2, h3, h4, h5, h6" ); },
		function( slide ) { return [ slide ]; }
	];

	function escapeRegExp( str ) {
		var ret = "", esc = "\\^$*+?.()=|{,}[]-";
		for ( var i = 0; i < str.length; i++) {
			ret += (esc.indexOf(str.charAt(i)) === -1 ? "" : "\\") + str.charAt(i);
		}
		return ret;
	}


	var plugin = function( deck ) {
		var activeSlide = 0;
		var rememberSlide = 0;
		deck.on("activate", function( ev ) {
			activeSlide = ev.index;
		});

		var shown = false;
		function show() {
			rememberSlide = activeSlide;
			el.style["display"] = "block";
			field.value = "";
			field.focus();
			shown = true;
		}
		function hide() {
			el.style["display"] = "none";
			field.className = "";
			shown = false;
		}

		var indicies = SEARCH_SELECTORS.map( function( selector ) {
			return deck.slides.map( function( slide ) {
				return Array.prototype.reduce.call( selector(slide), function( a, el ) {
					return a + " " + el.textContent;
				}, "" ).trim().replace(/\s+/g, " " );
			} );
		});

		var outer = document.createElement("DIV");
		outer.innerHTML = '<div id="bespoke-spotlight" style="display: none"><input type="text" id="bespoke-spotlight-q"></div>';
		document.body.appendChild( outer.firstChild );
		var el = document.getElementById("bespoke-spotlight");
		var field = document.getElementById("bespoke-spotlight-q");

		field.addEventListener('blur', hide );
		field.addEventListener('keyup', function() {
			var val = field.value;
			if( val.length === 0 ) {
				return;
			}
			var re = new RegExp( escapeRegExp( val ), "i" );
			for( var i = 0; i < indicies.length; i++ ) {
				var index = indicies[ i ];
				for( var j = 0; j < index.length; j++ ) {
					if( re.test( index[ j ] ) ) {
						deck.slide( j );
						field.className = "";
						return;
					}
				}
			}
			field.className = "no-match";
			deck.slide( rememberSlide );
		});

		window.addEventListener('keydown', function(e) {
			if( !shown && e.which === INVOKE_CHAR_CODE ) {
				show();
				e.preventDefault();
			}
			if( shown && ( e.which === 27 || e.which === 13 ) ) {
				hide();
			}
		} );
	};

	bespoke.plugins.spotlight = plugin;

}(bespoke));