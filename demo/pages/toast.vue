<template>
    <div id="toast">
        <h1>默认信息</h1>
        <div class="item">
            <mt-button @click="m1">点我弹出提示信息</mt-button>
        </div>
        <h1>带有图标的信息</h1>
        <div class="item">
            <mt-button @click="m2">点我弹出带有ICON的信息</mt-button>
        </div>
        <h1>设置信息的显示时长</h1>
        <div class="item">
            <mt-button @click="m3">点我弹出停留5秒的提示信息</mt-button>
        </div>
        <h1>信息显示的位置</h1>
        <div class="item">
            <mt-button @click="m4">点我弹出提示信息（顶部）</mt-button>
            <mt-button @click="m5">点我弹出提示信息（底部）</mt-button>
        </div>


    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
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
            m1(){
                Toast('提示信息');
            },
            m2(){
                Toast({
                    message: '带图标的提示信息',
                    iconClass: 'icon icon-success'
                });
            },
            m3(){
                Toast({
                    message: '这条信息会停留5秒哦',
                    duration: 5000
                });
            },
            m4(){
                Toast({
                    message: '我在顶部显示的',
                    position:'top'
                });
            },
            m5(){
                Toast({
                    message: '我在底部显示的',
                    position:'bottom'
                });
            }
        }
    }

</script>

<style lang="less">
    #toast h1{
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
    #toast>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #toast>.item>button{
        margin: 5px 0;
    }
    .icon-success{
        height: 30px;
        width: 30px;
        margin: auto;
        background: url('../assets/base.png');
        background-size: contain;
    }
</style>
