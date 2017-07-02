<template>
    <div id="tabbar">
        <div class="item">
            <mt-tabbar v-model="selected">
                <mt-tab-item id="外卖">
                    <img slot="icon" src="../assets/base.png">
                    外卖
                </mt-tab-item>
                <mt-tab-item id="订单">
                    <img slot="icon" src="../assets/base.png">
                    订单
                </mt-tab-item>
                <mt-tab-item id="发现">
                    <img slot="icon" src="../assets/base.png">
                    发现
                </mt-tab-item>
                <mt-tab-item id="我的">
                    <img slot="icon" src="../assets/base.png">
                    我的
                </mt-tab-item>
            </mt-tabbar>
        </div>
        <div class="item">
            <mt-tabbar v-model="selected">
                <mt-tab-item id="发现2" >
                    <img slot="icon" src="../assets/base.png">
                    发现
                </mt-tab-item>
                <mt-tab-item id="我的2">
                    <img slot="icon" src="../assets/base.png">
                    我的
                </mt-tab-item>
                <mt-tab-item id="我的3">
                    <img slot="icon" src="../assets/base.png">
                    我的
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">
    #tabbar>.item{
        height: 90px;
        position: relative;
        margin-top: 20px;
    }
</style>
