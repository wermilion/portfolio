import { enableScroll} from "../../utils/scroll/enableScroll";
import { disableScroll } from "../../utils/scroll/disableScroll";

const mainData = {
  namespaced: true,
  state: {
    modalIsVisible: false
  },
  mutations: {
    changeModalVisibility(state) {
      state.modalIsVisible = !state.modalIsVisible;

      state.modalIsVisible ? disableScroll() : enableScroll()
    }
  }
}
export default mainData
