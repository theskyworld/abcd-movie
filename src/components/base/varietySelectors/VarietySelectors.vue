<script setup lang="ts">
import { ref } from "vue";

// TODO 添加在因更换选择条件而进行网络请求时，在请求过程中添加遮罩loading状态等，避免多次请求导致页面卡顿

const thisYear = new Date().getFullYear();
const kws = ref<Array<string | number>>([
  "undefined",
  "undefined",
  "undefined",
  "undefined",
  "undefined",
]);
const selectedItems = ref<any>([]);
const emits = defineEmits(["doChangeKws"]);

// 存储每次点击选择器按钮之后的值，避免丢失之前的已点击值
function addNewItems(index: number, newItem: string | number) {
  selectedItems.value.push({ index, newItem });
}

// 纠正newItem和index，用于拼接合法的请求url
function correctNewItem(newItem: string | number) {
  switch (newItem) {
    case "时间排序":
      return "time";
    case "人气排序":
      return "hits";
    case "评分排序":
      return "score";
    default:
      return newItem;
  }
}

function correctIndex(index: number) {
  switch (index) {
    case 0:
      return 2;
    case 1:
      return 0;
    case 2:
      return 3;
    case 3:
      return 4;
    case 4:
      return 1;
    default:
      break;
  }
}

// 点击选择器按钮后对kws进行更新，确保更新之后之前选择的内容依旧存在
function addNewItemToKws() {
  selectedItems.value.forEach((elem) => {
    let index = elem.index;
    index = correctIndex(index);
    let newItem = elem.newItem;
    newItem = correctNewItem(newItem);
    kws.value[index] = newItem;
  });
}

const varietySelectors = ref([
  {
    title: "剧情",
    content: [
      {
        key: "1",
        name: "全部",
      },
      {
        key: "2",
        name: "YouTube",
      },
      {
        key: "3",
        name: "脱口秀",
      },
      {
        key: "4",
        name: "真人秀",
      },
      {
        key: "5",
        name: "选秀",
      },
      {
        key: "6",
        name: "八卦",
      },
      {
        key: "7",
        name: "访谈",
      },
      {
        key: "8",
        name: "情感",
      },
      {
        key: "9",
        name: "生活",
      },
      {
        key: "10",
        name: "晚会",
      },
      {
        key: "11",
        name: "搞笑",
      },
      {
        key: "12",
        name: "音乐",
      },
      {
        key: "13",
        name: "时尚",
      },
      {
        key: "14",
        name: "游戏",
      },
      {
        key: "15",
        name: "少儿",
      },
      {
        key: "16",
        name: "体育",
      },
      {
        key: "17",
        name: "纪实",
      },
      {
        key: "18",
        name: "科教",
      },
      {
        key: "19",
        name: "曲艺",
      },
      {
        key: "20",
        name: "歌舞",
      },
      {
        key: "21",
        name: "财经",
      },
      {
        key: "22",
        name: "汽车",
      },
      {
        key: "23",
        name: "其它",
      },
    ],
  },
  {
    title: "地区",
    content: [
      {
        key: "1",
        name: "全部",
      },
      {
        key: "2",
        name: "大陆",
      },
      {
        key: "3",
        name: "韩国",
      },
      {
        key: "4",
        name: "香港",
      },
      {
        key: "5",
        name: "其它",
      },
    ],
  },
  {
    title: "语言",
    content: [
      {
        key: "1",
        name: "全部",
      },
      {
        key: "2",
        name: "国语",
      },
      {
        key: "3",
        name: "英语",
      },
      {
        key: "4",
        name: "粤语",
      },
      {
        key: "5",
        name: "闽南语",
      },
      {
        key: "6",
        name: "日语",
      },
      {
        key: "7",
        name: "韩语",
      },
      {
        key: "8",
        name: "其它",
      },
    ],
  },
  {
    title: "年份",
    content: [
      {
        key: "1",
        name: "全部",
      },
      {
        key: "2",
        name: `${thisYear}`,
      },
      {
        key: "3",
        name: `${thisYear - 1}`,
      },
      {
        key: "4",
        name: `${thisYear - 2}`,
      },
      {
        key: "5",
        name: `${thisYear - 3}`,
      },
      {
        key: "6",
        name: `${thisYear - 4}`,
      },
      {
        key: "7",
        name: `${thisYear - 5}`,
      },
      {
        key: "8",
        name: `${thisYear - 6}`,
      },
      {
        key: "9",
        name: `${thisYear - 7}`,
      },
      {
        key: "10",
        name: `${thisYear - 8}`,
      },
      {
        key: "11",
        name: `${thisYear - 9}`,
      },
      {
        key: "12",
        name: `${thisYear - 10}`,
      },
      {
        key: "13",
        name: `${thisYear - 11}`,
      },
      {
        key: "14",
        name: `${thisYear - 12}`,
      },
      {
        key: "15",
        name: `${thisYear - 13}`,
      },
      {
        key: "16",
        name: `${thisYear - 14}`,
      },
      {
        key: "17",
        name: `${thisYear - 15}`,
      },
    ],
  },
  {
    title: "排序",
    content: [
      {
        key: "1",
        name: "时间排序",
      },
      {
        key: "2",
        name: "人气排序",
      },
      {
        key: "3",
        name: "评分排序",
      },
    ],
  },
]);

const activeItems = ref(["全部", "全部", "全部", "全部", "时间排序"]);

function changeActiveItems(newItem, deleteIndex) {
  // 删除deleteIndex位置处的元素，并替换为新的元素
  activeItems.value.splice(deleteIndex, 1, newItem);
}
</script>
<template>
  <div class="variety-selectors-container">
    <div
      class="selector-wrapper"
      v-for="selector in varietySelectors"
      :key="selector.title"
    >
      <span class="title">{{ selector.title }}</span>
      <ul>
        <li class="items" v-for="item in selector.content" :key="item.key">
          <span
            @click="
              changeActiveItems(item.name, varietySelectors.indexOf(selector));
              addNewItems(varietySelectors.indexOf(selector), item.name);
              addNewItemToKws();
              $emit('doChangeKws', kws);
            "
            :class="{
              active:
                activeItems[varietySelectors.indexOf(selector)] === item.name,
            }"
            >{{ item.name }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "./varietySelectors.scss";
</style>
