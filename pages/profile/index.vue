<template>
  <div class="p-4">
    <h3>Profile list</h3>
    <b-table
      outlined
      striped
      hover
      head-variant="light"
      :items="profileList"
      :fields="[
        'profileImage',
        'firstName',
        'lastName',
        'phoneNumber',
        'address',
        'actions'
      ]"
    >
      <template #cell(profileImage)="profileImage">
        <b-img
          :src="profileImage.value"
          rounded
          alt="Profile"
          width="60"
          height="60"
        ></b-img>
      </template>
      <template #cell(actions)="data">
        <div>
          <b-link :to="`/profile/${data.item.id}`">View Detail</b-link>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileList: []
    };
  },

  mounted() {
    this.$store.dispatch("app/fetchProfiles").then(res => {
      this.profileList = res;
    });
  }
};
</script>

<style></style>
