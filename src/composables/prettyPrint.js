import { computed } from 'vue'


const prettyPrint = (
    baseSell,
    extLaborSell,
    extHWSell,
    adderSell,
    hmiSellExtra,
    hmiCoverSellExtra,
    graceportSellExtra, 
    deskSellExtra,
    accessoriesSellExtra,
    totalSell,
) => {
    var numeral = require("numeral")

    const prettyBaseSell = computed(()=> {
      return numeral(baseSell.value).format('($0,0)')
    })

    const prettyLaborSell = computed(() => {
      return numeral(extLaborSell.value).format('($0,0)')
    })

    const prettyHWSell = computed(() => {
      return numeral(extHWSell.value).format('($0,0)')
    })

    const prettyAdderSell = computed(() => {
      return numeral(adderSell.value).format('($0,0)')
    })

    const prettyHMISell = computed(()=> {
      return numeral(hmiSellExtra.value).format('($0,0)')
    })
    const prettyHMICoverSell = computed(()=> {
      return numeral(hmiCoverSellExtra.value).format('($0,0)')
    })
    const prettyGraceportSell = computed(()=> {
      return numeral(graceportSellExtra.value).format('($0,0)')
    })
    const prettyDeskSell = computed(()=> {
      return numeral(deskSellExtra.value).format('($0,0)')
    })
    const prettyAccSell = computed(()=> {
      return numeral(accessoriesSellExtra.value).format('($0,0)')
    })

    const prettyTotalSell = computed(() => {
      return numeral(totalSell.value).format('($0,0)')
    })

    return {
        prettyBaseSell,
        prettyLaborSell,
        prettyHWSell,
        prettyAdderSell,
        prettyHMISell,
        prettyHMICoverSell,
        prettyGraceportSell,
        prettyDeskSell,
        prettyAccSell,
        prettyTotalSell,       
    }
}
export default prettyPrint