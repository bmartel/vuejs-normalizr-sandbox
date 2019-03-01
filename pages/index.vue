<template>
  <section class="">
    <no-ssr> <json-editor :objData="raw" v-model="raw"></json-editor> </no-ssr>
    <pre>{{ preview }}</pre>
  </section>
</template>

<script>
import { mapState } from "vuex";
import resolve from "../schema";

export default {
  data() {
    return {
      raw: {
        tasks: [
          {
            id: "1",
            summary: "A super basic task",
            author: {
              id: "123",
              name: "Paul"
            },
            comments: [
              {
                id: "249",
                content: "Nice post!",
                commenter: {
                  id: "245",
                  name: "Jane"
                }
              },
              {
                id: "250",
                content: "Thanks!",
                commenter: {
                  id: "123",
                  name: "Paul"
                }
              }
            ]
          },
          {
            id: "2",
            summary: "A more advanced task",
            author: {
              id: "123",
              name: "Paul"
            },
            comments: [
              {
                id: "251",
                body: "Your other post was nicer",
                owner: {
                  id: "245",
                  name: "Jane"
                }
              },
              {
                id: "252",
                body: "I am a spammer!",
                owner: {
                  id: "246",
                  name: "Spambot5000"
                }
              }
            ]
          }
        ]
      }
    };
  },
  methods: {},
  computed: {
    schema() {
      return resolve(this.raw);
    },
    preview() {
      return JSON.stringify(this.schema, null, 2);
    }
  }
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #526488;
  letter-spacing: 1px;
  font-size: 6em;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
