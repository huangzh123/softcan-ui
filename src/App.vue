<template>
    <div>
        <sc-button>显示Toast</sc-button>
       <!-- <mt-actionsheet
            :actions="actions"
            v-model="sheetVisible">
        </mt-actionsheet>-->
    </div>
</template>

<script>
    import Vue from 'vue'
//    import {
//        scButton,
//        scActionsheet
//    } from '../packages/index'

//    import { Button,Actionsheet } from 'softcan-ui';
//    import 'softcan-ui\\dist\\softcan-ui\\index.css'
//    Vue.component(Button.name, Button);
//    Vue.component(Actionsheet.name, Actionsheet);

    import {Toast} from 'softcan-ui'


    import {UIName} from 'mixins'
    export default {
        props: {},
        data () {
            return {
                actions:[],
                sheetVisible:''
            }
        },
        mixins: [UIName],
        created () {
            Toast('test')
        },
        components: {
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    /*@import "../packages/style/stylesheets/lib/reset.css";*/
    /*@import "../packages/style/stylesheets/base";*/


    html, body {
        height: 100%;
        min-height: 100%;
    }
    body {
        color: #030303;
        font-size: 14px;
        font-family: Microsoft YaHei, Arial, sans-serif;
        background-color: #f2f2f2 !important;
    }
    .group {
        margin-top: 20px;
    }
</style>
