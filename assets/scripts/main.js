document.body.setAttribute('class', 'font-sans text-[#40454f] text-lg overflow-x-hidden');
const importPartial = (url, partialId) => {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(partialId).innerHTML = html;
        })
        .catch(err => {
            console.log(`Not found ${partialId}`);
        });
};

importPartial('partials/header.html', 'header');
importPartial('partials/clients.html', 'clients');
importPartial('partials/team.html', 'team');
importPartial('partials/blog.html', 'blog');
importPartial('partials/blog-main.html', 'blog-main');
importPartial('partials/footer.html', 'footer');

window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
        section.setAttribute("data-aos", "fade-up");
    }
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
        disableMutationObserver: false
    });
    document.getElementById('header').classList.add('fixed-header', 'transition-all');
    const nav_mb_btn = document.querySelector('.js-nav-mb-btn');
    const nav_mb = document.querySelector('.js-nav-mb');
    nav_mb_btn.addEventListener('click', () => {
        nav_mb.classList.toggle('active');
    });
});