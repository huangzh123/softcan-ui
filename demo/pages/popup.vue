<template>
    <div id="actionSheet">
        <h1>从左侧弹出</h1>
        <div class="item" >
            <mt-button type="default" @click="m1">从左侧弹出 pupup</mt-button>
        </div>
        <mt-popup
            v-model="popupVisible1"
            position="left">
            <div class="msg-middle">从左侧弹出的信息</div>
        </mt-popup>
        <h1>从顶部弹出</h1>
        <div class="item" >
            <mt-button type="default" @click="m2">从顶部弹出 popup</mt-button>
        </div>
        <mt-popup
            v-model="popupVisible2"
            position="top">
            <div class="msg-middle">从顶部弹出的信息</div>
        </mt-popup>
        <h1>从右侧弹出</h1>
        <div class="item" >
            <mt-button type="default" @click="m3">从右侧弹出 pupup</mt-button>
        </div>
        <mt-popup
            v-model="popupVisible3"
            position="right">
            <div class="msg-middle">从右侧弹出的信息</div>
        </mt-popup>
        <h1>从底部边弹出</h1>
        <div class="item" >
            <mt-button type="default" @click="m4">从底部弹出 pupup</mt-button>
        </div>
        <mt-popup
            v-model="popupVisible4"
            position="bottom">
            <div class="msg-middle">从底部弹出的信息</div>
        </mt-popup>


    </div>
</template>

<script>
    import {MessageBox} from 'mint-ui'
    export default {
        data(){
            return{
                popupVisible1:false,
                popupVisible2:false,
                popupVisible3:false,
                popupVisible4:false,
            }
        },
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {
            m1(){
                this.popupVisible1 = true;
            },
            m2(){
                this.popupVisible2 = true;
            },
            m3(){
                this.popupVisible3 = true;
            },
            m4(){
                this.popupVisible4 = true;
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

.mint-popup-left,.mint-popup-right{
    height: 100%;
    width: 50%;
    overflow: hidden;
}

    .mint-popup-top,.mint-popup-bottom{
        height: 100px;
        width: 100%;
        overflow: hidden;
    }
    .msg-middle{
        width:100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 15px;
        color: #333;

    }

</style>
