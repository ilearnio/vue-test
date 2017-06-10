<template>
  <div class="comments">
    <ul class="comments-list">
      <slot></slot>
    </ul>

    <form class="new-comment-form" @submit.prevent>
      <input type="text" name="comment" placeholder="Add a comment" size="30" spellcheck="off" autocapitalize="off" autocomplete="off" autocorrect="off">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Comments'
}
</script>
