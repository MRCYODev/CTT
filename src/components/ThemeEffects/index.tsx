import React, {useEffect, useRef, useState} from 'react';
import './styles.css';

type EffectTheme = 'galaxy' | 'christmas' | 'halloween' | 'none';

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  twinkleSpeed: number;
  phase: number;
};

type Snowflake = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  phase: number;
  opacity: number;
  wobble: number;
};

type Ember = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  phase: number;
  opacity: number;
};

type ChristmasLight = {
  xRatio: number;
  phase: number;
  flickerSpeed: number;
  color: string;
  size: number;
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
};

const STAR_COUNT = 180;
const SNOW_COUNT = 85;
const EMBER_COUNT = 42;
const LIGHT_COLORS = ['#ff5252', '#4ed878', '#ffd55a', '#5aa7ff'];
const SHOOTING_STAR_CHANCE_PER_FRAME = 0.0035;
const MAX_SHOOTING_STARS = 2;

function getTheme(): EffectTheme {
  if (typeof document === 'undefined') {
    return 'none';
  }

  const theme = document.documentElement.dataset.techTheme;

  if (theme === 'galaxy') return 'galaxy';
  if (theme === 'christmas') return 'christmas';
  if (theme === 'halloween') return 'halloween';

  return 'none';
}

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function createStars(width: number, height: number): Star[] {
  return Array.from({length: STAR_COUNT}, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    z: randomBetween(0.15, 1),
    size: randomBetween(0.45, 1.9),
    speed: randomBetween(0.012, 0.065),
    twinkleSpeed: randomBetween(0.0007, 0.002),
    phase: Math.random() * Math.PI * 2,
  }));
}

function createSnow(width: number, height: number): Snowflake[] {
  return Array.from({length: SNOW_COUNT}, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: randomBetween(0.8, 3.0),
    speed: randomBetween(0.45, 1.65),
    drift: randomBetween(-0.25, 0.25),
    phase: Math.random() * Math.PI * 2,
    opacity: randomBetween(0.32, 0.88),
    wobble: randomBetween(0.45, 1.7),
  }));
}

function createEmbers(width: number, height: number): Ember[] {
  return Array.from({length: EMBER_COUNT}, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: randomBetween(0.8, 2.5),
    speed: randomBetween(0.16, 0.55),
    drift: randomBetween(-0.12, 0.12),
    phase: Math.random() * Math.PI * 2,
    opacity: randomBetween(0.18, 0.65),
  }));
}

function createLights(width: number): ChristmasLight[] {
  const count = Math.max(14, Math.floor(width / 92));

  return Array.from({length: count}, (_, index) => ({
    xRatio: (index + 0.5) / count,
    phase: Math.random() * Math.PI * 2,
    flickerSpeed: randomBetween(0.0008, 0.0022),
    color: LIGHT_COLORS[index % LIGHT_COLORS.length],
    size: randomBetween(3.2, 4.8),
  }));
}

function spawnShootingStar(width: number, height: number): ShootingStar {
  const startX = randomBetween(width * 0.1, width * 0.75);
  const angle = randomBetween(Math.PI * 0.15, Math.PI * 0.3);
  const speed = randomBetween(9, 15);

  return {
    x: startX,
    y: randomBetween(-20, height * 0.35),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    life: 0,
    maxLife: randomBetween(28, 46),
    size: randomBetween(1.6, 2.6),
  };
}

function drawGalaxy(
  ctx: CanvasRenderingContext2D,
  stars: Star[],
  shootingStars: ShootingStar[],
  width: number,
  height: number,
  time: number,
) {
  ctx.clearRect(0, 0, width, height);

  for (const star of stars) {
    star.y += star.speed * (0.45 + star.z);
    star.x += Math.sin(time * 0.00008 + star.phase) * 0.01 * star.z;

    if (star.y > height + 4) {
      star.y = -4;
      star.x = Math.random() * width;
    }

    if (star.x < -4) star.x = width + 4;
    if (star.x > width + 4) star.x = -4;

    const twinkle =
      0.78 +
      Math.sin(time * star.twinkleSpeed + star.phase) * 0.16;

    const alpha = Math.max(
      0.10,
      Math.min(0.95, twinkle * (0.32 + star.z * 0.58)),
    );

    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.arc(
      star.x,
      star.y,
      star.size * (0.65 + star.z * 0.75),
      0,
      Math.PI * 2,
    );
    ctx.fill();

    if (star.size > 1.45 && star.z > 0.72) {
      const glowRadius = star.size * 4.5;
      const glow = ctx.createRadialGradient(
        star.x,
        star.y,
        0,
        star.x,
        star.y,
        glowRadius,
      );

      glow.addColorStop(0, `rgba(145,170,255,${alpha * 0.24})`);
      glow.addColorStop(1, 'rgba(145,170,255,0)');

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* Occasional shooting star for a bit of extra life. */
  if (
    shootingStars.length < MAX_SHOOTING_STARS &&
    Math.random() < SHOOTING_STAR_CHANCE_PER_FRAME
  ) {
    shootingStars.push(spawnShootingStar(width, height));
  }

  for (let i = shootingStars.length - 1; i >= 0; i -= 1) {
    const streak = shootingStars[i];

    streak.x += streak.vx;
    streak.y += streak.vy;
    streak.life += 1;

    const progress = streak.life / streak.maxLife;
    const fadeIn = Math.min(1, progress * 6);
    const fadeOut = Math.min(1, (1 - progress) * 3);
    const alpha = Math.max(0, Math.min(fadeIn, fadeOut));

    if (
      progress >= 1 ||
      streak.x > width + 60 ||
      streak.y > height + 60
    ) {
      shootingStars.splice(i, 1);
      continue;
    }

    const tailLength = 70;
    const tailX = streak.x - streak.vx * (tailLength / 12);
    const tailY = streak.y - streak.vy * (tailLength / 12);

    const trail = ctx.createLinearGradient(
      streak.x,
      streak.y,
      tailX,
      tailY,
    );

    trail.addColorStop(0, `rgba(255,255,255,${alpha})`);
    trail.addColorStop(0.4, `rgba(180,200,255,${alpha * 0.5})`);
    trail.addColorStop(1, 'rgba(180,200,255,0)');

    ctx.beginPath();
    ctx.strokeStyle = trail;
    ctx.lineWidth = streak.size;
    ctx.lineCap = 'round';
    ctx.moveTo(streak.x, streak.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.arc(streak.x, streak.y, streak.size * 0.9, 0, Math.PI * 2);
    ctx.fill();
  }
}

/*
 * The wire's sag is a pure function of x so the drawn curve and every
 * light's socket position are always computed from the exact same
 * formula. Previously the wire was a hand-tuned bezier while each
 * light used an unrelated sine wave, so the bulbs visibly floated
 * above/below the wire instead of hanging from it.
 */
function wireSagAt(xRatio: number, time: number): number {
  return (
    Math.sin(xRatio * Math.PI * 2.1 + 0.4) * 6 +
    Math.sin(xRatio * Math.PI * 4.6 + 1.7) * 2.5 +
    /* A very slow, gentle overall sway so the garland feels alive. */
    Math.sin(time * 0.00025 + xRatio * Math.PI) * 1.5
  );
}

function drawChristmas(
  ctx: CanvasRenderingContext2D,
  snow: Snowflake[],
  lights: ChristmasLight[],
  width: number,
  height: number,
  time: number,
  wireBaseY: number,
) {
  ctx.clearRect(0, 0, width, height);

  /* Snow: two visually different depth groups are mixed into one
     particle field to avoid a repeating CSS texture. */
  for (const flake of snow) {
    const sway =
      Math.sin(time * 0.001 * flake.wobble + flake.phase) * 0.16;

    flake.y += flake.speed;
    flake.x += flake.drift + sway;

    if (flake.y > height + 8) {
      flake.y = -8;
      flake.x = Math.random() * width;
    }

    if (flake.x < -8) flake.x = width + 8;
    if (flake.x > width + 8) flake.x = -8;

    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${flake.opacity})`;
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  /* Christmas string: a gently sagging wire hung just below the
     navbar, drawn by sampling the shared sag function so it always
     matches where the bulbs are placed. */
  ctx.beginPath();

  const steps = Math.max(24, Math.floor(width / 24));

  for (let i = 0; i <= steps; i += 1) {
    const xRatio = i / steps;
    const x = width * xRatio;
    const y = wireBaseY + wireSagAt(xRatio, time);

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.strokeStyle = 'rgba(24, 53, 30, 0.98)';
  ctx.lineWidth = 2;
  ctx.stroke();

  for (const light of lights) {
    const x = width * light.xRatio;
    const socketY = wireBaseY + wireSagAt(light.xRatio, time) + 2;
    const bulbLength = light.size * 2.1;
    const bulbY = socketY + bulbLength * 0.72;

    /* Each bulb has its own slower, independent "candle" flicker. */
    const wave =
      Math.sin(time * light.flickerSpeed + light.phase) * 0.5 +
      Math.sin(time * light.flickerSpeed * 1.73 + light.phase * 0.7) *
        0.23;

    const brightness = Math.max(0, Math.min(1, 0.58 + wave));

    /* Warm glow */
    const glowRadius = light.size * (5.5 + brightness * 2.5);

    const glow = ctx.createRadialGradient(
      x,
      bulbY,
      0,
      x,
      bulbY,
      glowRadius,
    );

    glow.addColorStop(
      0,
      `${light.color}${Math.floor(55 + brightness * 90)
        .toString(16)
        .padStart(2, '0')}`,
    );

    glow.addColorStop(0.5, `${light.color}26`);
    glow.addColorStop(1, `${light.color}00`);

    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, bulbY, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    /* Black/green socket */
    ctx.fillStyle = '#152019';
    ctx.fillRect(
      x - light.size * 0.75,
      socketY - 1,
      light.size * 1.5,
      light.size * 1.2,
    );

    /* Candle-style bulb */
    ctx.beginPath();
    ctx.ellipse(
      x,
      bulbY,
      light.size * 0.82,
      bulbLength * 0.72,
      0,
      0,
      Math.PI * 2,
    );

    ctx.fillStyle = brightness > 0.34
      ? light.color
      : `${light.color}78`;

    ctx.fill();

    /* Small bright hot spot */
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${0.26 + brightness * 0.30})`;
    ctx.arc(
      x - light.size * 0.28,
      bulbY - light.size * 0.75,
      light.size * 0.25,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }
}

function drawHalloween(
  ctx: CanvasRenderingContext2D,
  embers: Ember[],
  width: number,
  height: number,
  time: number,
) {
  ctx.clearRect(0, 0, width, height);

  const fog = ctx.createRadialGradient(
    width * 0.5,
    height * 0.78,
    0,
    width * 0.5,
    height * 0.78,
    Math.max(width, height) * 0.72,
  );

  fog.addColorStop(0, 'rgba(120, 35, 150, 0.055)');
  fog.addColorStop(0.55, 'rgba(255, 90, 20, 0.02)');
  fog.addColorStop(1, 'rgba(0,0,0,0)');

  ctx.fillStyle = fog;
  ctx.fillRect(0, 0, width, height);

  for (const ember of embers) {
    ember.y -= ember.speed;
    ember.x +=
      ember.drift +
      Math.sin(time * 0.0011 + ember.phase) * 0.12;

    if (ember.y < -12) {
      ember.y = height + 12;
      ember.x = Math.random() * width;
    }

    const pulse =
      0.72 +
      Math.sin(time * 0.0016 + ember.phase) * 0.22;

    ctx.beginPath();
    ctx.fillStyle = `rgba(255,104,35,${Math.max(
      0.06,
      ember.opacity * pulse,
    )})`;
    ctx.arc(
      ember.x,
      ember.y,
      ember.size,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }
}

export default function ThemeEffects(): React.ReactElement | null {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [theme, setTheme] = useState<EffectTheme>(() => getTheme());

  useEffect(() => {
    const updateTheme = () => {
      const nextTheme = getTheme();
      setTheme(nextTheme);

      /* Only take over from the CSS fallback layers when we're
         actually going to animate on canvas. If the person prefers
         reduced motion, the canvas never draws (see below), so we
         must leave the CSS layers alone or the theme loses its
         snow/stars/lights entirely instead of falling back to a
         static version of them. */
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      document.documentElement.classList.toggle(
        'ctt-theme-effects-active',
        nextTheme !== 'none' && !prefersReducedMotion,
      );
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-tech-theme'],
    });

    return () => {
      observer.disconnect();

      document.documentElement.classList.remove(
        'ctt-theme-effects-active',
      );
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || theme === 'none') {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    if (reducedMotionQuery.matches) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let snow: Snowflake[] = [];
    let embers: Ember[] = [];
    let lights: ChristmasLight[] = [];
    /* Where the garland hangs from, in viewport pixels. Measured
       from the real navbar so the lights are drawn just below it
       instead of underneath its opaque background, where a fixed
       y-position previously hid them completely. */
    let wireBaseY = 60;

    const measureWireBaseY = () => {
      const navbar = document.querySelector<HTMLElement>('.navbar');
      const bottom = navbar?.getBoundingClientRect().bottom;
      wireBaseY = bottom && bottom > 0 ? bottom + 10 : 60;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (theme === 'galaxy') {
        stars = createStars(width, height);
      }

      if (theme === 'christmas') {
        snow = createSnow(width, height);
        lights = createLights(width);
        measureWireBaseY();
      }

      if (theme === 'halloween') {
        embers = createEmbers(width, height);
      }
    };

    const stop = () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const frame = (time: number) => {
      if (document.hidden) {
        animationFrameRef.current =
          requestAnimationFrame(frame);
        return;
      }

      if (theme === 'galaxy') {
        drawGalaxy(ctx, stars, shootingStars, width, height, time);
      } else if (theme === 'christmas') {
        drawChristmas(
          ctx,
          snow,
          lights,
          width,
          height,
          time,
          wireBaseY,
        );
      } else if (theme === 'halloween') {
        drawHalloween(
          ctx,
          embers,
          width,
          height,
          time,
        );
      }

      animationFrameRef.current =
        requestAnimationFrame(frame);
    };

    resize();

    window.addEventListener('resize', resize);

    /* Docusaurus navbars can hide/show on scroll, which changes
       where the garland should hang without firing a resize event. */
    const handleScroll =
      theme === 'christmas'
        ? () => measureWireBaseY()
        : null;

    if (handleScroll) {
      window.addEventListener('scroll', handleScroll, {passive: true});
    }

    animationFrameRef.current =
      requestAnimationFrame(frame);

    return () => {
      stop();
      window.removeEventListener('resize', resize);

      if (handleScroll) {
        window.removeEventListener('scroll', handleScroll);
      }

      document.documentElement.classList.remove(
        'ctt-theme-effects-active',
      );

      ctx.clearRect(0, 0, width, height);
    };
  }, [theme]);

  if (theme === 'none') {
    return null;
  }

  return (
    <div className="ctt-theme-effects-layer" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="ctt-theme-effects"
      />
    </div>
  );
}
