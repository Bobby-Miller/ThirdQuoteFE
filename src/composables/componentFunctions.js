


const compFunctions = () => {
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
          console.log('here')
        compQty.value.relIn = addComp(compQty.value.relIn, compMax.value.relIn)
      }
  
      const subRelay = () => {
        compQty.value.relIn = subComp(compQty.value.relIn)
      }
  
      const addOutRelay = () => {
        compQty.value.relOut = addComp(compQty.value.relOut, compMax.value.relOut)
      }
  
      const subOutRelay = () => {
        compQty.value.relOut = subComp(compQty.value.relOut)
      }

    return {
        addRelay,
        subRelay,
        addOutRelay,
        subOutRelay,
    }
}

export default compFunctions