gsap.fromTo("body",3,{backgroundColor:"#b71c1c"},{backgroundColor:"#eeeeee"})
gsap.from(".logo", {duration: 1,ease: "back.out(0.5)", x: innerWidth*-1});
gsap.fromTo(".headcontent",1, {opacity:0,transform:"translateY(-100px)"},{opacity:1,transform:"translateY(0)"});

gsap.from(".nav-link", {stagger:0.1,duration: 1,ease: "back.out(0.5)", x:innerWidth*-1});