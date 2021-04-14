export default {
    getChallenges(state, challenges) {
        state.challenges = challenges;
    },

    getChallengeById(state, challenge) {
        state.challenge = challenge;
    }
}
