<template>
    <div id="navbar">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'选项一 '" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'选项二 '" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项三 '" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        data(){
          return{
              selected:"1",
          }
        },
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">
#navbar .mint-tab-container{
    margin-top: 10px;
}
</style>
