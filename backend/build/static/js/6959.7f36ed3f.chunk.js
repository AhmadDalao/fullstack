"use strict";(self.webpackChunkToDoApp=self.webpackChunkToDoApp||[]).push([[6959],{6959:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return o}});var r=n(9069),a=n(236),o=(n(1045),function(e,t,n,o,i){var u=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){var t=e.deltaX/u.innerWidth;o(t)},onEnd:function(e){var t=e.deltaX,n=u.innerWidth,a=t/n,o=e.velocityX,c=n/2,s=o>=0&&(o>.2||e.deltaX>c),f=(s?1-a:a)*n,d=0;if(f>5){var h=f/Math.abs(o);d=Math.min(h,540)}i(s,a<=0?.01:(0,r.k)(0,a,.9999),d)}})})}}]);
//# sourceMappingURL=6959.7f36ed3f.chunk.js.map