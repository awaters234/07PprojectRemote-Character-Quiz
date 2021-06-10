$('.submit').click(function() {

    let answerOne = $('.answer-1').val();
    let answerTwo = $(' .answer-2').val();

    $('.results').append('You are ' + answerOne + ' years old and want to be a ' + answerTwo);


});