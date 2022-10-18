// 同时以文本与html的形式展示标签
import string from './css.js'
const demo= document.querySelector('#demo')
const demo2= document.querySelector('#demo2')
let n = 1
let time = 10
let id

// 将几个函数放对象中
const player = {
    init: () => {
        demo.innerText = string.substring(0,n)
        demo2.innerHTML = string.substring(0,n)
        player.play() // id = player.play() // 每次调用play时都把play的返回值给了id，所以可以内置
    },
    run: ()=> {
        n += 1
        if( n > string.length ){
            window.clearInterval(id)
            return
        }  
        // console.log(n + ':' + string.substring(0,n));
        demo.innerText = string.substring(0,n)
        demo2.innerHTML = string.substring(0,n)
        demo.scrollTop = demo.scrollHeight // 拖动滚动条，得到demo的高度 demo.scrollHeight //4014
    },
    play: () => {
        id = setInterval(player.run,time) // 内置
    },
    pause: () => {
        window.clearInterval(id)
    },
    slow: () => {
        player.pause()
        time = 100
        player.play()
    },
    normal: () => {
        player.pause()
        time = 50
        player.play()
    },
    fast: () => {
        player.pause()
        time = 0
        player.play() 
    }
}
player.init()

document.querySelector('#btnPause').onclick = player.pause
document.querySelector('#btnPlay').onclick = player.play
document.querySelector('#btnSlow').onclick = player.slow
document.querySelector('#btnNormal').onclick = player.normal
document.querySelector('#btnFast').onclick = player.fast

// let id = setInterval(()=>{
// run()
// },time)
// let id = setInterval(run,time)
