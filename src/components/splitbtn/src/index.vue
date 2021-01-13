<template>
  <div
    class="peach-btn-group"
    :class="{ active: active, hover: hover, opened: opened }"
    @mouseenter="onHover"
    @mouseleave="onHover"
  >
    <button
      class="peach-btn peach-left"
      :style="{
        background: bgColor,
        color: textColor,
        width: leftWidth + 'px'
      }"
      @click.stop="onLeftClick"
    >
      <span class="peach-focus-helper"></span>
      <span class="peach-btn__wrapper">
        <span class="peach-btn__content">
          <slot name="label">
            {{ label }}
          </slot>
        </span>
      </span>
    </button>
    <button
      v-if="split"
      ref="right-btn"
      class="peach-btn peach-right"
      :style="{
        background: bgColor,
        color: textColor,
        width: rightWidth + 'px'
      }"
      @click.stop="onRightClick"
      @blur="closeMenu"
    >
      <span class="peach-focus-helper"></span>
      <span class="peach-btn__wrapper">
        <span class="peach-btn__content">
          <svg
            ref="peach-icon"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 24 24"
            class="peach-icon"
          >
            <path d="M7,10L12,15L17,10H7Z"></path>
          </svg>
        </span>
      </span>
    </button>
    <div
      ref="peach-menu"
      class="peach-menu"
      :style="{
        left: left + 'px',
        top: offsetHeight + +top + 'px'
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass, toggleClass } from '../../../utils'
export default {
  name: 'PeachSplitBtn',
  props: {
    label: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String],
      default: 120
    },
    left: {
      type: [Number, String],
      default: 0
    },
    top: {
      type: [Number, String],
      default: 0
    },
    bgColor: {
      type: String,
      default: '#1976d2'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    split: {
      type: Boolean,
      default: true
    },
    clickFunc: {
      type: Function
    }
  },
  watch: {
    hover(val) {
      if (this.split) {
        if (val) {
          this.leftWidth = this.width - 30
          this.rightWidth = 30
        } else {
          this.leftWidth = this.width
          this.rightWidth = 0
        }
      }
    }
  },
  data() {
    return {
      offsetHeight: 0,
      hover: false,
      opened: false,
      leftWidth: this.width,
      rightWidth: 0
    }
  },
  mounted() {
  },
  methods: {
    onHover() {
      this.hover = !this.hover
    },
    onLeftClick(e) {
      this.clickFunc && this.clickFunc(e)
    },
    onRightClick() {
      const el = this.$el
      const rightBtn = this.$refs['right-btn']
      console.log('el:', [el])
      const offsetHeight = el.offsetHeight
      this.offsetHeight = offsetHeight
      this.opened = !this.opened
      if (this.opened) {
        rightBtn.focus()
      } else {
        rightBtn.blur()
      }
    },
    closeMenu() {
      this.opened = false
    }
  }
}
</script>
