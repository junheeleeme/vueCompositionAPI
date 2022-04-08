<template>
  
    123

</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref();

    const onPanelChange = (value, mode) => {
      console.log(value, mode);
    };

    const getMonths = value => {
      const localeData = value.localeData();
      const months = [];

      for (let i = 0; i < 12; i++) {
        months.push(localeData.monthsShort(value.month(i)));
      }

      return months;
    };

    const getYears = value => {
      const year = value.year();
      const years = [];

      for (let i = year - 10; i < year + 10; i += 1) {
        years.push(i);
      }

      return years;
    };

    return {
      value,
      onPanelChange,
      getMonths,
      getYears,
    };
  },

});
</script>
