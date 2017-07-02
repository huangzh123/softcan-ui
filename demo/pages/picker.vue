<template>
    <div id="picker">
        <h1>基本功能</h1>
        <div class="item" >
            <mt-picker :slots="slots1"></mt-picker>
        </div>
        <h1>多项选择</h1>
        <div class="item" >
            <mt-picker :slots="slots2" @change="onValuesChange"></mt-picker>
        </div>


    </div>
</template>

<script>

    export default {
        methods: {
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
            }
        },
        data() {
            return {
                slots1:[
                    {
                        flex: 1,
                        values: ['2015', '2016', '2017', '2018', '2019', '2020'],
                        className: 'slot1',
                        textAlign: 'center'
                    }
                ],
                slots2: [
                    {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot1',
                        textAlign: 'right'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ]
            };
        }
    }

</script>

<style lang="less">
    #picker h1{
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
    #picker h3{
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        color: #858585;
        margin: 5px 0;
        text-align: center;
    }
    #picker>.item{
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
    }
    #picker>div:last-child{
        margin-bottom: 30px;
    }


</style>
