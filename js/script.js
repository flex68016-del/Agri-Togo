// ============================================
// MENU HAMBURGER POUR MOBILE
// ============================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animation du hamburger (transformation en X)
        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Fermer le menu mobile lors du clic sur un lien
const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ============================================
// VALIDATION DU FORMULAIRE DE CONTACT
// ============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Réinitialiser les erreurs précédentes
        const formGroups = contactForm.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('error');
            const errorMessage = group.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.textContent = '';
            }
        });
        
        // Validation du champ nom
        const name = contactForm.querySelector('#name');
        if (name.value.trim() === '') {
            showError(name, 'Veuillez indiquer votre nom complet');
            isValid = false;
        } else if (name.value.trim().length < 2) {
            showError(name, 'Votre nom doit contenir au moins 2 caractères');
            isValid = false;
        }
        
        // Validation du champ email avec regex
        const email = contactForm.querySelector('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Une adresse email est requise');
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            showError(email, 'Veuillez fournir une adresse email au format correct');
            isValid = false;
        }
        
        // Validation du champ sujet
        const subject = contactForm.querySelector('#subject');
        if (subject.value === '') {
            showError(subject, 'Merci de choisir le motif de votre contact');
            isValid = false;
        }
        
        // Validation du champ message
        const message = contactForm.querySelector('#message');
        if (message.value.trim() === '') {
            showError(message, 'N\'oubliez pas de rédiger votre message');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Votre message semble trop court, merci de le détailler');
            isValid = false;
        }
        
        // Si le formulaire est valide, simuler l'envoi
        if (isValid) {
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                contactForm.style.display = 'none';
                const successMessage = document.getElementById('formSuccess');
                if (successMessage) {
                    successMessage.style.display = 'block';
                }
                
                // Réinitialiser le formulaire
                contactForm.reset();
                submitBtn.textContent = 'Envoyer le message';
                submitBtn.disabled = false;
            }, 1500);
        }
    });
}

// Fonction utilitaire pour afficher les erreurs
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.textContent = message;
    }
}

// Validation en temps réel (blur sur les champs)
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        const formGroup = input.closest('.form-group');
        formGroup.classList.remove('error');
        const errorMessage = formGroup.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = '';
        }
        
        if (input.value.trim() !== '') {
            if (input.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    showError(input, 'Veuillez entrer une adresse email valide');
                }
            }
        }
    });
});

// ============================================
// CARROUSEL DE PRODUITS
// ============================================
const carouselTrack = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

// Variable globale pour l'index du carrousel
let currentIndex = 0;

if (carouselTrack && prevBtn && nextBtn) {
    const productCards = carouselTrack.querySelectorAll('.product-card');
    const totalCards = productCards.length;
    
    // Déterminer le nombre de cartes visibles selon la taille de l'écran
    function getCardsPerView() {
        if (window.innerWidth >= 1200) return 4;
        if (window.innerWidth >= 992) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }
    
    // Mettre à jour la position du carrousel
    function updateCarousel() {
        const cardsPerView = getCardsPerView();
        const cardWidth = 280; // Largeur fixe définie en CSS
        const gap = 32; // 2rem en pixels
        const maxIndex = Math.max(0, totalCards - cardsPerView);
        currentIndex = Math.min(currentIndex, maxIndex);
        
        const translateX = currentIndex * (cardWidth + gap);
        carouselTrack.style.transform = `translateX(-${translateX}px)`;
        
        // Désactiver les boutons aux extrémités
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
        
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
        nextBtn.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
    }
    
    // Bouton précédent
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Bouton suivant
    nextBtn.addEventListener('click', () => {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, totalCards - cardsPerView);
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Mettre à jour le carrousel lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, totalCards - cardsPerView);
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        updateCarousel();
    });
    
    // Initialisation après un court délai pour s'assurer que le DOM est prêt
    setTimeout(updateCarousel, 100);
}

// ============================================
// FILTRAGE DES PRODUITS
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

if (filterButtons.length > 0 && productCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Mettre à jour la classe active du bouton
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filtrer les cartes de produits
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('fade-in');
                }
            });
            
            // Réinitialiser immédiatement le carrousel au début après filtrage
            currentIndex = 0;
            if (carouselTrack && typeof updateCarousel === 'function') {
                // Attendre un court instant pour que le DOM soit mis à jour
                setTimeout(() => {
                    updateCarousel();
                }, 50);
            }
        });
    });
}

// ============================================
// ANIMATIONS AU DÉFILEMENT (SCROLL REVEAL)
// ============================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Ajouter la classe reveal aux éléments à animer
const elementsToReveal = document.querySelectorAll('.news-card, .product-card, .value-card, .region-card, .news-item, .stat-item');
elementsToReveal.forEach(element => {
    element.classList.add('reveal');
});

// Écouter le défilement de la page
window.addEventListener('scroll', revealOnScroll);

// Appeler une fois au chargement initial
revealOnScroll();

// ============================================
// MODE SOMBRE / MODE CLAIR
// ============================================
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.setAttribute('aria-label', 'Basculer le mode sombre');

// Icônes SVG pour le mode sombre/clair
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

themeToggle.innerHTML = moonIcon;
document.body.appendChild(themeToggle);

let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    themeToggle.innerHTML = isDarkMode ? sunIcon : moonIcon;
    
    // Sauvegarder la préférence dans localStorage
    localStorage.setItem('darkMode', isDarkMode);
});

// Charger la préférence sauvegardée au démarrage
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    isDarkMode = true;
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = sunIcon;
}

// ============================================
// NAVIGATION ACTIVE
// ============================================
const currentPath = window.location.pathname;
const navLinksAll = document.querySelectorAll('.nav-links a');

navLinksAll.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    if (currentPath.includes(linkPath) && linkPath !== '../index.html' && linkPath !== 'index.html') {
        link.classList.add('active');
    } else if ((currentPath.endsWith('/') || currentPath.endsWith('index.html')) && linkPath === 'index.html') {
        link.classList.add('active');
    } else if (currentPath.endsWith('../index.html') && linkPath === '../index.html') {
        link.classList.add('active');
    }
});

// ============================================
// ANIMATION D'ENTRÉE DES ÉLÉMENTS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
    
    // Animation des statistiques avec délai en cascade
    const stats = document.querySelectorAll('.stat-item');
    stats.forEach((stat, index) => {
        setTimeout(() => {
            stat.classList.add('fade-in');
        }, index * 100);
    });
});

// ============================================
// ANIMATION DES CHIFFRES (COUNTER)
// ============================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Appliquer l'animation aux chiffres clés avec Intersection Observer
const statNumbers = document.querySelectorAll('.stat-item h3');
if (statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                if (!isNaN(target)) {
                    animateCounter(entry.target, target);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// ============================================
// NAVIGATION FLUIDE (SMOOTH SCROLL)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// GESTION DU FOCUS POUR L'ACCESSIBILITÉ
// ============================================
document.querySelectorAll('.product-card, .news-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const link = card.querySelector('a');
            if (link) {
                link.click();
            }
        }
    });
});

// ============================================
// MESSAGE DE CHARGEMENT DANS LA CONSOLE
// ============================================
console.log('AGRI-TOGO - Site chargé avec succès');