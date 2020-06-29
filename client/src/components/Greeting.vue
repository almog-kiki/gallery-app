<template>
  <div class="greeting">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'greeting',
  props: {
    text: String
  }
}
</script>
