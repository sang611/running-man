import reqwest from "reqwest";

export default {
    getRanks({commit}, {params}) {
        commit('getRanksStart');
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                ...params,
            },
            type: 'json',
        }).then(data => {
            commit('getRanksSuccess', data)
        })
            .catch((error) => {
                commit('getRanksFail', error)
            })

    },
}
