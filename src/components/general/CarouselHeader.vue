<template>
  <section class="hero-section" id="hero" aria-labelledby="hero-heading">
    <!-- Fondo con gradiente + patrón -->
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-gradient"></div>
      <div class="hero-pattern"></div>
      <div class="hero-glow hero-glow-1"></div>
      <div class="hero-glow hero-glow-2"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <!-- Badge -->
        <div class="hero-badge" data-aos="fade-down">
          <span class="badge-dot"></span>
          Empresa colombiana de tecnología
        </div>

        <!-- Titular H1 -->
        <h1 id="hero-heading" class="hero-title">
          Desarrollo de software
          <span class="hero-title-accent">a la medida para tu empresa</span>
        </h1>

        <!-- Subtítulo -->
        <p class="hero-subtitle">
          Diseñamos sitios web y soluciones digitales según los procesos, prioridades y objetivos de cada empresa.
        </p>

        <!-- CTAs -->
        <div class="hero-actions">
          <a class="btn btn-primary hero-btn-primary" href="#contact-us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>
            Conversemos sobre tu proyecto
          </a>
          <a class="btn btn-outline hero-btn-outline" href="#our-service">
            Ver nuestros servicios
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        <ul class="hero-highlights" aria-label="Áreas de servicio">
          <li class="hero-highlight">Software a la medida</li>
          <li class="hero-highlight">Sitios web</li>
          <li class="hero-highlight">Consultoría tecnológica</li>
        </ul>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a class="hero-scroll-indicator" href="#about-us" aria-label="Descubre más sobre Apysoft">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span>Descubre más</span>
    </a>
  </section>
</template>

<style scoped>
/* ---------- HERO SECTION ---------- */
.hero-section {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: var(--space-32) 0 var(--space-20);
}

/* --- Fondo --- */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #060E1E 0%, #0B2447 40%, #19376D 70%, #1A4B8F 100%);
}

.hero-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image:
    radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0);
  background-size: 40px 40px;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
}

.hero-glow-1 {
  width: 600px;
  height: 600px;
  background: var(--color-accent);
  top: -100px;
  right: -100px;
  animation: glowFloat 8s ease-in-out infinite;
}

.hero-glow-2 {
  width: 400px;
  height: 400px;
  background: #1A6BFF;
  bottom: -80px;
  left: -80px;
  animation: glowFloat 10s ease-in-out infinite reverse;
}

@keyframes glowFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%       { transform: translate(20px, -20px) scale(1.05); }
}

/* --- Contenido --- */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}

/* --- Badge --- */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-5);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  color: rgba(255, 255, 255, 0.85);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.03em;
  margin-bottom: var(--space-6);
  backdrop-filter: blur(8px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--color-accent);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.6; transform: scale(0.8); }
}

/* --- Titular --- */
.hero-title {
  font-size: var(--text-hero);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: var(--space-6);
}

.hero-title-accent {
  display: block;
  background: linear-gradient(90deg, #FF6B35, #FF9A5C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* --- Subtítulo --- */
.hero-subtitle {
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.65;
  max-width: 640px;
  margin: 0 auto var(--space-10);
}

/* --- CTAs --- */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  justify-content: center;
  margin-bottom: var(--space-16);
}

.hero-btn-primary {
  font-size: var(--text-base);
  padding: var(--space-4) var(--space-8);
  box-shadow: 0 8px 32px rgba(255, 107, 53, 0.4);
}

.hero-btn-outline {
  font-size: var(--text-base);
  padding: var(--space-4) var(--space-8);
}

/* --- Servicios destacados --- */
.hero-highlights {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
  max-width: 760px;
  margin: 0 auto;
  list-style: none;
}

.hero-highlight {
  padding: var(--space-3) var(--space-5);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(8px);
  color: rgba(255, 255, 255, 0.85);
  font-size: var(--text-sm);
  font-weight: 600;
  transition: background var(--transition-base);
}

.hero-highlight:hover {
  background: rgba(255, 255, 255, 0.10);
}

/* --- Scroll indicator --- */
.hero-scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--text-xs);
  animation: bounce 2s ease-in-out infinite;
}

.scroll-mouse {
  width: 22px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  animation: scrollWheel 1.8s ease-in-out infinite;
}

@keyframes scrollWheel {
  0%   { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(-6px); }
}
</style>