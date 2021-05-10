<template>
  <div class="about">
    <div>
      <input type="number" v-model="ownerId" />
    </div>
    <img :src="dogInfo.img" />
    <p>{{ dogInfo.name }}</p>
    <p>{{ ownerInfo.firstName }} {{ ownerInfo.lastName }} ({{ ownerInfo.email }})</p>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      ownerId: null,
      ownerInfo: {},
      dogInfo: {},
    };
  },
  watch: {
    ownerId() {
      this.fetchDog();
      this.fetchOwner();
    },
  },
  methods: {
    clear() {
      this.ownerInfo = {};
      this.dogInfo = {};
    },
    fetchDog() {
      if (!this.ownerId) {
        this.clear();
        return;
      }
      fetch(`/api/dog/${this.ownerId}`)
        .then((response) => response.json())
        .then((data) => {
          this.dogInfo = data;
          this.dogInfo.img = `/api/images/dogs/${data.name}.jpg`;
        })
        .catch((error) => {
          console.error(error);
          this.clear();
        });
    },
    fetchOwner() {
      if (!this.ownerId) {
        this.clear();
        return;
      }
      fetch(`/api/owner/${this.ownerId}`)
        .then((response) => response.json())
        .then((data) => {
          this.ownerInfo = data;
        })
        .catch((error) => {
          console.error(error);
          this.clear();
        });
    },
  },
});
</script>
