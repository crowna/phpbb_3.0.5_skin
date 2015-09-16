


$( function () {
	//My Access menu
	$('.giz-icon-ucp').hover(
	  function() {
		jq_view_drop ( '.giz-uadmin' ) 
	  }, function() {
		jq_view_drop ( '.giz-uadmin' )
	  }
	);
} );

// Creating a new function, fadeToggle()
$.fn.fadeToggle = function( speed, easing, callback ) {
	return this.animate( { opacity: 'toggle' }, speed, easing, callback );
};

/**
* toggle for
*  display/hide an element 
*  fit/remove indicator class to button
* @var element: string target
* @var self: button to highlight (default: itself)
*/
function jq_view_drop (element , self) {
	
	$( element ).fadeToggle( 400 );

	if (self!=null){
		$( self ).toggleClass( 'open' );
	}
	else{
		$( this ).toggleClass( 'open' );
	}
}