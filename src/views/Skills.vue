<template>
  <div class="max-w-7xl mx-auto px-4 py-8 md:py-14 overflow-hidden">
    <div class="mb-10 animate-slide-right">
      <h1 class="text-2xl md:text-3xl font-bold gradient-text mb-2">专业技能</h1>
      <p class="text-white/45 text-sm">系统化梳理设计工具、开发能力与核心设计能力</p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div class="animate-slide-up stagger-1">
        <div class="mb-8">
          <h2 class="text-lg font-semibold mb-5 flex items-center gap-2 text-orange">
            <span>🎨</span> UI 设计工具
          </h2>
          <div class="space-y-3.5">
            <SkillBar v-for="skill in designTools" :key="skill.name" :name="skill.name" :level="skill.level" :bar="skill.bar" />
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-lg font-semibold mb-5 flex items-center gap-2 text-pink">
            <span>💻</span> 前端开发能力
          </h2>
          <div class="space-y-3.5">
            <SkillBar v-for="skill in frontendSkills" :key="skill.name" :name="skill.name" :level="skill.level" :bar="skill.bar" />
          </div>
        </div>

        <div>
          <h2 class="text-lg font-semibold mb-5 flex items-center gap-2 text-purple">
            <span>⚙️</span> 协作与效率工具
          </h2>
          <div class="space-y-3.5">
            <SkillBar v-for="skill in collabTools" :key="skill.name" :name="skill.name" :level="skill.level" :bar="skill.bar" />
          </div>
        </div>
      </div>

      <div class="animate-slide-up stagger-2">
        <h2 class="text-lg font-semibold text-orange flex items-center gap-2 mb-5">
          <span>🧠</span> 核心设计能力
        </h2>

        <div class="space-y-3">
          <div v-for="ability in designAbilities" :key="ability.name"
            class="glass-card rounded-xl p-4 hover:border-orange/20 transition-all duration-300 hover:translate-x-1"
          >
            <div class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0"
                :class="ability.accent === 'orange' ? 'bg-orange/10 text-orange' : 'bg-pink/10 text-pink'">
                {{ ability.icon }}
              </div>
              <div>
                <h3 class="font-semibold text-white text-sm mb-0.5">{{ ability.name }}</h3>
                <p class="text-white/35 text-xs leading-relaxed">{{ ability.description }}</p>
                <div class="flex items-center gap-1 mt-1.5">
                  <span v-for="n in ability.level" :key="n"
                    class="w-3 h-1 rounded-full"
                    :class="ability.accent === 'orange' ? 'bg-orange/60' : 'bg-pink/60'"
                  />
                  <span v-for="n in (5 - ability.level)" :key="'e' + n"
                    class="w-3 h-1 rounded-full bg-white/8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-lg font-semibold text-pink flex items-center gap-2 mt-10 mb-5">
          <span>📋</span> 项目经历
        </h2>

        <div class="relative pl-6 space-y-8 border-l-2 border-purple/25">
          <div v-for="exp in experiences" :key="exp.title" class="relative">
            <div class="absolute -left-[21px] top-1.5 w-4 h-4 rounded-full border-2"
              :class="exp.accent === 'orange' ? 'border-orange bg-orange/20' : 'border-pink bg-pink/20'" />
            <h3 class="font-semibold text-white text-sm">{{ exp.title }}</h3>
            <p class="text-[11px] text-white/30 mt-0.5 mb-1">{{ exp.period }} · {{ exp.project }}</p>
            <p class="text-xs text-white/50 leading-relaxed">{{ exp.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SkillBar from '../components/SkillBar.vue'

const designTools = [
  { name: 'Figma', level: 90, bar: 'bg-orange shadow-orange/20' },
  { name: 'Photoshop', level: 85, bar: 'bg-pink shadow-pink/20' },
  { name: 'Illustrator', level: 80, bar: 'bg-orange shadow-orange/20' },
  { name: 'Adobe XD', level: 75, bar: 'bg-purple shadow-purple/20' },
  { name: '墨刀 / Axure', level: 80, bar: 'bg-pink shadow-pink/20' },
  { name: 'Sketch / Pixso', level: 70, bar: 'bg-purple shadow-purple/20' },
  { name: '蓝湖 / 协作交付', level: 85, bar: 'bg-orange shadow-orange/20' },
  { name: 'After Effects', level: 60, bar: 'bg-pink shadow-pink/20' },
]

const frontendSkills = [
  { name: 'HTML / CSS', level: 88, bar: 'bg-orange shadow-orange/20' },
  { name: 'JavaScript', level: 78, bar: 'bg-pink shadow-pink/20' },
  { name: 'Vue3 / uni-app', level: 82, bar: 'bg-orange shadow-orange/20' },
  { name: '微信小程序', level: 80, bar: 'bg-purple shadow-purple/20' },
  { name: 'Tailwind CSS', level: 85, bar: 'bg-pink shadow-pink/20' },
]

const collabTools = [
  { name: 'Git 版本管理', level: 75, bar: 'bg-purple shadow-purple/20' },
  { name: 'Notion / 文档', level: 80, bar: 'bg-orange shadow-orange/20' },
]

const designAbilities = [
  { icon: '🖼️', name: 'UI 界面设计', description: '精通移动端与Web端界面设计，具备完整的视觉规范与组件库搭建能力', level: 5, accent: 'orange' },
  { icon: '🔄', name: '交互流程优化', description: '擅长通过可用性测试与数据分析优化交互流程，缩短操作路径', level: 5, accent: 'orange' },
  { icon: '🗂️', name: '信息架构设计', description: '能够梳理复杂业务场景下的功能架构与导航体系', level: 4, accent: 'pink' },
  { icon: '🔍', name: '用户调研分析', description: '具备问卷设计、用户访谈与数据分析能力，为设计决策提供依据', level: 4, accent: 'pink' },
  { icon: '🧪', name: '可用性测试', description: '能独立设计测试方案并执行，基于反馈迭代优化设计方案', level: 4, accent: 'orange' },
]

const experiences = [
  { title: 'UI/UX 设计师', period: '2024', project: '基于AR识别的文物学习小程序', desc: '全流程UI/UX设计，产出Figma交互原型、设计规范、组件库，操作路径缩短25%', accent: 'orange' },
  { title: 'UI/UX 设计师', period: '2024', project: '鱼跃云门智慧水产养殖系统', desc: 'B端数据监控系统设计，高保真原型产出，跨团队协作沟通，中国国际大学生创新大赛校赛银奖', accent: 'pink' },
]
</script>
