<template>
  <div class="container mt-3">
    <add-customer-form />
    <customer-list class="mt-3" />
  </div>
</template>

<script>
import AddCustomerForm from '../components/Customer/AddCustomerForm.vue'
import CustomerList from '../components/Customer/CustomerList.vue'
export default {
  components: {
    AddCustomerForm,
    CustomerList,
  }
}
</script>

<style>

</style>
