<template>
  <div class="max-w-7xl mx-auto px-4 py-8 md:py-14 overflow-hidden">
    <div class="mb-10 animate-slide-right">
      <h1 class="text-2xl md:text-3xl font-bold gradient-text mb-2">联系方式</h1>
      <p class="text-white/45 text-sm">如有 UI/UX 设计或前端开发合作意向，欢迎随时联系</p>
    </div>

    <div class="grid md:grid-cols-5 gap-8">
      <div class="md:col-span-3 animate-slide-up stagger-1">
        <form @submit.prevent="send" class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-white/40 text-xs mb-1.5 ml-1">姓名</label>
              <input v-model="form.name" placeholder="请填写您的姓名" required
                class="w-full p-3 rounded-lg bg-purple/5 border border-purple/15 text-white placeholder-white/20 focus:border-orange focus:ring-1 focus:ring-orange/20 outline-none transition-all duration-200 text-sm" />
            </div>
            <div>
              <label class="block text-white/40 text-xs mb-1.5 ml-1">邮箱</label>
              <input v-model="form.email" type="email" placeholder="your@email.com" required
                class="w-full p-3 rounded-lg bg-purple/5 border border-purple/15 text-white placeholder-white/20 focus:border-orange focus:ring-1 focus:ring-orange/20 outline-none transition-all duration-200 text-sm" />
            </div>
          </div>
          <div>
            <label class="block text-white/40 text-xs mb-1.5 ml-1">主题</label>
            <select v-model="form.subject" required
              class="w-full p-3 rounded-lg bg-purple/5 border border-purple/15 text-white/60 focus:border-orange focus:ring-1 focus:ring-orange/20 outline-none transition-all duration-200 text-sm appearance-none cursor-pointer">
              <option value="" disabled class="bg-dark">请选择联系意向</option>
              <option value="UI/UX 设计合作" class="bg-dark">UI/UX 设计合作</option>
              <option value="前端开发合作" class="bg-dark">前端开发合作</option>
              <option value="实习/工作机会" class="bg-dark">实习/工作机会</option>
              <option value="项目咨询" class="bg-dark">项目咨询</option>
              <option value="其他" class="bg-dark">其他</option>
            </select>
          </div>
          <div>
            <label class="block text-white/40 text-xs mb-1.5 ml-1">留言内容</label>
            <textarea v-model="form.msg" rows="5" placeholder="请描述您的需求或合作意向..." required
              class="w-full p-3 rounded-lg bg-purple/5 border border-purple/15 text-white placeholder-white/20 focus:border-orange focus:ring-1 focus:ring-orange/20 outline-none transition-all duration-200 text-sm resize-none" />
          </div>
          <button type="submit"
            class="w-full px-6 py-3 bg-orange text-dark font-semibold rounded-lg hover:bg-orange/90 hover:shadow-lg hover:shadow-orange/15 transition-all duration-200 active:scale-[0.98] text-sm">
            发送信息
          </button>
        </form>
      </div>

      <div class="md:col-span-2 animate-slide-up stagger-2 space-y-4">
        <div class="glass-card rounded-xl p-5 space-y-4">
          <h3 class="text-orange text-[11px] font-semibold uppercase tracking-wider">👤 个人信息</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-2.5">
              <span class="text-sm shrink-0">👩</span>
              <span class="text-white/30 text-xs w-14 shrink-0">姓名</span>
              <span class="text-white/65 text-xs">彭裕佳</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-sm shrink-0">🎓</span>
              <span class="text-white/30 text-xs w-14 shrink-0">学历</span>
              <span class="text-white/65 text-xs">本科 · 软件工程</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-sm shrink-0">🏫</span>
              <span class="text-white/30 text-xs w-14 shrink-0">学校</span>
              <span class="text-white/65 text-xs">广州应用科技学院</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-sm shrink-0">🎂</span>
              <span class="text-white/30 text-xs w-14 shrink-0">年龄</span>
              <span class="text-white/65 text-xs">22岁</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-sm shrink-0">📍</span>
              <span class="text-white/30 text-xs w-14 shrink-0">所在地</span>
              <span class="text-white/65 text-xs">广州</span>
            </div>
          </div>
        </div>

        <div class="glass-card rounded-xl p-5 space-y-4">
          <h3 class="text-orange text-[11px] font-semibold uppercase tracking-wider">📬 联系方式</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-2.5">
              <span class="text-sm shrink-0">📧</span>
              <span class="text-white/30 text-xs w-14 shrink-0">邮箱</span>
              <span class="text-white/65 text-xs truncate">your.email@example.com</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-sm shrink-0">📱</span>
              <span class="text-white/30 text-xs w-14 shrink-0">电话</span>
              <span class="text-white/65 text-xs">请通过邮箱联系</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-sm shrink-0">🟢</span>
              <span class="text-white/30 text-xs w-14 shrink-0">求职状态</span>
              <span class="text-green-400 text-xs font-medium">应届毕业生 · 求职中</span>
            </div>
          </div>
        </div>

        <div class="glass-card rounded-xl p-5 space-y-3">
          <h3 class="text-orange text-[11px] font-semibold uppercase tracking-wider">🔗 专业平台</h3>
          <div class="flex flex-wrap gap-2">
            <a href="#" class="px-3 py-1.5 rounded-lg bg-purple/10 text-white/55 text-xs hover:bg-orange/15 hover:text-orange transition-all duration-200">Figma</a>
            <a href="#" class="px-3 py-1.5 rounded-lg bg-purple/10 text-white/55 text-xs hover:bg-orange/15 hover:text-orange transition-all duration-200">GitHub</a>
            <a href="#" class="px-3 py-1.5 rounded-lg bg-purple/10 text-white/55 text-xs hover:bg-orange/15 hover:text-orange transition-all duration-200">站酷</a>
            <a href="#" class="px-3 py-1.5 rounded-lg bg-purple/10 text-white/55 text-xs hover:bg-orange/15 hover:text-orange transition-all duration-200">小红书</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', subject: '', msg: '' })

const send = () => {
  alert('感谢您的留言！彭裕佳会尽快回复～')
  form.value = { name: '', email: '', subject: '', msg: '' }
}
</script>
