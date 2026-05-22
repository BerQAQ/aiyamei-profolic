<template>
  <div class="max-w-7xl mx-auto px-4 py-8 md:py-14 overflow-hidden">
    <div class="relative flex flex-col md:flex-row items-center gap-8 md:gap-14 mb-14 md:mb-20">
      <div class="absolute -top-20 -right-20 w-80 h-80 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div class="flex-1 relative z-10 animate-slide-right">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 border border-orange/20 mb-5">
          <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span class="text-xs text-orange font-medium">应届毕业生 · 求职中</span>
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3">
          <span class="gradient-text">彭裕佳</span>
        </h1>
        <p class="text-xl md:text-2xl text-white/60 font-light mb-5">UI 交互设计师</p>

        <p class="text-white/55 text-sm md:text-base leading-relaxed mb-2 max-w-lg">
          广州应用科技学院 · 软件工程专业 · <span class="text-white/70">22岁</span>
        </p>
        <p class="text-white/55 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
          具备<span class="text-orange font-medium"> UI/UX 全流程设计能力</span>与<span class="text-pink font-medium">前端开发实现能力</span>的复合型候选人，致力于将美学设计转化为可落地的数字产品。
        </p>

        <div class="flex flex-wrap gap-2 mb-7">
          <span class="px-3 py-1 bg-orange/10 border border-orange/25 text-orange rounded-full text-xs font-medium">UI/UX 设计</span>
          <span class="px-3 py-1 bg-purple/20 border border-purple/30 text-white/75 rounded-full text-xs font-medium">Figma</span>
          <span class="px-3 py-1 bg-pink/10 border border-pink/25 text-pink rounded-full text-xs font-medium">前端开发</span>
          <span class="px-3 py-1 bg-purple/20 border border-purple/30 text-white/75 rounded-full text-xs font-medium">Vue3</span>
          <span class="px-3 py-1 bg-orange/10 border border-orange/25 text-orange rounded-full text-xs font-medium">交互设计</span>
          <span class="px-3 py-1 bg-purple/20 border border-purple/30 text-white/75 rounded-full text-xs font-medium">微信小程序</span>
        </div>

        <div class="flex gap-4">
          <router-link to="/works"
            class="px-6 py-2.5 bg-orange text-dark font-semibold rounded-lg hover:bg-orange/90 transition-all duration-200 hover:shadow-lg hover:shadow-orange/20 active:scale-95">
            查看项目作品
          </router-link>
          <router-link to="/contact"
            class="px-6 py-2.5 border border-pink/40 text-pink rounded-lg hover:bg-pink/8 transition-all duration-200 active:scale-95">
            联系我
          </router-link>
        </div>
      </div>

      <div class="flex-1 relative z-10 flex justify-center animate-scale-in stagger-2">
        <div class="relative">
          <svg class="absolute -top-8 -left-8 w-20 h-20 text-orange/20 animate-breathe" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="6" fill="currentColor" />
            <circle cx="20" cy="25" r="3" fill="currentColor" />
            <circle cx="60" cy="22" r="4" fill="currentColor" />
            <circle cx="15" cy="55" r="3.5" fill="currentColor" />
            <circle cx="65" cy="58" r="2.5" fill="currentColor" />
          </svg>

          <div class="w-52 h-52 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-orange via-pink to-purple p-[3px] float-animation shadow-xl shadow-purple/20">
            <div class="w-full h-full rounded-2xl bg-dark flex items-center justify-center overflow-hidden">
              <img v-if="heroImage" :src="heroImage" alt="彭裕佳" class="w-full h-full object-cover" loading="eager" />
              <div v-else class="flex flex-col items-center gap-2">
                <span class="text-5xl md:text-6xl">🎨</span>
                <span class="text-white/25 text-xs">UI / UX</span>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-3 -right-3 bg-dark border-2 border-orange rounded-xl px-3 py-1.5 text-xs text-orange font-semibold shadow-lg shadow-orange/15">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1" /> 可实习
          </div>
        </div>
      </div>
    </div>

    <div class="mb-8 animate-fade-in stagger-3">
      <h2 class="text-xl font-bold text-white mb-1">教育背景</h2>
      <p class="text-white/25 text-xs tracking-wider uppercase">Education</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 animate-fade-in stagger-4">
      <div class="glass-card rounded-xl p-5 hover:border-orange/30 transition-all duration-300 hover:translate-y-[-2px]">
        <div class="text-orange text-lg mb-2">🏫</div>
        <h3 class="font-semibold text-white text-sm mb-1">广州应用科技学院</h3>
        <p class="text-white/40 text-xs">软件工程 · 本科</p>
        <p class="text-white/30 text-xs mt-1">2022.09 - 2026.06</p>
      </div>
      <div class="glass-card rounded-xl p-5 hover:border-pink/30 transition-all duration-300 hover:translate-y-[-2px]">
        <div class="text-pink text-lg mb-2">📊</div>
        <h3 class="font-semibold text-white text-sm mb-1">GPA 3.7 / 5.0</h3>
        <p class="text-white/40 text-xs">专业排名 <span class="text-pink font-medium">前 25%</span></p>
        <p class="text-white/30 text-xs mt-1">学业成绩良好</p>
      </div>
      <div class="glass-card rounded-xl p-5 hover:border-orange/30 transition-all duration-300 hover:translate-y-[-2px]">
        <div class="text-orange text-lg mb-2">📚</div>
        <h3 class="font-semibold text-white text-sm mb-1">核心课程</h3>
        <p class="text-white/40 text-xs leading-relaxed">
          <span class="text-orange/80">用户界面设计</span> · <span class="text-pink/80">交互设计原理</span> · 程序设计基础 · 数据结构与算法 · 操作系统
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 animate-fade-in stagger-5">
      <div class="text-center p-5 rounded-xl bg-purple/5 border border-purple/15 hover:border-orange/25 transition-all duration-300">
        <span class="text-2xl md:text-3xl font-extrabold text-orange block mb-1">3</span>
        <span class="text-white/40 text-xs">核心项目</span>
      </div>
      <div class="text-center p-5 rounded-xl bg-purple/5 border border-purple/15 hover:border-pink/25 transition-all duration-300">
        <span class="text-2xl md:text-3xl font-extrabold text-pink block mb-1">3</span>
        <span class="text-white/40 text-xs">竞赛获奖</span>
      </div>
      <div class="text-center p-5 rounded-xl bg-purple/5 border border-purple/15 hover:border-orange/25 transition-all duration-300">
        <span class="text-2xl md:text-3xl font-extrabold text-orange block mb-1">8+</span>
        <span class="text-white/40 text-xs">设计工具</span>
      </div>
      <div class="text-center p-5 rounded-xl bg-purple/5 border border-purple/15 hover:border-pink/25 transition-all duration-300">
        <span class="text-2xl md:text-3xl font-extrabold text-purple block mb-1">0-1</span>
        <span class="text-white/40 text-xs">全流程经验</span>
      </div>
    </div>

    <div class="mb-8 animate-fade-in stagger-6">
      <h2 class="text-xl font-bold text-white mb-1">核心优势</h2>
      <p class="text-white/25 text-xs tracking-wider uppercase">Strengths</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in stagger-4">
      <div class="glass-card rounded-xl p-5 hover:border-orange/30 transition-all duration-300 hover:translate-y-[-2px]">
        <div class="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center text-orange text-lg mb-3">🎯</div>
        <h3 class="font-semibold text-white text-sm mb-1.5">设计+开发 复合能力</h3>
        <p class="text-white/40 text-xs leading-relaxed">兼具UI/UX设计审美与前端开发实现能力，能够独立完成从设计稿到页面落地的全链路工作，降低团队沟通成本</p>
      </div>
      <div class="glass-card rounded-xl p-5 hover:border-pink/30 transition-all duration-300 hover:translate-y-[-2px]">
        <div class="w-10 h-10 rounded-lg bg-pink/10 flex items-center justify-center text-pink text-lg mb-3">🔄</div>
        <h3 class="font-semibold text-white text-sm mb-1.5">0-1 全流程经验</h3>
        <p class="text-white/40 text-xs leading-relaxed">完整参与用户调研→信息架构→交互原型→视觉设计→开发实现全流程，具备从需求分析到产品交付的完整项目闭环能力</p>
      </div>
      <div class="glass-card rounded-xl p-5 hover:border-orange/30 transition-all duration-300 hover:translate-y-[-2px]">
        <div class="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center text-orange text-lg mb-3">🏆</div>
        <h3 class="font-semibold text-white text-sm mb-1.5">竞赛驱动实践</h3>
        <p class="text-white/40 text-xs leading-relaxed">中国国际大学生创新大赛校赛银奖、第十八届「挑战杯」校赛二等奖，实战经验丰富</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const heroImage = null
</script>
