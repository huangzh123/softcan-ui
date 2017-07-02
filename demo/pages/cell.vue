<template>
    <div id="cell">
        <mt-cell title="标题文字"></mt-cell>
        <mt-cell title="标题文字" value="说明文字"></mt-cell>
        <mt-cell
            title="标题文字"
            to="//github.com"
            is-link
            value="带链接">
        </mt-cell>
        <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
        <mt-cell title="标题文字">
            <span>icon 是图片</span>
            <img slot="icon" src="../assets/base.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="标题文字" is-link>
            <span style="color: green">这里是元素</span>
        </mt-cell>
        <mt-cell title="标题" label="描述信息" is-link></mt-cell>

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
    #cell h1{
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
    #cell>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #cell>.item>*{
        margin: 2px;
    }
</style>
