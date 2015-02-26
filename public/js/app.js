$(function(){
  $.getJSON( "api/my_boards.json", function( data ) {
    var contentBox = [];
    var renderhtml = "";
    for ( var i = 0; i < data.data.children.length; i++ ){

      var cImage = data.data.children[i].data.url;
      var cTitle = data.data.children[i].data.title;
      var cAuthor = data.data.children[i].data.author;
      // var somevariable = data.data.children[i].data.created); using moment.js
      var cScore = data.data.children[i].data.score;

      // create a link for the box
      var box = $("<a>", { "href" : cImage });

      // the box container
      var container = $("<div>", { "class" : "article_container shadow"});

      var image = $("<div>", { "class" : "img_article"});
      image.css("background-image", "url('" + cImage + "')");
      var h1tag = $("<h1>", { html : cTitle });
      var h2tag = $("<h2>", { html : cAuthor });
      var age = $("<h2>", { html: "<span class='circle'></span> SOMEPLACEHOLDER" });
      var score = $("<h2>", { html : "<span class='circle'></span>" + cScore });
      var parapara = $("<p>", { html : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatibus, tempore, minima sit porro veniam molestias hic dolorum commodi ex vero, deserunt, magnam ea. Recusandae placeat quia, id sed quaerat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quidem ut eius neque adipisci, temporibus. Porro temporibus eligendi, voluptates voluptatem animi dolor, voluptas consectetur quis mollitia soluta maiores harum inventore."});


      container.append( image, h1tag, h2tag, age, score, parapara );
      box.append(container);
      console.log(box);
      // renderhtml += "<a href=" + cImage + ">" + 
      // "<div class='article_container shadow'>" +
      //     "<div class='img_article'></div>" +
      //     "<div><h1>" + cTitle + "</h1></div>" +
      //     "<div><h2>" + cAuthor + " " +
      //     "<span class='circle'></span> MOMENTJSPLACEHOLDER " +
      //     "<span class='circle'></span> " + cScore +
      //     "</h2></div>" +
      //     "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque id quibusdam alias ipsam iste natus ullam, eaque, consequuntur iusto. Eos similique possimus sit vitae dolores consequuntur voluptates nam praesentium consectetur." +
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ipsam officiis doloribus dolore, fugit ratione harum, tenetur quas architecto fuga molestias dolorem minus sapiente iste deleniti quis. Sit, eveniet totam." +
      //     "</div></a>";

      $( ".content" ).append( box );
    }


  });

}); //end closure