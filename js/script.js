// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Progress Bar
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const lessonNumber = parseInt(progressBar.dataset.lesson);
        const progress = (lessonNumber / 7) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.textContent = `${Math.round(progress)}%`;
    }

    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('nav');
    if (mobileMenuButton && nav) {
        mobileMenuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Quiz Functionality
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options in the same question
            const question = option.closest('.quiz-question');
            question.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Add active class to clicked option
            option.classList.add('active');
            
            // Show feedback message
            const feedback = question.querySelector('.feedback-message');
            if (feedback) {
                feedback.style.display = 'block';
            }
        });
    });

    // Check Answer Button
    const checkAnswerButtons = document.querySelectorAll('.check-answer');
    checkAnswerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.closest('.quiz-question');
            const feedback = question.querySelector('.feedback-message');
            if (feedback) {
                feedback.style.display = 'block';
            }
        });
    });

    // Quick Start Steps Toggle
    const quickStartElement = document.querySelector('.interactive-element');
    if (quickStartElement) {
        quickStartElement.addEventListener('click', () => {
            const steps = quickStartElement.querySelector('.quick-start-steps');
            if (steps) {
                steps.style.display = steps.style.display === 'none' ? 'block' : 'none';
            }
        });
    }

    // Print Functionality
    const printButton = document.createElement('button');
    printButton.className = 'print-button';
    printButton.textContent = 'Print Lesson';
    printButton.addEventListener('click', () => {
        window.print();
    });
    document.querySelector('.lesson-content').appendChild(printButton);

    // Accessibility Improvements
    document.querySelectorAll('button, a').forEach(element => {
        if (!element.hasAttribute('aria-label')) {
            element.setAttribute('aria-label', element.textContent.trim());
        }
    });

    // Skip to Main Content Link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Progress Bar functionality
function updateProgressBar(lessonNumber) {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;

    // Calculate progress based on lesson number (7 total lessons)
    const progress = Math.round((lessonNumber / 7) * 100);
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${progress}%`;

    // Update progress in localStorage
    localStorage.setItem('notebooklmProgress', progress);
}

// Initialize progress from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedProgress = localStorage.getItem('notebooklmProgress');
    if (savedProgress) {
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = `${savedProgress}%`;
            progressBar.textContent = `${savedProgress}%`;
        }
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuButton && nav) {
        mobileMenuButton.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
});
