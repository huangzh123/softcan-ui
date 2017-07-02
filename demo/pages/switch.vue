<template>
    <div id="switch">
        <h1>默认</h1>
        <div class="item">
            <mt-switch v-model="value1"></mt-switch><span>{{value1}}</span>
        </div>
        <div class="item">
            <mt-switch v-model="value2"></mt-switch><span>{{value2}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                value1:false,
                value2:true
            }
        },
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {
            handleClick(){
                alert('点击触发 handleClick')
            }
        }
    }

</script>

<style lang="less">
    #switch h1{
        height: 44px;
        line-height: 44px;
        padding-left: 20px;
        font-size: 15px;
        color: #858585;
        font-weight: 600;
        border-bottom: 1px solid #eaeaea;
        margin:10px 20px 15px 10px;
        /*margin-right: 30px;*/
    }
    #switch>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #switch>.item>*{
        margin: 2px;
    }
    #switch label{
        display: inline-block;
    }
    #switch>.item>span{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        vertical-align: super;
        font-size: 16px;
    }
</style>
