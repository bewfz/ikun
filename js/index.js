function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
  }
var audio = document.getElementById('audio');
audio.play();
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
document.querySelector('.s1').onclick = function() {
    audio.currentTime = 0;
    console.log('重开')
};
document.querySelector('.s2').onclick = function() {
    audio.pause();
    console.log('停止')
}