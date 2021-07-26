<template>
  <div class="p-4">
    <div class="mb-3">
      <b-link to="/profile" variant="link">Back</b-link>
    </div>

    <b-card
      bg-variant="light"
      text-variant="primary"
      :title="fullname"
      v-if="profileDetail"
    >
      <div class="d-flex">
        <b-img
          :src="profileDetail.profileImage"
          rounded
          alt="Profile"
          width="80"
          height="80"
          class="mr-5"
        />
        <b-card-text>
          <div class="mb-2">
            <span class="text-secondary">Phone Number:</span>
            <span class="text-dark font-weight-bold">
              {{ profileDetail.phoneNumber }}
            </span>
          </div>

          <div>
            <span class="text-secondary">Address:</span>
            <span class="text-dark font-weight-bold">
              {{ profileDetail.address }}
            </span>
          </div>
        </b-card-text>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileId: "",
      profileDetail: null
    };
  },

  computed: {
    fullname() {
      return this.profileDetail
        ? this.profileDetail.firstName + " " + this.profileDetail.lastName
        : "";
    }
  },

  mounted() {
    this.profileId = this.$route.params.id;
    if (this.profileId) {
      this.$store
        .dispatch("app/fetchProfileDetail", this.profileId)
        .then(res => {
          this.profileDetail = res;
        });
    }
  }
};
</script>

<style></style>
