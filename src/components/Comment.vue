<template>
  <li class="comment">
    <div class="comment-avatar">
      <a :href="profileUrl">
        <img :src="profileImg" alt="">
      </a>
    </div>
    <div class="comment-info">
      <div class="comment-username">
        <a :href="profileUrl">{{ username }}</a>
      </div>
      <div class="comment-body">
        <slot></slot>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Comment',
  props: ['username', 'profileUrl', 'profileImg', 'image']
}
</script>
