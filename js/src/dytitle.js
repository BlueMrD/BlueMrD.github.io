<!--崩溃欺骗-->
var OriginTitile = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/favicon.png");
         document.title = ' 你瞒 ~ | BlueMrD！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/favicon.png");
         document.title = ' 我瞒~ ' + OriginTitile;
         titleTime = setTimeout(function () {
             document.title = OriginTitile;
         }, 2000);
     }
 });

