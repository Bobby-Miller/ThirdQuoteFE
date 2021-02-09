<template>
    <button v-on:click="addTB">test</button>
</template>

<script>

import { ref, computed } from 'vue'

export default {
    name: 'Calculations',
    props: [ 
      'compQty',
      'compMax',
      'termBlock',
      'burner',
      'basic',
      'complete',
      'airSys',
      'flow',
      'controlSys',
     ],
    setup(props, { emit }) {

      const cost = ref({
        basic: 17000,
        complete: 29000,

      })

      const addComp = (component, max, number = 1) => {
        if (component + number < max) {
          component += number
        } 
        else {
          component = max
        }
        return component
      }

      const subComp = (component, min = 0, number = 1) => {
        if (component - number >= min) {
          component -= number
        } 
        else {
          component = min
        }
        return component
      }

      const addRelay = () => {
        props.compQty.relIn = addComp(props.compQty.relIn, props.compMax.relIn)
      }

      const subRelay = () => {
        props.compQty.relIn = subComp(props.compQty.relIn)
      }

      const addOutRelay = () => {
        props.compQty.relOut = addComp(props.compQty.relOut, props.compMax.relOut)
      }

      const subOutRelay = () => {
        props.compQty.relOut = subComp(props.compQty.relOut)
      }

      const distTB = () => {
        if (props.termBlock.qty <= props.termBlock.firstLimit) {
          props.termBlock.qtyFirst = props.termBlock.qty
        }
        else
        {
          props.termBlock.qtyFirst = props.termBlock.firstLimit
        }
        if (props.termBlock.qty > props.termBlock.firstLimit && props.termBlock.qty <= props.termBlock.secondLimit) {
          props.termBlock.qtySecond = props.termBlock.qty - props.termBlock.firstLimit
        }
        else if (props.termBlock.qty <= props.termBlock.firstLimit)
        {
          props.termBlock.qtySecond = 0
        }
        else
        {
          props.termBlock.qtySecond = props.termBlock.secondLimit - props.termBlock.firstLimit
        }
      }

      const addTB = () => {
        props.termBlock.qty = addComp(props.termBlock.qty, props.termBlock.secondLimit)
        distTB()
      }

      const subTB = () => {
        props.termBlock.qty = subComp(props.termBlock.qty)
        distTB()
      }

      const baseCost = computed(() => {
        if (props.basic) {
          return cost.value.basic
        }
        return cost.value.complete
      })

      const logVal = computed(() => {
        console.log(baseCost)
      })

      // Computed Functions

    return {addTB, subTB}

    }
}
</script>