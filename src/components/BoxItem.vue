<template>
  <div class="box-item-wrapper mid-wrapper clearfix">
    <div v-if="!item.user" class="box-item-loading">
      Loading...
    </div>
    <div v-else>
      <div class="box-item-carousel-wrap">
        <Carousel class="box-item-carousel" :navigationEnabled="true" :perPage="1">
          <Slide v-for="item in item.item_photos" :key="item.id">
            <img :src="item.large">
          </Slide>
        </Carousel>

        <a class="button-green box-item-buy"><i class="icon-bag"></i>Buy</a>

        <div class="box-item-price-label">
          <span class="box-item-price-label-unit">$</span>
          {{ Math.round(item.price) }}
        </div>
      </div>

      <div class="box-item-info">
        <div class="box-item-info-top">
          <h2 class="box-item-info-title">
            {{ truncatedTitle }}
          </h2>

          <div class="box-item-info-location">
            <a @click="showLocationPopup = true">
              <i class="icon-location" />
              {{ item.location_details }}
            </a>

            <Popup class="box-item-location-popup"
              v-if="showLocationPopup"
              title="Location"
              @close="showLocationPopup = false"
              :body="locationDetails"
            >
              <img src="/static/img/map.png" slot="bottom" width="425" height="223">
            </Popup>
          </div>

          <div class="box-item-info-about">
            <div class="box-item-author-image">
              <a :href="item.user.share_url">
                <img :src="item.user.avatar.small_url" class="box-item-profile-photo" alt="">
              </a>
            </div>
            <div class="box-item-author-details">
              <div class="box-item-author-name">
                <a :href="item.user.share_url">
                  {{ item.user.name }}
                </a>
              </div>
              <div class="box-item-author-username">
                <a :href="item.user.share_url">
                  {{ item.user.nickname }}
                </a>
              </div>
              <article class="content box-item-info-descr" v-html="itemDescription" />

              <a class="button-sm button-grey follow-button">Follow</a>
            </div>
          </div>
        </div>

        <div class="box-item-info-bottom">
          <div v-if="!comments" class="box-item-comments-loading">
            Loading...
          </div>
          <Comments v-else class="box-item-coments">
            <Comment
              v-for="comment in comments"
              :key="comment.id"
              :username="comment.user.nickname"
              :profileUrl="comment.user.share_url"
              :profileImg="comment.user.avatar.small_url"
            >
              {{ comment.comment }}
            </Comment>
          </Comments>

          <div class="box-item-actions show-for-medium">
            <a class="box-item-action box-item-action-like">
              <i class="icon-heart" />
              <span>{{ item.likes_count }}</span>
            </a>
            <a class="box-item-action box-item-action-want">
              <i class="icon-star" />
              <span>{{ item.wants_count }}</span>
            </a>
            <a class="box-item-action box-item-action-share">
              <i class="icon-share" />
              <span>{{ item.shares_count }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import Comments from '@/components/Comments'
import Comment from '@/components/Comment'
import Popup from '@/components/Popup'
import {
  truncate,
  textToHtml
} from '@/lib/helpers/strings'
import {
  fetchItem,
  fetchItemComments
} from '@/common/api-methods'

export default {
  name: 'BoxItem',

  data () {
    return {
      showLocationPopup: false,
      item: {},
      comments: []
    }
  },

  async mounted () {
    // Fetch the data
    await Promise.all([
      this.fetchItem(this.userId, this.itemId),
      this.fetchItemComments(this.userId, this.itemId)
    ])

    this.$emit('all-fetched')
  },

  methods: {
    async fetchItem (userId, itemId) {
      const res = await fetchItem(userId, itemId)
      this.item = res.body.item
    },

    async fetchItemComments (userId, itemId, page = 1) {
      const res = await fetchItemComments(userId, itemId, page)
      this.comments = res.body.comments
        .sort((a, b) => a.created_at > b.created_at)
    }
  },

  computed: {
    truncatedTitle () {
      return truncate(this.item.name || '', 40)
    },

    itemDescription () {
      return textToHtml(this.item.description)
    },

    locationDetails () {
      return textToHtml(this.item.location_details)
    }
  },

  components: {
    Carousel,
    Slide,
    Comments,
    Comment,
    Popup
  },

  props: {
    userId: {
      type: Number,
      required: true
    },
    itemId: {
      type: Number,
      required: true
    }
  }
}
</script>
