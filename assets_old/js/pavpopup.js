/**
 * pavoPopup is free javascript developed by pavothemes
 *
 * @copyright Commercial License By PavoThemes.Com 
 * @email pavothemes@gmail.com
 * @visit http://www.pavothemes.com
 */

(function( $ ) {
 
	$.fn.pavoPopup = function( initvar ) {
 		
 		this.id = '';

 		this.work = function( msg  ){   
		 	var _this = this; 
			this.id  = $(this).data('id');
			var container = $(this).find('.pavpopup-inner');  // salert( container.html() ) ;
 			
			if( this.getCookie('pavpopup') == 1 ) {
				return true;
			}

			var time_open =  parseInt( $(this).data( 'time-open' ) );  

			var time = $(this).data('time-close');
			var text_close = $(this).data('text-close'); 

			setTimeout( function(){
 
				if( time > 0 ){  
					var div = $('<div class="popup-timmer">'+text_close.replace('%s',time)+'</div>');
					container.append( div );
					var timer = setInterval( function(){
						time = time - 1;
						div.html( text_close.replace('%s',time) ); 
						if( time <= 0 ){
							clearInterval( timer );
							$.magnificPopup.close();
						}
					}, 1000 );
				}
				_this.showPopup( container, _this );
			}, time_open*1000 );

 		},

		this.showPopup = function ( container, _this ){  


 			$( '.btn-close', _this ).click( function(){
 				_this.setCookie( 'pavpopup', '1', 10 );
				$.magnificPopup.close();
				
				return false;
 			} );

 			$.magnificPopup.open({
			  	items: {
				    src: container,
				    type: 'inline',
				    width:"900"
				 },
			});
		},

 		this.setCookie = function ( cname, cvalue, exdays ) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+ d.toUTCString();
		    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		},

		this.getCookie = function getCookie(cname) {
		    var name = cname + "=";
		    var decodedCookie = decodeURIComponent(document.cookie);
		    var ca = decodedCookie.split(';');
		    for(var i = 0; i <ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0) == ' ') {
		            c = c.substring(1);
		        }
		        if (c.indexOf(name) == 0) {
		            return c.substring(name.length, c.length);
		        }
		    }
		    return "";
		}

		//THIS IS VERY IMPORTANT TO KEEP AT THE END
		return this;
	};
})( jQuery );
/***/