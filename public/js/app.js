$(document).ready(function() {
  game = new Game();
// debugger
  game.board_seq.forEach(function(element, index){
    $('#'+index).append("<span class=\"insideTd\">"+element+"</span>");
  });

  setTimeout(function(){ $("span").fadeOut(); }, 5000);
  setTimeout(function(){ $('#question').text(game.question()+" = ").fadeIn(); }, 5500);


  var clickCount = 0;
  var clickedTds = [];
  $('#hint').on('click', function(){
    console.log('hint works');
    $(".insideTd").show();
    setTimeout(function(){ $(".insideTd").fadeOut(); }, 2000);
  });
  $('#board').on('click', 'td', function(event){
    // debugger
    $(event.target.firstChild).show();
    clickCount+=1;
    if(clickCount<4){
      $('#numOpNum').text($('#numOpNum')[0].textContent+' '+game.board_seq[this.id]);
      clickedTds.push(this.id);
      if(clickCount===1 || clickCount===3){
        if(typeof game.board_seq[this.id] === 'string'){
          // debugger
          setTimeout(function(){ $('.insideTd').fadeOut(); }, 100);
          alert('Wrong!');
          $('#question').text(game.question()+" = ");
          clickCount=0;
          clickedTds = [];
        }else if(clickCount===3){
          console.log(game.question()===game.result(clickedTds));
          // debugger
          if(parseInt($('#question')[0].textContent)===game.result(clickedTds)){
            console.log('true',game.question()===game.result(clickedTds));
            console.log(game.result(clickedTds));
            setTimeout(function(){ $('.insideTd').fadeOut(); }, 100);
            alert('Good!');
            $('#question').text(game.question()+" = ");
            clickCount=0;
            clickedTds = [];
          }else{
            console.log('false');
            console.log('q',game.question());
            console.log('r',game.result(clickedTds));
            setTimeout(function(){ $('.insideTd').fadeOut(); }, 100);
            alert('Wrong!');
            $('#question').text(game.question()+" = ");
            clickCount=0;
            clickedTds = [];
          };
        };
      }else if(clickCount===2){
        if(typeof game.board_seq[this.id] === 'number'){
          setTimeout(function(){ $('.insideTd').fadeOut(); }, 100);
          alert('Wrong!');
          $('#question').text(game.question()+" = ");
          clickCount=0;
          clickedTds = [];
        };
      };


    };

  });

});





