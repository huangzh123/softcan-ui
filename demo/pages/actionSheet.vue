<template>
    <div id="actionSheet">
        <h1>默认选择框</h1>
        <div class="item" >
            <mt-button type="default" @click="m1">打开默认选择框</mt-button>
        </div>
        <mt-actionsheet
            :actions="actions1"
            v-model="sheetVisible1">
        </mt-actionsheet>
        <h1>不带取消按钮的选择框</h1>
        <div class="item"  >
            <mt-button type="default" @click="m2">打开不带取消按钮的选择框</mt-button>
        </div>
        <mt-actionsheet
            :actions="actions2"
            cancelText=""
            v-model="sheetVisible2">
        </mt-actionsheet>
        <h1>强制选择</h1>
        <div class="item"  >
            <mt-button type="default" @click="m3">点击选择框以外的区域也不能取消</mt-button>
        </div>
        <mt-actionsheet
            :actions="actions3"
            cancelText=""
            :closeOnClickModal="false"
            v-model="sheetVisible3">
        </mt-actionsheet>

    </div>
</template>

<script>
    import {MessageBox} from 'mint-ui'
    export default {
        data(){
            return{
                actions1:[
                    {name:'选项1',method:()=>{
                        alert('你选择了"选项1"')
                    }},
                    {name:'选项2',method:()=>{
                        alert('你选择了"选项2"')
                    }},
                ],
                actions2:[
                    {name:'选项1',method:()=>{
                        alert('你选择了"选项1"')
                    }},
                    {name:'选项2',method:()=>{
                        alert('你选择了"选项2"')
                    }},
                ],
                actions3:[
                    {name:'选项1',method:()=>{
                        alert('你选择了"选项1"')
                    }},
                    {name:'选项2',method:()=>{
                        alert('你选择了"选项2"')
                    }},
                ],
                sheetVisible1:false,
                sheetVisible2:false,
                sheetVisible3:false,
            }
        },
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {
            m1(){
                this.sheetVisible1 = true;
            },
            m2(){
                this.sheetVisible2 = true;
            },
            m3(){
                this.sheetVisible3 = true;
            }
        }
    }

</script>

<style lang="less">
    #actionSheet h1{
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
    #actionSheet>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }


</style>
