<template>
  <div>
    Booking 
  </div>
  </template>

<script>
  import axios from 'axios'
export default {
  name: 'Booking',
  data() {
    return {
      meetingRooms: []
    }
  },
  methods: {
    async getRooms() {
      const res = await axios.get('http://localhost:3000/meetingRooms')
    }
  },
  created() {
    this.getRooms()
  }
}
</script>

<style>

</style>