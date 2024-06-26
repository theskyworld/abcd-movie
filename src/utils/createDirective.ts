import { createApp, ref } from "vue";
import Loading from "@/components/base/loading/Loading.vue";
import LoadingSkeleton from "@/components/base/loadingSkeleton/LoadingSkeleton.vue";

export default function createDirective() {
  // 备选的作为loading的组件，根据使用指令时传入的参数来决定使用哪个组件
  const Coms = ref([Loading, LoadingSkeleton]);

  function append(el: any, Com: any) {
    const comName = Com.__name;

    el.appendChild(el[comName].instance.$el);
  }

  function remove(el: any, Com: any) {
    const comName = Com.__name;

    el.removeChild(el[comName].instance.$el);
  }

  // 返回一个自定义指令
  return {
    mounted(el: any, binding: any) {
      // 先处理指令参数
      const loadingComName = binding.arg || {};
      // 根据指令参数的值在Coms中寻找对应的组件
      if (loadingComName) {
        const Com = Coms.value.find((item: any) => {
          if (item.__name === loadingComName) {
            return item;
          }
        });

        // 进行组件的挂载
        // 类似于createApp(App)，然后将app挂载到指定的DOM容器上
        // 在这里基于Loading组件创建app实例后，将其挂载到一个真实DOM元素上，然后将该DOM元素append到要进行loading展示的目标元素上
        const app = createApp(Com!);
        const comContainerElem = document.createElement("div");
        const comInstance: any = app.mount(comContainerElem);

        // Com组件名称
        // console.log(Com.__name);
        // 将Loading组件实例添加到目标元素对象上，方便以后使用，例如进行Loading组件在目标元素上的挂载和移除
        const comName: string = Com!.__name || "";
        if (!el[comName]) {
          el[comName] = {};
        }
        el[comName].instance = comInstance;

        // 将Loading组件的容器元素append到要进行loading展示的目标元素上

        if (binding.value) {
          append(el, Com);
        }
      }
    },
    updated(el: any, binding: any) {
      const loadingComName = binding.arg || {};

      if (loadingComName) {
        const Com = Coms.value.find((item: any) => {
          if (item.__name === loadingComName) {
            return item;
          }
        });
        const comName = Com!.__name;

        // 决定Loading的是否移除或添加
        if (binding.value !== binding.oldValue) {
          if (binding.value === true) {
            append(el, Com);
          } else {
            remove(el, Com);
          }
        }
      }
    },
  };
}
