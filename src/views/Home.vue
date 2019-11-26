<template>
  <div class="home">
   <signupform></signupform>
  </div>
</template>

<script>
// @ is an alias to /src
import signupform from "@/components/form/Signupform.vue"
export default {
  name: 'home',
  components: {
    signupform,
  }
}
</script>
