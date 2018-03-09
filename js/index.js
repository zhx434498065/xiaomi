 {
        let imgs=document.querySelectorAll(".imgbox li");
        let pagers=document.querySelectorAll(".pagerbox li");
        var banner=document.querySelector("#banner");
        var zuo=document.querySelector
        (".banner_anniu1");
        var you=document.querySelector(".banner_anniu2");
        pagers.forEach(function (ele,index) {
            ele.onclick=function () {
                for(let i=0;i<imgs.length;i++){
                    imgs[i].classList.remove("active");
                    pagers[i].classList.remove("active");
                }
                // this.classList.add("active");
                pagers[index].classList.add("active");
                imgs[index].classList.add("active");
                n=index;
            }
        })
        var n=0;
        function move() {

                n++;
                if(n===imgs.length){
                    n=0;
                }
                if(n<0){
                    n=imgs.length-1;
                }
                for(let i=0;i<imgs.length;i++){
                    imgs[i].classList.remove("active");
                    pagers[i].classList.remove("active");
                }
                // this.classList.add("active");
                pagers[n].classList.add("active");
                imgs[n].classList.add("active");
            }

        let h=setInterval(move,3000);//自动执行
        banner.onmouseenter=function () {
            clearInterval(h)  ; //清除
        }
        banner.onmouseleave=function () {
            h=setInterval(move,3000);//鼠标离开效果添加
        }
        let flag=true;
        you.onclick=function(){
            if(flag){
                flag=false;
        	    move();
            }
        };
        zuo.onclick=function () {
            if(flag){
                flag=false;
                n-=2;
                move();
            }
        }
        imgs.forEach(function (val,index) {
            val.addEventListener("transitionend",function () {
                flag=true;
            })
        });
    }

 {
     const next=document.querySelector(".tuijian_anniu_you");
     const prev=document.querySelector(".tuijian_anniu_zuo");
     const img=document.querySelector(".dapei_dada");
     console.dir(next);
     let n=0;
     next.onclick=function () {
         prev.classList.add("display");
         n++;

         if(n==2){
             this.classList.remove("display");
         }
         if(n==3){
             n=2;
             return;
         }
         img.style.marginLeft=-992*n+"px";
     }
     prev.onclick=function () {
         next.classList.add("display");
         n--;
         if(n==0){
             prev.classList.remove("display");
         }
         if(n==-1){

             n=0;
             return;
         }
         img.style.marginLeft=-992*n+"px";
     }
 }


 {
     const next=document.querySelector(".mingxing_anniu_you");
     const prev=document.querySelector(".mingxing_anniu_zuo");
     const img=document.querySelector("#mingxing_lunbo1");
     console.dir(next);
     let n=0;
     next.onclick=function () {
         n++;
         prev.classList.add("display");
         if(n==1){
             this.classList.remove("display");
         }
         if(n==2){
             n=1;
             return;
         }
         img.style.marginLeft=-992*n+"px";
     }
     prev.onclick=function () {
         next.classList.add("display");
         n--;
         if(n==0){
             this.classList.remove("display");
         }
         if(n==-1){
             n=0;
             return;
         }
         img.style.marginLeft=-992*n+"px";
     }
 }


 {
     function con(c) {
         let types=c.querySelectorAll(".dapei_qwe h2");
         let lists=c.querySelectorAll(".dapei_lunbo");
         console.dir(types);
         types.forEach(function (val,index) {
             val.onclick=function () {
                 for(var i=0;i<types.length;i++){
                     types[i].classList.remove("active");
                     lists[i].classList.remove("dapei_active");
                 }
                 types[index].classList.add("active");
                 lists[index].classList.add("dapei_active");
             }
         })
     }
     let listop=document.querySelectorAll(".dapei123");
     con(listop[0]);
     con(listop[1]);
 }