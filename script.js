document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio script initialized');

    // --- PERSONA CONFIGURATION ---
    const personas = {
        technical: {
            subtitle: "Creative Operations Lead",
            aboutHeadline: "People | Process | Tools",
            aboutBio: "I’m a Creative Operations Lead with 15+ years of experience in film and television spanning across Animation, VFX, Digital Marketing, and Broadcast. I design workflows, production systems, and internal tools that reduce friction, improve visibility, and help creative teams operate effectively at scale.",
            label: "Technical"
        },
        creative: {
            subtitle: "Creative Producer",
            aboutHeadline: "Story | Develop | Produce",
            aboutBio: "I’m a Creative Producer with 15+ years of experience in film and television spanning across Animation, VFX, Broadcast, and Digital Marketing, working closely with directors, writers, and content creators to develop ideas from concept through production. I specialize in aligning creative vision with practical execution so strong ideas can move forward with clarity and confidence.",
            label: "Creative"
        },
        data: {
            subtitle: "Data Analyst",
            aboutHeadline: "Context | Insight | Progress",
            aboutBio: "I’m a data-focused production professional with 15+ years of experience in film and television, applying analytics to support better planning and decision-making in creative environments. I translate production data into clear, actionable insights that help teams align, prioritize, and deliver more effectively.",
            label: "Data"
        }
    };

    // --- Data: Projects with TAGS ---
    const rawProjects = [
        {
            title: "Budgetline<br>Production Planning",
            description: "A budgeting application for line producers that enables budgeting based on estimated costs and schedules. It acts as a communication tool for managers and supervisors to verify that department schedules align with resource budgets.<br><br>By utilizing live and collected data, it tracks budget vs. bid vs. actuals and provides projections to identify trends for informed decision-making.<br><br>Project in development.",
            tools: ["Google AI Studio", "ChatGPT", "JavaScript", "React", "HTML/CSS", "SQL", "Google Sheets"],
            image: "https://drive.google.com/thumbnail?id=1t0CHdHiKVLuZfesK-05L9sedvL3qRl4k&sz=w1000",
            caseStudyUrl: "https://docs.google.com/document/d/e/2PACX-1vS6y_d6G7Z-placeholder/pub?embedded=true",
            videoUrl: "",
            category: "Production Planning",
            tags: ["technical", "data"]
        },
        {
            title: "Roadmap Builder<br>Pipeline Tool",
            description: "A visual roadmap builder featuring drag-and-drop capability for milestone cards and simplified pipeline management. Users can visually connect milestones to establish dependencies, offering a clear view of production timelines and deliverables.",
            tools: ["Google AI Studio", "ChatGPT", "JavaScript", "HTML/CSS", "Google Sheets"],
            image: "https://drive.google.com/thumbnail?id=1YzcI2938MMLRyTwJa2R7LlGYf1eIEUSv&sz=w1200",
            caseStudyUrl: "",
            videoUrl: "",
            category: "Pipeline Management",
            tags: ["technical"]
        },
        {
            title: "Notefyi<br>Meeting Google Doc Add-on",
            description: "A real-time note tracking tool designed for live meetings. It allows users to capture and organize notes on the fly, automatically processing them by category for export into CSV or Google Sheets, ensuring actionable items are captured efficiently.",
            tools: ["Google AI Studio", "ChatGPT", "JavaScript", "HTML/CSS", "Google Docs", "Google Sheets"],
            image: "https://drive.google.com/thumbnail?id=1cUNxa80YYkxttEj6sifU9ispzQzxoyvR&sz=w1000",
            caseStudyUrl: "",
            videoUrl: "",
            category: "Productivity Tool",
            tags: ["technical"]
        },
        {
            title: "Apex - Original<br>Animated Feature",
            description: "Creative producing an original animated feature in development, partnering with a writer-director to shape the pitch, refine the screenplay, and prepare the project for studio pitching. Focused on ensuring story and character development are actionable for 3D animation production.<br><br>Project currently in development. Details available upon request.",
            tools: ["Creative Development", "Pitch & Script Shaping", "Director Collaboration", "Creative Alignment", "Studio Engagement", "Animation-Ready Development"],
            image: "https://drive.google.com/thumbnail?id=1vorDWkVGpzE2zM5YSP38idN9aM5S43Kt&sz=w1000",
            caseStudyUrl: "",
            category: "Feature Film",
            tags: ["creative"]
        },
        {
            title: "Inkbound - Original<br>Animated Feature",
            description: "Creative producing an original animated feature in early development, partnering with a creator-director to develop the core concept, world, and narrative direction. Collaborating with the director and an attached writer to shape an outline that stitches together story ideas into a cohesive, production-ready foundation.<br><br>Project currently in development. Details available upon request.",
            tools: ["Creative Development", "Concept & World Building", "Narrative Direction", "Writer Collaboration", "Outline Development"],
            image: "https://drive.google.com/thumbnail?id=10tX0OJG4QEXmrJKx4mLUXPajC-_Qinw_&sz=w1000",
            caseStudyUrl: "",
            category: "Feature Film",
            tags: ["creative"]
        }
    ];

    // --- Data: Movie Credits (Filmography) ---
    // Sorted Newest to Oldest
    const movieCredits = [
        {
            title: "Steps | 2026", 
            year: 2026,
            id: "1V3gvhjW1sjeVtFSVUj9orzwHEsMrhXhD", 
            imdbUrl: "https://www.imdb.com/title/tt14413964/?ref_=fn_t_4",
            note: "Production Supervisor"
        },
        {
            title: "Ultraman Rising | 2025", 
            year: 2025,
            id: "1dSx7VjMT2Av3YodKvFarr3vEfR0wnNZu", 
            imdbUrl: "https://www.imdb.com/title/tt1877832/",
            note: "VFX Data Wrangler"
        },
        {
            title: "What If...? | 2021",
            year: 2021,
            id: "1FZ-X4ScOcxwXUJJW9wtOrRFHFtw7h7cb",
            imdbUrl: "https://www.imdb.com/title/tt10168312/",
            note: ""
        },
        {
            title: "Avengers: Infinity War | 2018",
            year: 2018,
            id: "1HzY1nk-LgzmTMLLTGHwS2Pkpohf3twF0",
            imdbUrl: "https://www.imdb.com/title/tt4154756/",
            note: ""
        },
        {
            title: "Black Panther | 2018",
            year: 2018,
            id: "13rZ07LPfdZxvyh3_nAg9gQMXs3Es7Kvj",
            imdbUrl: "https://www.imdb.com/title/tt1825683/",
            note: ""
        },
        {
            title: "Thor: Ragnarok | 2017",
            year: 2017,
            id: "1A5bnUxohuWpUcyqhVZl_XNd41Z4H02xG",
            imdbUrl: "https://www.imdb.com/title/tt3501632/",
            note: ""
        },
        {
            title: "Spider-Man: Homecoming | 2017",
            year: 2017,
            id: "19dXTbsjZCQFae7v2gFOSHaOOl6BCB-jr",
            imdbUrl: "https://www.imdb.com/title/tt2250912/",
            note: ""
        },
        {
            title: "Guardians of the Galaxy Vol. 2 | 2017",
            year: 2017,
            id: "1kzy02nrXbdohFSHv6ToUh4hdxzAui76O",
            imdbUrl: "https://www.imdb.com/title/tt3896198/",
            note: ""
        },
        {
            title: "Doctor Strange | 2016",
            year: 2016,
            id: "1hkMsIzTxEnXDAGoXhwpXNwNWkzzLj6w5",
            imdbUrl: "https://www.imdb.com/title/tt1211837/",
            note: ""
        },
        {
            title: "Captain America: Civil War | 2016",
            year: 2016,
            id: "19qT8xd-KZhClP8qs91s1tKsYeTxpkOHW",
            imdbUrl: "https://www.imdb.com/title/tt3498820/",
            note: ""
        },
        {
            title: "Jurassic World | 2015",
            year: 2015,
            id: "1hxKUuxBi9b40wWsnB7UgGN4U4BBF__v2",
            imdbUrl: "https://www.imdb.com/title/tt0369610/",
            note: ""
        },
        {
            title: "Mad Max: Fury Road | 2015",
            year: 2015,
            id: "1YAjM3lIRm0W98495txNJYb8dACrUtTK1",
            imdbUrl: "https://www.imdb.com/title/tt1392190/",
            note: ""
        },
        {
            title: "Truth | 2015",
            year: 2015,
            id: "1PDpt8aK_3fORNewIZ_JVp6yIqcugAr72",
            imdbUrl: "https://www.imdb.com/title/tt3859076/",
            note: ""
        },
        {
            title: "Person of Interest | 2015",
            year: 2015,
            id: "1mwlzxczPJwgXeUt2lnxUm2wDmNqpWShV",
            imdbUrl: "https://www.imdb.com/title/tt1839578/",
            note: ""
        },
        {
            title: "Agents of S.H.I.E.L.D. | 2015",
            year: 2015,
            id: "1Nid6Wtz1Ue_pAxk3VQgr2XeCi7E5WP47",
            imdbUrl: "https://www.imdb.com/title/tt2364582/",
            note: ""
        },
        {
            title: "Minority Report | 2015",
            year: 2015,
            id: "1bzDy2rbtgPFR1JqzrTv8-4wyteC3ZWiP",
            imdbUrl: "https://www.imdb.com/title/tt4450826/",
            note: ""
        },
        {
            title: "Teenage Mutant Ninja Turtles | 2014",
            year: 2014,
            id: "1zkIqRIH48hk-mnLt-mr24HkkIEJDHN1X",
            imdbUrl: "https://www.imdb.com/title/tt1291150/",
            note: ""
        },
        {
            title: "Guardians of the Galaxy | 2014",
            year: 2014,
            id: "1b2c-4qyU2V5KF5JGdf3bv-LOFHiE_9DV",
            imdbUrl: "https://www.imdb.com/title/tt2015381/",
            note: ""
        },
        {
            title: "X-Men: Days of Future Past | 2014",
            year: 2014,
            id: "1IoxUYmirR5VuN7AQxyIXEEWkIyaJWumi",
            imdbUrl: "https://www.imdb.com/title/tt1877832/",
            note: ""
        },
        {
            title: "Godzilla | 2014",
            year: 2014,
            id: "1PdeYrP1ltF9VzURBCgy3IntjCS8OqBwB",
            imdbUrl: "https://www.imdb.com/title/tt0831387/",
            note: ""
        },
        {
            title: "Captain America: The Winter Soldier | 2014",
            year: 2014,
            id: "14nnTz7rYi4SsriU5bIfIx682Pzjz9e-5",
            imdbUrl: "https://www.imdb.com/title/tt1843866/",
            note: ""
        },
        {
            title: "Noah | 2014",
            year: 2014,
            id: "1685GR3c5sh3jzOrBnXQSBIQGW_BMyAsP",
            imdbUrl: "https://www.imdb.com/title/tt1959490/",
            note: ""
        },
        {
            title: "Need for Speed | 2014",
            year: 2014,
            id: "1EbMKMoxyeXMwQjeDLf-1l_8lU3hMpfiy",
            imdbUrl: "https://www.imdb.com/title/tt2369135/",
            note: ""
        },
        {
            title: "Thor: The Dark World | 2013",
            year: 2013,
            id: "1IPGAwO6OB1NpYmqbWntK0a8GGsuUPo9y",
            imdbUrl: "https://www.imdb.com/title/tt1981115/",
            note: ""
        },
        {
            title: "Iron Man 3 | 2013",
            year: 2013,
            id: "1e9VZjnB0fTMCkUZLOm4GJeBMDIQCLI7s",
            imdbUrl: "https://www.imdb.com/title/tt1300854/",
            note: ""
        },
        {
            title: "Pacific Rim | 2013",
            year: 2013,
            id: "1pH1m8BhgX8Eyd0aMG2RuANPMjwGyOe7n",
            imdbUrl: "https://www.imdb.com/title/tt1663662/",
            note: ""
        },
        {
            title: "Star Trek Into Darkness | 2013",
            year: 2013,
            id: "1GyO7tEthtvjpEZxjrbrcl3_3OtbxVFHF",
            imdbUrl: "https://www.imdb.com/title/tt1408101/",
            note: ""
        },
        {
            title: "The Wolverine | 2013",
            year: 2013,
            id: "1jXL-RI1kVbrpnxGKjTiTIiR8E238J1zv",
            imdbUrl: "https://www.imdb.com/title/tt1430132/",
            note: ""
        },
        {
            title: "R.I.P.D. | 2013",
            year: 2013,
            id: "1R1ZUyI9WoO32HBX11wLlAacTh3W8INOV",
            imdbUrl: "https://www.imdb.com/title/tt0790736/",
            note: ""
        },
        {
            title: "G.I. Joe: Retaliation | 2013",
            year: 2013,
            id: "1thxH4dxNZuXlshIYScCkBBTTeFdRGepR",
            imdbUrl: "https://www.imdb.com/title/tt1583421/",
            note: ""
        },
        {
            title: "Hansel & Gretel: Witch Hunters | 2013",
            year: 2013,
            id: "1e97Qsfq2TfPUPbcdV-d9z3oZGSiMZoQY",
            imdbUrl: "https://www.imdb.com/title/tt1428538/",
            note: ""
        },
        {
            title: "Percy Jackson: Sea of Monsters | 2013",
            year: 2013,
            id: "1wz1Xm-WufROPXZwMjTib5GvYm8bRD_LY",
            imdbUrl: "https://www.imdb.com/title/tt1854564/",
            note: ""
        },
        {
            title: "Ghosts of the Abyss | 2013",
            year: 2013,
            id: "1Q8VtsH_Ip4e1gePELY5MtsJ5YE_hAGxk",
            imdbUrl: "https://www.imdb.com/title/tt0297144/",
            note: ""
        },
        {
            title: "Jurassic Park | 2013",
            year: 2013,
            id: "1eR-Jq-rW-0nZkl74WolmZKXtO-NhJVW6",
            imdbUrl: "https://www.imdb.com/title/tt0107290/",
            note: ""
        },
        {
            title: "The Avengers | 2012",
            year: 2012,
            id: "1qtjIvdxBK8FNh9UGMttL9LBN4B9dOsW9",
            imdbUrl: "https://www.imdb.com/title/tt0848228/",
            note: ""
        },
        {
            title: "Katy Perry: Part of Me | 2012",
            year: 2012,
            id: "1nnHCBYSLc9-2P5k_IKnYNxaNHyirj0AS",
            imdbUrl: "https://www.imdb.com/title/tt2215719/",
            note: ""
        },
        {
            title: "Abraham Lincoln: Vampire Hunter | 2012",
            year: 2012,
            id: "1P51Y3Xz579UGwT3y3vT01c0dVY3Ufwvw",
            imdbUrl: "https://www.imdb.com/title/tt1611224/",
            note: ""
        },
        {
            title: "John Carter | 2012",
            year: 2012,
            id: "1bvef7qD1xZl2meSbIRV3wwMsOFzBet6Q",
            imdbUrl: "https://www.imdb.com/title/tt0401729/",
            note: ""
        },
        {
            title: "Captain America: The First Avenger | 2011",
            year: 2011,
            id: "1fHlDgmL0anLyS5FltXrpJy4tcUwnULVz",
            imdbUrl: "https://www.imdb.com/title/tt0458339/",
            note: ""
        },
        {
            title: "Thor | 2011",
            year: 2011,
            id: "159tGLnjS5HyKeP0RoIZ6WvCFFbY_rDe2",
            imdbUrl: "https://www.imdb.com/title/tt0800369/",
            note: ""
        },
        {
            title: "The Green Hornet | 2011",
            year: 2011,
            id: "13AT-F6FJI7oUQ2T30yiDXahZT9T1fy5k",
            imdbUrl: "https://www.imdb.com/title/tt0990407/",
            note: ""
        }
    ];

    // --- STATE MANAGEMENT ---
    let currentRole = 'technical';
    let sortedProjects = [];
    let currentProjectIndex = 0;
    
    // Auto-Advance Timer
    let autoAdvanceTimer = null;
    const AUTO_ADVANCE_DELAY = 20000; // 20 seconds

    const stopAutoAdvance = () => {
        if (autoAdvanceTimer) {
            clearTimeout(autoAdvanceTimer);
            autoAdvanceTimer = null;
        }
    };

    const startAutoAdvance = () => {
        stopAutoAdvance();
        const projectView = document.getElementById('project-view');
        const modal = document.getElementById('case-study-modal');
        const lightbox = document.getElementById('video-lightbox');
        
        // Only run if Project View is visible AND no overlays are active
        if (projectView && projectView.classList.contains('active') &&
            (!modal || !modal.classList.contains('active')) &&
            (!lightbox || !lightbox.classList.contains('active'))) {
                
            autoAdvanceTimer = setTimeout(() => {
                let nextIndex = currentProjectIndex + 1;
                if (nextIndex >= sortedProjects.length) nextIndex = 0;
                updateProject(nextIndex, 'next');
            }, AUTO_ADVANCE_DELAY);
        }
    };

    // --- DOM Elements ---
    const showcaseInfo = document.querySelector('.showcase-info');
    const showcaseTitle = document.querySelector('.showcase-title');
    const showcaseDesc = document.querySelector('.showcase-description');
    const showcaseTools = document.querySelector('.showcase-tools');
    const showcaseImage = document.querySelector('.skew-wrapper .project-image');
    const playIcon = document.querySelector('.skew-wrapper .play-icon-overlay');
    const caseStudyBtn = document.querySelector('.open-case-study-btn');
    
    // Lightbox
    const lightboxOverlay = document.getElementById('video-lightbox');
    const lightboxPlayer = document.getElementById('lightbox-player');
    const closeLightboxBtn = document.querySelector('.close-lightbox-btn');

    // Controls
    const dotsContainer = document.querySelector('.carousel-nav .dots-wrapper');
    const nextBtn = document.querySelector('.next-project-btn');
    const prevBtn = document.querySelector('.prev-project-btn');
    const moviesGrid = document.getElementById('movies-grid-container');

    // --- LOGIC: Sort Projects ---
    const sortProjects = (role) => {
        sortedProjects = [...rawProjects].sort((a, b) => {
            const aHasTag = a.tags.includes(role);
            const bHasTag = b.tags.includes(role);
            // If a has tag and b doesn't, a comes first (-1)
            if (aHasTag && !bHasTag) return -1;
            if (!aHasTag && bHasTag) return 1;
            return 0;
        });
    };

    // --- LOGIC: Apply Persona Text ---
    const applyPersona = (role) => {
        const p = personas[role];
        // Header
        const subtitleEl = document.getElementById('role-subtitle');
        if(subtitleEl) subtitleEl.textContent = p.subtitle;

        // Navbar Label (No longer visible, but keeping safe logic)
        const roleLabel = document.getElementById('current-role-label');
        if(roleLabel) roleLabel.textContent = p.label;

        // About Section
        const aboutHead = document.getElementById('about-headline');
        const aboutBio = document.getElementById('about-bio');
        if(aboutHead) aboutHead.textContent = p.aboutHeadline;
        if(aboutBio) aboutBio.textContent = p.aboutBio;

        // Update Title Tag
        document.title = `Andrea R. Stephens ${p.subtitle}`;
        
        // Update Selector State
        document.querySelectorAll('.secret-item').forEach(btn => {
            if(btn.dataset.role === role) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    };

    // --- LOGIC: Render Carousel Dots ---
    const renderDots = () => {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = ''; 
        sortedProjects.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === currentProjectIndex) dot.classList.add('active');
            dot.dataset.index = index;
            dotsContainer.appendChild(dot);
        });

        // Re-attach listeners
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                if (index !== currentProjectIndex) {
                    const dir = index > currentProjectIndex ? 'next' : 'prev';
                    updateProject(index, dir);
                }
            });
        });
    };

    // --- LOGIC: Render Movies Grid with Auto Scroll ---
    const renderMovies = () => {
        if (!moviesGrid) return;
        moviesGrid.innerHTML = '';

        // Sort movies by year descending (newest first)
        const sortedMovies = [...movieCredits].sort((a, b) => (b.year || 0) - (a.year || 0));

        // Helper to append a set of movies
        const appendSet = () => {
            sortedMovies.forEach(movie => {
                const movieCard = document.createElement('a');
                movieCard.href = movie.imdbUrl;
                movieCard.target = "_blank";
                movieCard.className = 'movie-card';

                let imageSrc = movie.posterUrl;
                if (movie.id) {
                    imageSrc = `https://drive.google.com/thumbnail?id=${movie.id}&sz=w600`;
                }

                let noteHtml = '';
                if (movie.note) {
                    noteHtml = `<div class="movie-note-overlay"><p class="movie-note-text">${movie.note}</p></div>`;
                }

                movieCard.innerHTML = `
                    <div class="movie-poster">
                        <img 
                            src="${imageSrc}" 
                            alt="${movie.title} Poster" 
                            loading="lazy"
                            onerror="this.onerror=null;this.src='https://placehold.co/400x600/2a2c35/FFF?text=No+Poster';">
                        ${noteHtml}
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">${movie.title}</div>
                    </div>
                `;
                moviesGrid.appendChild(movieCard);
            });
        };

        // Append 4 sets for infinite scroll
        appendSet();
        appendSet();
        appendSet();
        appendSet();

        // Animation State
        let defaultSpeed = 0.8; 
        let currentSpeed = defaultSpeed;
        let isTouching = false;
        let animationId;
        let isAnimating = false; // Track if we should be animating

        const animateScroll = () => {
            if (!isTouching) {
                moviesGrid.scrollLeft += currentSpeed;

                const resetThreshold = moviesGrid.scrollWidth / 4;
                
                // Wrap Right (Forward)
                if (moviesGrid.scrollLeft >= resetThreshold) {
                    moviesGrid.scrollLeft -= resetThreshold;
                } 
                // Wrap Left (Backward)
                else if (moviesGrid.scrollLeft <= 0) {
                     moviesGrid.scrollLeft += resetThreshold;
                }
            }
            if (isAnimating) {
                animationId = requestAnimationFrame(animateScroll);
            }
        };

        // Reset scroll position
        moviesGrid.scrollLeft = 0;

        // Intersection Observer to handle start/stop
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!isAnimating) {
                        isAnimating = true;
                        animationId = requestAnimationFrame(animateScroll);
                    }
                } else {
                    isAnimating = false;
                    if (animationId) cancelAnimationFrame(animationId);
                }
            });
        }, { threshold: 0.05 }); // Trigger when 5% visible

        observer.observe(moviesGrid);

        // Mouse Zone Logic
        moviesGrid.addEventListener('mousemove', (e) => {
            const rect = moviesGrid.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const w = rect.width;
            
            // 25% Left, 25% Right Zones
            const leftZone = w * 0.25;
            const rightZone = w * 0.75;

            if (x < leftZone) {
                // Scroll Left (move content right)
                currentSpeed = -2.5; 
            } else if (x > rightZone) {
                // Scroll Right Faster
                currentSpeed = 2.5;
            } else {
                // Center - Default Speed
                currentSpeed = defaultSpeed;
            }
        });

        // Reset on leave
        moviesGrid.addEventListener('mouseleave', () => {
            currentSpeed = defaultSpeed;
        });
        
        // Touch handling (Pause JS scroll to allow native swipe)
        moviesGrid.addEventListener('touchstart', () => { isTouching = true; }, {passive: true});
        moviesGrid.addEventListener('touchend', () => { 
            setTimeout(() => { isTouching = false; }, 1000); 
        });
    };

    // --- Helper: Close Video Modal ---
    const closeVideoModal = () => {
        if(lightboxOverlay) {
            lightboxOverlay.classList.remove('active');
        }
        if(lightboxPlayer) {
            lightboxPlayer.pause();
            lightboxPlayer.currentTime = 0;
            lightboxPlayer.src = "";
        }
        startAutoAdvance(); // Resume auto-advance
    };

    // --- Carousel Logic (with Direction) ---
    const updateProject = (index, direction = 'next') => {
        // If triggered manually, this ensures video stops. 
        // Note: closeVideoModal calls startAutoAdvance, but we call it again later. That's fine.
        closeVideoModal(); 

        // Update dots state manually
        const dots = document.querySelectorAll('.dot');
        dots.forEach(d => d.classList.remove('active'));
        if(dots[index]) dots[index].classList.add('active');

        // Animation Classes
        const exitClass = direction === 'next' ? 'exit-up' : 'exit-down';
        const entryStartClass = direction === 'next' ? 'start-down' : 'start-up';

        // Elements to animate
        const elements = [showcaseInfo, showcaseImage, playIcon, caseStudyBtn].filter(el => el);

        // 1. Exit Animation
        elements.forEach(el => {
            el.classList.add(exitClass);
        });

        setTimeout(() => {
            // 2. Update Content
            const p = sortedProjects[index];
            showcaseTitle.innerHTML = p.title;
            showcaseDesc.innerHTML = p.description;
            
            showcaseTools.innerHTML = '';
            p.tools.forEach(tool => {
                const span = document.createElement('span');
                span.textContent = tool;
                showcaseTools.appendChild(span);
            });

            showcaseImage.src = p.image;
            showcaseImage.alt = p.title.replace('<br>', ' ');
            showcaseImage.classList.remove('media-hidden');
            
            // Handle Case Study Button Visibility
            if(caseStudyBtn) {
                if (p.caseStudyUrl) {
                    caseStudyBtn.style.display = 'inline-flex';
                } else {
                    caseStudyBtn.style.display = 'none';
                }
            }

            if (p.videoUrl) {
                const playVideoHandler = () => {
                    if(lightboxPlayer && lightboxOverlay) {
                        lightboxPlayer.src = p.videoUrl;
                        lightboxOverlay.classList.add('active');
                        stopAutoAdvance(); // Stop auto-advance while watching video
                        const playPromise = lightboxPlayer.play();
                        if (playPromise !== undefined) {
                            playPromise.catch(error => {
                                console.log("Auto-play prevented.");
                            });
                        }
                    }
                };

                if(playIcon) {
                    playIcon.classList.remove('media-hidden');
                    playIcon.onclick = playVideoHandler;
                }
                
                if(showcaseImage) {
                    showcaseImage.style.cursor = 'pointer';
                    showcaseImage.onclick = playVideoHandler;
                }
            } else {
                if(playIcon) {
                    playIcon.classList.add('media-hidden');
                    playIcon.onclick = null;
                }
                if(showcaseImage) {
                    showcaseImage.style.cursor = 'default';
                    showcaseImage.onclick = null;
                }
            }

            // 3. Prepare Entry (Snap to start position without transition)
            elements.forEach(el => {
                el.classList.remove(exitClass);
                el.classList.add('no-transition');
                el.classList.add(entryStartClass);
            });
            
            // Force Reflow
            void showcaseInfo.offsetWidth; 
            
            // 4. Enter Animation (Enable transition, remove start position to animate to 0)
            elements.forEach(el => {
                el.classList.remove('no-transition');
                el.classList.remove(entryStartClass);
            });

            currentProjectIndex = index;
            
            // Restart the auto-advance timer for the next slide
            startAutoAdvance();
        }, 300); // 300ms matches CSS transition time
    };

    // --- Role Switcher Logic (In-Place Update) ---
    const handleRoleSwitch = (newRole) => {
        currentRole = newRole;
        
        try {
            localStorage.setItem('selectedRole', newRole);
        } catch (e) {
            console.log('LocalStorage not available');
        }
        
        try {
            if (window.location.protocol !== 'blob:') {
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('role', newRole);
                window.history.pushState({}, '', newUrl);
            }
        } catch (e) { }

        applyPersona(currentRole);
        sortProjects(currentRole);
        currentProjectIndex = 0; 
        updateProject(currentProjectIndex, 'next');
        renderDots();
        // renderGrid() call removed

        const secretMenu = document.querySelector('.secret-menu');
        if(secretMenu) secretMenu.classList.remove('open');
        closeMenu();
    };

    // --- INITIALIZATION ---
    const urlParams = new URLSearchParams(window.location.search);
    const roleParam = urlParams.get('role');
    
    if (['technical', 'creative', 'data'].includes(roleParam)) {
        currentRole = roleParam;
    } else {
        try {
            const savedRole = localStorage.getItem('selectedRole');
            if (['technical', 'creative', 'data'].includes(savedRole)) {
                currentRole = savedRole;
            }
        } catch (e) { }
    }

    applyPersona(currentRole);
    sortProjects(currentRole);
    updateProject(0, 'next'); // Render first project
    renderDots();
    // renderGrid() call removed
    renderMovies(); // Initial render for movies

    // --- EVENT LISTENERS ---

    const roleSubtitle = document.getElementById('role-subtitle');
    const secretMenu = document.querySelector('.secret-menu');
    
    if (roleSubtitle && secretMenu) {
        roleSubtitle.addEventListener('click', (e) => {
            e.stopPropagation();
            secretMenu.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if(!secretMenu.contains(e.target) && e.target !== roleSubtitle) {
                secretMenu.classList.remove('open');
            }
        });
    }

    document.querySelectorAll('.secret-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const role = btn.dataset.role;
            if(role) handleRoleSwitch(role);
        });
    });

    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', closeVideoModal);
    }
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) {
                closeVideoModal();
            }
        });
    }

    // Carousel Arrows with Direction
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            let nextIndex = currentProjectIndex + 1;
            if (nextIndex >= sortedProjects.length) nextIndex = 0;
            updateProject(nextIndex, 'next'); // Moving "down" the list
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            let prevIndex = currentProjectIndex - 1;
            if (prevIndex < 0) prevIndex = sortedProjects.length - 1;
            updateProject(prevIndex, 'prev'); // Moving "up" the list
        });
    }

    const modal = document.getElementById('case-study-modal');
    const modalFrame = document.getElementById('case-study-frame');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const caseStudyTrigger = document.querySelector('.open-case-study-btn');

    const openModal = () => {
        const project = sortedProjects[currentProjectIndex];
        if (project.caseStudyUrl) {
            modalFrame.src = project.caseStudyUrl;
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden';
            stopAutoAdvance(); // Pause timer when reading case study
        }
    };

    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            modalFrame.src = ''; 
        }, 300);
        document.body.style.overflow = '';
        startAutoAdvance(); // Resume timer
    };

    if (caseStudyTrigger) {
        caseStudyTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navTriggers = document.querySelectorAll('.nav-trigger');
    const projectView = document.getElementById('project-view');
    const aboutView = document.getElementById('about-view');
    const navLink = document.querySelector('.nav-actions .nav-text-link');

    const switchView = (target) => {
        if (target === 'about') {
            stopAutoAdvance(); // Pause timer when viewing About
            projectView.classList.remove('active');
            projectView.classList.add('hidden');
            aboutView.classList.remove('hidden');
            void aboutView.offsetWidth;
            aboutView.classList.add('active');
            window.scrollTo(0, 0);

            if(navLink) {
                navLink.textContent = "Projects";
                navLink.setAttribute('data-target', 'home');
            }
        } else {
            aboutView.classList.remove('active');
            aboutView.classList.add('hidden');
            projectView.classList.remove('hidden');
            void projectView.offsetWidth;
            projectView.classList.add('active');
            window.scrollTo(0, 0);
            startAutoAdvance(); // Resume timer when returning to Projects

             if(navLink) {
                navLink.textContent = "About";
                navLink.setAttribute('data-target', 'about');
            }
        }
        closeMenu();
    };

    if (window.location.hash === '#about') {
        switchView('about');
    }

    navTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            if(trigger.classList.contains('secret-item')) return;

            e.preventDefault();
            const target = trigger.getAttribute('data-target');
            
            const targetView = document.getElementById(target === 'home' ? 'project-view' : 'about-view');
            const isHidden = targetView.classList.contains('hidden');

            if (isHidden) {
                switchView(target);
            } else if (target === 'home') {
                 window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            closeMenu();
        });
    });

    const copyEmailBtn = document.getElementById('copy-email-btn');
    const emailText = document.getElementById('contact-email-text');
    
    if(copyEmailBtn && emailText) {
        copyEmailBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            e.stopPropagation();
            
            const email = emailText.innerText;
            navigator.clipboard.writeText(email).then(() => {
                const icon = copyEmailBtn.querySelector('i');
                if(icon) {
                    icon.classList.remove('fa-copy', 'fa-regular');
                    icon.classList.add('fa-check', 'fa-solid');

                    setTimeout(() => {
                        icon.classList.remove('fa-check', 'fa-solid');
                        icon.classList.add('fa-copy', 'fa-regular');
                    }, 2000);
                }
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }

    const copyLinkedInBtn = document.getElementById('copy-linkedin-btn');
    
    if(copyLinkedInBtn) {
        copyLinkedInBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            e.stopPropagation();
            
            const linkedInUrl = "https://www.linkedin.com/in/andrea-r-stephens/";
            navigator.clipboard.writeText(linkedInUrl).then(() => {
                const icon = copyLinkedInBtn.querySelector('i');
                if(icon) {
                    icon.classList.remove('fa-copy', 'fa-regular');
                    icon.classList.add('fa-check', 'fa-solid');

                    setTimeout(() => {
                        icon.classList.remove('fa-check', 'fa-solid');
                        icon.classList.add('fa-copy', 'fa-regular');
                    }, 2000);
                }
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }

    const chatBtns = document.querySelectorAll('a[href="#contact"]');
    chatBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerOffset = 80;
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    const closeMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; 
        }
    };

    const openMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        }
    };

    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            openMenu();
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMenu();
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});