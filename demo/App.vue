<template>
    <div>
        <div class="banner softcan-bg-blue" v-show="false">
            <h1>SoftcanUI</h1>
            <p>SoftcanUI为建发房产轻应用使用的一套基础样式库，便于第三方开发以及统一用户体验。</p>
        </div>

        <div class="softcan-menu" v-for="group in nav">
            <div class="groupTitle">{{group.title.main}}</div>
            <mt-cell
                :title="component.secondary "
                is-link
                v-for="component in group.list"
                @click.native="goToDetail(component.path)">
                <img slot="icon" src="./assets/base.png" width="20" height="20">
                <span>{{component.name}}</span>
            </mt-cell>
        </div>


        <!--<div v-for="group in nav">-->
        <!--<y-list-container>-->
        <!--<y-list-item :title="group.title.main" :secondaryText="group.title.secondary" multi>-->
        <!--<img :src="group.title.icon" slot="icon">-->
        <!--</y-list-item>-->
        <!--<y-list-item v-for="component in group.list" :title="component.secondary + component.name"-->
        <!--link @click.native="goToDetail(component.path)">-->
        <!--</y-list-item>-->
        <!--</y-list-container>-->
        <!--</div>-->
    </div>
</template>

<script>
    import route from './route'

    export default {
        name: 'y-ui-demo',
        props: {},
        data () {
            return {
                nav: []
            }
        },
        created () {
            this.nav = route.nav
        },
        methods: {
            goToDetail: function (path) {
                this.$router.push({
                    path: path
                })
            }
        },
        components: {}
    }

</script>

<style lang="less">
    @import "../packages/style/stylesheets/lib/reset.css";

    .banner h1 {
        font-size: 32px;
    }

    .softcan-bg-blue {
        background-color: #26a2ff;
    }

    .softcan-bg-blue {
        color: #fff;
    }

    .groupTitle {
        height: 48px;
        line-height: 48px;
        width: 100%;
        text-align: center;
        overflow: hidden;
        font-size: 16px;
        font-weight: 600;
        background-color: #eaeff3;
    }

    .softcan-menu>a:nth-child(2)>.mint-cell-wrapper{
         background-image: none;
    }
</style>
