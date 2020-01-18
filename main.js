var allButtons = $('#buttons > button')
var currentID = 0
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', (e) => {
        $(e.currentTarget).addClass('highLight').siblings('.highLight').removeClass('highLight')
        var offset = -i * $('#wrapper > img')[0].width
        console.log(offset);
        var wrapper = $('#wrapper').css({
            "transform": "translate(" + offset + "px)"
        })
        currentID = $(e.currentTarget).index()
        console.log(currentID);
    })
}
var n = 1
var timeId
var autoPlay = () => {
    timeId = setInterval(() => {
        $(allButtons[currentID]).click()
        currentID = n % 3
        n += 1
    }, 1500)
}
autoPlay.call()
console.log(autoPlay);
$('#window').on('mouseenter', () => {
    window.clearInterval(timeId)
})
$('#window').on('mouseleave', () => {
    autoPlay.call()
})