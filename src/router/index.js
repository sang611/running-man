import Vue from 'vue'
import Router from 'vue-router'
import LeaderBoardPage from "../components/LeaderBoardPage/LeaderBoardPage";
import ChallengePage from "../components/ChallengePage/ChallengePage";
import DetailMissionPage from "../components/DetailMissionPage/DetailMissionPage";
import MemberCreateChallenge from "../components/MemberInfoPage/MemberCreateChallenge";
import MemberInfoPage from "../components/MemberInfoPage/MemberInfoPage";
import MemberManagerChallenge from "../components/MemberInfoPage/MemberManagerChallenge";
import MemberListChallenge from "../components/MemberInfoPage/MemberListChallenge";
import TrainingPlanPage from "../components/TrainingPlanPage/TrainingPlanPage";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import MissionPage from "../components/MissionPage/MissionPage";
import DetailTeamPage from "../components/DetailTeamPage/DetailTeamPage";
import InfoMission from "../components/DetailMissionPage/InfoMission";
import RankMission from "../components/DetailMissionPage/RankMission";
import ListTeamMission from "../components/DetailMissionPage/ListTeamMission";
import LoginPage from "../components/LoginPage/LoginPage";
import SignupPage from "../components/SignupPage/SignupPage";
import MemberCreateGroup from "../components/MemberInfoPage/MemberCreateGroup";
import MemberChangePassword from "../components/MemberInfoPage/MemberChangePassword";
import MemberActivity from "../components/MemberInfoPage/MemberActivity";
import ActivityPage from "../components/ActivityPage/ActivityPage";
import MemberInfoPrivate from "../components/MemberInfoPage/MemberInfoPrivate";
import ActivityMission from "../components/DetailMissionPage/ActivityMission";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/signup',
            component: SignupPage
        },
        {
            path: '/leaderboard',
            name: 'LeaderBoard',
            component: LeaderBoardPage
        },
        {
            path: '/challenge',
            name: 'Challenge',
            component: ChallengePage
        },
        {
            path: '/mission',
            name: 'Mission',
            component: MissionPage
        },
        {
            path: '/challenge/:id',
            name: 'DetailMission',
            component: DetailMissionPage,
            children: [
                {
                    path: 'teams/:teamId',
                    component: DetailTeamPage
                },
                {
                    path: 'information',
                    component: InfoMission,
                    name: "InfoMission"
                },
                {
                    path: 'rank',
                    component: RankMission
                },
                {
                    path: 'teams',
                    component: ListTeamMission
                },
                {
                    path: 'activity',
                    component: ActivityMission
                }
            ]
        },
        {
            path: '/member/info',
            name: 'MemberInfo',
            component: MemberInfoPage,
            children: [
                {
                    path: 'create-challenge',
                    component: MemberCreateChallenge
                },
                {
                    path: 'manager-challenge',
                    component: MemberManagerChallenge,
                    children: [
                        {
                            path: 'list-challenge',
                            component: MemberListChallenge
                        },
                    ]
                },
                {
                    path: 'activity',
                    component: MemberActivity
                },
                {
                    path: 'group/creating',
                    component: MemberCreateGroup
                },
                {
                    path: 'change-password',
                    component: MemberChangePassword
                },
                {
                    path: 'private',
                    name: "MemberInfoPrivate",
                    component: MemberInfoPrivate
                }
            ]
        },
        {
            path: '/plan',
            name: 'TrainingPlan',
            component: TrainingPlanPage
        },
        {
            path: '/profile/:id',
            name: "Profile",
            component: ProfilePage
        },
        {
            path: '/activity/:id',
            name: "Activity",
            component: ActivityPage
        },

    ]
})
