<template>
    <div id="header">
        <div class="item">
            <mt-header title="固定在顶部"></mt-header>
        </div>
        <div class="item">
            <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="item">
            <mt-header title="多个按钮">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                    <mt-button @click="handleClose">关闭</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
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
    #header>.item{
        margin-top: 20px;
    }
</style>
