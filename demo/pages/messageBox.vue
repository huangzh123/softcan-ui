<template>
    <div id="messageBox">
        <h1>普通弹出框</h1>
        <div class="item">
            <mt-button @click="m1">打开普通弹出框</mt-button>
        </div>
        <h1>确认框</h1>
        <div class="item">
            <mt-button @click="m2">打开确认框</mt-button>
        </div>
        <h1>弹出输入框</h1>
        <div class="item">
            <mt-button @click="m3">打开弹出输入框</mt-button>
        </div>

    </div>
</template>

<script>
    import {MessageBox} from 'mint-ui'
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
                MessageBox('提示', '操作成功');
            },
            m2(){
                MessageBox.confirm('确定执行此操作?').then(action => {
                    MessageBox('提示', '你选择了确认');
                });
            },
            m3(){
                MessageBox.prompt('请输入姓名').then(({ value, action }) => {
                    MessageBox('提示', '您输入了'+value);
                });
            },

        }
    }

</script>

<style lang="less">
    #messageBox h1{
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
    #messageBox>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }


</style>
