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



 {
    function con(cn) {
        let left=cn.querySelector(".tushu_lunbo_zuo");
        let right=cn.querySelector(".tushu_lunbo_you");
        let img=cn.querySelector(".tushu_lunbo");
        let dians=cn.querySelectorAll(".neirong_lunbodian li");
        let n=0;
        right.onclick=function () {
            n++;
            if(n==dians.length){
                n=dians.length-1;
                return;
            }
            img.style.marginLeft=-n*296+"px";
            dians[n].classList.add("active");
            dians[n-1].classList.remove("active");
            obj=dians[n];
        }
        left.onclick=function () {
            n--;
            if(n===-1){
                n=0;
                return;
            }
            img.style.marginLeft=-n*296+"px";
            dians[n].classList.add("active");
            dians[n+1].classList.remove("active");
            // console.log(n);
            obj=dians[n];
        }
        let obj=dians[0];
        dians.forEach(function (val,index) {
            val.onclick=function () {
                obj.classList.remove("active");
                dians[index].classList.add("active");

                obj=dians[index];
                img.style.marginLeft=-index*296+"px";
                n=index;

                // for(var h=0;h<dians.length;h++){
                //     dians[h].classList.remove("active");
                //     img.style.marginLeft=-index*296+"px";
                //     n=index;
                // }
                // dians[index].classList.add("active");
            }

        })
    }
    let cvb=document.querySelectorAll(".neirong1");
    con(cvb[0]);
    con(cvb[1]);
    con(cvb[2]);
    con(cvb[3]);

 }


 {

     let ce=document.querySelectorAll(".banner_cedaohang li");
     let imgs=document.querySelectorAll(".banner_content");
     ce.forEach(function (val,index) {
         val.onmouseenter=function () {
             imgs[index].style.display="block";

         }
         val.onmouseleave=function () {
             imgs[index].style.display="none";
         }
     })
 }


 {
     let imgs=document.querySelector(".daohang_wenzi");
     let zis=document.querySelectorAll(".daohang_wenzi li");
     let adg=document.querySelector(".adg");
     let qwe=document.querySelectorAll(".daohang_wenziyincang");
     imgs.onmouseenter=function () {
         adg.style.height="200px";

     }
     // imgs.onmouseleave=function () {
     //     adg.style.height="0";
     //
     // }
     adg.onmouseleave=function () {
     adg.style.height="0";

     }
     zis.forEach(function (val,index) {
         val.onmouseenter=function () {
             // qwe[index].style.height="200px";

            for(var i=0;i<qwe.length;i++){
                qwe[i].classList.remove("daohang_active");
            }
            qwe[index].classList.add("daohang_active");
             qwe[index].style.display="block";
             // qwe[index].style.opacity=1;
             qwe[index].style.height="200px";
         }
         val.onmouseleave=function () {
             // qwe[index].style.height="0";
             for(var i=0;i<qwe.length;i++){
                 qwe[i].classList.remove("daohang_active");
             }
             qwe[index].classList.add("daohang_active");
             // qwe[index].style.display="none";
             // qwe[index].style.opacity=0;
             // qwe[index].style.height="0px";
         }
     })









 }