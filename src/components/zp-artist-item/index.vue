<template>
    <div class="m-Artist">
        <zp-image-preview ></zp-image-preview>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'ArtistItem'
})
export default class ArtistItem extends Vue {}
</script>
<style lang="less" scoped>

</style>