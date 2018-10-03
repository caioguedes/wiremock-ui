<template lang="pug">
  span(:class="method") {{ method }}
</template>

<script>
export default {
  name: 'Method',
  props: ['method']
}
</script>

<style scoped>
  span {
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
    color: white;
  }

  .GET{
    background: #684fb9;
  }
  .HEAD{
    background: #0084ad;
  }
  .POST{
    background: #4fa100;
  }
  .PUT{
    background: #cd6a00;
  }
  .DELETE{
    background: #cb0e0e;
  }
  .OPTIONS{
    background: #0084ad;
  }
  .PATCH{
    background: #ac9300;
  }
</style>
