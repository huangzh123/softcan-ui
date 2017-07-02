<template>
    <div id="checklist">
        <!--<h1>默认</h1>-->
        <div class="item">
            <mt-checklist
                title="复选框列表"
                v-model="value1"
                :options="['选项A', '选项B', '选项C']">
            </mt-checklist>
        </div>
        <!--<h1>禁用选项</h1>-->
        <div class="item">
            <mt-checklist
                title="禁用选项"
                v-model="value2"
                :options="options">
            </mt-checklist>
        </div>
        <!--<h1>设置最大选择数</h1>-->
        <div class="item">
            <mt-checklist
                :max="2"
                title="最多选择2项"
                v-model="value1"
                :options="['选项A', '选项B', '选项C']">
            </mt-checklist>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                value1:[],
                value2:[],
                value3:[],
                options:[
                    {
                        label: '被禁用',
                        value: '值F',
                        disabled: true
                    },
                    {
                        label: '选中禁用',
                        value: '选中禁用的值',
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
                alert('点击触发 handleClick')
            }
        }
    }

</script>

<style lang="less">
    #checklist h1{
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
    #checklist>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #checklist>.item>*{
        margin: 2px;
    }
</style>
