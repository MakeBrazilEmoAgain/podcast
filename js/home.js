var jqxhr = $.get( "https://makebrazilemo.herokuapp.com/find-all-podcast")
    .done(function(data) {
        podcasts = data.content;
        console.log(podcasts);
        var list = [];
        for(var i = 0; i < podcasts.length; i++){
            list.push('<div class="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">' +
            '   <div class="image" style="background-image: url(images/img_1.jpg);"></div>' +
            '       <div class="text">' +
            '           <h3 class="font-weight-light"><a href="#">' + podcasts[i].title + '</a></h3>' +
            '           <div class="text-white mb-3"><span class="text-black-opacity-05"><small>De Kleber Nunes <span class="sep">/</span>' + podcasts[i].duration + '</small></span></div>' +
            '           <p class="mb-4">' + podcasts[i].resume + '</p>' +
            '           <div class="player">' +
            '               <audio id="player2" preload="none" controls style="max-width: 100%">' +
            '                   <source src="https://firebasestorage.googleapis.com/v0/b/portfolio-kleber-nunes.appspot.com/o/podcast%2301.mp3?alt=media&token=16b8a75b-95a4-4200-a185-1420f7473200" type="audio/mp3">' +
            '               </audio>' +
            '           </div>' +
            '       </div>' +
            '   </div>' +
            '</div>');
        }
        $('#podcast-list').html(list);
    })
    .fail(function(error) {
        alert( "error" );
    });
