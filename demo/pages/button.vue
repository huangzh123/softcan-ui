<template>
    <div id="button">
        <h1>样式</h1>
        <div class="item">
            <mt-button type="default">default</mt-button>
            <mt-button type="primary">primary</mt-button>
            <mt-button type="danger">danger</mt-button>
        </div>
        <h1>大小</h1>
        <div class="item size">
            <mt-button size="small">small</mt-button>
            <mt-button size="normal">normal</mt-button>
            <mt-button size="large">large</mt-button>
        </div>
        <h1>禁用</h1>
        <div class="item size">
            <mt-button disabled>disabled</mt-button>
        </div>
        <h1>幽灵按钮</h1>
        <div class="item size">
            <mt-button plain>plain</mt-button>
            <mt-button plain type="primary">plain</mt-button>
            <mt-button plain type="danger">plain</mt-button>
        </div>
        <h1>带图标</h1>
        <div class="item size">
            <mt-button icon="back">back</mt-button>
            <mt-button icon="more">更多</mt-button>
        </div>
        <h1>自定义图标</h1>
        <div class="item size">
            <mt-button>
                <img src="../assets/base.png" height="20" width="20" slot="icon">
                带自定义图标
            </mt-button>
        </div>
        <h1>绑定点击事件</h1>
        <div class="item size">
            <mt-button @click.native="handleClick">点击触发 handleClick</mt-button>
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
    #button h1{
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
    #button>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #button>.item>*{
        margin: 2px;
    }
</style>
