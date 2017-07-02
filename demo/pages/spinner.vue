<template>
    <div id="spinner">
        <h1>加载样式</h1>
        <div class="item">
            <mt-spinner type="snake"></mt-spinner>
            <mt-spinner type="double-bounce"></mt-spinner>
            <mt-spinner type="triple-bounce"></mt-spinner>
            <mt-spinner type="fading-circle"></mt-spinner>
        </div>
        <h1>修改颜色</h1>
        <div class="item">
            <mt-spinner type="snake" color="#26a2ff"></mt-spinner>
            <mt-spinner type="double-bounce" color="red"></mt-spinner>
            <mt-spinner type="triple-bounce" color="green"></mt-spinner>
            <mt-spinner type="fading-circle" color="orange"></mt-spinner>
        </div>
        <h1>改变大小</h1>
        <div class="item">
            <mt-spinner :size="60" color="#26a2ff"></mt-spinner>
            <mt-spinner :size="120" color="#26a2ff"></mt-spinner>
        </div>


    </div>
</template>

<script>
    export default {
        data(){
            return{

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
    #spinner h1{
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
    #spinner>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #spinner>.item>*{
        margin: 2px;
    }
    #spinner>.item>span{
        display: inline-block;
        margin-right: 30px;
    }
</style>
