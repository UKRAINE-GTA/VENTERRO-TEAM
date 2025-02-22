  function createStars() {
            const stars = document.querySelector('.stars');
            for (let i = 0; i < 200; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 5}s`;
                stars.appendChild(star);
            }
        }

        function createShootingStars() {
            const space = document.querySelector('.space-wrapper');
            setInterval(() => {
                const shootingStar = document.createElement('div');
                shootingStar.className = 'shooting-star';
                shootingStar.style.left = `${Math.random() * 100}%`;
                shootingStar.style.top = `${Math.random() * 100}%`;
                space.appendChild(shootingStar);
                setTimeout(() => {
                    shootingStar.remove();
                }, 2000);
            }, 3000);
        }

        function createNeonEffect() {
            const neon = document.querySelector('.neon');
            for (let i = 0; i < 10; i++) {
                const div = document.createElement('div');
                div.style.width = `${Math.random() * 100 + 50}px`;
                div.style.height = div.style.width;
                div.style.left = `${Math.random() * 100}%`;
                div.style.top = `${Math.random() * 100}%`;
                div.style.animationDelay = `${Math.random() * 5}s`;
                neon.appendChild(div);
            }
        }

        createStars();
        createShootingStars();
        createNeonEffect();

        document.querySelectorAll('.link').forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.background = `linear-gradient(90deg, 
                    hsl(${Math.random() * 360}, 100%, 50%), 
                    hsl(${Math.random() * 360}, 100%, 50%))`;
            });
            link.addEventListener('mouseout', () => {
                link.style.background = 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))';
            });
        });

        document.addEventListener('mousemove', (e) => {
            const container = document.querySelector('.container');
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
