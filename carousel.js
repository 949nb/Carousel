$('.imgs > img:nth-Child(1)').addClass('show')
$('.imgs > img:nth-Child(2)').addClass('ready')
$('.imgs > img:nth-Child(3)').addClass('ready')

n = 1
setInterval(()=>{
    $(`.imgs > img:nth-Child(${x(n)})`).removeClass('show').addClass('end').one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('end').addClass('ready')
    })
    $(`.imgs > img:nth-Child(${x(n+1)})`).removeClass('ready').addClass('show')
    n += 1
},2000)

function x(n){
    if(n>3){
        n = n%3
        if(n === 0){
            n = 3
        }
    }
    return n
}