<template>
  <div class="error-modal" @click="hide" :class="close">
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'ErrorModal',
  props: {
    message: {
      type: String,
      required: true,
    },
    openModal: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      close: this.openModal,
    };
  },
  methods: {
    hide() {
      this.close = 'hidden';
    },
  },
};
</script>

<style scoped>
.error-modal {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
}

.hidden {
  display: none;
}

.message {
  color: #ffff;
  font-size: 40px;
  font-weight: bold;
}
</style>
