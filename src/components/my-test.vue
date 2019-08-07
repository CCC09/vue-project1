<template>
<div class='container'>
    <div>head</div>
    <div>
        <slot name="a" :msg="msg">123</slot>
    </div>
    <div>
        <slot name="b" txt='popo'>321</slot>
    </div>
    <div>foot</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '哈哈哈'
    }
  }
}
</script>

<style scoped lang='less'></style>
