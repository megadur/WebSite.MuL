document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const isSubpage = document.body.classList.contains('subpage-body');

    if (navbar && !isSubpage) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
        });
    }

    // Issue period filtering on index.html
    const issueFilters = document.getElementById('issueFilters');
    if (issueFilters) {
        const cards = document.querySelectorAll('#archiveGrid .issue-card');
        issueFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (!btn) return;
            issueFilters.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const period = btn.dataset.period;
            cards.forEach(card => {
                card.style.display = (period === 'all' || card.dataset.period === period) ? 'flex' : 'none';
            });
        });
    }

    // Blog post category filtering on /beitraege/
    const postFilters = document.getElementById('postFilters');
    if (postFilters) {
        const cards = document.querySelectorAll('.post-list-card');
        postFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (!btn) return;
            postFilters.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.filter;
            cards.forEach(card => {
                card.style.display = (cat === 'all' || card.dataset.category === cat) ? 'flex' : 'none';
            });
        });
    }
});
