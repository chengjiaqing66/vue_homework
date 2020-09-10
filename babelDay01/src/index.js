import $ from 'jquery'

$(function() {
    $('ul li:odd').css('background', 'pink')
    $('ul li:even').css('background', 'skyblue')
})