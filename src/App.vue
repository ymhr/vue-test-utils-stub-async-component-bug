<template>
  <DynamicHello />
</template>

<script>

export default {
  components: {
    DynamicHello: () => import('@/DynamicHello')
  }
}
</script>
