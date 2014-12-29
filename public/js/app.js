$(document).ready(function() {
  game = new Game();
  game.board_seq.forEach(function(element, index){
    $('#'+index).append("<span class=\"insideTd\">"+element+"</span>");
  });

  setTimeout(function(){ $("span").fadeOut(); }, 5000);
  setTimeout(function(){ $('#question').text(game.question()+" = ").fadeIn(); }, 5500);

  clickCount = 0;
  clickedTds = [];

  $('#hint').on('click', function(){
    $(".insideTd").show();
    setTimeout(function(){ $(".insideTd").fadeOut(); }, 2000);
  });

  $('#board').on('click', 'td', function(event){
    $(event.target.firstChild).show();
    clickCount+=1;
    $('#numOpNum').text($('#numOpNum')[0].textContent+' '+game.board_seq[this.id]);
    clickedTds.push(this.id);
    if(clickCount===1 || clickCount===3){
      if(typeof game.board_seq[this.id] === 'string'){
        resetQuestion('Wrong! Click Number, Operation, and Number.');
      }else if(clickCount===3){
        if(game.result(parseInt($('#question')[0].textContent), clickedTds)){
          resetQuestion('Good! :)');
        }else{
          resetQuestion('Wrong!........');
        };
      };
    }else if(clickCount===2){
      if(typeof game.board_seq[this.id] === 'number'){
        resetQuestion('Wrong! Click Number, Operation, and Number.');
      };
    };
  });
});


function resetQuestion(msg){
  alert(msg);
  setTimeout(function(){ $('.insideTd').fadeOut(); }, 100);
  $('#score').text('Score: '+game.score+'/'+game.outOf);
  $('#question').text(game.question()+" = ");
  clickCount=0;
  clickedTds = [];
};