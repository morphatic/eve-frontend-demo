<template>
  <div>
    <h1>People</h1>
    <ul>
      <li v-for="p in people" :key="p._id">
        <a :href="`/people/${p._id}`">
        {{ p.firstname }} {{ p.lastname }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPeople } from '@/services/people'
export default {
  name: 'HelloWorld',
  data: () => ({
    people: [],
  }),
  mounted () {
    getPeople().then(people => {
      this.people = people._items
    })
  }
}
</script>
