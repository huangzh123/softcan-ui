<template>
    <div id="field">
        <h1>默认</h1>
        <div class="item">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
            <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
            <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>
        </div>
        <h1>设置校验状态</h1>
        <div class="item">
            <mt-field label="邮箱" state="success" v-model="email"></mt-field>
            <mt-field label="邮箱" state="error" v-model="email"></mt-field>
            <mt-field label="邮箱" state="warning" v-model="email"></mt-field>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                value1:'',
                value2:'',
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
    #field h1{
        height: 44px;
        line-height: 44px;
        padding-left: 20px;
        font-size: 15px;
        color: #858585;
        font-weight: 600;
        border-bottom: 1px solid #eaeaea;
        margin:10px 20px 15px 10px;
    }
    #field>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #field>.item>*{
        margin: 2px;
    }
    #field label{
        display: inline-block;
    }
    #field>.item>span{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        vertical-align: super;
        font-size: 16px;
    }
</style>
