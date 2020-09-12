import $ from 'jquery'
import './css/1.css'
import './css/2.less'
import './css/3.scss'

$(function() {
        $('ul li:odd').css('background', 'blue')
        $('ul li:even').css('background', 'skyblue')
    })
    // class Dog {
    //     static name = 'byd'
    // }
    // console.log(Dog.name);
    //....................................................
import Vue from 'vue'

import App from './App.vue'

new Vue({
    el: '#app',
    // c渲染会将#app容器给替换掉
    render: c => c(App)
})