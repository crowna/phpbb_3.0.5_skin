


$( function () {
	//My Access menu
	$('.giz-icon-ucp').hover(
	  function() {
		jq_view_drop ( '.giz-uadmin' ) 
	  }, function() {
		jq_view_drop ( '.giz-uadmin' )
	  }
	);

    //forum lists
    $('div.forabg ul.forums dd').css('float','left' );

    var cnt = 0;
    var li_list = {};
    var tmp = '';
    $('div.forabg ul.forums dd').each(function(){
        tmp = $(this).parent().parent() ;
        if (  !tmp.hasClass('done') ){
           // typeof li_list['li'+cnt] == "undefined" &&
            tmp.addClass('done');
            li_list['li'+cnt] = tmp.css('height');
            cnt ++;
        }
       // $(this).css('height', li_list['li'+(cnt-1)] );
        $(this).css('height', tmp.css('height') );
    });
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