$(function(){
  function renderIt(data){
      for ( var i = 0; i < data.data.children.length; i++ ){

        var cImage = data.data.children[i].data.url;
        var cTitle = data.data.children[i].data.title;
        var cAuthor = data.data.children[i].data.author;
        var cDate = moment.unix(data.data.children[i].data.created).fromNow(); // using moment.js
        var cScore = data.data.children[i].data.score;
        var box = $("<a>", { "href" : cImage });
        var container = $("<div>", { "class" : "article_container shadow"});
        var image = $("<div>", { "class" : "img_article"});
        image.css("background-image", "url('" + cImage + "')");
        var h1tag = $("<h1>", { html : cTitle });
        var h2tag = $("<h2>", { html : cAuthor });
        var age = $("<h2>", { html: "<span class='circle'></span> " + cDate + " ago"});
        var score = $("<h2>", { html : "<span class='circle'></span> " + cScore + " views"});
        var parapara = $("<p>", { html : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatibus, tempore, minima sit porro veniam molestias hic dolorum commodi ex vero, deserunt, magnam ea. Recusandae placeat quia, id sed quaerat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quidem ut eius neque adipisci, temporibus. Porro temporibus eligendi, voluptates voluptatem animi dolor, voluptas consectetur quis mollitia soluta maiores harum inventore."});

        container.append( image, h1tag, h2tag, age, score, parapara );
        box.append(container);
        $( ".content" ).append( box );
      }
  }

  $( "#random_link" ).click( function() {
    $( ".content" ).empty();
    $.getJSON( "api/random.json", function( data ) {
    renderIt(data);
    });
  });
  
  $( "#boards_link" ).click( function() {
    $( ".content" ).empty();
    $.getJSON( "api/my_boards.json", function( data ) {
      renderIt(data);
    });
  });

  $( "#app_link" ).click( function() {
    $( ".content" ).empty();
    $.getJSON( "api/get_the_app.json", function( data ) {
      renderIt(data);
    });
  });

  $(".plus_sign").click( function() {
    alert('NOT WORKING AHAHAHAHHAA');
  })
}); //end closure