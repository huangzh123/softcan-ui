<template>
    <div id="process">
        <h1>基本功能</h1>
        <div class="item" >
            <mt-progress :value="20" :bar-height="5"></mt-progress>
        </div>
        <h1>设置区间</h1>
        <div class="item" >
            <mt-progress :value="60">
                <div slot="start">0%</div>
                <div slot="end">100%</div>
            </mt-progress>
        </div>
        <h1>设置样式</h1>
        <div class="item" >
            <mt-progress :value="60" :barHeight="20">
                <div slot="start">0%</div>
                <div slot="end">100%</div>
            </mt-progress>
        </div>


    </div>
</template>

<script>

    export default {
        data(){
            return{
                rangeValue1:20,
                rangeValue2:0,
                rangeValue3:10,
                rangeValue4:0,
                rangeValue5:40,
                rangeValue6:0,
            }
        },
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {

        }
    }

</script>

<style lang="less">
    #process h1{
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
    #process .mt-range{
        margin-bottom: 10px;
    }
    #process h3{
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        color: #858585;
        margin: 5px 0;
        text-align: center;
    }
    #process>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #process>div:last-child{
        margin-bottom: 30px;
    }


</style>
