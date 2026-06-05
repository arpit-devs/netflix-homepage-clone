// FAQ Section Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Select all FAQ boxes
    const faqBoxes = document.querySelectorAll('.faqbox');
    
    // Define FAQ answers
    const faqAnswers = [
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    ];
    
    // Create answer containers for each FAQ
    faqBoxes.forEach((box, index) => {
        // Create answer element
        const answerDiv = document.createElement('div');
        answerDiv.className = 'faq-answer';
        answerDiv.innerHTML = `<p>${faqAnswers[index]}</p>`;
        answerDiv.style.display = 'none';
        
        // Add plus sign initially
        const svg = box.querySelector('svg');
        if (svg) {
            // Clone the SVG to preserve original
            const plusSvg = svg.cloneNode(true);
            box.appendChild(answerDiv);
            
            // Add click event listener
            box.addEventListener('click', function() {
                const isOpen = answerDiv.style.display === 'block';
                
                // Toggle answer visibility
                answerDiv.style.display = isOpen ? 'none' : 'block';
                
                // Rotate plus to X
                if (isOpen) {
                    svg.style.transform = 'rotate(0deg)';
                } else {
                    svg.style.transform = 'rotate(45deg)';
                }
            });
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Email validation for signup
document.querySelector('.btn-red')?.addEventListener('click', function() {
    const emailInput = document.querySelector('input[type="text"]');
    const email = emailInput.value.trim();
    
    if (email === '') {
        alert('Please enter your email address.');
        emailInput.focus();
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }
    
    // In a real application, this would submit the form
    alert(`Thank you! We'll send Netflix membership details to ${email}`);
    emailInput.value = '';
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.background = 'transparent';
    }
});

// Language button functionality
document.querySelector('.btn:not(.btn-red-sm)')?.addEventListener('click', function() {
    const languages = ['English', 'हिन्दी', 'தமிழ்', 'తెలుగు', 'മലയാളം', 'ಕನ್ನಡ'];
    const currentLang = this.textContent;
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    this.textContent = languages[nextIndex];
});