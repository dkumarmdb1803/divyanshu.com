




/* ==========================================
   1. GLOBAL DATA OBJECTS
   ========================================== */
    // Modal Data
    const modalData = {
        '12th Graduate': 'I have recently completed my higher secondary education with a strong focus on Physics, Chemistry, and Mathematics. This academic background has built a solid foundation for my analytical thinking and logical problem-solving skills.',
        'Coding Enthusiast': 'I spend a significant part of my day in VS Code, constantly experimenting with new web technologies. I am passionate about writing clean, efficient code and turning complex problems into user-friendly digital solutions.',
        'Fast Learner': 'Even before starting my B.Tech journey, I have successfully mastered HTML, CSS, and the fundamentals of JavaScript. I pride myself on my ability to quickly adapt to new libraries, frameworks, and evolving industry standards.'
    };

    const skillData = {
    'HTML5': {
        what: 'The standard markup language for creating the structure of web pages.',
        learned: 'I have a strong command over HTML5. I can build semantic structures, work with multimedia tags, and ensure the foundation of a site is SEO-friendly.'
    },
    'CSS3': {
        what: 'A style sheet language used for describing the presentation of a document.',
        learned: 'I am currently mastering CSS3. I can create beautiful layouts and I am learning how to make websites fully responsive using Flexbox and Media Queries.'
    },
    'JavaScript': {
        what: 'A programming language that enables interactive web pages.',
        learned: 'I have just started my journey with JavaScript. I am focusing on the basics like variables, functions, and how to make pages more dynamic.'
    },
    'VS Code': {
        what: 'A powerful and popular source-code editor used by developers globally.',
        learned: 'I use VS Code as my primary editor. I have learned how to use essential extensions and shortcuts to write and manage my code efficiently.'
    },
    'Python': {
        what: 'A high-level, versatile programming language known for its readability.',
        learned: 'I am currently exploring the basics of Python. I have started learning about syntax, loops, and basic logic-building to expand my coding horizons.'
    }
};
    const learnData = {
    'Responsive Design': {
        concept: 'What is it?',
        detail: 'Responsive design makes a website look good on all devices (phones, tablets, desktops). We use <strong>Media Queries</strong> and <strong>Flexbox</strong> to rearrange elements.',
        lesson: '<strong>My Lesson:</strong> I learned that starting with the Mobile view first (Mobile-first design) is much easier than shrinking a desktop site.'
    },
    'JavaScript Basics': {
        concept: 'What is DOM?',
        detail: 'JavaScript can change HTML and CSS in real-time. This is called DOM (Document Object Model) manipulation.',
        lesson: '<strong>My Lesson:</strong> I am currently learning how to use <code>addEventListener</code> to make buttons perform actions when clicked.'
    },
    'Problem Solving': {
        concept: 'The Coding Mindset',
        detail: 'Coding is 20% typing and 80% thinking. It is about breaking a big problem into small, solvable steps.',
        lesson: '<strong>My Lesson:</strong> I solve simple logic puzzles every day. It helps me understand how to use loops and if-else statements more effectively.'
    }
};
const journeyData = {
    'Adobe': {
        title: 'What is Adobe?',
        desc: 'Adobe is one of the world’s biggest software companies. They created tools like **Photoshop**, **Premiere Pro**, and **PDF (Acrobat)**. Seeing family work there inspired me to aim for top-tier software engineering standards.'
    },
    'Python Calculator': {
        title: 'Python Calculator Project',
        desc: 'This was my first logic-based project. I used Python’s basic math operations and `if-else` statements to create a functional calculator. Soon, I will host a live version here so you can test it yourself!'
    },
    'Full Stack': {
        title: 'What is Full-Stack Development?',
        desc: 'It means building both the **Frontend** (what you see) and the **Backend** (the server/database). <br><br><strong>How I am learning:</strong><br>1. HTML/CSS for structure.<br>2. JavaScript for logic.<br>3. React/Node.js for advanced features.'
    }
};
/* ==========================================
   2. MODAL FUNCTIONS (Global Scope)
   ========================================== */
const modal = document.getElementById('about-modal');

function openModal(topic) {
    document.getElementById('modal-title').innerText = topic;
    document.getElementById('modal-text').innerHTML = modalData[topic] || "Details coming soon...";
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
}

function openSkillModal(skillName) {
    const data = skillData[skillName];
    if (data) {
        document.getElementById('modal-title').innerText = skillName;
        document.getElementById('modal-text').innerHTML = `
            <div style="margin-bottom:15px;"><strong style="color:var(--primary);">What is it?</strong><br>${data.what}</div>
            <div><strong style="color:var(--primary);">My Progress:</strong><br>${data.learned}</div>`;
        modal.style.display = "block";
    }
}

function openLearnModal(title) {
    const data = learnData[title];
    if (data) {
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-text').innerHTML = `
            <div style="background:rgba(56,189,248,0.1); padding:15px; border-radius:10px; margin-bottom:15px;">
                <h5 style="color:var(--primary);">${data.concept}</h5><p>${data.detail}</p>
            </div>
            <div style="border-left:3px solid var(--accent); padding-left:15px;"><p>${data.lesson}</p></div>`;
        modal.style.display = "block";
    }
}

function openJourneyModal(key) {
    const data = journeyData[key];
    if (data) {
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-text').innerHTML = data.desc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        modal.style.display = "block";
    }
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}

/* ==========================================
   3. DOM INTERACTIVITY
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Theme
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');
    
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.className = 'fas fa-sun';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Mobile Menu
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const menuBtnIcon = menuIcon.querySelector('i');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtnIcon.classList.toggle('fa-bars');
        menuBtnIcon.classList.toggle('fa-times');
    });



    // Language
    const langBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const translations = {
        'en': { 'nav-home': 'Home', 'nav-about': 'About', 'nav-projects': 'Projects', 'nav-contact': 'Contact' },
        'hi': { 'nav-home': 'होम', 'nav-about': 'मेरे बारे में', 'nav-projects': 'प्रोजेक्ट्स', 'nav-contact': 'संपर्क' }
    };

    langBtn.addEventListener('click', () => {
        const currentLang = langText.innerText === 'HI' ? 'hi' : 'en';
        langText.innerText = currentLang === 'hi' ? 'EN' : 'HI';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerText = translations[currentLang][key];
        });
    });

    // Modal Close
    window.onclick = (e) => { if (e.target == modal) closeModal(); };
    document.addEventListener('keydown', (e) => { if (e.key === "Escape") closeModal(); });
});





// 90 Days Challenge Automatic Tracker
const startDay = new Date("2026-04-10"); // Yahan apni start date likho (YYYY-MM-DD)
const today = new Date();
const diffTime = Math.abs(today - startDay);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

// Max 90 tak hi dikhaye
const displayDay = diffDays > 90 ? 90 : diffDays;
const dayElement = document.getElementById('challenge-day');

if(dayElement) {
    // Zero padding (01, 02...) ke liye logic
    const formattedDay = displayDay < 10 ? `0${displayDay}` : displayDay;
    dayElement.innerText = `Day ${formattedDay} / 90`;
}



// Updated English Feature Detail Data
const featureInfo = {
    'JS Validation': 'Ensures real-time feedback for users without refreshing the page. It prevents incorrect data from being submitted and improves the overall UX.',
    'Mobile First': 'Designing for smaller screens first ensures the core content is prioritized. It results in a faster, more focused experience for the majority of web users.',
    'Data Privacy': 'Implementing secure input handling and best practices to protect user information from common vulnerabilities even in simple UI components.',
    'Typography': 'The art of arranging text to make it readable and visually appealing. Good typography establishes a strong brand identity and professional feel.',
    'Semantic HTML': 'Using correct HTML5 tags like <header>, <section>, and <article>. This makes the site accessible for screen readers and improves SEO rankings.',
    'Performance': 'Optimizing code and assets to ensure the site loads in under 2 seconds. High performance leads to better user retention and search engine placement.',
    'Flexbox Grid': 'Modern CSS layout techniques that allow elements to align perfectly on any screen size, creating a truly fluid and responsive design.',
    'Dark Mode JS': 'A feature that allows users to toggle between themes. It saves battery on OLED screens and provides a comfortable viewing experience at night.',
    'Interactive UI': 'Subtle animations and transitions that give users immediate feedback, making the digital interface feel alive and responsive to actions.'
};

// Function stays the same
function openDetailModal(featureKey) {
    const desc = featureInfo[featureKey];
    if (desc) {
        document.getElementById('modal-title').innerText = featureKey;
        document.getElementById('modal-text').innerHTML = `
            <div style="border-left: 4px solid var(--primary); padding-left: 15px;">
                <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-main);">
                    ${desc}
                </p>
                <br>
                <small style="color: var(--text-muted);">This technique was actively implemented in my real-world projects.</small>
            </div>
        `;
        document.getElementById('about-modal').style.display = "block";
    }
}
function setServiceInterest(serviceName) {
    const messageBox = document.getElementById('contact-message');
    const contactSection = document.getElementById('contact');
    
    if(messageBox && contactSection) {
        // 1. Message set karo
        messageBox.value = `Hi Divyanshu, I am interested in: ${serviceName}. Let's discuss!`;
        
        // 2. Smooth scroll
        contactSection.scrollIntoView({ behavior: 'smooth' });

        // 3. Highlight effect (thodi der baad jab scroll khatam ho)
        setTimeout(() => {
            messageBox.focus();
            messageBox.style.borderColor = 'var(--primary)';
            messageBox.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.4)';
            
            // 2 second baad wapas normal kar do
            setTimeout(() => {
                messageBox.style.borderColor = '';
                messageBox.style.boxShadow = '';
            }, 2000);
        }, 800);
    }
}
document.querySelectorAll('.edu-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Setting Glow Position
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            // 3D Rotation Calculation
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 20;
            const rotateY = (x - centerX) / 20;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});

const logs = document.querySelectorAll('.dev-log');

logs.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        // Desktop logic: 3D Tilt
        if (window.innerWidth > 768) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set Glow position
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            // Calculate Tilt
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 20;
            const rotateY = (x - centerX) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        }
    });
// --- DYNAMIC STREAK & 3D TILT LOGIC (OPTIMIZED) ---

const initAchievements = () => {
    // 1. STREAK CALCULATOR
    const updateStreak = () => {
        const streakElement = document.getElementById('streak-day');
        if (!streakElement) return; // Error preventer: Agar ID nahi mili toh function yahi ruk jayega

        // Start Date: April 10, 2026 (Month 3 = April kyunki JS mein 0 se start hota hai)
        const startDate = new Date(2026, 3, 10); 
        const today = new Date();
        
        // Time difference calculation
        const diffInTime = today.getTime() - startDate.getTime();
        let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24)) + 1;
        
        // Safety: Agar date galat ho ya future ki ho toh Day 1 dikhaye
        if (diffInDays < 1) diffInDays = 1;

        // Display update (Day 01, 02...)
        streakElement.innerText = `Day ${diffInDays.toString().padStart(2, '0')}`;
    };

    // 2. 3D TILT EFFECT
    const setupTilt = () => {
        const cards = document.querySelectorAll('.achieve-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                if (window.innerWidth > 768) {
                    const rect = card.getBoundingClientRect();
                    
                    // Mouse position relative to card
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    // Calculate rotation (Limit to 15 degrees for smoothness)
                    const rX = ((y - rect.height / 2) / rect.height) * -20;
                    const rY = ((x - rect.width / 2) / rect.width) * 20;

                    card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-10px)`;
                    
                    // Optional: Syncing glow position if you have it
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
            });
        });
    };

    // Initialize both
    updateStreak();
    setupTilt();
};

// Sabse safe tarika: Jab poora DOM ready ho jaye tabhi run karein
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initAchievements();
} else {
    document.addEventListener('DOMContentLoaded', initAchievements);
}
});
document.querySelectorAll('.logic-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rX = (y - rect.height / 2) / 10;
            const rY = (rect.width / 2 - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});
// GitHub Card Tilt logic
document.querySelectorAll('.github-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rX = (y - rect.height/2) / 25;
            const rY = (rect.width/2 - x) / 25;
            card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`;
        }
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
});
// Function to open Modal
function openBlog(title) {
    const modal = document.getElementById('blog-modal');
    const modalTitle = document.getElementById('modal-title');
    if(modal && modalTitle) {
        modalTitle.innerText = title;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Function to close Modal
function closeBlog() {
    const modal = document.getElementById('blog-modal');
    if(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Event Listeners for Cards
document.addEventListener('DOMContentLoaded', () => {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        // 1. Click logic for Modal
        card.addEventListener('click', () => {
            const title = card.querySelector('h4').innerText;
            openBlog(title);
        });

        // 2. 3D Tilt Effect
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rX = (y - rect.height / 2) / 15;
                const rY = (rect.width / 2 - x) / 15;
                card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-10px)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });

    // Close modal on window click
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('blog-modal');
        if (e.target === modal) closeBlog();
    });
});
// Isse endorsements section mein bhi tilt effect aa jayega
document.querySelectorAll('.test-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rX = (y - rect.height / 2) / 15;
            const rY = (rect.width / 2 - x) / 15;
            card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-10px)`;
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('.send-btn');
            const btnSpan = btn.querySelector('span');
            const originalText = btnSpan.innerText;

            // 1. Loading State
            btn.disabled = true;
            btnSpan.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            try {
                // Vercel Backend URL
                const response = await fetch('https://portfolio-backend-six-azure.vercel.app/send-mail', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (result.success) {
                    // 2. Success Logic: Show Toast and Reset Form
                    toast.classList.add('show');
                    setTimeout(() => { 
                        toast.classList.remove('show'); 
                    }, 3000);
                    contactForm.reset(); 
                } else {
                    // Backend se koi issue aaya toh
                    alert("Ops! " + (result.message || "Something went wrong. Please try again."));
                }

            } catch (err) {
                console.error("Fetch Error:", err);
                alert("Server connection failed. Please check your internet or try again later.");
            } finally {
                // 3. Reset Button State
                btn.disabled = false;
                btnSpan.innerText = originalText;
            }
        });
    }
});