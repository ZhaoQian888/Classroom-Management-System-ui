<template>
    <div class="form">
        <registerform></registerform>
    </div>
</template>
<style >
    .form{
        width: 500px;
        height: 600px;
    }
</style>
<script>
      
import registerform from "@/components/form/Form.vue"
export default {
    name:'roomregister',
    components:{
        registerform,
    }
}
</script>
