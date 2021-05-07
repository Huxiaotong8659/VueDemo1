<template>
    <div id="indexFooter">
        <div id="FooterContent">
            <div id="tip1">
                <span>{{message}}</span>
            </div>
            <div id="tip2">
                &copy;版权属江西软件职业技术大学所有 2020-2022            </div>
        </div>
    </div>
</template>

<script>


export default {
    name:"indexFooter",
    data(){
        return{
            message:"通讯地址：江西软件职业技术大学 邮编：330041"
        }
    }
}
</script>

<style>
    #indexFooter{
        margin-top:50px;
    }
    #FooterContent{
        text-align: center;
        font-size:12px;
    }
</style>