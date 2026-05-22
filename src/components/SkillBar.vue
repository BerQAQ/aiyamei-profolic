<template>
  <div class="group">
    <div class="flex justify-between text-xs mb-1.5">
      <span class="text-white/65">{{ name }}</span>
      <span class="text-white/30">{{ level }}%</span>
    </div>
    <div class="h-1.5 w-full bg-purple/10 rounded-full overflow-hidden">
      <div class="h-full rounded-full transition-all duration-700 group-hover:shadow-lg" :class="bar"
        :style="{ width: level + '%' }" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  level: Number,
  bar: String,
})
</script>
