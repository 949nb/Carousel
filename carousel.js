$button = $('.buttons > button');
$imgs = $('.imgs');
$img = $imgs.children('img');
$firstCopy = $img.eq(0).clone(true);
$lastCopy = $img.eq($img.length-1).clone(true);

$imgs.append($firstCopy)
$imgs.prepend($lastCopy)

$imgs.css({transform:'translateX(-400px)'})

index = 0

$button.eq(0).on('click',function(){
  if(index === 2){
    $imgs.css({transform:'translateX(-1595px)'})
    .one('transitionend',()=>{
      $imgs.hide().offset()
      $imgs.css({transform:'translateX(-400px)'})
      .show()
    })
  }else{
    $imgs.css({transform:'translateX(-400px)'})
  }
  index = 0
})
$button.eq(1).on('click',function(){
  $imgs.css({transform:'translateX(-800px)'})
  index = 1
})
$button.eq(2).on('click',function(){
  if(index === 0){
    $imgs.css({transform:'translateX(0px)'})
    .one('transitionend',()=>{
      $imgs.hide().offset()
      $imgs.css({transform:'translateX(-1200px)'})
      .show()
    })
  }else{
    $imgs.css({transform:'translateX(-1200px)'})
  }
  
  index = 2
})