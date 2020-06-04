<template>
  <v-list>
    <v-list-group v-for="drink in drinks" :key="drink.genre" no-action>
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="drink.genre"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="drink in drink.data" :key="drink.name">
        <v-list-item-content>
          <v-row justify="center">
            <v-col cols="8">
              <span class="ml-4">
                {{ drink.name}}
                <br />
              </span>
              <span class="ml-4">(¥{{drink.price}})</span>
            </v-col>
            <v-col cols="4">
              <v-btn @click="addItem(drink.name, drink.price)">追加</v-btn>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

interface Menus {
  tab: string;
  content: string;
}

export default Vue.extend({
  name: "Drink",
  props: {
    drinks: {
      required: true
    }
  },
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    addItem(name: string, price: number): void {
      this.$emit("addDrink", { name, price });
    }
  }
});
</script>

<style>
.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 0px !important;
}
</style>