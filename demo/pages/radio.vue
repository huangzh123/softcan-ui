<template>
    <div id="radio">
        <h1>默认</h1>
        <div class="item">
            <mt-radio
                title="单选框列表"
                v-model="value1"
                :options="['选项A', '选项B', '选项C']">
            </mt-radio>
        </div>
        <div class="item">
            <mt-radio
                title="单选框列表"
                v-model="value2"
                :options="options">
            </mt-radio>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                value1:'',
                value2:'',
                options:[
                    {
                        label: '被禁用',
                        value: '值F',
                        disabled: true
                    },
                    {
                        label: '选项A',
                        value: '值A'
                    },
                    {
                        label: '选项B',
                        value: '值B'
                    }
                ]
            }
        },
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {
            handleClick(){

            }
        }
    }

</script>

<style lang="less">
    #radio h1{
        height: 44px;
        line-height: 44px;
        padding-left: 20px;
        font-size: 15px;
        color: #858585;
        font-weight: 600;
        border-bottom: 1px solid #eaeaea;
        margin:10px 20px 15px 10px;
    }
    #radio>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #radio>.item>*{
        margin: 2px;
    }
    #radio label{
        display: inline-block;
    }
    #radio>.item>span{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        vertical-align: super;
        font-size: 16px;
    }
</style>
