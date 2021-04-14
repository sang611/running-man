import Vue from 'vue'
import Vuex from 'vuex'
import moduleChallenge from "./challenges";
import moduleLeaderBoard from "./leader_board";

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        challenge: moduleChallenge,

        leaderBoard: moduleLeaderBoard
    }
})
