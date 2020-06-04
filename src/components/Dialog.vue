<template>
  <v-row justify="center">
    <v-btn @click.stop="dialog = true">注文する</v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-text>
          <v-row justify="center" class="pt-4">
            <h3>注文してよろしいですか？</h3>
            <p class="mt-3">「はい」を押下後、スタッフからの連絡をもって注文完了となります。</p>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">戻る</v-btn>

          <v-btn color="green darken-1" text @click="decideOrder">はい</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Dialog",
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    decideOrder() {
      this.$emit("doOrder");
      this.dialog = false;
    }
  }
});
</script>

<style lang="scss" scoped>
</style>