<template>
  <div class="col-md-6 col-xl-3" v-for="i in 4" :key="i">
    <div class="card">
      <div class="card-body">
        <div class="row mb-2 justify-content-between">
          <div class="col-4">
            <div class="mt-0">
              <skeletor />
            </div>
          </div>
          <div class="col-2">
            <skeletor />
          </div>
        </div>
        <div class="text-center">
          <div class="mb-3">
            <skeletor circle size="7rem" />
          </div>
          <div class="card-title mb-1 text-center">
            <skeletor heading />
          </div>
          <skeletor center width="80%" />
        </div>
      </div>
      <div class="card-footer">
        <div class="row text-center">
          <div class="col">
            <div class="small">
              <skeletor />
            </div>
            <div class="h3">
              <skeletor />
            </div>
          </div>
          <div class="col">
            <div class="small">
              <skeletor />
            </div>
            <div class="h3">
              <skeletor />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import skeletor from "../../components/Skeletor";

export default {
  components: { skeletor },
};
</script>
