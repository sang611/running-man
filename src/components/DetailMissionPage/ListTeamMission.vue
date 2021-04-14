<template>
  <div id="list-team-wrapper">
    <br>
    <a-row>
      <a-col >
        <a-list item-layout="horizontal" :data-source="teams" bordered>
          <a-list-item slot="renderItem" slot-scope="item, index" v-bind:key="index" @click="$router.push('/mission/1/teams/234')">
            <a-list-item-meta
                :description="`Đã có ${item.members} người`"
            >
              <b slot="title">{{ item.name }}</b>
              <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>

  </div>
</template>

<script>
export default {
  name: "ListTeamMission",
  data: function () {
    return {
      teams: [
        {
          name: "Passionate - Khát khao",
          members: 5
        },
        {
          name: "Passionate - Khát khao",
          members: 5
        },
        {
          name: "Passionate - Khát khao",
          members: 5
        }
      ]
    }
  }
}
</script>

<style scoped>


</style>
