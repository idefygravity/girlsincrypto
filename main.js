/* ============================================
   Girls In Crypto — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initScrollAnimations();
  initFAQ();
  initNewsletter();
  initContactForm();
  initLearnPage();
  initArticlePage();
  initFeaturedArticles();
});

/* --- Navbar Scroll Effect --- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Only add scroll behavior on pages with hero (index.html)
  const isHomePage = document.querySelector('.hero');
  if (!isHomePage) return;

  // Remove the scrolled class initially for home page
  navbar.classList.remove('scrolled');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* --- Mobile Hamburger Menu --- */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  const nav = document.getElementById('navbar');
  document.addEventListener('click', (e) => {
    if (nav && !nav.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

/* --- Scroll Animations (Intersection Observer) --- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* --- FAQ Accordion --- */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const inner = item.querySelector('.faq-answer-inner');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all
      faqItems.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-answer').style.maxHeight = '0';
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });
}

/* --- Newsletter Form --- */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (email) {
      form.innerHTML = '<p style="color: var(--accent); font-size: 1.1rem; font-weight: 600;">Thanks for subscribing! We\'ll keep you updated.</p>';
    }
  });
}

/* --- Contact Form --- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    form.innerHTML = `
      <div style="text-align: center; padding: 40px 0;">
        <div style="font-size: 3rem; margin-bottom: 16px;">&#x2705;</div>
        <h3 style="margin-bottom: 12px;">Message Sent!</h3>
        <p style="color: var(--text-muted);">Thanks, ${escapeHtml(name)}! We'll get back to you within 24-48 hours.</p>
      </div>
    `;
  });
}

/* --- Featured Articles (Home Page) --- */
function initFeaturedArticles() {
  const container = document.getElementById('featuredArticles');
  if (!container || typeof ARTICLES === 'undefined') return;

  const featured = ARTICLES.filter(a => a.featured).slice(0, 6);
  container.innerHTML = featured.map(article => createArticleCard(article)).join('');
}

/* --- Learn Page --- */
function initLearnPage() {
  const articlesGrid = document.getElementById('articlesGrid');
  const categoriesGrid = document.getElementById('categoriesGrid');
  if (!articlesGrid || typeof ARTICLES === 'undefined') return;

  let currentCategory = 'all';
  let currentLevel = 'all';
  let searchQuery = '';

  // Check URL params for pre-selected category
  const urlParams = new URLSearchParams(window.location.search);
  const urlCategory = urlParams.get('category');
  if (urlCategory) {
    currentCategory = urlCategory;
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === currentCategory);
    });
  }

  // Render categories
  if (categoriesGrid) {
    renderCategories(categoriesGrid);
  }

  // Render articles
  renderArticles();

  // Category filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.category;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Hide categories grid when a specific category is selected
      if (categoriesGrid) {
        categoriesGrid.style.display = currentCategory === 'all' ? 'grid' : 'none';
      }

      renderArticles();
    });
  });

  // Level filters
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLevel = btn.dataset.level;
      document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderArticles();
    });
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderArticles();
    });
  }

  // If URL has a specific category, trigger filter
  if (urlCategory && urlCategory !== 'all') {
    if (categoriesGrid) {
      categoriesGrid.style.display = 'none';
    }
  }

  function renderArticles() {
    let filtered = ARTICLES;

    if (currentCategory !== 'all') {
      filtered = filtered.filter(a => a.category === currentCategory);
    }

    if (currentLevel !== 'all') {
      filtered = filtered.filter(a => a.level === currentLevel);
    }

    if (searchQuery) {
      filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(searchQuery) ||
        a.description.toLowerCase().includes(searchQuery) ||
        a.category.toLowerCase().replace('-', ' ').includes(searchQuery)
      );
      // Hide categories when searching
      if (categoriesGrid) {
        categoriesGrid.style.display = 'none';
      }
    } else if (currentCategory === 'all' && categoriesGrid) {
      categoriesGrid.style.display = 'grid';
    }

    const noResults = document.getElementById('noResults');
    if (filtered.length === 0) {
      articlesGrid.innerHTML = '';
      if (noResults) noResults.style.display = 'block';
    } else {
      if (noResults) noResults.style.display = 'none';
      articlesGrid.innerHTML = filtered.map(article => createArticleCard(article)).join('');
    }
  }
}

function renderCategories(container) {
  if (typeof CATEGORIES === 'undefined') return;

  container.innerHTML = CATEGORIES.map(cat => {
    const count = ARTICLES.filter(a => a.category === cat.id).length;
    return `
      <div class="category-card" onclick="filterByCategory('${cat.id}')">
        <div class="category-icon">${cat.icon}</div>
        <div class="category-info">
          <h4>${cat.name}</h4>
          <p>${cat.description}</p>
          <span class="category-count">${count} article${count !== 1 ? 's' : ''}</span>
        </div>
      </div>
    `;
  }).join('');
}

function filterByCategory(categoryId) {
  const btn = document.querySelector(`.filter-btn[data-category="${categoryId}"]`);
  if (btn) btn.click();
}

/* --- Article Card HTML --- */
function createArticleCard(article) {
  const categoryName = getCategoryName(article.category);
  const levelClass = `level-${article.level}`;
  const levelName = article.level.charAt(0).toUpperCase() + article.level.slice(1);

  return `
    <a href="article.html?id=${article.id}" class="article-card">
      <div class="article-card-image" style="background: linear-gradient(135deg, ${getCategoryColor(article.category)});">
        ${article.icon}
      </div>
      <div class="article-card-body">
        <div class="article-card-meta">
          <span class="article-category">${categoryName}</span>
          <span class="article-level ${levelClass}">${levelName}</span>
        </div>
        <h3>${article.title}</h3>
        <p>${article.description}</p>
      </div>
      <div class="article-card-footer">
        <span class="read-more">Read Article &rarr;</span>
        <span class="read-time">${article.readTime}</span>
      </div>
    </a>
  `;
}

function getCategoryName(categoryId) {
  if (typeof CATEGORIES === 'undefined') return categoryId;
  const cat = CATEGORIES.find(c => c.id === categoryId);
  return cat ? cat.name : categoryId;
}

function getCategoryColor(category) {
  const colors = {
    'crypto-basics': '#6B21A8, #9333EA',
    'blockchain': '#1E40AF, #3B82F6',
    'defi': '#065F46, #10B981',
    'nfts': '#9333EA, #C084FC',
    'trading': '#B45309, #F59E0B',
    'security': '#991B1B, #EF4444',
    'wallets': '#4338CA, #818CF8'
  };
  return colors[category] || '#6B21A8, #9333EA';
}

/* --- Article Page --- */
function initArticlePage() {
  const articleBody = document.getElementById('articleBody');
  if (!articleBody || typeof ARTICLES === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');

  if (!articleId) {
    window.location.href = 'learn.html';
    return;
  }

  const article = ARTICLES.find(a => a.id === articleId);

  if (!article) {
    articleBody.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h2>Article Not Found</h2>
        <p style="margin-top: 12px; color: var(--text-muted);">The article you're looking for doesn't exist.</p>
        <a href="learn.html" class="btn btn-primary" style="margin-top: 24px;">Browse All Articles</a>
      </div>
    `;
    return;
  }

  // Set page title
  document.title = `${article.title} — Girls In Crypto`;

  // Set header content
  const titleEl = document.getElementById('articleTitle');
  const descEl = document.getElementById('articleDescription');
  const breadcrumbTitle = document.getElementById('breadcrumbTitle');

  if (titleEl) titleEl.textContent = article.title;
  if (descEl) descEl.textContent = article.description;
  if (breadcrumbTitle) breadcrumbTitle.textContent = getCategoryName(article.category);

  // Set meta
  const metaEl = document.getElementById('articleMeta');
  if (metaEl) {
    const levelClass = `level-${article.level}`;
    const levelName = article.level.charAt(0).toUpperCase() + article.level.slice(1);
    metaEl.innerHTML = `
      <span class="article-category">${getCategoryName(article.category)}</span>
      <span class="article-level ${levelClass}">${levelName}</span>
      <span class="read-time">${article.readTime}</span>
    `;
  }

  // Set article body
  articleBody.innerHTML = article.content;

  // Set related articles
  const relatedContainer = document.getElementById('relatedArticles');
  if (relatedContainer) {
    const related = ARTICLES
      .filter(a => a.category === article.category && a.id !== article.id)
      .slice(0, 4);

    if (related.length > 0) {
      relatedContainer.innerHTML = related.map(a => `
        <a href="article.html?id=${a.id}" class="sidebar-link">${a.title}</a>
      `).join('');
    } else {
      // Show articles from other categories
      const others = ARTICLES.filter(a => a.id !== article.id).slice(0, 4);
      relatedContainer.innerHTML = others.map(a => `
        <a href="article.html?id=${a.id}" class="sidebar-link">${a.title}</a>
      `).join('');
    }
  }
}

/* --- Utility --- */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
