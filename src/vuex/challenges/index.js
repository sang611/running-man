import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const moduleChallenge = {
    state: () => ({
        challenges: [],
        challenge: {}
    }),
    mutations: mutations,
    actions: actions,
    getters: getters
}

export default moduleChallenge
