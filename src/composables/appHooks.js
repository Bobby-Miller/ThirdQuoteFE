import { watch } from 'vue'

const appHooks = (basic, complete, baseIO) => {

    watch(basic, () => {
        if (basic.value) {
          complete.value = false
        }
      })
  
      watch(complete, () => {
        if (complete.value) {
          basic.value = false
        }
      })
        
      watch([complete, basic], () => {
        if (complete.value) {
        baseIO.value.safeDIn = 15
        baseIO.value.safeDOut = 3
        baseIO.value.dIn = 0
        baseIO.value.anaIn = 1
        baseIO.value.anaOut = 1
        baseIO.value.tcIn = 1
        }
        else if (basic.value) {
        baseIO.value.safeDIn = 15
        baseIO.value.safeDOut = 3
        baseIO.value.dIn = 0
        baseIO.value.anaIn = 0
        baseIO.value.anaOut = 0
        baseIO.value.tcIn = 0
        }
        else {
        baseIO.value.safeDIn = 0
        baseIO.value.safeDOut = 0
        baseIO.value.dIn = 0
        baseIO.value.anaIn = 0
        baseIO.value.anaOut = 0
        baseIO.value.tcIn = 0
        }
      })

}

export default appHooks