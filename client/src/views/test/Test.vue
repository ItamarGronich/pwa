<template>
  <div class="about">
    <h1>This is a Test page</h1>
    {{ test }}
  </div>
</template>

<script>
export default ({
  data() {
    return {
      test: 'jhel',
    };
  },
  mounted() {
    this.fetchMe();
  },
  methods: {
    fetchMe() {
      fetch('/api/dog/1')
        .then((response) => response.json())
        .then((data) => {
          this.test = data;
        });
    },
  },
});
</script>
