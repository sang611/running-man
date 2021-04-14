export default {
    getChallenges({commit}) {
        let challenges = [1,2,3,4];
        commit('getChallenges', challenges)
    },

    getChallengeById({commit}, {id}) {
        let challenge = {
            id,
            name: 'Thử thách chạy vòng quanh Trái Đất'
        };

        commit('getChallengeById', challenge)
    }
}
