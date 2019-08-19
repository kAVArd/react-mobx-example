import { observable, action, autorun, computed } from 'mobx'

const appStore = observable(
  {
    count: 0,
    incCount: () => appStore.count++,
    decCount: () => appStore.count--,
    get countByThree () {
      return this.count * 3
    }
  },
  {
    incCount: action,
    decCount: action,
    countByThree: computed
  })

autorun(() => console.log(appStore.count))

export default appStore
