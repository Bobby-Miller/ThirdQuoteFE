import { ref } from 'vue'

const sourceData = () => {
    const basic = ref(false)
    const complete = ref(false)

    const io = ref({
      safeDIn: 0,
      safeDOut: 0,
      dIn: 0,
      anaIn: 0,
      anaOut: 0,
      tcIn: 0,
    })

    const baseIO = ref({
      safeDIn: 0,
      safeDOut: 0,
      dIn: 0,
      anaIn: 0,
      anaOut: 0,
      tcIn: 0,
    })

    const basicBaseCompQty = ref({
      safeDIn: 3, 
      safeDOut: 1, 
      dIn: 0, 
      tb: 0,
    })

    const baseCompQty = ref({
      relIn: 0, 
      relOut: 0, 
      safeDIn: 0, 
      safeDOut: 0, 
      dIn: 0, 
      tcIn: 0, 
      anaIn: 0, 
      anaOut: 0,
      tb: 0,
      flSwitches: 0
    })

    const compQty = ref({ 
      relIn: 6, 
      relOut: 8, 
      safeDIn: 0, 
      safeDOut: 0, 
      dIn: 0, 
      tcIn: 0, 
      anaIn: 0, 
      anaOut: 0,
      flSwitches: 0 
      })

    const compMax = ref({ 
      relIn: 25, 
      relOut: 16, 
      safeDIn: 5, 
      safeDOut: 2, 
      dIn: 3, 
      tcIn: 5, 
      anaIn: 2, 
      anaOut: 2 
      })

    const termBlock = ref({ 
      firstLimit: 90, 
      secondLimit:180, 
      qty: 0, 
      qtyFirst: 0, 
      qtySecond: 0 
      })

    const burner = ref({
      pilots: false,
      flStrFeedback: 'standard',
      flames: 1,
      highTemps: 1,
    })

    const core = [{basic: ref(false), complete: ref(false)}]

    const airSys = ref({
      recirc: false, 
      exhaust: false, 
      scrubber: false, 
      combFanAux: false, 
      combHighAirPres: false, 
      altCombAir: false, 
      sysFan: false,
      sysFanAux: false, 
      airItlkIn: 0,
      airItlkOut: 0,
      airAnaIn: 0,
      airAnaOut: 0, 
    })

    const flow = ref({
      zones: 1,
      air:false,
      gas: false,
      paraPos: false,
      massFlow: false,
      o2: false,
      recipes: 1,
    })

    const controlSys = ref({
      dIn: 0,
      dOut: 0,
      anaIn: 0,
      anaOut: 0,
    })

    const accessories = ref({
      hmi: '7 inch',
      hmiCover: false,
      graceport: false,
      desk: false,
    })

    const completeHWCost = 14500
    const completeHWSell = 17000
    const basicHWSell = 12800
    
    const basicHRBase = ref({ pm: 12, ee: 40, cad: 40, elect: 0, admin: 8, panel: 40, travel: 0 })
    const basicHRCalc = ref({ pm: 0, ee: 0, cad: 0, elect: 0, admin: 0, panel: 0, travel: 0 })
    const completeHRRate = ref({ pm: 110, ee: 105, cad: 85, elect: 70, admin: 60, panel: 65, travel: 85 })
    const completeHRBase = ref({ pm: 16, ee: 80, cad: 64, elect: 0, admin: 12, panel: 64, travel: 0 })
    const completeHRCalc = ref({ pm: 0, ee: 0, cad: 0, elect: 0, admin: 0, panel: 0, travel: 0 })
    const componentCost = ref({
      tb: 0.58, 
      relIn: 14.53, 
      relOut: 23.89, 
      safeDIn: 568.50, 
      safeDOut: 715.10, 
      dIn: 277.39, 
      tcIn: 493.44, 
      anaIn: 793.20, 
      anaOut: 1350.86,
      flSwitch: 358.33,
      anaFlSwitch: 5253 
     })

     const componentSell = ref({ 
      tb: 0.68,
      relIn: 17.15, 
      relOut: 28.19, 
      safeDIn: 659.80, 
      safeDOut: 829.80, 
      dIn: 324.80, 
      tcIn: 577.80, 
      anaIn: 928.80, 
      anaOut: 1581.80,
      flSwitch: 422.83,
      anaFlSwitch: 6200,
      hmi4Inch: 1000,
      hmi7Inch: 1600,
      hmi12Inch: 3400,
      hmi15Inch: 5500,
      graceport: 400,
      desk: 200,
      hmiCover: 600,
     })

    return { 
        basic,
        complete,
        io,
        baseIO,
        basicBaseCompQty,
        baseCompQty,
        compQty,
        compMax,
        termBlock,
        burner,
        core,
        airSys,
        flow,
        controlSys,
        accessories,
        basicHRBase,
        basicHRCalc,
        completeHWCost,
        completeHWSell,
        basicHWSell,
        completeHRRate,
        completeHRBase,
        completeHRCalc,
        componentCost,
        componentSell,
     }
}

export default sourceData