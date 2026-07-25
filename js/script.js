const speakers = [
    {
        name: 'Dr. Amina Okeke',
        title: 'AI Research Lead at DeepTech Africa',
        bio: 'Amina leads research in natural language processing for African languages and has published over 30 papers on low-resource AI systems.',
        image: 'images/speakers/amina.jpg'
    },
    {
        name: 'Jean-Pierre Mbarga',
        title: 'Founder & CEO of PayFlex Cameroon',
        bio: 'Jean-Pierre built one of the fastest-growing fintech startups in Central Africa, processing over 2 million transactions monthly.',
        image: 'images/speakers/jean.jpg'
    },
    {
        name: 'Sarah Nalwanga',
        title: 'Senior Engineer at Andela & Open Source Advocate',
        bio: 'Sarah mentors hundreds of developers across East and Central Africa and is a core contributor to several major open-source projects.',
        image: 'images/speakers/sarah.jpg'
    },
    {
        name: 'Emmanuel Tchinda',
        title: 'CTO of Silicon Mountain Hub',
        bio: 'Emmanuel has been instrumental in growing the Buea tech ecosystem and has coached over 50 startups from idea to launch.',
        image: 'images/speakers/emma.avif'
    },
    {
        name: 'Fatima Diallo',
        title: 'Product Lead at Flutterwave',
        bio: 'Fatima specializes in building payment products that work seamlessly across African markets and multiple currencies.',
        image: 'images/speakers/fatima.avif'
    },
    {
        name: 'Kwame Asante',
        title: 'Venture Partner at Partech Africa',
        bio: 'Kwame invests in early-stage African tech companies and previously founded two successful SaaS startups in the education space.',
        image: 'images/speakers/kwame.jpg'
    }
];

function renderSpeakers(limit = null) {
    const grid = document.getElementById('speakersGrid');
    if (!grid) return;

    const speakersToShow = limit ? speakers.slice(0, limit) : speakers;

    grid.innerHTML = speakersToShow.map((speaker) => `
    <article class="speaker-card">
      <div class="speaker-img-wrap">
        <img class="speaker-img" src="${speaker.image}" alt="${speaker.name}">
      </div>
      <div class="speaker-info">
        <h3>${speaker.name}</h3>
        <p class="speaker-title">${speaker.title}</p>
        <p class="speaker-bio">${speaker.bio}</p>
      </div>
    </article>
  `).join('');
}

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!hamburger || !closeBtn || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

function initMoreButton() {
    const moreBtn = document.getElementById('moreBtn');
    if (!moreBtn) return;

    let expanded = false;

    if (window.innerWidth < 768) {
        renderSpeakers(2);
    } else {
        renderSpeakers();
    }

    moreBtn.addEventListener('click', () => {
        expanded = !expanded;
        if (expanded) {
            renderSpeakers();
            moreBtn.classList.add('expanded');
            moreBtn.innerHTML = 'LESS <span class="arrow">&#9660;</span>';
        } else {
            renderSpeakers(2);
            moreBtn.classList.remove('expanded');
            moreBtn.innerHTML = 'MORE <span class="arrow">&#9660;</span>';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            renderSpeakers();
            moreBtn.style.display = 'none';
        } else {
            moreBtn.style.display = 'flex';
            if (!expanded) {
                renderSpeakers(2);
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initMoreButton();
});