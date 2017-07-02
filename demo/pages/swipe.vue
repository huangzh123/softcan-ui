<template>
    <div id="swipe">
        <h1>基础用法</h1>
        <div class="item">
            <mt-swipe :auto="3000">
                <mt-swipe-item><div class="swipe-body green ">1</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body red">2</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body blue">3</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body yellow">4</div></mt-swipe-item>
            </mt-swipe>
        </div>
        <h1>隐藏 indicators</h1>
        <div class="item">
            <mt-swipe :auto="3000" :show-indicators="false">
                <mt-swipe-item><div class="swipe-body green ">1</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body red">2</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body blue">3</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body yellow">4</div></mt-swipe-item>
            </mt-swipe>
        </div>
        <h1>取消自动播放</h1>
        <div class="item">
            <mt-swipe :auto="0">
                <mt-swipe-item><div class="swipe-body green ">1</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body red">2</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body blue">3</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body yellow">4</div></mt-swipe-item>
            </mt-swipe>
        </div>
        <h1>change 事件</h1>
        <div class="item">
            <mt-swipe :auto="4000" @change="handleChange">
                <mt-swipe-item><div class="swipe-body green ">1</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body red">2</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body blue">3</div></mt-swipe-item>
                <mt-swipe-item><div class="swipe-body yellow">4</div></mt-swipe-item>
            </mt-swipe>
            <h3>(当前在第{{num}}页)</h3>
        </div>



    </div>
</template>

<script>

    export default {
        data(){
            return{
                num:1
            }
        },
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {
            handleChange(data){
                this.num = data+1;
            }
        }
    }

</script>

<style lang="less">
    #swipe h1{
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
    #swipe>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
        height: 200px;
        width: 100%;
    }
    .swipe-body{
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        font-size: 28px;
        width: 100%;
    }
    .swipe-body.yellow{
        background-color: #f9e82e;
    }
    .swipe-body.blue{
        background-color: dodgerblue;
    }
    .swipe-body.red{
        background-color: #f27124;
    }
    .swipe-body.green{
        background-color: #01d386;
    }
    #swipe h3{
        height: 36px;
        line-height: 36px;
        text-align: center;
        margin-bottom: 20px;
    }

</style>
