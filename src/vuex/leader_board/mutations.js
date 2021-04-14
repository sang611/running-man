export default {
    getRanksStart(state) {
        state.loading = true
    },

    getRanksSuccess(state, data) {

        state.ranks = data.results.map((d, index) => {
            d.key=index;
            d.rank=index+1;
            return d;
        });
        state.loading = false;

        state.pagination.total = 200;

    },

    getRanksFail(state, error) {
        state.loading = false;
        state.error = error;
    },
}
