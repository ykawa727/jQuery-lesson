// $(function(){
//   $('.box1').css({
//     'background-color':'#0000FF',
//     'height':'100px'
//   });
// });

$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color':'#0000FF',
      'width':'200px',
      'height':'100px'
    }).slideUp();
  });
});