<script setup>
const props = defineProps({
  server:Object
})
const colors = [
  { color: '#5dd23e', percentage: 30 },
  { color: '#3c86e6', percentage: 70 },
  { color: '#ed7b34', percentage: 85 },
  { color: '#d42222', percentage: 100 },
]

</script>
<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden p-5 flex flex-col justify-between ">
    <div>
      <div class="w-full flex items-center justify-between">
        <h3 class="text-2xl font-semibold">{{server.name}}</h3>
          <el-tag v-if="server.online6" effect="dark" type="primary">IPV6在线</el-tag>
          <el-tag v-else-if="server.online4" effect="dark" type="success">IPV4在线</el-tag>
          <el-tag v-else effect="dark" type="danger">离线</el-tag>
      </div>
      <el-progress class="mt-4" :percentage="server.load*50" :color="colors" :show-text="false" />
    </div>
    <div class="flex justify-between">
      <div class="flex flex-col justify-end mt-4">
        <div class="font-light text-s">{{server.location}}</div>
        <div class="font-light text-s">{{server.uptime?`已在线 ${server.uptime}`:'已离线'}}</div>
      </div>
      <img src="@/assets/flag/CN.svg" class="w-20 mb-[-10px]">
    </div>
  </div>
</template>

<style scoped>

</style>