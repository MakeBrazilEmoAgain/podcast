var jqxhr = $.get( "https://makebrazilemo.herokuapp.com/find-all-podcast")
    .done(function(data) {
        podcasts = data.content;
        console.log(podcasts);
        var list = [];
        for(var i = 0; i < podcasts.length; i++){
            list.push('<div class="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">' +
            '   <div class="image" style="background-image: url('+ podcasts[i].image +');"></div>' +
            '       <div class="text">' +
            '           <h3 class="font-weight-light"><a href="#">' + podcasts[i].title + '</a></h3>' +
            '           <div class="text-white mb-3"><span class="text-black-opacity-05"><small>De Kleber Nunes <span class="sep">/</span>' + podcasts[i].duration + '</small></span></div>' +
            '           <p class="mb-4">' + podcasts[i].resume + '</p>' +
            '           <div class="player">' +
            '               <audio id="player2" preload="none" controls style="max-width: 100%">' +
            '                   <source src="' + podcasts[i].url + '" type="audio/mp3">' +
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
