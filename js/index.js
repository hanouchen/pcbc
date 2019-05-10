const CATEGORIES = [
    'Math',
    'Brute Force',
    'Dynamic Programming',
    'Graph',
    'Geometry',
    'Greedy',
    'Data Structures',
    'Search',
    'Sorting',
];

$( '.dropdown-menu a' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget );
   const value = $target.attr( 'data-value' );
   var $inp = $target.find( 'input' );
   let idx;

   if ( ( idx = options.indexOf( val ) ) > -1 ) {
      options.splice( idx, 1 );
    //   setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
       $inp.prop( 'checked', false );
   } else {
      options.push( val );
    //   setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
       $inp.prop( 'checked', true );
   }

   $( event.target ).blur();

   console.log( options );
   return false;
});