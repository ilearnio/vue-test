<template>
  <div class="page-single-box-item main-container">
    <BoxItem :userId="userId" :itemId="itemId" />
  </div>
</template>

<script>
import BoxItem from '@/components/BoxItem'

export default {
  name: 'SingleBoxItem',

  data () {
    return {
      userId: parseInt(this.$route.params.userId),
      itemId: parseInt(this.$route.params.itemId)
    }
  },

  components: {
    BoxItem
  }
}
</script>
