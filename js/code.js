$(document).ready(function() {
// init the controller
var controller = new ScrollMagic({
    globalSceneOptions: {
        triggerHook: "onLeave"
    }
});

var aniOne = new TimelineMax()
    .add(TweenMax.to("#propText", 0.25, {opacity: 0}))
    .add(TweenMax.to("#propText", 0.25, {height: 0}))
    .add(TweenMax.to("#devil", 1, {transform:"translateY(0)"}))
    .add(TweenMax.to("#devil > img, #devil > .text", 0.5, {opacity: 1, scale: 1.5}))
    .add(TweenMax.to("#body", 1, {transform:"translateX(0)"}))
    .add(TweenMax.to("#body > img", 1, {transform:"translateY(0)"}))
    .add(TweenMax.to("#body > img", 2, {scale: 0.7}))
    .add(TweenMax.to("#body > .text", 2, {opacity: 1}))
    .add(TweenMax.to("#greek", 1, {transform:"translateY(0)"}))
    .add(TweenMax.to("#greek > img", 2, {opacity: 1, scale: 1.8}))
    .add(TweenMax.to("#greek > img", 2, {opacity: .5, scale: 1}))
    .add(TweenMax.to("#greek", 0.5, {backgroundColor: "#394A6E"}))
    .add(TweenMax.to("#greek", 0.5, {backgroundColor: "#32A856"}))
    .add(TweenMax.to("#greek > .text", 1, {transform: "translateX(0)"}))
    .add(TweenMax.to("#skull", 1, {transform: "translateX(0)"}))
    .add(TweenMax.to("#skull > img", 1, {rotation: 360, ease: Linear.easeNone}))
    .add(TweenMax.to("#skull > .text", 1, {opacity: 1, backgroundColor: "tan"}))

    

new ScrollScene({
        triggerElement: "section#pin",
        duration: 1100
    })
    .setTween(aniOne)
    .setPin("section#pin")
    .addTo(controller);
});