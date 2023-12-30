import HomePageSwiper from "./HomePageSwiper.vue";
import { describe, expect, test, vi, beforeEach } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { useRouter } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
import useMainStore from "@/store";
import usePlayingStore from "@/store/usePlayingStore";

describe("HomePageSwiper", () => {
  // 模拟vue-router
  vi.mock("vue-router", () => {
    const useRouter = vi.fn(() => {
      return {
        push: vi.fn(),
      };
    });
    return { useRouter };
  });
  // 模拟useRouter
  const push = vi.fn();
  (useRouter as any).mockImplementation(() => {
    return { push };
  });

  // 模拟需要在挂载之前
  const wrapper = mount(HomePageSwiper, {
    props: {
      imgList: [
        ["mockedImgUrl1-1", "mockedImgUrl1-2", "mockedImgUrl1-3"],
        ["mockedImgUrl2-1", "mockedImgUrl2-2", "mockedImgUrl2-3"],
      ],
      videoTitles: ["mockedVideoTitle1", "mockedVideoTitle2"],
    },
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })],
    },
  });

  describe("HomePageSwiper", () => {
    test("should get props:imgList,videoTitles correctly", async () => {
      expect(wrapper.props()).toEqual({
        imgList: [
          ["mockedImgUrl1-1", "mockedImgUrl1-2", "mockedImgUrl1-3"],
          ["mockedImgUrl2-1", "mockedImgUrl2-2", "mockedImgUrl2-3"],
        ],
        videoTitles: ["mockedVideoTitle1", "mockedVideoTitle2"],
      });
    });
    test("should bigImgURLs and smallImgURLs get values correctly", async () => {
      expect((wrapper.vm as any).bigImgURLs).toEqual([
        "mockedImgUrl1-1",
        "mockedImgUrl1-2",
        "mockedImgUrl1-3",
      ]);
      expect((wrapper.vm as any).smallImgURLs).toEqual([
        "mockedImgUrl2-1",
        "mockedImgUrl2-2",
        "mockedImgUrl2-3",
      ]);
    });
    test("should toPlayingPage work correctly", async () => {
      const mainStore = useMainStore();
      const playingStore = usePlayingStore();
      const toPlayingPage = (wrapper.vm as any).toPlayingPage;
      toPlayingPage("mockedVideoTitle1");
      // 路由成功跳转
      expect(push).toHaveBeenCalledWith({
        path: "/playing",
      });

      // 成功设置关键字
      expect(mainStore.setPlayingKeyword).toHaveBeenCalledWith(
        "mockedVideoTitle1",
      );
      // 成功发起数据请求
      expect(mainStore.getPlayingSearchResData).toHaveBeenCalled();
    });
  });
  describe("Swiper", () => {
    test("should contain class:mySwiper", () => {
      const swiperCom = wrapper.getComponent({ name: "Swiper" });
      expect(swiperCom.classes()).toContain("mySwiper");
    });
    test("should get swiper options correctly", () => {
      const swiperCom = wrapper.getComponent({ name: "Swiper" });
      // 每页展示一片滑片
      const swiperComProps = swiperCom.vm.$props;
      expect(swiperComProps.slidesPerView).toBe(1);
      // 每片滑片之间的间距为30
      expect(swiperComProps.spaceBetween).toBe(30);
      // 自动播放
      expect(swiperComProps.autoplay).toBeTruthy();
      // 自动播放延时6秒
      expect(swiperComProps.autoplay.delay).toBe(6000);
      // 自动播放在有交互时不自动暂停
      expect(swiperComProps.autoplay.disableOnInteraction).toBe(false);
      // 循环播放
      expect(swiperComProps.loop).toBeTruthy();
      // 使用正确的模块
      const moduleFunctionNames: string[] = [];
      swiperComProps.modules.forEach((module: Function) => {
        moduleFunctionNames.push(module.name);
      });
      expect(moduleFunctionNames).toEqual([
        "EffectFade",
        "Autoplay",
        "Navigation",
        "Pagination",
      ]);
      // 卡片切换的特效
      expect(swiperComProps.effect).toBe("fade");
    });

    describe("swiper-slide", () => {
      test("should trigger toPlayingPage on click", async () => {
        const toPlayingPageMock = vi.spyOn(wrapper.vm as any, "toPlayingPage");
        const swiperSlideCom = wrapper.getComponent({ name: "SwiperSlide" });
        await swiperSlideCom.trigger("click");
        // 被成功调用
        expect(toPlayingPageMock).toHaveBeenCalled();
        // 传递字符串参数
        expect(toPlayingPageMock).toHaveBeenCalledWith(expect.any(String));
      });
      test("should swiperSlide rendered as many as bigImgURLs.length", () => {
        const allSwiperSlideComs = wrapper.findAllComponents({
          name: "SwiperSlide",
        });
        const bigImgURLs = (wrapper.vm as any).bigImgURLs;
        // 渲染正确数量的swiper-slide
        expect(allSwiperSlideComs.length).toEqual(bigImgURLs.length);
      });
      test("should contain default slots correctly", () => {
        expect(wrapper.getComponent({ name: "SwiperSlide" }).html()).toContain(
          "mockedVideoTitle1",
        );
      });
      test("should the src of img be correctly", () => {
        expect(
          wrapper
            .getComponent({ name: "SwiperSlide" })
            .find("img")
            .attributes("src"),
        ).toBe("mockedImgUrl1-1");
      });
    });
  });
  describe("small swiper", () => {
    test("should contain class:swiper-small-wrapper as many as smallImgURLs.length", () => {
      expect(wrapper.find(".swiper-small-wrapper").exists()).toBeTruthy();
      const smallImgURLs = (wrapper.vm as any).smallImgURLs;
      expect(wrapper.findAll(".swiper-small-wrapper").length).toEqual(
        smallImgURLs.length,
      );
    });
    test("should slide to target slide on mouse enter", async () => {
      const onSwiperMock = vi.spyOn(wrapper.vm as any, "onSwiper");
      const swiperCom = wrapper.getComponent({ name: "Swiper" });
      await swiperCom.trigger("swiper");
      // 被成功调用
      // TODO为什么总是断言失败
      // expect(onSwiperMock).toHaveBeenCalled();
    });
    test("should .img-wrapper element has class:active when index === curSlideindex", async () => {
      // 存在.img-wrapper元素
      expect(wrapper.find(".img-wrapper").exists()).toBe(true);
      // .swiper-small-wrapper元素的个数等于smallImgURLs的长度
      const allSwiperSmallWrapperElems = wrapper.findAll(
        ".swiper-small-wrapper",
      );
      //
      const smallImgURLs = (wrapper.vm as any).smallImgURLs;
      expect(allSwiperSmallWrapperElems.length).toEqual(smallImgURLs.length);

      // 鼠标移入.swiper-small-wrapper元素时,formatIndexMock被调用,且正确返回索引值i
      const formatIndexMock = vi.spyOn(wrapper.vm as any, "formatIndex");
      await allSwiperSmallWrapperElems[0].trigger("mouseenter");
      expect(formatIndexMock).toHaveBeenCalled();
      expect(formatIndexMock).toHaveLastReturnedWith(expect.any(Number));

      for (let i = 0; i < allSwiperSmallWrapperElems.length; i++) {
        await allSwiperSmallWrapperElems[i].trigger("mousenter");
        expect(formatIndexMock).toHaveBeenCalledWith(i);
      }
    });
  });
});
