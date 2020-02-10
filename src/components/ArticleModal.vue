<template>
  <div
    class="modal fade bd-example-modal-lg"
    v-bind:id="'article_' + index"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ data.title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ data.abstract }}</p>
        </div>
        <div class="modal-footer">
          <a class="btn btn-primary" v-bind:href="data.url" role="button">Link</a>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "index"]
};
</script>