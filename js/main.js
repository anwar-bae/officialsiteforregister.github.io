/*!
 * Main.js - Hearth of Application
 * Copyright 2013-2017 CPACodex.com, Inc.
 * Licensed under the MIT license
 */
$( document ).ready( function() {


    setInterval( newActivity, 2000 );

    function newActivity() {

        var flags   = [ 'https://pbs.twimg.com/media/EjGKuuBUMAI8rbi?format=webp&name=tiny',
                        'https://pbs.twimg.com/media/EjGKuu0U8AEFOjH?format=webp&name=tiny',
                        'https://pbs.twimg.com/media/EjGKuvuVkAEqS9S?format=webp&name=tiny',
                        'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
                        'https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Us_flag_large_38_stars.png/1200px-Us_flag_large_38_stars.png',
                        'https://cdn.countryflags.com/thumbs/germany/flag-square-250.png',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvMrVgsXVwa2zL2M2sTru5p8bVEl-SKakr3w&usqp=CAU'];
        var users   = [ '441Binder','xminekkk', 'Attacklord_bro', 'leaelui', "emiflesh", "colorowyy", "jolobob", "magicofy", "julliazugaj", "natty2602", "ninjagirldraws", "azaharrizal", "anyaisch", "dobrafaza", 'nylaa.a',
                  'kisszsolti', 'anselmus_lauri', 'smile_life1', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'a_mcia', 'Haxajmo', 'nikoldavidova', 'sabinittas', 'twinsstylee',
                  'yarasantander', 'Hillck23', 'borizawada17', 'rosie_kalafiorek', 'only123', 'wieczorrek', 'MyNameIsShoost' ];
        var avatars = [ 'https://www.pngarts.com/files/5/User-Avatar-PNG-Image.png',
                        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                        'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
                        'https://i.pinimg.com/564x/04/56/86/0456869906dfa906c494b2b63aa67f2a.jpg',
                        'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlQBG3l--K5nc9j9Q2rOI3F2aLBlGlkMUZAg&usqp=CAU',
                        'https://i.pinimg.com/736x/71/d5/6b/71d56b3f757dc66b81f2264ece77bed7.jpg',
                        'https://i.pinimg.com/736x/2f/22/6d/2f226d95f8e6c85948742d62c2121d89.jpg',
                        'https://i.pinimg.com/736x/88/63/6e/88636e05ef6ef31c0a218023bdf093c0.jpg',
                        'https://i.pinimg.com/736x/9c/91/e0/9c91e06b6538e8bb941314a25207835f.jpg',
                        'https://appamatix.com/wp-content/uploads/2015/09/Zweihander-450x446.png',
                        'https://ignitehq.com/wp-content/uploads/2019/03/caleb-e1553614949231.jpeg',
                        'https://pbs.twimg.com/profile_images/889369871951122432/_QmrInAN_400x400.jpg'];

        var flag         = flags[ Math.floor( Math.random() * flags.length ) ];
        var avatar       = avatars[ Math.floor( Math.random() * avatars.length ) ];
        var user         = users[ Math.floor( Math.random() * users.length ) ];
        var vBucksRand     =  2500;

        $( '.live-stats' ).last().remove();
        $( '.activityContent' ).hide().prepend('<div class="live-stats">' +
            '<div class="avatar"><img src="'+avatar+'" alt="" /></div>' +
            '<div class="flag"><img src="'+flag+'" alt="" /></div>' +
           '<div class="info">' +
              '<ul>' +
                 '<li><b>'+user+',</b> Completed offer :</li>' +
                 '<li>Sent to '+user+'<span class="bucks-color"> : '+ vBucksRand + '</span> has been completed</li>' +
              '</ul>' +
           '</div>' +
        '</div>').fadeIn();
    }
    /* vBucks */
    var $gen_vBucks = $( '.vBucks-input' );
        $gen_vBucks.updown ({

        	step:1,
            min: 4000,
            max: 5999,

        });

    var $updown_vBucks = $gen_vBucks.data( 'updown');
        $( '.plus-vBucks' ).click( function( event ) {

            $updown_vBucks.increase( event );
            $updown_vBucks.triggerEvents();

        });
        $( '.minus-vBucks' ).click( function( event ) {

            $updown_vBucks.decrease( event );
            $updown_vBucks.triggerEvents();

        });


    function progressBar() {

        var width            = 1;
        var intervalProgress = setInterval( frame, 0200 );

        goToByScroll( 'generatorJS' );

        function frame() {

            if( width == 20 ) $( '.load-textJS' ).html( 'Connecting Email' );
            if( width == 30 ) $( '.load-textJS' ).html( 'Send Message' );
            if( width == 40 ) $( '.load-textJS' ).html( 'SEND -> $ 2500' );
            if( width == 50 ) $( '.load-textJS' ).html( 'GET -> DATA' );
            if( width == 60 ) $( '.load-textJS' ).html( 'GET -> Email' );
            if( width == 70 ) $( '.load-textJS' ).html( 'Process complete' );
            if( width == 80 ) $( '.load-textJS' ).html( 'Human verification' );

            if ( width >= 100 ) {

                clearInterval( intervalProgress );
                $( '.generator-step2' ).slideUp();
                $( '.generator-step3' ).slideDown();

                $( '.userJS' ).html( $( '.username-input' ).val() );

                            $('.vBucksJS').countTo({

                                from: 10,
                                to: $( '.vBucks-input' ).val(),
                                speed: 10,
                                refreshInterval: 1,
                                onComplete: function ( value) {

                                    $( '.vBucksJSthick' ).css('opacity', '1');

                                        setTimeout( function() {

                                            $( '.generator-step3' ).fadeOut( function() {

                                                $( '.generator-offers' ).fadeIn();

                                            });

                                        }, 2000);

                                }




                  });

            } else {

                width++;
                $( ".progress-bar" ).css( "width", width + '%' );
                $( ".progress-bar" ).html( width * 1 + '%' );

            }

        }

    }

    /* Generator Starts Here */

    $( ".btnGenerator" ).click( function() {

    	var $player_name = $( '.username-input' ).val();

    	if( $player_name == "" || $player_name.replace(/ /g,'').length < 2 ) {

    		$( ".username-input" ).css( { border: '1px solid #F00' } );

    	} else {

    		$( ".username-input" ).css( { border: '1px solid #111319' } );	// Change border to default

    		$( '.generator' ).slideUp( function() {

    			$( '.generator-step2' ).slideDown();
                progressBar();

    		});

    	}

    });
    // .btngenerator end

    /* Button to scroll to Generator */

    $( '.btn-GoGenerator' ).click( function() {

        goToByScroll( 'generator' );

    });
});
