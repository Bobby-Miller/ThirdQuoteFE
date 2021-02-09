import { computed } from 'vue'
import sourceData from './sourceData'

const componentComps = (basic, complete, io, baseIO, baseCompQty, burner, airSys, flow, controlSys, compQty, termBlock) => {
  
    //          //
    // IO CALCS //
    //          //
    // One for each air path limit
    const numLimitsAltAir = 2
    // 1 for valve feedback, 1 for ignition feedback
    const flameInputMult = 2
    // 1 for pilot valve feedback
    const pilotFlameInputMult = 1
    const baseFlameInputs = 1
    io.value.safeDIn = computed(() => { 
      return (baseIO.value.safeDIn +
      airSys.value.recirc +
      airSys.value.exhaust +
      airSys.value.scrubber +
      airSys.value.combHighAirPres +
      airSys.value.altCombAir * numLimitsAltAir +
      airSys.value.sysFan +
      airSys.value.airItlkIn +
      (burner.value.flames * (flameInputMult + pilotFlameInputMult * burner.value.pilots) - baseFlameInputs) +
      burner.value.highTemps +
      airSys.value.airItlkIn) * (basic.value + complete.value)
      })

    io.value.safeDOut = computed(() => { 
      return (baseIO.value.safeDOut +
      airSys.value.combFanAux +
      airSys.value.sysFanAux +
      airSys.value.airItlkOut +
      burner.value.flames + 
      burner.value.pilots) * (basic.value + complete.value)
      })
    
    io.value.anaIn = computed(() => {
      return ((flow.value.air + flow.value.gas) * flow.value.zones +
      airSys.value.airAnaIn + controlSys.value.anaIn + 
      baseIO.value.anaIn) * complete.value 
    })

    io.value.anaOut = computed(() => {
      return ((flow.value.air + flow.value.gas) * flow.value.zones +
      airSys.value.airAnaOut + controlSys.value.anaOut + 
      baseIO.value.anaOut) * complete.value
    })


    io.value.dIn = computed(() => {
      return controlSys.value.dIn
    })

    io.value.dIn = computed(() => {
      return controlSys.value.dOut
    })

    //                 //
    // Component Calcs //
    //                 //  

    // Base Components //
    baseCompQty.value.safeDIn = computed(() => {return Math.ceil((baseIO.value.safeDIn + flameInputMult)/8)})
    baseCompQty.value.safeDOut = computed(() => {return Math.ceil(baseIO.value.safeDOut/8)})
    baseCompQty.value.anaIn = computed(() => {return 0})
    baseCompQty.value.anaOut = computed(() => {return 1})
    baseCompQty.value.tcIn = computed(() => {return 1})
    baseCompQty.value.dIn = computed(() => {return 0})
    baseCompQty.value.relIn = computed(() => {return (baseCompQty.value.safeDIn - 1) * 8})
    baseCompQty.value.relOut = computed(() => {return baseCompQty.value.safeDOut * 8})
    baseCompQty.value.tb = computed(() => {return (baseCompQty.value.safeDIn - 1) * 16 +
                                                   baseCompQty.value.safeDOut * 16 +
                                                   baseCompQty.value.anaIn * 24 +
                                                   baseCompQty.value.anaOut * 24 +
                                                   baseCompQty.value.dIn * 16 
    })
    baseCompQty.value.flSwitches = computed(() => {return 1})
    
    // Total Components //
    compQty.value.safeDIn = computed(() => {return Math.ceil(io.value.safeDIn/8)})
    compQty.value.safeDOut = computed(() => {return Math.ceil(io.value.safeDOut/8)})

    compQty.value.anaIn = computed(() => {
      if (io.value.anaIn + io.value.tcIn <= 4) {
        return 0
      }
      else
      {
        return Math.ceil(io.value.anaIn / 8)
      }
    })

    compQty.value.anaOut = computed(() => {
        return Math.ceil(io.value.anaOut / 8)})

    compQty.value.tcIn = computed(() =>{
      if (io.value.anaIn + io.value.tcIn == 0) {
        return 0
      }
      else if (io.value.anaIn + io.value.tcIn <= 4) {
        return 1
      }
      else {
        return Math.ceil(io.value.tcIn/4)
      }
    })

    compQty.value.dIn = computed( () => {
      return Math.ceil(io.value.dIn/16)
    })

    termBlock.value.qty = computed(() => {
      return ((compQty.value.safeDIn - 1) * 16 +
      compQty.value.safeDOut * 16 +
      compQty.value.anaIn * 24 +
      compQty.value.anaOut * 24 +
      compQty.value.dIn * 16) * (basic.value + complete.value) 
    })

    termBlock.value.qtyFirst = computed(() =>{
      if (termBlock.value.qty <= termBlock.value.firstLimit) {
        return termBlock.value.qty
      }
      else
      {
        return termBlock.value.firstLimit
      }
    })

    termBlock.value.qtySecond = computed(() =>{
      if (termBlock.value.qty > termBlock.value.firstLimit && termBlock.value.qty <= termBlock.value.secondLimit) {
        return termBlock.value.qty - termBlock.value.firstLimit
      }
      else if (termBlock.value.qty <= termBlock.value.firstLimit)
      {
        return 0
      }
      else
      {
        return termBlock.value.secondLimit - termBlock.value.firstLimit
      }
    })

    compQty.value.relIn = computed(() => {
      if (compQty.value.safeDIn > 0) {
        return (compQty.value.safeDIn - 1) * 8 +
               compQty.value.dIn * 8
      }
      else {
        compQty.value.dIn * 8
      }
    })

    compQty.value.relOut = computed(() => {
      return compQty.value.safeDOut * 8
    })   

    compQty.value.flSwitches = computed(() => {
      return burner.value.flames
    })

    return {

    }

}

export default componentComps