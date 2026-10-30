<script setup>
import {
  formData,
  state,
  phoneError,
  handleSubmit,
} from '../../assets/js/processContact.js';

const contacts = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>`,
    label: 'WhatsApp',
    value: '+57 302 836 5613',
    href: 'https://wa.me/573028365613',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    label: 'Correo electrónico',
    value: 'apysoft2023@gmail.com',
    href: 'mailto:apysoft2023@gmail.com',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    label: 'Instagram',
    value: '@apysoft_s.a.s',
    href: 'https://www.instagram.com/apysoft_s.a.s',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    label: 'LinkedIn',
    value: 'Apysoft SAS',
    href: 'https://www.linkedin.com/in/apysoft/',
  },
];
</script>

<template>
  <section class="contact-section section-padding" id="contact-us" aria-labelledby="contact-heading">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <span class="section-tag">Hablemos</span>
        <h2 id="contact-heading" class="section-title">Conversemos sobre las necesidades de tu empresa</h2>
        <p class="section-subtitle">
          Cuéntanos qué necesitas o qué problema buscas resolver. Si aún estás definiendo el alcance, puedes compartirnos la idea inicial.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Formulario -->
        <div class="contact-form-wrapper">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name" class="form-label">Nombre y apellido <span class="required" aria-hidden="true">*</span></label>
              <input
                v-model="formData.name"
                type="text"
                id="name"
                class="form-input"
                placeholder="Tu nombre y apellido"
                autocomplete="name"
                required
              >
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email" class="form-label">Correo electrónico <span class="required" aria-hidden="true">*</span></label>
                <input
                  v-model="formData.email"
                  type="email"
                  id="email"
                  class="form-input"
                  placeholder="tu@empresa.com"
                  autocomplete="email"
                  required
                >
              </div>
              <div class="form-group">
                <label for="cellphone" class="form-label">Teléfono / WhatsApp <span class="required" aria-hidden="true">*</span></label>
                <input
                  v-model="formData.cellphone"
                  type="tel"
                  id="cellphone"
                  class="form-input"
                  :class="{ 'input-error': phoneError }"
                  :aria-invalid="Boolean(phoneError)"
                  :aria-describedby="phoneError ? 'cellphone-error' : undefined"
                  placeholder="+57 300 000 0000"
                  autocomplete="tel"
                  required
                >
                <span v-if="phoneError" id="cellphone-error" class="field-error" role="alert">{{ phoneError }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="body" class="form-label">¿Qué necesitas? <span class="required" aria-hidden="true">*</span></label>
              <textarea
                v-model="formData.body"
                id="body"
                class="form-input form-textarea"
                placeholder="Describe brevemente el reto o servicio que buscas. Si aún no tienes el alcance definido, cuéntanos lo que ya sabes."
                rows="5"
                required
              ></textarea>
            </div>

            <!-- Estado del envío -->
            <div v-if="state.success" class="form-success" role="status">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              Tu consulta se envió correctamente.
            </div>
            <div v-if="state.error" class="form-error-msg" role="alert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Ocurrió un error. Intenta por WhatsApp o email.
            </div>

            <button type="submit" class="btn btn-primary submit-btn" :disabled="state.loading">
              <span v-if="state.loading">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="spinner" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                Enviando...
              </span>
              <span v-else>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Enviar consulta
              </span>
            </button>
          </form>
        </div>

        <!-- Info de contacto -->
        <div class="contact-info">
          <div class="contact-info-inner">
            <h3 class="info-title">¿Prefieres otro canal?</h3>
            <p class="info-subtitle">Elige la opción más cómoda para contactarnos:</p>

            <ul class="contact-channels" role="list">
              <li v-for="c in contacts" :key="c.label" class="channel-item">
                <a :href="c.href" class="channel-link" target="_blank" rel="noopener noreferrer" :aria-label="`Contactar por ${c.label}`">
                  <div class="channel-icon" v-html="c.icon" aria-hidden="true"></div>
                  <div class="channel-text">
                    <span class="channel-label">{{ c.label }}</span>
                    <span class="channel-value">{{ c.value }}</span>
                  </div>
                  <svg class="channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
            </ul>

            <div class="response-time">
              <span class="response-dot"></span>
              También puedes escribirnos por WhatsApp o correo electrónico
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: var(--color-surface);
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-12);
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--space-4);
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.65;
}

/* --- Grid --- */
.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-8);
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
    align-items: start;
  }
}

.contact-grid > * {
  min-width: 0;
}

/* --- Formulario --- */
.contact-form-wrapper {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
}

@media (min-width: 640px) {
  .form-row { grid-template-columns: 1fr 1fr; }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
}

.required {
  color: var(--color-accent);
}

.form-input {
  width: 100%;
  min-width: 0;
  padding: var(--space-3) var(--space-4);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--color-text);
  background: var(--color-bg);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  outline: none;
}

.form-input::placeholder { color: var(--color-text-light); }

.form-input:focus {
  border-color: var(--color-brand-light);
  box-shadow: 0 0 0 3px rgba(26, 75, 143, 0.12);
  background: var(--color-white);
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.field-error {
  font-size: var(--text-xs);
  color: var(--color-error);
  font-weight: 500;
}

.form-success {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: 600;
}

.form-error-msg {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: rgba(239, 68, 68, 0.1);
  color: var(--color-error);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: 600;
}

.submit-btn {
  width: 100%;
  padding: var(--space-4);
  font-size: var(--text-base);
  border-radius: var(--radius-md);
  gap: var(--space-3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spinner { animation: spin 0.8s linear infinite; }

/* --- Info Contacto --- */
.contact-info-inner {
  background: var(--color-brand);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  color: var(--color-white);
}

.info-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: var(--space-2);
}

.info-subtitle {
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.7);
  margin-bottom: var(--space-6);
  line-height: 1.5;
}

.contact-channels { list-style: none; display: flex; flex-direction: column; gap: var(--space-3); }

.channel-link {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  background: rgba(255,255,255,0.08);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.1);
  transition: background var(--transition-fast), transform var(--transition-fast);
  color: var(--color-white);
}

.channel-link:hover {
  background: rgba(255,255,255,0.14);
  transform: translateX(4px);
}

.channel-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  padding: 8px;
  background: rgba(255,255,255,0.12);
  border-radius: var(--radius-md);
}

.channel-icon :deep(svg) {
  width: 100%;
  height: 100%;
  stroke: var(--color-accent);
}

.channel-text {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  gap: 2px;
}

.channel-label {
  font-size: var(--text-xs);
  color: rgba(255,255,255,0.6);
  font-weight: 500;
}

.channel-value {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-white);
  overflow-wrap: anywhere;
}

.channel-arrow {
  opacity: 0.4;
  flex-shrink: 0;
}

.channel-link:hover .channel-arrow { opacity: 0.9; }

.response-time {
  margin-top: var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-xs);
  color: rgba(255,255,255,0.65);
  font-weight: 500;
}

.response-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-success);
  flex-shrink: 0;
  box-shadow: 0 0 8px var(--color-success);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}
</style>