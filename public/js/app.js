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
          alert('Wrong! Click Number, Operation, and Number.');
          $('#score').text('Score: '+game.score+'/'+game.outOf);
          $('#question').text(game.question()+" = ");
          clickCount=0;
          clickedTds = [];
        }else if(clickCount===3){
          if(game.result(parseInt($('#question')[0].textContent), clickedTds)){
            setTimeout(function(){ $('.insideTd').fadeOut(); }, 100);
            alert('Good!');
            $('#score').text('Score: '+game.score+'/'+game.outOf);
            $('#question').text(game.question()+" = ");
            clickCount=0;
            clickedTds = [];
          }else{
            setTimeout(function(){ $('.insideTd').fadeOut(); }, 100);
            alert('Wrong!........');
            $('#score').text('Score: '+game.score+'/'+game.outOf);
            $('#question').text(game.question()+" = ");
            clickCount=0;
            clickedTds = [];
          };
        };
      }else if(clickCount===2){
        if(typeof game.board_seq[this.id] === 'number'){
          setTimeout(function(){ $('.insideTd').fadeOut(); }, 100);
          alert('Wrong! Click Number, Operation, and Number.');
          $('#score').text('Score: '+game.score+'/'+game.outOf);
          $('#question').text(game.question()+" = ");
          clickCount=0;
          clickedTds = [];
        };
      };


    };

  });

});





