 @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

        :root {
            --primary-color: #00ffff;
            --secondary-color: #ff00ff;
            --background-color: #000033;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Audiowide', cursive;
            background: var(--background-color);
            color: #fff;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            perspective: 1000px;
        }

        .space-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
        }

        .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: rotate(45deg);
        }

        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            animation: starTwinkle 1s infinite;
        }

        @keyframes starTwinkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
        }

        .shooting-star {
            position: absolute;
            width: 100px;
            height: 2px;
            background: linear-gradient(90deg, #fff, transparent);
            animation: shootingStar 2s linear infinite;
        }

        @keyframes shootingStar {
            0% { transform: translateX(-100px) translateY(100px); opacity: 1; }
            100% { transform: translateX(calc(100vw + 100px)) translateY(calc(-100vh - 100px)); opacity: 0; }
        }

        .container {
            width: 100%;
            max-width: 500px;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            box-shadow: 0 0 50px var(--primary-color), 0 0 100px var(--secondary-color);
            position: relative;
            overflow: hidden;
            transform-style: preserve-3d;
            animation: containerFloat 10s ease-in-out infinite;
        }

        @keyframes containerFloat {
            0%, 100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
            25% { transform: translateY(-20px) rotateX(5deg) rotateY(5deg); }
            50% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
            75% { transform: translateY(20px) rotateX(-5deg) rotateY(-5deg); }
        }

        .avatar {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            margin: 0 auto 2rem;
            display: block;
            border: 6px solid var(--primary-color);
            box-shadow: 0 0 30px var(--primary-color), 0 0 50px var(--secondary-color), 0 0 70px var(--primary-color);
            animation: avatarPulse 2s infinite, avatarRotate 10s linear infinite;
            position: relative;
            overflow: hidden;
        }

        .avatar::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(from 0deg, transparent, var(--primary-color), transparent 30%);
            animation: avatarSpin 4s linear infinite;
        }

        @keyframes avatarPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        @keyframes avatarRotate {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
        }

        @keyframes avatarSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .link {
            display: block;
            margin: 1.5rem 0;
            padding: 1rem;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            color: #ffffff;
            text-decoration: none;
            text-align: center;
            font-weight: bold;
            border-radius: 50px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 2px;
            z-index: 1;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }

        .link:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 10px 30px rgba(0, 255, 255, 0.8);
        }

        .link::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(45deg);
            transition: all 0.5s ease;
            z-index: -1;
        }

        .link:hover::before {
            left: 100%;
        }

        .link::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.5s ease;
            z-index: -1;
        }

        .link:hover::after {
            transform: translateX(100%);
        }

        .neon {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }

        .neon div {
            position: absolute;
            background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
            border-radius: 50%;
            opacity: 0;
            animation: neon 5s infinite;
        }

        @keyframes neon {
            0% { opacity: 0; transform: scale(0.1); }
            50% { opacity: 0.5; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.5); }
        }
