<script setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const storageKey = 'apysoft-intro-seen-v1'
const isVisible = ref(false)
const isTraveling = ref(false)
const isRevealed = ref(false)
const logoStyle = ref({})

let motionPreference
let delayTimer
let finishTimer
let revealTimer
let animationFrame

const markAsSeen = () => {
  try {
    window.sessionStorage.setItem(storageKey, 'true')
  } catch {
    // The animation can still complete when session storage is unavailable.
  }
}

const finishIntro = () => {
  window.clearTimeout(delayTimer)
  window.clearTimeout(finishTimer)
  isVisible.value = false
  markAsSeen()
}

const handleMotionPreference = (event) => {
  if (event.matches) finishIntro()
}

onMounted(async () => {
  try {
    if (window.sessionStorage.getItem(storageKey)) return
  } catch {
    // Continue without session persistence if storage is unavailable.
  }

  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (motionPreference.matches) {
    markAsSeen()
    return
  }
  motionPreference.addEventListener('change', handleMotionPreference)

  await nextTick()
  const target = document.querySelector('.site-nav .nav-logo')
  if (!target) {
    finishIntro()
    return
  }

  isVisible.value = true
  await nextTick()
  revealTimer = window.setTimeout(() => {
    isRevealed.value = true
  }, 950)
  const logo = document.querySelector('.splash-logo')
  if (!logo) {
    finishIntro()
    return
  }

  const naturalWidth = logo.offsetWidth || target.getBoundingClientRect().width
  const initialScale = Math.min(2.2, (window.innerWidth - 48) / naturalWidth)
  logoStyle.value = {
    '--intro-scale': Math.max(0.5, initialScale),
    '--destination-scale': target.getBoundingClientRect().width / naturalWidth,
    '--destination-x': '0px',
    '--destination-y': '0px',
    '--intro-logo-color': getComputedStyle(target).color,
  }

  await nextTick()
  animationFrame = window.requestAnimationFrame(() => {
    delayTimer = window.setTimeout(async () => {
      if (!target.isConnected) {
        finishIntro()
        return
      }

      const targetRect = target.getBoundingClientRect()
      logoStyle.value = {
        ...logoStyle.value,
        '--destination-scale': targetRect.width / naturalWidth,
        '--destination-x': `${targetRect.left + targetRect.width / 2 - window.innerWidth / 2}px`,
        '--destination-y': `${targetRect.top + targetRect.height / 2 - window.innerHeight / 2}px`,
        '--intro-logo-color': getComputedStyle(target).color,
      }

      await nextTick()
      animationFrame = window.requestAnimationFrame(() => {
        isTraveling.value = true
        finishTimer = window.setTimeout(finishIntro, 950)
      })
    }, 2000)
  })
})

onUnmounted(() => {
  window.clearTimeout(delayTimer)
  window.clearTimeout(finishTimer)
  window.clearTimeout(revealTimer)
  if (animationFrame) window.cancelAnimationFrame(animationFrame)
  motionPreference?.removeEventListener('change', handleMotionPreference)
})
</script>

<template>
  <div
    v-if="isVisible"
    class="splash-intro"
    :class="{ 'is-traveling': isTraveling, 'is-revealed': isRevealed }"
    aria-hidden="true"
  >
    <div class="splash-backdrop"></div>
    <div class="splash-logo" :style="logoStyle">
      <img src="/images/desk/logo/logo.png" alt="" width="42" height="40">
      <span>Apysoft</span>
    </div>
  </div>
</template>

<style scoped>
.splash-intro {
  position: fixed;
  inset: 0;
  z-index: 999;
  perspective: 1100px;
  pointer-events: none;
}

.splash-backdrop {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 43%, rgba(35, 83, 145, 0.42), transparent 45%),
    linear-gradient(145deg, #07162b, #0b2447 58%, #102e55);
  animation: backdrop-reveal 600ms ease-out both;
  transition: opacity 850ms ease-out;
}

@keyframes backdrop-reveal {
  from { opacity: 0; }
  to { opacity: 1; }
}

.splash-backdrop::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(78vw, 36rem);
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  box-shadow: 0 0 90px rgba(71, 132, 203, 0.12), inset 0 0 90px rgba(71, 132, 203, 0.08);
  content: '';
  transform: translate(-50%, -50%);
}

.splash-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--intro-logo-color, var(--color-white));
  white-space: nowrap;
  transform: translate(-50%, -50%) scale(var(--intro-scale, 2.2));
  transform-origin: center;
  transition:
    transform 850ms cubic-bezier(0.2, 0.75, 0.25, 1),
    color 250ms ease-out;
  transform-style: preserve-3d;
  animation: logo-reveal 900ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
  will-change: transform;
}

@keyframes logo-reveal {
  from {
    opacity: 0;
    transform:
      translate(-50%, -46%)
      scale(calc(var(--intro-scale, 2.2) * 0.82))
      rotateY(14deg)
      rotateX(-6deg);
  }
  to {
    opacity: 1;
    transform:
      translate(-50%, -50%)
      scale(var(--intro-scale, 2.2))
      rotateY(0)
      rotateX(0);
  }
}

.splash-logo img {
  width: auto;
  height: 40px;
  object-fit: contain;
}

.splash-logo span {
  font-size: var(--text-lg);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.is-traveling .splash-backdrop {
  opacity: 0;
}

.is-traveling .splash-logo {
  transform:
    translate(
      calc(-50% + var(--destination-x, 0px)),
      calc(-50% + var(--destination-y, 0px))
    )
    scale(var(--destination-scale, 1));
}

.is-revealed .splash-logo {
  animation: none;
}

@media (prefers-reduced-motion: reduce) {
  .splash-intro {
    display: none;
  }
}
</style>
