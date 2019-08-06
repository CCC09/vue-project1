<template>
<div class='container'>article</div>
</template>

<script>
export default {
  created () {
    this.$http('/articles').then(res => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped lang='less'></style>
