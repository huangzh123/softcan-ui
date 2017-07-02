<template>
    <div id="range">
        <h1>基本功能</h1>
        <div class="item" >
            <mt-range v-model="rangeValue1"></mt-range>
        </div>
        <h1>修改样式</h1>
        <div class="item" >
            <mt-range v-model="rangeValue6" :bar-height="20"></mt-range>
        </div>
        <h1>设置无效</h1>
        <div class="item" >
            <mt-range v-model="rangeValue5" disabled></mt-range>
        </div>

        <h1>设置区间</h1>
        <div class="item" >
            <h3>当前数值：{{rangeValue2}}元</h3>
            <mt-range v-model="rangeValue2">
                <div slot="start">0元</div>
                <div slot="end">100元</div>
            </mt-range>
            <h3>当前数值：{{rangeValue3}}元</h3>
            <mt-range v-model="rangeValue3"
                      :min="10"
                      :max="90"
                      :step="1">
                <div slot="start">10元</div>
                <div slot="end">90元</div>
            </mt-range>
        </div>
        <h1>设置步长</h1>
        <div class="item" >
            <h3>步长为10，当前数值：{{rangeValue4}}米</h3>
            <mt-range v-model="rangeValue4"
                      :step="10">
                <div slot="start">0米</div>
                <div slot="end">100米</div>
            </mt-range>
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
    #range h1{
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
    #range .mt-range{
        margin-bottom: 10px;
    }
    #range h3{
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        color: #858585;
        margin: 5px 0;
        text-align: center;
    }
    #range>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #range>div:last-child{
        margin-bottom: 30px;
    }


</style>
