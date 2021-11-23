<template>
  <div
    class="modal modal-blur fade show"
    id="modal-danger"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
    style="display: block"
  >
    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="progress card-progress" v-if="isLoading">
          <div class="progress-bar progress-bar-indeterminate bg-danger">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <router-link :to="{ name: 'user' }" class="btn-close"></router-link>
        <div class="modal-status bg-danger"></div>
        <div class="modal-body text-center py-4">
          <alert type="danger" :message="failed" v-if="failed"></alert>
          <bi icon="exclamation-triangle" class="text-danger icon-lg mb-2"></bi>
          <h3>Are you sure?</h3>
          <div class="text-muted">
            Do you really want to remove <strong>{{ name }}</strong> from this
            workspace?
          </div>
        </div>
        <div class="modal-footer">
          <div class="w-100">
            <div class="row">
              <div class="col">
                <router-link :to="{ name: 'user' }" class="btn w-100">
                  Cancel
                </router-link>
              </div>
              <div class="col">
                <form @submit.prevent="handleSubmit">
                  <button
                    type="submit"
                    class="btn btn-danger w-100"
                    :class="{ disabled: isLoading }"
                  >
                    Remove
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import alert from "../../components/Alert";
export default {
  name: "User Remove",
  components: { alert },
  props: {
    id: { type: String, default: "" },
    name: { type: String, default: "" },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const isLoading = ref(false);
    const failed = ref("");
    onMounted(() => {
      if (!props.id) {
        router.push({ name: "user" });
      }
    });
    const handleSubmit = () => {
      isLoading.value = true;
      axios
        .delete(`/user/${props.id}`)
        .then(() => {
          emit("updateUser");
          isLoading.value = false;
          router.push({ name: "user" });
        })
        .catch((err) => {
          isLoading.value = false;
          failed.value = err.response.data.message;
        });
    };
    return {
      isLoading,
      handleSubmit,
    };
  },
};
</script>
