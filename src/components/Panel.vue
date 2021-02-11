<template>
  <div class="base">
    <img v-if="complete" label="Backplane" class="panel" :style="{ 
      top: bp.top + 'px', 
      left: bp.left + 'px', 
      height: bp.height + 'px', 
      width: bp.width + 'px' 
      }" alt="Panel" src="@/assets/backplane.png">
    
    <img v-if="basic" label="Backplane" class="panel" :style="{ 
      top: bp.top + 'px', 
      left: bp.left + 'px', 
      height: bp.height + 'px', 
      width: bp.width + 'px' 
      }" alt="Panel" src="@/assets/backplane_basic.png">

    <div v-if="compQty.relIn > 0 && complete">
      <img label="Relay Generator" v-for="n in compQty.relIn" :key="n" class="panel" :style="{ 
        top: relIn.top + n*relIn.height + 'px',
        left: relIn.left + 'px',
        height: relIn.height + 'px',
        width: relIn.width + 'px'
        }" alt="Relay" src="@/assets/relay.png">

      <img label="Relay Opening Endcap" class="panel" :style="{ 
        top: relIn.top + 12 + 'px', 
        left: relIn.left + 3 + 'px', 
        height: endcap.height + 'px', 
        width: endcap.width + 'px' 
        }" alt="Panel" src="@/assets/top_end_cap.png">

      <img label="Relay Closing Endcap" class="panel" :style="{ 
        top: relIn.top + 17 + compQty.relIn*relIn.height + 'px', 
        left: relIn.left + 3 + 'px', 
        height: endcap.height + 'px', 
        width: endcap.width + 'px' 
        }" alt="Panel" src="@/assets/bot_end_cap.png">
    </div>

    <div v-if="compQty.relOut > 0 && complete">
      <img label="Out Relay Generator" v-for="n in compQty.relOut" :key="n" class="panel" :style="{ 
        top: relOut.top + 'px',
        left: relOut.left + n*relOut.width + 'px',
        height: relOut.height + 'px',
        width: relOut.width + 'px'
        }" alt="Relay" src="@/assets/relay_out.png">

      <img label="Relay Opening Endcap" class="panel" :style="{ 
        top: relOut.top + 5 + 'px', 
        left: relOut.left + 4 + 'px', 
        height: endcap.width + 'px', 
        width: endcap.height + 'px' 
        }" alt="Panel" src="@/assets/top_end_cap_vert.png">

      <img label="Relay Closing Endcap" class="panel" :style="{ 
        top: relOut.top + 5 + 'px', 
        left: relOut.left + 9 + compQty.relOut*relOut.width + 'px', 
        height: endcap.width + 'px', 
        width: endcap.height + 'px' 
        }" alt="Panel" src="@/assets/bot_end_cap_vert.png">
    </div>

    <div v-if="termBlock.qtyFirst > 0">
      <img label="TB Generator" v-for="n in termBlock.qtyFirst" :key="n" class="panel" :style="{ 
        top: tbFirst.top + 'px',
        left: tbFirst.left + n*tbFirst.width + 'px',
        height: tbFirst.height + 'px',
        width: tbFirst.width + 'px'
        }" alt="TB" src="@/assets/top_end_cap_vert.png">

      <img label="TB Closing Line" class="panel" :style="{ 
        top: tbFirst.top + 'px',
        left: tbFirst.left + (termBlock.qtyFirst + 1)*tbFirst.width + 'px',
        height: tbFirst.height + 'px',
        width: 1 + 'px'
        }" alt="Panel" src="@/assets/tb_end.png">

      <img label="TB Opening Endcap" class="panel" :style="{ 
        top: tbFirst.top + 1 + 'px', 
        left: tbFirst.left - 2 + 'px', 
        height: endcap.width + 'px', 
        width: endcap.height + 'px' 
        }" alt="End Cap" src="@/assets/top_end_cap_vert.png">

      <img label = "TB Closing Endcap" class="panel" :style="{ 
        top: tbFirst.top + 1 + 'px', 
        left: tbFirst.left + 3 + termBlock.qtyFirst*tbFirst.width + 'px', 
        height: endcap.width + 'px', 
        width: endcap.height + 'px' 
        }" alt="End Cap" src="@/assets/bot_end_cap_vert.png">
    </div>

    <div v-if="termBlock.qtySecond > 0  && complete">
      <img label="TB Generator" v-for="n in termBlock.qtySecond" :key="n"  class="panel" :style="{ 
        top: tbSecond.top + 'px',
        left: tbFirst.left + n*tbFirst.width + 'px',
        height: tbFirst.height + 'px',
        width: tbFirst.width + 'px'
        }" alt="TB" src="@/assets/top_end_cap_vert.png">

      <img label="TB Closing Line" class="panel" :style="{ 
        top: tbSecond.top + 'px',
        left: tbFirst.left + (termBlock.qtySecond + 1)*tbFirst.width + 'px',
        height: tbFirst.height + 'px',
        width: 1 + 'px'
        }" alt="Panel" src="@/assets/tb_end.png">

      <img label="TB Opening Endcap" class="panel" :style="{ 
        top: tbSecond.top + 1 + 'px', 
        left: tbFirst.left - 2 + 'px',  
        height: endcap.width + 'px', 
        width: endcap.height + 'px' 
        }" alt="End Cap" src="@/assets/top_end_cap_vert.png">

      <img label = "TB Closing Endcap" class="panel" :style="{ 
        top: tbSecond.top + 1 + 'px', 
        left: tbFirst.left + 3 + termBlock.qtySecond*tbFirst.width + 'px', 
        height: endcap.width + 'px', 
        width: endcap.height + 'px' 
        }" alt="End Cap" src="@/assets/bot_end_cap_vert.png">
    </div>

    <img label = "SDI Cards" class="panel" v-for="n in compQty.safeDIn" :key="n" :style="{ 
      top: card.top + 'px', 
      left: card.left + n*card.singleWidth + 'px', 
      height: card.height + 'px', 
      width: card.singleWidth + 'px' 
      }" alt="End Cap" src="@/assets/Single_Card.png">
    
    <img label = "SDO Cards" class="panel" v-for="n in compQty.safeDOut" :key="n" :style="{ 
      top: card.top + 'px', 
      left: card.left + compQty.safeDIn*card.singleWidth + n*card.doubleWidth - 7 + 'px', 
      height: card.height + 'px', 
      width: card.doubleWidth + 'px' 
      }" alt="End Cap" src="@/assets/double_card.png">
    
    <img label = "DI ETC Cards" class="panel" v-for="n in (compQty.dIn + compQty.tcIn + compQty.anaIn + compQty.anaOut)" :key="n" :style="{ 
      top: card.top + 'px', 
      left: card.left + (compQty.safeDIn*card.singleWidth) + (compQty.safeDOut*card.doubleWidth) + (n*card.singleWidth) + 'px', 
      height: card.height + 'px', 
      width: card.singleWidth + 'px' 
      }" alt="End Cap" src="@/assets/Single_Card.png">
    
    <div v-if="burner.flStrFeedback=='standard' && complete">
      <img label="Flame Switch Generator" v-for="n in burner.flames" :key="n" class="panel" :style="{ 
          top: flSwitch.top  + 'px',
          left: flSwitch.left + n*flSwitch.width + 'px',
          height: flSwitch.height + 'px',
          width: flSwitch.width + 'px'
          }" alt="FlSwitch" src="@/assets/flame_switch.png">
    </div>

    <div v-if="burner.flStrFeedback=='feedback' && complete">
      <img label="Flame Switch Generator" v-for="n in burner.flames" :key="n" class="panel" :style="{ 
          top: anaFlSwitch.top  + 'px',
          left: anaFlSwitch.left + n*anaFlSwitch.width + 'px',
          height: anaFlSwitch.height + 'px',
          width: anaFlSwitch.width + 'px'
          }" alt="FlSwitch" src="@/assets/flame_switch_analog.png">
    </div>
  
  </div>

</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Panel',
  props: ['basic', 'burner', 'complete', 'compQty', 'termBlock'],
  setup(props){
    // backplane pixel vars
    const bp = ref({top: 0, left: 0, height: 802, width: 463})

    // Relay Pixel Vars
    const relIn = ref({top: 340, left: 70, width: 40, height: 17})

    const relOut = ref({top: 705, left: 175, width: 9, height: 46})

    // Terminal Block Pixel Vars
    const tbFirst = ref({top: 78, left: 60, width: 3, height: 33})

    const tbSecond = ref({top: 192})

    // PLC Card Pixel Vars
    const card = ref({top: 314, left: 228, height: 79, singleWidth: 13, doubleWidth: 20})

    // Endcap Pixel Vars
    const endcap = ref({width: 31, height: 5})

    // Flame Switch Pixel Vars
    const flSwitch = ref({top: 564, left: 110, width: 70, height: 70})

    const anaFlSwitch = ref({top: 560, left: 140, width: 42, height: 88})
    
    const resizeFactor = ref(1)

    const basicOrComp = (basic, complete, valBasic, valComplete) => {
          if (basic) {
            return valBasic
          } else if (complete) {
            return valComplete
          }
        }
    
    bp.value.height = computed(()=>{
      if (props.basic) {
        return 463
      } else if (props.complete) {
        return 802
      }
    })

    tbFirst.value.top = computed(()=>{
      if (props.basic) {
        return 28
      } else if (props.complete) {
        return 78
      }
    })

    tbFirst.value.left = computed(()=>{
      if (props.basic) {
        return 20
      } else if (props.complete) {
        return 60
      }
    })
    
    card.value.top = computed(()=>{
      if (props.basic) {
        return 119
      } else if (props.complete) {
        return 314
      }
    })

    card.value.left = computed(()=>{
      if (props.basic) {
        return 102
      } else if (props.complete) {
        return 228
      }
    })

    const resize = (original, factor) => {
      return original*factor
    }

    return { bp, relIn, relOut, tbFirst, tbSecond, card, endcap, flSwitch, anaFlSwitch, resizeFactor, resize }
  },
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.base{
  height: 802;
  width: 463;
  top:20;
  left:20;
  position: relative;
}

img.panel {
  position: absolute;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
