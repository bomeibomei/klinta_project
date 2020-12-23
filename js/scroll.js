//場景, 此工具的啟動，一定要寫
var controller = new ScrollMagic.Controller();

//動畫2，.1是0.1秒，TimelineMax是時間在一條線上，會依序排列跑出
var t1 = new TimelineMax();
var t2 = new TimelineMax();

t1.to('.mv01', .1, {
    x: 100,
    opacity: 1,
}).to('.mv02', .1, {
    x: -100,
    opacity: 1
}).to('.mv03', .1, {
    x: 100,
    opacity: 1
}).to('.mv04', .1, {
    x: -100,
    opacity: 1
})

t2.to('.mv01', .1, {
    opacity: 0,
}).to('.mv02', .1, {
    opacity: 0
}).to('.mv03', .1, {
    opacity: 0
}).to('.mv04', .1, {
    opacity: 0
})

//觸發事件2
var scene02 = new ScrollMagic.Scene({
    triggerElement: '#point2',
    triggerHook: .3,
    duration: 500, // 用滾動來決定元素動畫的速度，空間500px平分四個物件
    // offset: 200, //hook的偏移值
    // reverse: false //false表示只執行一次, 預設為true
}).setTween(t1).addIndicators().addTo(controller);

//觸發事件2
var scene04 = new ScrollMagic.Scene({
    triggerElement: '#point2',
    triggerHook: .3,
    duration: 500, // 用滾動來決定元素動畫的速度，空間500px平分四個物件
    offset: 100, //hook的偏移值
    // reverse: false //false表示只執行一次, 預設為true
}).setTween(t2).addIndicators().addTo(controller);
