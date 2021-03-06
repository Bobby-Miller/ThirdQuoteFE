<template>
  <transition name="fade-bottom" @after-leave="destroy">
    <div
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
      :style="positionPx"
      v-show="show"
      class="it-notification"
      :class="[`it-notification--${type}`]"
    >
      <div
        class="it-notification-left"
        :style="{
          'background-image': backgroundImage,
          'background-color': emoji || image ? '#fdfdfd' : typeColor[type],
          'border-right': (emoji || image) && '1px solid #dfdfdf',
        }"
      >
        <it-icon
          v-if="!image && !emoji"
          class="it-notification-icon"
          :name="icon || typeIcon[type]"
        />
        <span class="it-notification-emoji" v-if="emoji && !image">{{
          emoji
        }}</span>
      </div>
      <div class="it-notification-text-block">
        <span class="it-notification-text-block-title" v-if="title">{{
          title
        }}</span>
        <span>{{ text }}</span>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItIcon from '../icon'
import { Colors, Positions } from '../../models'

export default defineComponent({
  name: 'it-notification',
  components: {
    'it-icon': ItIcon,
  },
  data() {
    return {
      id: null,
      show: false,
      text: '',
      title: '',
      icon: '',
      emoji: '',
      duration: 5000,
      position: {} as { [key: string]: string },
      placement: Positions.TR,
      type: Colors.PRIMARY,
      image: '',
      timer: setTimeout(() => {}),
      onClose: () => {},
    }
  },
  computed: {
    backgroundImage() {
      // return this.image ? `url(${this.image})` : ''
    },
    typeColor() {
      if (this.emoji) {
        return '#fbfbfb'
      }
      return {
        primary: '#3051ff',
        success: '#07d85b',
        danger: '#F93155',
        warning: '#ffba00',
      }
    },
    positionPx() {
      const posPx: { [key: string]: string } = {}
      for (const key in this.position) {
        if (this.position.hasOwnProperty(key)) {
          posPx[key] = this.position[key] + 'px'
        }
      }
      return posPx
    },
    typeIcon() {
      return {
        primary: 'info_outline',
        success: 'done',
        warning: 'error_outline',
        danger: 'clear',
      }
    },
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    destroy() {
      this.$el.parentNode!.removeChild(this.$el)
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.show = false
          if (this.onClose) {
            this.onClose()
          }
        }, this.duration) as any
      }
    },

    clearTimer() {
      clearTimeout(this.timer)
    },
  },
})
</script>
