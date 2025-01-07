function scrollToTop(){
    let button = document.querySelector('#scrollUp');
    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;
        if(scroll>=250){
            button.classList.add('scrollActive');
        }
        else{
            button.classList.remove('scrollActive');
        }

    }
}
scrollToTop();
//sorter
// const sorter = document.querySelector('.sort-list');
// if(sorter){
//     const sortlist = sorter.querySelectorAll('li');
//     sorter.querySelector('.opt-trigger').addEventListener('click', function(){
//         sorter.querySelector('ul').classList.toggle('show');
//     });
//     sortlist.forEach((item) => item.addEventListener('click', function(){
//         sortlist.forEach((li) => li != this ? li.classList.remove('active') : null);

//         this.classList.add('active');
//         sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;
//         sorter.querySelector('ul').classList.toggle('show')
//     }))
// }

//tabbed
// const trigger = document.querySelectorAll('.tabbed-trigger'),
// content = document.querySelectorAll('.tabbed > div');
// trigger.forEach((btn) =>{
//     btn.addEventListener('click',function(){
//         let dataTarget = this.dataset.id,
//         body = document.querySelector(`#${dataTarget}`);
//         trigger.forEach((b) =>b.parentNode.classList.remove('active'));
//         trigger.forEach((s) =>s.classList.remove('active'));
//         this.parentNode.classList.add('active');
//         body.classList.add('.active');
//     })
// })