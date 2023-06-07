function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
  }
var userInteracted = false;

// 添加事件监听器来检测用户的活动
document.addEventListener('mousemove', function() {
  userInteracted = true;
});

// 在播放音频之前检查用户是否与页面进行了互动
if (userInteracted) {
  audio.play();
} else {
  console.log('用户尚未与页面进行互动');
}
var lis = document.querySelectorAll('ul.jj li');
lis.forEach(li => {
    if (li.getAttribute('m')!='sj') {
        li.onclick = function() {
            audio.src = './res/' + this.getAttribute('m') + '.mp3';
            audio.play();
            console.log(this.innerHTML)
        }
    }
});
lis.forEach(li => {
    if (li.getAttribute('m')=='sj') {
        li.onclick = function() {
            const rd = (Math.floor(Math.random() * this.getAttribute('num') + 1));
            const rdStr = leftFillNum(rd, 2);
            audio.src = './res/' + this.getAttribute('tp') + rdStr + '.mp3';
            audio.play();
            console.log(this.innerHTML)
        }
    }
});