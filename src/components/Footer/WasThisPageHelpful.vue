<template lang="html">
  <div id="WasThisPageHelpful" class="bg-light py-5 v-card" aria-describedby="WasThisPageHelpfulHeading">
    <div class="container">
      <form action="https://www.formstack.com/forms/index.php" target="_blank" method="post" enctype="multipart/form-data" class="text-center">

        <fieldset>
          <!--  -->
          <input type="hidden" name="form" value="2443653" />
          <input type="hidden" name="viewkey" value="cePLhPMPWT" />
          <input type="hidden" name="hidden_fields" id="hidden_fields2443653" value="" />
          <input type="hidden" name="_submit" value="1" />
          <input type="hidden" name="incomplete" id="incomplete2443653" value="" />
          <input type="hidden" name="incomplete_password" id="incomplete_password2443653" />
          <input type="hidden" name="style_version" value="3" />
          <input type="hidden" id="viewparam" name="viewparam" value="685268" />

          <legend class="border-0 m-0">
            <p class="h5 font-weight-bold" id="WasThisPageHelpfulHeading">
              Was this page helpful?
            </p>
          </legend>

          <div class="custom-control custom-radio custom-control-inline">
            <input v-model="wasItHelpful" class="custom-control-input" type="radio" name="field44813009" id="field44813009_1" value="Yes" required>
            <label class="custom-control-label" for="field44813009_1">Yes</label>
          </div>

          <div class="custom-control custom-radio custom-control-inline">
            <input v-model="wasItHelpful" class="custom-control-input" type="radio" name="field44813009" id="field44813009_2" value="No" required>
            <label class="custom-control-label" for="field44813009_2">No</label>
          </div>

          <div v-if="showComments" class="form-group">
            <hr>
            <label for="field44813218" class="font-weight-bold">Your Feedback:</label>
            <textarea v-model="comments" class="form-control" id="field44813218" name="field44813218" :required="showComments"></textarea>
            <div class="small form-text text-muted">
              <p>
                Your feedback will be used to improve the County’s website. This form is not for emergencies or individual requests. To report problems or make service requests visit the <a href="https://service.hillsboroughcounty.org/311/" target="_blank">Customer Service Center's website</a>.
              </p>
              <p>
                All information submitted by this form or via email becomes a public record to the extent provided by law.
              </p>
            </div>
          </div>

          <input v-model="page" type="hidden" id="field44813452" name="field44813452">

          <div class="mt-2">
            <input type="submit" class="btn btn-outline-primary" value="Submit Feedback">
          </div>

        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    wasItHelpful: null,
    comments: null,
    page: window.location.href
  }),
  computed: {
    showComments() {
      return (this.wasItHelpful == "No")
    }
  }
}
</script>
