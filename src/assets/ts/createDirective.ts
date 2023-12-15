import { createApp } from "vue";

export default function createDirective(Com: any) {
  function append(el: any) {
    const comName = Com.__name;

    el.appendChild(el[comName].instance.$el);
  }

  function remove(el: any) {
    const comName = Com.__name;

    el.removeChild(el[comName].instance.$el);
  }

  // 返回一个自定义指令
  return {
    mounted(el: any, binding: any) {
      // 类似于createApp(App)，然后将app挂载到指定的DOM容器上
      // 在这里基于Loading组件创建app实例后，将其挂载到一个真实DOM元素上，然后将该DOM元素append到要进行loading展示的目标元素上
      const app = createApp(Com);
      const comContainerElem = document.createElement("div");
      const comInstance: any = app.mount(comContainerElem);

      // Com组件名称
      // console.log(Com.__name); // Loading
      // 将Loading组件实例添加到目标元素对象上，方便以后使用，例如进行Loading组件在目标元素上的挂载和移除
      const comName = Com.__name;
      if (!el[comName]) {
        el[comName] = {};
      }
      el[comName].instance = comInstance;

      // 处理使用自定义指令时，传递给指令的参数
      // const direTitle = binding.arg;
      const { title, img } = binding.arg || {};
      // 如果传递参数给指令，表示需要修改Loading中的title文字内容
      // 通过Loading组件实例中的setTitle函数进行修改
      if (title !== undefined && comInstance.setTitle) {
        comInstance.setTitle(title);
      }
      // 修改loading图像地址
      if (img !== undefined && comInstance.setImg) {
        comInstance.setImg(img);
      }

      // 将Loading组件的容器元素append到要进行loading展示的目标元素上
      if (binding.value) {
        append(el);
      }
    },
    updated(el: any, binding: any) {
      // const direTitle = binding.arg;
      const { title, img } = binding.arg || {};
      const comName = Com.__name;

      if (title !== undefined && el[comName].instance.setTitle) {
        el[comName].instance.setTitle(title);
      }
      if (img !== undefined && el[comName].instance.setImg) {
        el[comName].instance.setImg(img);
      }
      // 决定Loading的是否移除或添加
      if (binding.value !== binding.oldValue) {
        if (binding.value === true) {
          append(el);
        } else {
          remove(el);
        }
      }
    },
  };
}
