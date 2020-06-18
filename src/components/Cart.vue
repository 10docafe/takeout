<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-row justify="center">
              <h3>注文内容</h3>
            </v-row>
          </v-card-title>

          <v-card-text v-if="mains.length > 0">
            <template>
              <span>メインフード</span>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left"></th>
                      <th class="text-left">商品</th>
                      <th class="text-left">値段</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(main,index) in mains" :key="index">
                      <v-btn @click="deleteItem(index, 'main')" icon class="pt-4">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                      <td>
                        {{ main.mainfood }}
                        <br />
                        <span v-if="main.big">
                          -大盛
                          <br />
                        </span>
                        <span v-if="main.ketchup">
                          -ケチャップ変更
                          <br />
                        </span>
                        <span v-if="main.drink">-{{ main.drink }}</span>
                      </td>
                      <td>{{ main.price }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </v-card-text>

          <v-card-text v-if="sides.length > 0">
            <template>
              <span>サイドメニュー</span>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left"></th>
                      <th class="text-left">商品</th>
                      <th class="text-left">値段</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(side,index) in sides" :key="index">
                      <v-btn @click="deleteItem(index, 'side')" icon class="pt-3">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                      <td>{{ side.name }}</td>
                      <td>{{ side.price }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </v-card-text>

          <v-card-text v-if="drinks.length > 0" c>
            <template class="mt-2">
              <span>ドリンク</span>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left"></th>
                      <th class="text-left">商品</th>
                      <th class="text-left">値段</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(drink, index) in drinks" :key="index">
                      <v-btn @click="deleteItem(index, 'drink')" icon class="pt-3">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                      <td>{{ drink.name }}</td>
                      <td>{{ drink.price }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </v-card-text>

          <template v-if="mains.length <= 0 && sides.length <= 0 && drinks.length <= 0">
            <v-row justify="center">
              <h4>注文内容はありません。</h4>
            </v-row>
          </template>

          <template v-if="mains.length > 0 || sides.length > 0 || drinks.length > 0">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left"></th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>合計</td>
                    <td>{{ total }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>

          <v-card-actions>
            <v-row
              justify="center"
              v-if="mains.length > 0 || sides.length > 0 || drinks.length > 0"
            >
              <Dialog @doOrder="doOrder"></Dialog>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    {{ name }}
  </v-container>
</template>

<script lang="ts">
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Vue, { PropType } from "vue";
import Dialog from "../components/Dialog.vue";
import axios from "axios";

import { flexMsg } from "../flexMsg";
import { mainfoods } from "../db/mainfoods";

interface Main {
  price: number;
  mainfood: string;
  drink: string;
  ketchup: string | undefined;
  big: string | undefined;
}
interface SideDrink {
  name: string;
  price: number;
}

interface Item {
  main: Main[];
  side: SideDrink[];
  drink: SideDrink[];
}
interface Msg {
  price: number;
  item: Item;
}

export default Vue.extend({
  name: "Cart",
  components: {
    Dialog
  },
  props: {
    mainsProp: {
      type: Array as PropType<Main[]>
    },
    sidesProp: {
      type: Array as PropType<SideDrink[]>
    },
    drinksProp: {
      type: Array as PropType<SideDrink[]>
    }
  },
  data() {
    return {
      mains: this.mainsProp,
      sides: this.sidesProp,
      drinks: this.drinksProp,
      mainPrice: 0,
      sidesPrice: 0,
      drinkPrice: 0,
      name: ""
    };
  },
  watch: {
    mains() {
      this.mainPrice = 0;
      this.mains.forEach(main => {
        this.mainPrice += main.price;
      });
    },
    sides() {
      this.sidesPrice = 0;
      this.sides.forEach(side => {
        this.sidesPrice += side.price;
      });
    },
    drinks() {
      this.drinkPrice = 0;
      this.drinks.forEach(drink => {
        this.drinkPrice += drink.price;
      });
    }
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    total(this: any) {
      return this.mainPrice + this.sidesPrice + this.drinkPrice;
    }
  },
  methods: {
    async createMsg(data: Msg) {
      //名前の表示
      await liff
        .getProfile()
        .then(profile => {
          const name = profile.displayName;
          flexMsg.contents.header.contents[0].text = `${name}様`;
        })
        .catch(err => {
          console.log("error", err);
        });

      //値段の表示
      flexMsg.contents.body.contents[6].contents![2].text = `${data.price}円`;

      //メインフード
      if (data.item.main.length > 0) {
        data.item.main.forEach(main => {
          let text = `${main.mainfood}`;
          text += main.big ? `-${main.big}` : "";
          text += main.ketchup ? `-${main.ketchup}` : "";
          text += main.drink ? `-${main.drink}` : "";
          const content = {
            type: "text",
            text: text,
            size: "xs",
            gravity: "top",
            weight: "regular",
            wrap: true
          };
          flexMsg.contents.body.contents[0].contents?.push(content);
        });
      }

      //サイド
      if (data.item.side.length > 0) {
        data.item.side.forEach(side => {
          const content = {
            type: "text",
            text: side.name,
            size: "xs",
            gravity: "top",
            weight: "regular"
          };
          flexMsg.contents.body.contents[2].contents?.push(content);
        });
      }

      //ドリンク
      if (data.item.drink.length > 0) {
        data.item.drink.forEach(drink => {
          const content = {
            type: "text",
            text: drink.name,
            size: "xs",
            gravity: "top",
            weight: "regular"
          };
          flexMsg.contents.body.contents[4].contents?.push(content);
        });
      }
    },
    sendMessages(data: Msg) {
      //JSONに送信データを追加
      this.createMsg(data);
      console.log(flexMsg);
      liff
        .sendMessages([JSON.parse(JSON.stringify(flexMsg))])
        .then(() => {
          liff.closeWindow();
          console.log("message sent");
        })
        .catch((err: any) => {
          this.$emit("err", err);
          console.log("error", err);
        });
    },
    doOrder() {
      const data = {
        price: this.total,
        item: {
          main: this.mains,
          side: this.sides,
          drink: this.drinks
        }
      };
      this.sendMessages(data);
      /*
      axios.post(url, data).catch(err => {
        console.log(err);
      });
      */
    },
    deleteItem(index: number, kind: string): void {
      if (kind === "main") this.mains.splice(index, 1);
      if (kind === "side") this.sides.splice(index, 1);
      if (kind === "drink") this.drinks.splice(index, 1);
    }
  }
});
</script>

<style>
th.text-left {
  padding-top: 3px;
}
</style>

<style lang="scss" scoped>
h3 {
  font-family: "Big Shoulders Display", cursive;
  border-bottom: solid 3px #cce4ff;
  position: relative;
}
h3::after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px #5472cd;
  bottom: -3px;
  width: 20%;
}
</style>