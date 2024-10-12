<script setup>
import axios from "axios";
import {ref} from "vue";
import MonitorCard from "@/components/MonitorCard.vue";
let server = ref([]);
axios.get('https://serverstatus.ceitlab.top/json/stats.json').then(response => {
  server.value = response.data.servers;
})
setInterval(()=>{
  axios.get('https://serverstatus.ceitlab.top/json/stats.json').then(response => {
    server.value = response.data.servers;
  })
},2000)
const colors = [
  { color: '#5dd23e', percentage: 30 },
  { color: '#3c86e6', percentage: 70 },
  { color: '#ed7b34', percentage: 85 },
  { color: '#d42222', percentage: 100 },
]
const notRunning = (row)=>{
  const online4 = row.row.online4;
  const online6 = row.row.online6;
  if(!online4 && !online6)
    return 'backgroundColor:#e44c4c'
}
</script>

<template>
  <div class="px-[5%] py-[10vh] w-[100vw] absolute" id="test">
    <h1 id="title" class="font-extrabold text-[5vmax] mb-5" >概览</h1>
    <div class="grid gap-5 mb-5" style="grid-auto-rows: 32px ;grid-template-columns: repeat(auto-fit, minmax(8px, 1fr))">
     <MonitorCard v-for="item in server" :server="item" class="col-span-12 row-span-4"/>
    </div>
    <h1 id="title" class="font-extrabold text-[5vmax]" >详情</h1>
    <el-table :data="server" style="width: 100%" :row-style="notRunning">
      <el-table-column prop="name" label="服务器" min-width="120" show-overflow-tooltip fixed sortable />
      <el-table-column label="CPU" prop="cpu" width="100"  sortable>
        <template #default="scope">
          <el-progress
              :text-inside="true"
              :stroke-width="20"
              :percentage="scope.row.cpu"
              :color="colors"
          />
        </template>
      </el-table-column>
      <el-table-column label="内存" prop="memory_used" width="100" >
        <template #default="scope">
          <el-progress
              :text-inside="true"
              :stroke-width="20"
              :percentage="Math.floor(scope.row.memory_used/scope.row.memory_total*100)"
              :color="colors"
          />
        </template>
      </el-table-column>
      <el-table-column label="硬盘" width="100" >
        <template #default="scope">
          <el-progress
              :text-inside="true"
              :stroke-width="20"
              :percentage="Math.floor(scope.row.hdd_used/scope.row.hdd_total*100)"
              :color="colors"
          />
        </template>
      </el-table-column>
      <el-table-column label="SWAP" width="100" >
        <template #default="scope">
          <el-progress
              :text-inside="true"
              :stroke-width="20"
              :percentage="scope.row.swap_total===0?'0':Math.floor(scope.row.swap_used/scope.row.swap_total*100)"
              :color="colors"
          />
        </template>
      </el-table-column>
      <el-table-column prop="load" label="负载" width="80"  sortable/>
      <el-table-column  label="连接" width="90" >
        <template #default="scope">
          <el-tag v-if="scope.row.online4" size="small" type="success">IPV4</el-tag>
          <el-tag v-else-if="scope.row.online6" size="small" type="success">IPV6</el-tag>
          <el-tag v-else size="small" type="success">未连接</el-tag>

        </template>
      </el-table-column>
      <el-table-column  label="网络" width="90" show-overflow-tooltip >
        <template #default="scope">
         {{Math.floor(scope.row.network_rx/1024)}}K/{{Math.floor(scope.row.network_tx/1024)}}K
        </template>
      </el-table-column>
      <el-table-column  label="流量" width="100" show-overflow-tooltip>
        <template #default="scope">
          {{(scope.row.network_in/1024/1024/1024).toFixed(1)}}G/{{(scope.row.network_out/1024/1024/1024).toFixed(1)}}G
        </template>
      </el-table-column>
      <el-table-column prop="location" label="地址" width="170" show-overflow-tooltip  sortable/>
      <el-table-column prop="type" label="类型"  width="80" />
      <el-table-column prop="uptime" label="在线时间"  width="110" sortable/>

    </el-table>
  </div>
</template>

<style scoped>
#title {
  width: max-content;
  position: relative;
  background: linear-gradient(90deg, rgb(255, 206, 99) 0%, rgb(112, 220, 255) 33%, rgb(222, 124, 255) 66%,  rgb(255, 206, 99) 100%);
  background-size: 500% 100%;
  color: transparent;
  animation: gradient-text 30s linear infinite alternate;
  background-clip: text;
}
@keyframes gradient-text {
  0% {
    background-position: 0 ;
  }
  100% {
    background-position: 500% ;
  }
}
:deep .el-progress-bar__inner{
  border-radius: 0;
}

</style>