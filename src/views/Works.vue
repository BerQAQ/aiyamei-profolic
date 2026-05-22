<template>
  <div class="max-w-7xl mx-auto px-4 py-8 md:py-14 overflow-hidden">
    <div class="mb-10 animate-slide-right">
      <h1 class="text-2xl md:text-3xl font-bold gradient-text mb-2">项目作品</h1>
      <p class="text-white/45 text-sm">前端作品精选与训练集展示，点击卡片查看项目详情</p>
    </div>

    <div class="flex flex-wrap gap-2 md:gap-3 mb-8 animate-fade-in stagger-1">
      <button v-for="cat in categories" :key="cat.value" @click="filter = cat.value"
        class="px-4 py-1.5 rounded-full text-sm transition-all duration-200"
        :class="filter === cat.value ? 'bg-orange text-dark font-semibold shadow-lg shadow-orange/20' : 'bg-purple/15 text-white/60 hover:bg-purple/25 hover:text-white'"
      >{{ cat.label }}</button>
    </div>

    <TransitionGroup name="works-grid" tag="div" class="space-y-6">
      <div v-for="item in filteredList" :key="item.id"
        class="group rounded-2xl overflow-hidden glass-card hover:border-orange/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple/8 cursor-pointer"
        @click="openDetail(item)"
      >
        <div class="p-5 md:p-6">
          <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xl">{{ item.icon }}</span>
                <h3 class="text-lg font-bold text-white group-hover:text-orange transition-colors">{{ item.title }}</h3>
              </div>
              <p class="text-white/40 text-xs">{{ item.subtitle }}</p>
            </div>

            <div v-if="item.award" class="shrink-0">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange/10 border border-orange/20 text-orange text-[11px] font-medium">
                <span>🏆</span> {{ item.award }}
              </span>
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 mb-4">
            <span v-for="tech in item.techs" :key="tech"
              class="px-2 py-0.5 rounded text-[10px] font-medium"
              :class="techTagColor(tech)">{{ tech }}</span>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div class="p-3 rounded-lg bg-purple/5">
              <p class="text-white/30 text-[10px] uppercase tracking-wider mb-1">设计角色</p>
              <p class="text-white/70 text-xs font-medium">{{ item.role }}</p>
            </div>
            <div class="p-3 rounded-lg bg-purple/5">
              <p class="text-white/30 text-[10px] uppercase tracking-wider mb-1">视觉风格</p>
              <p class="text-white/70 text-xs font-medium">{{ item.style }}</p>
            </div>
            <div class="p-3 rounded-lg bg-purple/5">
              <p class="text-white/30 text-[10px] uppercase tracking-wider mb-1">优化成果</p>
              <p class="text-white/70 text-xs font-medium">{{ item.result }}</p>
            </div>
            <div class="p-3 rounded-lg bg-purple/5">
              <p class="text-white/30 text-[10px] uppercase tracking-wider mb-1">开发技术</p>
              <p class="text-white/70 text-xs font-medium">{{ item.techStack }}</p>
            </div>
          </div>

          <p class="text-white/40 text-xs leading-relaxed">{{ item.description }}</p>

          <div class="flex items-center gap-1.5 mt-4 pt-4 border-t border-purple/10">
            <span class="text-orange/70 text-xs">点击查看项目详情与设计稿</span>
            <svg class="w-3.5 h-3.5 text-orange/50 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div class="relative h-44 sm:h-52 overflow-hidden">
          <img v-if="item.cover" :src="item.cover" :alt="item.title" loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-r from-orange/5 via-purple/5 to-pink/5">
            <span class="text-4xl opacity-25">{{ item.icon }}</span>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span class="px-4 py-1.5 rounded-full bg-orange/90 text-dark text-xs font-semibold">查看详情 →</span>
          </div>
        </div>
      </div>
    </TransitionGroup>

    <div v-if="filteredList.length === 0" class="text-center py-20 text-white/30">
      <p class="text-4xl mb-3">📭</p>
      <p class="text-sm">该筛选条件下暂无项目</p>
    </div>

    <Teleport to="body">
      <transition name="modal">
        <div v-if="activeItem" class="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto py-8" @click.self="activeItem = null">
          <div class="fixed inset-0 bg-dark/85 backdrop-blur-sm" @click="activeItem = null" />
          <div class="relative w-full max-w-3xl mx-4 my-auto z-10 animate-scale-in">
            <button @click="activeItem = null"
              class="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-orange text-dark flex items-center justify-center shadow-lg hover:scale-110 transition z-20">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="rounded-2xl overflow-hidden glass-card border border-purple/20">
              <div class="relative h-52 sm:h-64 md:h-80 overflow-hidden">
                <img v-if="activeItem.cover" :src="activeItem.cover" :alt="activeItem.title"
                  class="w-full h-full object-cover" />
                <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange/10 via-purple/10 to-pink/10">
                  <span class="text-6xl opacity-30">{{ activeItem.icon }}</span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark via-dark/70 to-transparent p-6">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">{{ activeItem.icon }}</span>
                    <div>
                      <h2 class="text-xl font-bold text-white">{{ activeItem.title }}</h2>
                      <p class="text-white/45 text-xs">{{ activeItem.subtitle }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-6 space-y-6">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div class="p-3 rounded-lg bg-purple/5">
                    <p class="text-white/25 text-[10px] uppercase tracking-wider mb-1">角色</p>
                    <p class="text-white/75 text-xs font-medium">{{ activeItem.role }}</p>
                  </div>
                  <div class="p-3 rounded-lg bg-purple/5">
                    <p class="text-white/25 text-[10px] uppercase tracking-wider mb-1">周期</p>
                    <p class="text-white/75 text-xs font-medium">{{ activeItem.period }}</p>
                  </div>
                  <div class="p-3 rounded-lg bg-purple/5">
                    <p class="text-white/25 text-[10px] uppercase tracking-wider mb-1">风格</p>
                    <p class="text-white/75 text-xs font-medium">{{ activeItem.style }}</p>
                  </div>
                  <div class="p-3 rounded-lg bg-purple/5">
                    <p class="text-white/25 text-[10px] uppercase tracking-wider mb-1">技术栈</p>
                    <p class="text-white/75 text-xs font-medium">{{ activeItem.techStack }}</p>
                  </div>
                </div>

                <div v-if="activeItem.award" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange text-sm font-medium">
                  <span>🏆</span> {{ activeItem.award }}
                </div>

                <div class="space-y-3">
                  <h3 class="text-sm font-semibold text-white">项目详情</h3>
                  <ul class="space-y-2">
                    <li v-for="(point, i) in activeItem.points" :key="i"
                      class="flex gap-2.5 text-xs text-white/60 leading-relaxed">
                      <span class="text-orange shrink-0 mt-0.5">●</span>
                      <span>{{ point }}</span>
                    </li>
                  </ul>
                </div>

                <div class="flex flex-wrap gap-1.5">
                  <span v-for="tech in activeItem.techs" :key="tech"
                    class="px-2.5 py-1 rounded text-[11px] font-medium"
                    :class="techTagColor(tech)">{{ tech }}</span>
                </div>

                <div v-if="activeItem.gallery && activeItem.gallery.length" class="space-y-3">
                  <h3 class="text-sm font-semibold text-white">设计稿预览</h3>
                  <p class="text-white/25 text-xs">点击图片查看完整大图</p>
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div v-for="(img, i) in activeItem.gallery" :key="i"
                      class="aspect-[4/3] rounded-lg overflow-hidden bg-purple/10 border border-purple/15 hover:border-orange/30 transition-all cursor-pointer group/img"
                      @click.stop="img && openLightbox(activeItem, i)">
                      <img v-if="img" :src="img" :alt="activeItem.title + ' - ' + (i + 1)" loading="lazy"
                        class="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300" />
                      <div v-else class="w-full h-full flex items-center justify-center text-white/15 text-2xl">
                        📷
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>

    <Teleport to="body">
      <transition name="lightbox">
        <div v-if="lightboxItem" class="fixed inset-0 z-[70] bg-dark/95 backdrop-blur-md flex flex-col"
          @click.self="closeLightbox">
          <div class="flex items-center justify-between px-4 py-3 shrink-0">
            <div class="text-white/50 text-xs">
              {{ lightboxItem.title }}
            </div>
            <div class="flex items-center gap-4">
              <span class="text-white/30 text-xs">{{ lightboxIndex + 1 }} / {{ filteredImages.length }}</span>
              <button @click="closeLightbox"
                class="w-8 h-8 rounded-full bg-white/10 hover:bg-orange/80 hover:text-dark flex items-center justify-center transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div class="flex-1 flex items-center justify-center px-4 min-h-0">
            <button v-if="filteredImages.length > 1" @click.stop="prevImage"
              class="absolute left-2 md:left-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-all group/btn">
              <svg class="w-6 h-6 text-white/60 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <img
              :src="filteredImages[lightboxIndex]"
              :alt="lightboxItem.title"
              class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl select-none"
              @click.stop
            />

            <button v-if="filteredImages.length > 1" @click.stop="nextImage"
              class="absolute right-2 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-all group/btn">
              <svg class="w-6 h-6 text-white/60 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div class="flex justify-center gap-2 py-3 shrink-0">
            <button v-for="(img, i) in filteredImages" :key="i"
              @click="lightboxIndex = i"
              class="w-10 h-10 rounded overflow-hidden border-2 transition-all"
              :class="i === lightboxIndex ? 'border-orange' : 'border-transparent hover:border-white/30 opacity-60 hover:opacity-100'">
              <img :src="img" :alt="'缩略图 ' + (i + 1)" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ===== AR 小程序设计稿 =====
import arCover from '@/assets/works/ar-app/首页.png'
import arLaunch from '@/assets/works/ar-app/启动页.png'
import arRegister from '@/assets/works/ar-app/注册页.png'
import arLogin from '@/assets/works/ar-app/登录页.png'
import arAR from '@/assets/works/ar-app/AR互动学习.png'
import arQuiz from '@/assets/works/ar-app/知识闯关.png'
import arShop from '@/assets/works/ar-app/积分商城.png'
import arPoints from '@/assets/works/ar-app/积分页面.png'
import arAnswer from '@/assets/works/ar-app/答题页面.png'
import arProfile from '@/assets/works/ar-app/我的.png'
import arPage2 from '@/assets/works/ar-app/页面 2.png'
import arPage3 from '@/assets/works/ar-app/页面 3.png'
import arPage4 from '@/assets/works/ar-app/页面 4.png'

// ===== 鱼跃云门设计稿 =====
import fishCover from '@/assets/works/fish/首页.jpeg'
import fishBreed from '@/assets/works/fish/养殖管理.jpeg'
import fishMonitor from '@/assets/works/fish/实时监控.jpeg'
import fishData from '@/assets/works/fish/数据统计分析.jpeg'
import fishSettings from '@/assets/works/fish/系统设置.jpeg'
import fishDevice from '@/assets/works/fish/设备管理.jpeg'
import fishLogo1 from '@/assets/works/fish/logo设计/画板 1.png'
import fishLogo2 from '@/assets/works/fish/logo设计/画板 8.png'

const filter = ref('all')
const activeItem = ref(null)
const lightboxItem = ref(null)
const lightboxIndex = ref(0)
const filteredImages = computed(() => {
  if (!lightboxItem.value) return []
  return (lightboxItem.value.gallery || []).filter(img => img)
})

const categories = [
  { label: '全部', value: 'all' },
  { label: '前端作品', value: 'frontend' },
  { label: '训练集', value: 'train' },
]

const list = ref([
  {
    id: 1,
    icon: '📱',
    title: '基于 AR 识别的文物学习小程序',
    subtitle: 'UI 设计 & 前端样式开发 · 2024.09 - 2025.06',
    award: null,
    period: '2024.09 - 2025.06',
    role: 'UI/UX 全流程设计 + 前端样式开发',
    style: '暖黄色卡通风格 · 视觉规范 + 组件库',
    result: '核心操作路径缩短 25%',
    techStack: '微信小程序 · 响应式布局',
    description: '独立完成 13 个核心页面高保真设计，搭建暖黄色卡通风格视觉规范与通用组件库，适配青少年学习场景。优化 AR 互动、答题、积分兑换等核心交互逻辑，并负责响应式布局与基础交互开发。',
    techs: ['Figma', '微信小程序', 'AR', '组件库', '交互原型', '响应式', '视觉规范'],
    type: 'frontend',
    points: [
      '独立完成 13 个核心页面的高保真设计，搭建暖黄色卡通风格视觉规范与通用组件库，适配青少年学习场景，统一整体页面视觉风格。',
      '优化 AR 互动、答题、积分兑换等核心交互逻辑，精简用户操作步骤，缩短 25% 核心操作路径，降低使用门槛，提升产品学习趣味性与易用性。',
      '负责小程序响应式布局与基础交互开发，完成多设备适配，保障不同机型的界面展示效果与使用流畅度。',
      '配合团队完成 AR 识别功能界面适配，实现识别效果与页面内容无缝联动，优化沉浸式学习体验。',
    ],
    cover: arCover,
    gallery: [arLaunch, arRegister, arLogin, arAR, arQuiz, arShop, arPoints, arAnswer, arProfile, arPage2, arPage3, arPage4],
  },
  {
    id: 2,
    icon: '🐟',
    title: '鱼跃云门 — AIOT 驱动的智慧水产养殖系统',
    subtitle: '界面设计 & 前端开发 · 2024.08 - 2025.06',
    award: '中国国际大学生创新大赛校赛银奖',
    period: '2024.08 - 2025.06',
    role: 'UI/UX 全流程设计 + 品牌视觉 + 前端开发',
    style: '深色科技风 · 高对比配色 · 模块化布局',
    result: '高频操作路径缩短 30%',
    techStack: 'uni-app · 响应式布局',
    description: '独立完成 6 大核心模块的高保真界面设计，搭建深色科技风视觉规范，通过高对比配色与模块化布局适配户外强光场景。同时完成项目全套品牌视觉设计与 uni-app 前端开发实现。',
    techs: ['Figma', 'uni-app', 'Logo设计', '视觉规范', '品牌设计', '模块化', 'B端设计'],
    type: 'frontend',
    points: [
      '独立完成 6 大核心模块的高保真界面设计与视觉规范搭建，搭建深色科技风视觉规范，通过高对比配色与模块化布局，适配户外强光场景，保证信息可读性与视觉统一。',
      '结合养殖用户操作习惯优化交互流程，精简数据查看、设备监控等高频操作，缩短 30% 操作路径，提升系统易用性。',
      '独立完成项目 Logo、宣传海报、视觉规范手册等品牌视觉设计，统一项目视觉形象，强化辨识度。',
      '使用 uni-app 完成首页界面的样式开发与基础交互实现，精准还原设计稿，保障页面展示效果与流畅度。',
      '设计方案被项目组落地应用。',
    ],
    cover: fishCover,
    gallery: [fishBreed, fishMonitor, fishData, fishSettings, fishDevice, fishLogo1, fishLogo2],
  },
  {
    id: 3,
    icon: '🔴',
    title: '高精度角色模型训练集',
    subtitle: 'ZBrush + Blender 制作',
    award: null,
    period: null,
    role: '3D 建模',
    style: '高精度雕刻',
    result: '影视级模型资产',
    techStack: 'ZBrush · Blender',
    description: 'ZBrush 高模雕刻 + Blender 重拓扑流程制作的高精度角色模型训练集。',
    techs: ['ZBrush', 'Blender', '高模', '拓扑'],
    type: 'train',
    points: [
      'ZBrush 高模雕刻，精细化角色造型与细节表现。',
      'Blender 重拓扑与 UV 展开，优化模型拓扑结构。',
      'Substance Painter 材质贴图制作。',
    ],
    cover: null,
    gallery: [null, null, null],
  },
  {
    id: 4,
    icon: '🟡',
    title: '低模卡通场景训练集',
    subtitle: 'Blender 全流程制作',
    award: null,
    period: null,
    role: '3D 建模',
    style: '低多边形卡通风格',
    result: '游戏引擎适配模型',
    techStack: 'Blender · 低多边形',
    description: 'Blender 全流程低面数场景建模，优化游戏引擎适配的低模卡通场景训练集。',
    techs: ['Blender', '低模', '场景', '游戏资产'],
    type: 'train',
    points: [
      'Blender 全流程低面数场景建模。',
      '优化面数与拓扑结构，适配游戏引擎实时渲染需求。',
      '材质与灯光渲染输出。',
    ],
    cover: null,
    gallery: [null, null, null],
  },
  {
    id: 5,
    icon: '🟢',
    title: '3D 渲染训练数据集',
    subtitle: '多角度渲染输出',
    award: null,
    period: null,
    role: '3D 渲染',
    style: '高质量渲染输出',
    result: 'AI 训练用数据集',
    techStack: 'Blender · Cycles',
    description: '高质量 3D 渲染数据集，多角度、多光照条件渲染输出，适用于 AI 模型训练与评估。',
    techs: ['Blender', '渲染', '数据集', 'Cycles'],
    type: 'train',
    points: [
      '多角度、多光照条件下的高精度渲染输出。',
      '标准化数据集整理与标注。',
      '适用于 AI 模型训练与效果评估。',
    ],
    cover: null,
    gallery: [null, null, null],
  },
])

const filteredList = computed(() => {
  if (filter.value === 'all') return list.value
  return list.value.filter(i => i.type === filter.value)
})

const openDetail = (item) => {
  if (item.type === 'frontend') {
    activeItem.value = item
  }
}

const openLightbox = (item, index) => {
  lightboxItem.value = item
  lightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxItem.value = null
  document.body.style.overflow = ''
}

const prevImage = () => {
  if (lightboxIndex.value > 0) {
    lightboxIndex.value--
  } else {
    lightboxIndex.value = filteredImages.value.length - 1
  }
}

const nextImage = () => {
  if (lightboxIndex.value < filteredImages.value.length - 1) {
    lightboxIndex.value++
  } else {
    lightboxIndex.value = 0
  }
}

const handleKeydown = (e) => {
  if (!lightboxItem.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => { window.addEventListener('keydown', handleKeydown) })
onUnmounted(() => { window.removeEventListener('keydown', handleKeydown) })

const techTagColor = (tech) => {
  const orangeTags = ['Figma', 'AR', '交互原型', '组件库', 'Logo设计', '品牌设计', '渲染', '数据集', 'Cycles', '低模', '场景', '游戏资产']
  const pinkTags = ['微信小程序', 'uni-app', '响应式', 'ZBrush', 'Blender', '高模', '拓扑']
  if (orangeTags.includes(tech)) return 'bg-orange/10 text-orange'
  if (pinkTags.includes(tech)) return 'bg-pink/10 text-pink'
  return 'bg-purple/20 text-white/60'
}
</script>

<style scoped>
.works-grid-enter-active { transition: all 0.4s ease-out; }
.works-grid-leave-active { transition: all 0.25s ease-in; }
.works-grid-enter-from { opacity: 0; transform: translateY(16px); }
.works-grid-leave-to { opacity: 0; transform: translateY(-8px); }
.works-grid-move { transition: transform 0.4s ease; }

.modal-enter-active { transition: all 0.3s ease-out; }
.modal-leave-active { transition: all 0.2s ease-in; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-from > div:last-child { transform: scale(0.95) translateY(20px); }

.lightbox-enter-active { transition: all 0.25s ease-out; }
.lightbox-leave-active { transition: all 0.15s ease-in; }
.lightbox-enter-from,
.lightbox-leave-to { opacity: 0; }
.lightbox-enter-from img { transform: scale(0.9); transition: transform 0.25s ease-out; }
</style>
