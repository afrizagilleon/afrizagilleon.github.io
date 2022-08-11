
    // ULTIMATE JAVASCRIPT FOR DETAILS

( () => { // load component with delay animation

    setTimeout(
        () => document.querySelector('.kv_over').classList.add('load'),
        500
    )

    setTimeout(
        () => document.querySelector('.kv_cont').classList.add('load'),
        500
    )

    setTimeout(
        () => document.querySelector('#logo,#job,nav,#cr').classList.add('load'),
        1400
    )

    setTimeout(
        () => document.querySelector('.bg_anim').classList.add('load'),
        500
    )

    setTimeout(
        () => document.querySelector('#cr').classList.add('load'),
        500
    )

    setTimeout(
        () => document.querySelector('#job').classList.add('load'),
        500
    )

    setTimeout(
        () => document.querySelector('#logo').classList.add('load'),
        500
    )

})()


// click-menu
document.getElementById('menu_about').onclick =( )=> {
    if (document.getElementById('menu_about').classList.contains('on')) {
        document.getElementById('menu_about').classList.remove("on")
        document.getElementById('about').classList.remove('is_active')
        document.getElementById('menu_about').innerText = "ABOUT ME"
    } else {
        document.getElementById('menu_about').classList.add('on')
        document.getElementById('menu_about').classList.add("on")
        document.getElementById("about").classList.add('is_active')
        document.getElementById('menu_about').innerText = "CLOSE"
    }
}




// hover animation for next project
document.querySelector(".next_text").addEventListener('mouseleave',() => {
    document.querySelector(".next_cont").classList.remove("is_active")
    document.querySelector(".next_over").classList.remove("is_active")
    document.querySelector('.next_text').classList.remove("is_active")
})
document.querySelector('.next_text').addEventListener('mouseover',  () => {
  document.querySelector(".next_cont").classList.add('is_active')
  document.querySelector(".next_over").classList.add('is_active')
  document.querySelector('.next_text').classList.add('is_active')
})




// minimize project view when near the bottom of view
window.onscroll = () => {

    let windowHeight = window.outerHeight,
        topWindow = document.documentElement.scrollTop

    document.querySelectorAll(".flex_01,.flex_02,.flex_03,.flex_info_item,#visit,.credit_box_item,.credit_tit,.longtext").forEach(function(el){
        let targetPosition = el.offsetTop;
        if(topWindow > targetPosition - windowHeight + 1800){// if add this so ugly -> && topWindow < targetPosition - windowHeight + 2800
            // console.log('true')
            el.classList.add("is_visible");
        } else {
            el.classList.remove('is_visible')
        }
    });


}
