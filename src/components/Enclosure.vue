<template>
    <div class="base">
      <img label="enclosure" class="panel" :style="{ 
        top: encl.top + 'px', 
        left: encl.left + 'px', 
        height: encl.height + 'px', 
        width: encl.width + 'px' 
        }" alt="Panel" src="@/assets/enclosure.png">
      
      <img label="hmi_cover"  class="component" v-if="accessories.hmiCover" :style="{ 
        top: hmiCoverLoc.top + 'px',
        left: hmiCoverLoc.left + 'px',
        height: hmiCoverLoc.height + 'px',
        width: hmiCoverLoc.width + 'px'
        }" alt="hmi_cover" src="@/assets/hmi_cover.png">
      
      <img label="hmi"  class="component" v-if="accessories.hmi == '7 inch'" :style="{ 
        top: hmiLoc.top + 'px',
        left: hmiLoc.left + 'px',
        height: hmiLoc.height + 'px',
        width: hmiLoc.width + 'px'
        }" alt="hmi" src="@/assets/pvp_7_inch.png">
      <img label="hmi"  class="component" v-if="accessories.hmi == '12 inch'" :style="{ 
        top: hmiLoc.top + 'px',
        left: hmiLoc.left + 'px',
        height: hmiLoc.height + 'px',
        width: hmiLoc.width + 'px'
        }" alt="hmi" src="@/assets/pvp_12_inch.png">
      <img label="hmi"  class="component" v-if="accessories.hmi == '15 inch'" :style="{ 
        top: hmiLoc.top + 'px',
        left: hmiLoc.left + 'px',
        height: hmiLoc.height + 'px',
        width: hmiLoc.width + 'px'
        }" alt="hmi" src="@/assets/pvp_15_inch.png">

      <img label="graceport"  class="component" v-if="accessories.graceport" :style="{ 
        top: graceportLoc.top + 'px',
        left: graceportLoc.left + 'px',
        height: graceportLoc.height + 'px',
        width: graceportLoc.width + 'px'
        }" alt="graceport" src="@/assets/graceport.png">
      
      <img label="desk"  class="component" v-if="accessories.desk" :style="{ 
        top: deskLoc.top + 'px',
        left: deskLoc.left + 'px',
        height: deskLoc.height + 'px',
        width: deskLoc.width + 'px'
        }" alt="desk" src="@/assets/service_desk.png">
      
      

    </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'
export default {
    name: 'Enclosure',
    props: ['complete', 'accessories'],
    setup(props){
        const encl = ref({top: 0, left: 0, height: 825, width: 450})
        const hmiTop = 140
        const hmiLeft = 170
        const hmiLoc = ref({top: hmiTop, left: hmiLeft, height: 69, width: 82})
        const graceportLoc = ref({top: 400, left: 65, height: 55, width:59})
        const deskLoc = ref({top: 400, left: 140, height: 208, width: 201})
        const hmiCoverLoc = ref({
          top: hmiTop - (216-69)/2, 
          left: hmiLeft - (225-82)/2, 
          height: 216, 
          width: 225
        })

        watch(props.accessories, () =>{ 
          if (props.accessories.hmi == '7 inch') {
            hmiLoc.value.top = hmiTop
            hmiLoc.value.left = hmiLeft
            hmiLoc.value.height = 69
            hmiLoc.value.width = 82
          }
          else if (props.accessories.hmi == '12 inch') {
            hmiLoc.value.top = hmiTop - (117-69)/2
            hmiLoc.value.left = hmiLeft - (140-82)/2
            hmiLoc.value.height = 117
            hmiLoc.value.width = 140
          }
          else if (props.accessories.hmi == '15 inch') {
            hmiLoc.value.top = hmiTop - (146-69)/2
            hmiLoc.value.left = hmiLeft - (175-82)/2
            hmiLoc.value.height = 146
            hmiLoc.value.width = 175
          }
         })

        return{ encl, hmiLoc, graceportLoc, deskLoc, hmiCoverLoc }
    }
}
</script>

<style scoped>

div.base{
  height: 802;
  width: 463;
  top:20;
  left:20;
  position: relative;
}

img.component {
  position: absolute;
}
</style>