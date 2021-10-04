

const app = {
    pages: [],
    show: new Event('show'),
    init: function(){
        let url = location.hash.replace('#' ,'').split("?");
        let hash = url[0]
        const query = url[1] || ''
        app.pages = document.querySelectorAll('.form');
        console.log(app.pages)
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })
        document.querySelectorAll('.single').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
            history.replaceState({}, 'dangnhap', '#dangnhap');
     
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        hash = query ? hash + '?' + query : hash
        history.replaceState({}, 'dangnhap', `#${hash}`);

        console.log(hash)
        window.addEventListener('popstate', app.poppin);
    },
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        console.log(currentPage)
        // reset all
        document.querySelector('.active').classList.remove('active');
        // set link to active
        document.getElementById(currentPage).classList.add('active');
        history.pushState({}, currentPage, `#${currentPage}`);
        console.log(location.href)
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    pageShown: function(ev){
        console.log('Page', ev.target.id, 'just shown');
       
    },
    poppin: function(ev){
        console.log(location.hash, 'popstate event');
        let url = location.hash.replace('#' ,'').split("?");
        let hash = url[0]
        const query = url[1] || ''
      
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        hash = query ? hash + '?' + query : hash
        console.log(hash)
        history.pushState({}, hash, `#${hash}`);
        console.log(location.href)
        document.getElementById(hash.split('?')[0]).dispatchEvent(app.show);
    }
}
document.addEventListener('DOMContentLoaded', app.init);