import { computed, ref, watchEffect } from 'vue'

const costCalcs = (basic, complete, accessories, compQty, baseCompQty, termBlock, burner, flow, completeHWSell, completeHRRate, completeHRBase, completeHRCalc, componentSell) => {

    const roundValue = 100
    const totalCards = computed(() => {
        return compQty.value.safeDIn + compQty.value.safeDOut +
        compQty.value.dIn + compQty.value.tcIn + compQty.value.anaIn +
        compQty.value.anaOut
      })
      const baseCards = 6
      
      const baseLabor = 
        (completeHRRate.value.pm * completeHRBase.value.pm +
         completeHRRate.value.ee * completeHRBase.value.ee +
         completeHRRate.value.cad * completeHRBase.value.cad +
         completeHRRate.value.elect * completeHRBase.value.elect +
         completeHRRate.value.admin * completeHRBase.value.admin +
         completeHRRate.value.panel * completeHRBase.value.panel +
         completeHRRate.value.travel * completeHRBase.value.travel)
      
      completeHRCalc.value.ee = computed(() => { 
        return ((totalCards.value - baseCards) * 4 + 
        (burner.value.flames + flow.value.zones - 2) * 4) * complete.value
      })
  
  
      completeHRCalc.value.cad = computed(() => { 
        return ((totalCards.value - baseCards) * 4 + 
        (burner.value.flames + flow.value.zones - 2) * 4) * complete.value
      })

      const baseSell = computed(() => {
        const calc = ref(0)
        calc.value = 0
        if (basic.value) {
          calc.value = 17000
        }
        else if (complete.value) {
          calc.value = baseLabor + completeHWSell
        }
        return Math.ceil(calc.value/roundValue)*roundValue
      })
      
      const extLaborSell = computed(() => {
        const calc = ref(0)
        calc.value = (completeHRCalc.value.pm * completeHRRate.value.pm +
          completeHRCalc.value.ee * completeHRRate.value.ee +
          completeHRCalc.value.cad * completeHRRate.value.cad +
          completeHRCalc.value.elect * completeHRRate.value.elect +
          completeHRCalc.value.admin * completeHRRate.value.admin +
          completeHRCalc.value.panel * completeHRRate.value.panel +
          completeHRCalc.value.travel * completeHRRate.value.travel)
        return Math.ceil(calc.value/roundValue)*roundValue
      })
         
      const flSwitchSellExtra = computed(()=> {
        if (burner.value.flStrFeedback == 'feedback') {
          return componentSell.value.anaFlSwitch * compQty.value.flSwitches - componentSell.value.flSwitch
        } else {
          return componentSell.value.flSwitch * compQty.value.flSwitches - componentSell.value.flSwitch
        }
      })

      const extHWSell = computed(() => { 
        const calc = ref(0)
        calc.value = (componentSell.value.tb * (termBlock.value.qty - baseCompQty.value.tb) +
        componentSell.value.relIn * (compQty.value.relIn - baseCompQty.value.relIn) +
        componentSell.value.relOut * (compQty.value.relOut  - baseCompQty.value.relOut) + 
        componentSell.value.safeDIn * (compQty.value.safeDIn - baseCompQty.value.safeDIn) + 
        componentSell.value.safeDOut * (compQty.value.safeDOut - baseCompQty.value.safeDOut) +
        componentSell.value.dIn * (compQty.value.dIn - baseCompQty.value.dIn) + 
        componentSell.value.tcIn * (compQty.value.tcIn - baseCompQty.value.tcIn) +  
        componentSell.value.anaIn * (compQty.value.anaIn - baseCompQty.value.anaIn) + 
        componentSell.value.anaOut * (compQty.value.anaOut - baseCompQty.value.anaOut) +
        flSwitchSellExtra.value) * complete.value

        return Math.ceil(calc.value/roundValue)*roundValue
      })

      const adderSell = computed(() => {
        return extLaborSell.value + extHWSell.value
      })

      const hmiSellExtra = computed(()=> {
        if (accessories.value.hmi == '7 inch') {
          return 0
        } else if (accessories.value.hmi == '12 inch') {
          return componentSell.value.hmi12Inch - componentSell.value.hmi7Inch
        } else if (accessories.value.hmi == '15 inch') {
          return componentSell.value.hmi15Inch - componentSell.value.hmi7Inch
        }
      })
      
      const graceportSellExtra = computed(() => {
        if (accessories.value.graceport) {
          return componentSell.value.graceport
        } else {
          return 0
        }
      })
      
      const deskSellExtra = computed(() => {
        if (accessories.value.desk) {
          return componentSell.value.desk
        } else {
          return 0
        }
      })

      const hmiCoverSellExtra = computed(() => {
        if (accessories.value.hmiCover) {
          return componentSell.value.hmiCover
        } else {
          return 0
        }
      })

      const accessoriesSellExtra = computed(() => {
        return graceportSellExtra.value + 
        deskSellExtra.value + 
        hmiCoverSellExtra.value +
        hmiSellExtra.value
      })

      const totalSell = computed(() => {
        return baseSell.value + adderSell.value + accessoriesSellExtra.value
      })

    return {
        extLaborSell,
        baseSell,
        extHWSell,
        adderSell,
        hmiSellExtra,
        hmiCoverSellExtra,
        graceportSellExtra,
        deskSellExtra,
        accessoriesSellExtra,
        totalSell,
    }
}

export default costCalcs