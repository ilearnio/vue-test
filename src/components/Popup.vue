<template>
  <div class="popup-modal" @click.self="$emit('close')">
    <div class="popup-box">
      <div class="popup-title">
        <h3>{{ title }}</h3>
      </div>

      <div class="popup-body">
        <div v-if="body" v-html="body" />
        <div v-else>
          <slot></slot>
        </div>
      </div>

      <div class="popup-bottom">
        <slot name="bottom"></slot>
      </div>

      <a class="popup-close" @click="$emit('close')">
        <i class="icon-x"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: ['title', 'body'],

  mounted () {
    document.body.appendChild(this.$el)
  }
}
</script>
