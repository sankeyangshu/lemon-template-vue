import { useDebounceFn, useResizeObserver, type UseResizeObserverReturn } from '@vueuse/core';
import { computed, onMounted, onUnmounted, ref, watch, type Ref } from 'vue';
import echarts from '@/plugins/ECharts';
import { useSettingStore } from '@/store/modules/setting';
import type { EChartsCoreOption, EChartsInitOpts, SetOptionOpts } from 'echarts';

interface ConfigPropsType {
  /**
   * init函数基本配置
   * @see https://echarts.apache.org/zh/api.html#echarts.init
   */
  echartsInitOpts?: EChartsInitOpts;
  /**
   * 是否开启过渡动画
   * @default true
   */
  animation?: boolean;
  /**
   * 过渡动画持续时间(ms)
   * @default 300
   */
  animationDuration?: number;
  /**
   * 是否自动调整大小
   * @default true
   */
  autoResize?: boolean;
  /**
   * 防抖时间(ms)
   * @default 300
   */
  resizeDebounceWait?: number;
  /**
   * 最大防抖时间(ms)
   * @default 500
   */
  maxResizeDebounceWait?: number;
  /**
   * 主题模式
   * @default 'default'
   */
  themeMode?: 'dark' | 'light' | 'default';
}

/**
 * 使用ECharts图表
 * @param {Ref<HTMLDivElement | HTMLCanvasElement | null>} dom - 图表容器
 * @param {ConfigPropsType} config - 配置项
 * @returns 返回图表实例
 */
export const useECharts = (
  dom: Ref<HTMLDivElement | HTMLCanvasElement | null>,
  config: ConfigPropsType = {}
) => {
  const {
    echartsInitOpts,
    animation = true,
    animationDuration = 300,
    autoResize = true,
    resizeDebounceWait = 300,
    maxResizeDebounceWait = 500,
    themeMode = 'default',
  } = config;

  const settingStore = useSettingStore();

  /** 当前主题 */
  const currentTheme = computed(() => {
    return themeMode === 'default' ? settingStore.darkMode : themeMode;
  });

  /** 图表实例 */
  let chartInstance: echarts.ECharts | null = null;

  /** 图表尺寸变化监听 */
  let resizeObserver: UseResizeObserverReturn | null = null;

  /** 图表配置项 */
  const chartOptions = ref<EChartsCoreOption | null>(null);

  /** Loading 状态控制 */
  const toggleLoading = (show: boolean) => {
    if (!chartInstance) return;
    if (show) {
      chartInstance.showLoading('default');
    } else {
      chartInstance.hideLoading();
    }
  };

  /** 图表初始化 */
  const initChart = async () => {
    if (!dom.value || echarts.getInstanceByDom(dom.value)) return;
    chartInstance = echarts.init(dom.value, currentTheme.value, echartsInitOpts);
    toggleLoading(true);
  };

  /** 图表销毁 */
  const destroyChart = () => {
    if (autoResize && resizeObserver) {
      resizeObserver.stop();
      resizeObserver = null;
    }

    if (chartInstance) {
      chartInstance.dispose();
      chartInstance = null;
    }
  };

  /**
   * 图表渲染
   * @param options 图表数据集
   * @param opts 图表配置项
   */
  const renderChart = (options: EChartsCoreOption, opts: SetOptionOpts = { notMerge: true }) => {
    if (!chartInstance) return;
    const finalOptions = { ...options, backgroundColor: 'transparent' };
    chartInstance.setOption(finalOptions, opts);
    chartOptions.value = finalOptions;
    toggleLoading(false);
  };

  /** 调整图表尺寸 */
  const resize = () => {
    if (!chartInstance) return;
    chartInstance.resize({
      animation: {
        duration: animation ? animationDuration : 0,
      },
    });
  };

  /** 防抖处理的resize */
  const resizeDebounceHandler = useDebounceFn(resize, resizeDebounceWait, {
    maxWait: maxResizeDebounceWait,
  });

  /** 重置图表 */
  const resetChart = () => {
    if (!chartInstance) return;
    chartInstance.clear();
  };

  // 监听主题变化，自动重新初始化图表
  watch(currentTheme, async () => {
    if (!chartInstance) return;
    destroyChart();
    await initChart();

    if (chartOptions.value) {
      renderChart(chartOptions.value);
    }
  });

  /** 获取图表实例 */
  const getChartInstance = () => chartInstance;

  // 组件实例被挂载之后
  onMounted(() => {
    initChart();
    if (autoResize) {
      resizeObserver = useResizeObserver(dom, resizeDebounceHandler);
    }
  });

  // 组件实例被卸载之后
  onUnmounted(() => {
    destroyChart();
  });

  return {
    getChartInstance,
    renderChart,
    resetChart,
    toggleLoading,
  };
};
