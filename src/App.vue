<template>
  <div class="min-h-screen bg-dark text-white">
    <nav class="fixed w-full z-50 bg-dark/90 backdrop-blur-xl border-b border-purple/20">
      <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <router-link to="/" class="flex items-center gap-2.5 group">
          <svg class="w-7 h-7" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="2" width="24" height="24" rx="6" stroke="url(#logoGrad)" stroke-width="2" />
            <path d="M8 20 L14 8 L20 20" stroke="url(#logoGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="11" y1="16" x2="17" y2="16" stroke="url(#logoGrad)" stroke-width="2" stroke-linecap="round" />
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28">
                <stop stop-color="#ffb21b" />
                <stop offset="1" stop-color="#cd284f" />
              </linearGradient>
            </defs>
          </svg>
          <span class="text-lg font-bold text-white group-hover:text-orange transition-colors duration-200">aiyamiejian</span>
        </router-link>

        <button class="md:hidden text-white p-1.5" @click="mobileOpen = !mobileOpen" aria-label="菜单">
          <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="hidden md:flex items-center gap-8 text-sm">
          <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
            class="relative py-1 text-white/70 hover:text-orange transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-200"
          >{{ link.label }}</router-link>
        </div>
      </div>

      <div v-if="mobileOpen" class="md:hidden bg-dark/98 backdrop-blur-xl border-t border-purple/20 px-4 py-4 flex flex-col gap-4">
        <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
          class="text-white hover:text-orange transition-colors duration-200 text-base py-1"
          @click="mobileOpen = false"
        >{{ link.label }}</router-link>
      </div>
    </nav>

    <div class="pt-14">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <footer class="border-t border-purple/20 py-10 mt-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <router-link to="/" class="inline-flex items-center gap-2 mb-3">
          <svg class="w-6 h-6" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="2" width="24" height="24" rx="6" stroke="url(#logoGradFooter)" stroke-width="2" />
            <path d="M8 20 L14 8 L20 20" stroke="url(#logoGradFooter)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="11" y1="16" x2="17" y2="16" stroke="url(#logoGradFooter)" stroke-width="2" stroke-linecap="round" />
            <defs>
              <linearGradient id="logoGradFooter" x1="0" y1="0" x2="28" y2="28">
                <stop stop-color="#ffb21b" />
                <stop offset="1" stop-color="#cd284f" />
              </linearGradient>
            </defs>
          </svg>
          <span class="font-bold text-white">aiyamiejian</span>
        </router-link>
        <p class="text-white/30 text-xs">UI 交互设计师 · 设计+开发复合型 · 广州</p>
        <p class="text-white/20 text-xs mt-1">© {{ year }} All Rights Reserved</p>
      </div>
    </footer>

    <button v-show="showBackTop" @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-orange text-dark flex items-center justify-center shadow-lg shadow-orange/25 hover:scale-110 transition-all duration-200"
      aria-label="回到顶部"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileOpen = ref(false)
const showBackTop = ref(false)
const year = new Date().getFullYear()

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/works', label: '项目作品' },
  { path: '/skills', label: '专业技能' },
  { path: '/contact', label: '联系方式' },
]

const handleScroll = () => { showBackTop.value = window.scrollY > 300 }
const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

router.afterEach(() => { mobileOpen.value = false })

onMounted(() => { window.addEventListener('scroll', handleScroll, { passive: true }) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })
</script>

<style scoped>
.page-enter-active { animation: pageIn 0.35s ease-out; }
.page-leave-active { animation: pageOut 0.2s ease-in; }
@keyframes pageIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pageOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-6px); } }
</style>
