choseScript = () => {
    let returnArray = 
    
    "var titleAnimation = new TimelineMax() \n" +
    ".from('#message_title',0.5,{y:-200}); \n \n" +
    
   "var titleAnimationX = new TimelineMax() \n" +
    ".to('#message_title',0.5,{y:-400}); \n \n" +
    
    "var subtitleAnimation = new TimelineMax() \n" +
    ".from('#message_subtitle',0.5,{y:200}); \n \n" +
    
    "var subtitleAnimationX = new TimelineMax() \n" +
    ".to('#message_subtitle',0.5,{y:200}); \n \n" +
    
    "var pancakeAnimation = new TimelineMax() \n" +
    ".to('#message_pancake', 0.2, {scale: 1.1}) \n" +
    ".to('#message_pancake', 0.2, {scale: 1.0}); \n \n" +
    
    "var pancakeAnimationX = new TimelineMax() \n" +
    ".to('#message_pancake', 0.5, {x: 500}); \n \n" +
    
    " var pancakeAnimationSecond = new TimelineMax() \n" +
    ".to('#message_pancake', 0.2, {scale: 1.1}) \n" +
    ".to('#message_pancake', 0.2, {scale: 1.0}); \n \n" +
    
    "var logoAnimationX = new TimelineMax() \n" +
    ".to('#message_logo', 0.5, {x: -800}); \n \n" +
    
    "var backgroundX = new TimelineMax() \n" +
    ".to('#message_video_bg', 0.5, {opacity: 0}); \n \n" +
    
    
    "var mainTimeline = new TimelineMax() \n" +
    ".add(titleAnimation, 0) \n" +
    ".add(subtitleAnimation, 1) \n" +
    ".add(pancakeAnimation, 3) \n" +
    ".add(pancakeAnimationSecond, 6) \n" +
    ".add(titleAnimationX, 14.2) \n" +
    ".add(subtitleAnimationX, 14.2) \n" +
    ".add(pancakeAnimationX, 14.2) \n" +
    ".add(logoAnimationX, 14.2) \n" +
    ".add(backgroundX, 14.2); \n \n" +

    "// Uncomment this to make the background-video work \n"+
    "// var url = 'https://meh-temporary-assets.s3.eu-central-1.amazonaws.com/2020_1_background_video.mp4'; \n \n"+

    "var myVideo = createVideo('#message_video_bg', url, { loop: true }); \n \n"+
    
    "myVideo.volume = 0; \n"+
    "myVideo.muted = 'muted'; \n"+
    "myVideo.autoplay = 'autoplay'; \n \n"+
    
    "function createVideo(selector, source, attributes) { \n \n"+
        
        "// Create Video Container \n"+
        "var video = $('<video playsinline webkit-playsinline muted />')\n "+
        ".width($(selector).width()) \n"+
        ".height($(selector).height()) \n"+
        ".append('<source src=' + source  + '/>'); \n \n"+
        
        "for (var key in attributes) { \n"+
        "if (key !== 'volume') { \n"+
        "video.attr(key, attributes[key]); \n"+
        "} else { \n"+
        "video.prop(key, attributes[key]); \n"+
        "} \n"+
        "} \n \n"+
        
        "$(selector).css({ \n"+
        "'background' : 'none' \n"+
        "}).append(video); \n \n"+
    
        "return video[0]; \n"+
        "}";

    return returnArray;
}


// console.log('12345');