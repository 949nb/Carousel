var buttons = $('#buttons > button')

$(buttons).on('click',function(x){  
  var index = $(x.currentTarget).index()
  console.log(index)
  var p = index * -300
  
    $('.images').css({
      transform:'translate('+ p +'px)'
    })
    $(this).addClass('red').siblings().removeClass('red')
})

var n = 0
console.log(n)
setInterval(function(){
  n += 1
  if(n>=4){ n = 0;}
  let p = n * -300
  $('.images').css({
      transform:'translate('+ p +'px)'
    })
},2000)