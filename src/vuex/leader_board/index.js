import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const moduleLeaderBoard = {
    state: () => ({
        ranks: [],
        pagination: {},
        loading: false,
        error: null
    }),
    mutations: mutations,
    actions: actions,
    getters: getters
}

export default moduleLeaderBoard
