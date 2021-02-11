<template>
  
  <div id="grid">
    <div class="panel">
      <div :style="{height: panelHeight+'px', top: '0px', margin: '0px 0px 100px', position: 'sticky'}" v-if="complete || basic" >
      <Panel :basic="basic" :complete="complete" :burner="burner" :compQty="compQty" :termBlock="termBlock" />
      </div>
      <div style="top: 0px" v-if="complete || basic">
      <Enclosure :basic="basic" :complete="complete" :accessories="accessories"/>
      </div>
    </div>

    <div class = "panel">
      <h1>Options</h1>
      <div id="subgrid">
        <div>
          <h2>Burner System Selection</h2>
          <it-switch v-model="basic" label="Basic" />
          <p>$24,800</p>
          <it-switch v-model="complete" label="Complete" />
          <p>$37,500</p>
          
        </div>
        
        <div v-if="complete">
          <h2>Burner System Details</h2>
          <h4>Number of Flames</h4>
          <it-number-input v-model="burner.flames" labelTop="Flames" resize-on-write :min="1" :max="2" />
          <h4>Number of High Temperature Zones</h4>
          <it-number-input v-model="burner.highTemps" labelTop="Zones" resize-on-write :min="1" :max="4" />
          <h4> Pilots </h4>
          <it-switch v-model="burner.pilots" label="Pilots" />
          <h4>Flame Signal Feedback to PLC</h4>
          <it-toggle
            style="width: 100%"
            v-model="burner.flStrFeedback"
            :options="['standard', 'feedback']"
          />
        </div>

        <div v-if="basic || complete">
          <h2>Air System Interlocks</h2>
          <it-switch v-model="airSys.recirc" label="Recirculation" />
          <it-switch v-model="airSys.exhaust" label="Exhaust Damper" />
          <it-switch v-model="airSys.scrubber" label="Scrubber Damper" />
          <it-switch v-model="airSys.combFanAux" label="Combustion Air Fan Control" />
          <it-switch v-model="airSys.combHighAirPres" label="Combustion Air High Pressure" />
          <it-switch v-model="airSys.altCombAir" label="Alternate Combustion Air Path" />
          <it-switch v-model="airSys.sysFan" label="System Air Fan Interlock" />
          <it-switch v-model="airSys.sysFanAux" label="System Air Fan Control" />
          <it-number-input v-model="airSys.airItlkIn" labelTop="Additional Air Interlock Inputs" resize-on-write :min="0" :max="4"/>
          <it-number-input v-model="airSys.airItlkOut" labelTop="Additional Air Interlock Discreet Outputs" resize-on-write :min="0" :max="4"/>
          <it-number-input v-if="complete" v-model="airSys.airAnaIn" labelTop="Additional Air Interlock Analog Inputs" resize-on-write :min="0" :max="4"/>
          <it-number-input v-if="complete" v-model="airSys.airAnaOut" labelTop="Additional Air Interlock Analog Outputs" resize-on-write :min="0" :max="4"/>
        </div>

        <div v-if="complete">
          <h2>Flow Control Options</h2>
          <it-number-input v-model="flow.zones" labelTop="Control Zones" resize-on-write :min="1" :max="4"/>
          <it-switch v-model="flow.air" label="Air Flow" />
          <it-switch v-model="flow.gas" label="Gas Flow" />
          <it-switch v-model="flow.paraPos" label="Parallel Positioning Control" />
          <it-switch v-model="flow.massFlow" label="Mass Flow Control" />
          <it-switch v-model="flow.o2" label="O2 Control" />
          <it-number-input v-model="flow.recipes" labelTop="Number of ramp recipes" resize-on-write :min="0" :max="4"/>
        </div>

        <div v-if="complete">
          <h2>Custom Control Points</h2>
          <it-number-input v-model="controlSys.dIn" labelTop="Additional Control Discreet Inputs" resize-on-write :min="0" :max="8"/>
          <it-number-input v-model="controlSys.dOut" labelTop="Additional Control Discreet Outputs" resize-on-write :min="0" :max="8"/>
          <it-number-input v-if="complete" v-model="controlSys.AnaIn" labelTop="Additional Control Analog Inputs" resize-on-write :min="0" :max="4"/>
          <it-number-input v-if="complete" v-model="controlSys.AnaOut" labelTop="Additional Control Analog Outputs" resize-on-write :min="0" :max="4"/>
        </div>

        <div v-if="basic || complete">
          <h2>Enclosure Accessories</h2>
          <h4>PanelView Size</h4>
          <it-toggle v-if="complete"
            style="width: 100%"
            v-model="accessories.hmi"
            :options="['7 inch', '12 inch', '15 inch']"
          />
          <it-toggle v-if="basic"
            style="width: 100%"
            v-model="accessories.hmi"
            :options="['4 inch', '7 inch']"
          />
          <it-switch v-model="accessories.hmiCover" label="Environmental HMI Cover" />
          <it-switch v-model="accessories.graceport" label="Graceport Outlet" />
          <it-switch v-if="complete" v-model="accessories.desk" label="Technician's Desk" />          
        </div>
        
      </div> 
    </div>

    <div v-if="basic || complete" >
        <div style="position: sticky; top: 0">
          <h1>Pricing</h1>
          <h4>Base Price: {{ prettyBaseSell }}</h4>
          <div v-if="adderSell > 0">
            <h3>Burner Additions:</h3>
            <p v-if="extLaborSell">Extended Labor Price: {{ prettyLaborSell }}</p>
            <p v-if="extHWSell">Extended Hardware Price: {{ prettyHWSell }}</p>
            <h4>Addition Subtotal: {{ prettyAdderSell }}</h4>
          </div>
          <div v-if="accessoriesSellExtra > 0">
            <h3>Accessories:</h3>
            <p v-if="hmiSellExtra">HMI Size Option: {{ prettyHMISell }}</p>
            <p v-if="hmiCoverSellExtra">HMI Cover Option: {{ prettyHMICoverSell }}</p>
            <p v-if="graceportSellExtra">Graceport Option: {{ prettyGraceportSell }}</p>
            <p v-if="deskSellExtra">Workstation Option: {{ prettyDeskSell }}</p>
            <h4>Accessory Subtotal: {{ prettyAccSell }}</h4>
          </div>
          <div v-if="totalSell > 0">
            <h3>Burner Total: {{ prettyTotalSell }}</h3>
          </div>
          


          <div v-if="false">
            <h4>Cards:</h4>
            <h5>Safety Input: {{ compQty.safeDIn }}</h5>
            <h5>Discreet Input: {{ compQty.dIn }}</h5>
            <h5>Safety Output: {{ compQty.safeDOut }}</h5>
            <h5>Analog Input: {{ compQty.anaIn }}</h5>
            <h5>TC Input: {{ compQty.tcIn }}</h5>
            <h5>Analog Output: {{ compQty.anaOut }}</h5>

            <h4>Components</h4>
            <h5>Terminal Blocks: {{ termBlock.qty }}</h5>
        </div>  
      </div>
    </div>

    
  </div>
</template>

<script>
import Panel from './components/Panel.vue'
import Enclosure from './components/Enclosure.vue'
import Calculations from './components/Calculations'
import sourceData from './composables/sourceData'
import appHooks from './composables/appHooks'
import componentComps from './composables/componentComputations'
import costCalcs from './composables/costCalculations'
import prettyPrint from './composables/prettyPrint'
import { computed, watch, watchEffect } from 'vue'

export default {
  
  name: 'App',
  components: {
    Panel,
    Enclosure,
    Calculations,
  },

  setup() {
    
    //             //
    // Source Data //
    //             //
    const {
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
    } = sourceData()

    //             //
    //    Hooks    //
    //             //
    appHooks(basic, complete, baseIO)

    //                        //
    // Component Computations //
    //                        //
    componentComps(basic, complete, io, baseIO, baseCompQty, burner, airSys, flow, controlSys, compQty, termBlock)
    

    //               //
    //   Cost Calcs  //
    //               //
    const {
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
    } = costCalcs(
      basic, 
      complete, 
      accessories, 
      compQty, 
      basicBaseCompQty,
      baseCompQty, 
      termBlock, 
      burner, 
      flow,
      basicHRBase, 
      completeHWSell, 
      basicHWSell,
      basicHRCalc,
      completeHRRate, 
      completeHRBase, 
      completeHRCalc, 
      componentSell,
    )
    
    //                    //
    // Format for Display //
    //                    //
    const {
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
    } = prettyPrint(
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
    )
    const panelHeight = computed(()=>{if(basic.value){return 800}else if(complete.value){return 1600}})
    termBlock.value.firstLimit = computed(()=>{if(basic.value){return 120}else if(complete.value){return 90}})
    watch([basic, complete], ()=>{
      if(basic.value){
        accessories.value.hmi = '4 inch'
      }else if (complete.value){
        accessories.value.hmi = '7 inch'
      }
    })


    return { 
      compQty, compMax, termBlock, burner, airSys, flow, controlSys, 
      accessories, basic, complete, baseSell, extLaborSell, extHWSell,
      adderSell, totalSell, accessoriesSellExtra, panelHeight, 
      hmiSellExtra, hmiCoverSellExtra, graceportSellExtra, deskSellExtra,
      prettyBaseSell, prettyLaborSell, prettyHWSell, prettyAdderSell, prettyHMISell,
      prettyHMICoverSell, prettyGraceportSell, prettyDeskSell, prettyAccSell, prettyTotalSell,
     }

  },
}
</script>




<style lang="less">
#grid {
  display: grid;
  grid-template-columns: 530px 2fr 1fr;
}

#grid > div {
  
}

#grid > div.panel {
  align-items: start;
}

#grid > div > * {
  margin: 5px;
}


#subgrid {
  display: grid;
  grid-template-columns: minmax(500px,700px);
}

#subgrid > div {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  margin: 0px;
  border: 1px solid #d3dae6;
  border-radius: 0px;
  box-sizing: border-box;
  transition: 0.17s all ease-in-out;

  &:hover {
    border: 1px solid #fff;
    box-shadow: 0 0 0 1px rgba(50, 50, 93, 0.05),
      0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
  }
}

#subgrid > div.panel {
  height: 850px;
  align-items: start;
}

#subgrid > div > * {
  margin: 5px;
}

</style>
