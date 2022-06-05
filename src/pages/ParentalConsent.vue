<template>
    <LayoutWrapper>
      <TopBar />
        <div class="p-grid p-jc-center p-mt-6">
          <div class="p-lg-9 p-sm-12">
            <Card class="card">
              <template #title>
                <h2 style="text-align: center">Parental Consent</h2>
                <hr />
              </template>
              <template #content>
                <div class="p-fluid p-formgrid p-grid p-mb-2">
                  <div class="p-field p-col-12 p-md-12">
                    <div class="p-field p-col-12 p-md-12">
                      <!-- <vue-pdf-embed :source="lzdsConsentPdf" /> -->
                      <h5 class="p-mb-4" style="text-align: center; line-height: 1.5em;">
                        Please read the Parental Consent and check <strong>"I have read and agree to this Parental Consent"</strong> below
                        <br />
                        After you have agreed, a copy of a Parental Consent will be downloaded to your device.
                        <br />
                        Fill up the consent and email it to <strong>lordofziondivineschool@gmail.com</strong>
                      </h5>
                      <iframe :src="lzdsConsentPdf" width="100%" height="500"></iframe>
                      <div style="text-align: center;" class="field-checkbox p-mt-3">
                          <Checkbox id="agree" v-model="agreed" :binary="true" class="p-mr-3" @change="checkAgree" />
                          <label for="agree" style="font-size: 1.2em; cursor: pointer">I have read and agree to this Parental Consent</label>
                      </div>
                      <a href="/pdf/lzds-parental-consent.pdf" rel="noopener noreferrer" target="_blank" download="parental-consent" id="download" hidden></a>
                    </div>
                  </div>
                </div>
              </template>
              <template #footer>
                <hr />
                <div class="lzds-center p-mt-2 p-mb-4">
                    <Button icon="pi pi-times" label="Back" class="p-button-secondary" @click="back"/>
                    <NextButton :loading="loading" style="margin-left: .5em" @click="next" />
                </div>                        
              </template>
            </Card>
          </div>
        </div>
      <Footer />
    </LayoutWrapper>
</template>

<script>

import LayoutWrapper from '../components/LayoutWrapper'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Card from 'primevue/card/sfc'
import Button from 'primevue/button/sfc'
import NextButton from '../components/NextButton'
import Checkbox from 'primevue/checkbox/sfc';

import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast"

// import VuePdfEmbed from 'vue-pdf-embed'

export default {
  name: "consent",
  components: {
    LayoutWrapper,
    TopBar,
    Footer,
    Card,
    Button,
    NextButton,
    // VuePdfEmbed,
    Checkbox,
  },
  setup() {

    const store = useStore()
    const router = useRouter()
    const toast = useToast()

    console.log(`Status: ${store.state.students.student.student_status}, LRN: ${store.state.students.student.lrn}, STUDENT_ID: ${store.state.students.student.id}`)
    const studentStatus = store.state.students.student.student_status
    // const newStudent = studentStatus == 'New'

    if (store.state.students.student.id===0) {
        router.push('/')
        toast.add({severity:'warn', summary: 'Warning!', detail:'You have been redirected to the first page because you have refreshed the current page. Please do not refresh the current page to avoid losing of information while on session', life: 6000});
    }

    const back = () => {
      router.push('/notice')
    }

    const next = () => {
        if (!agreed.value) {
          toast.add({severity:'error', summary: 'Warning', detail:'Please check "I have read and agree to this Parental Consent"', life: 3000});
          return;
        }
        router.push('/enrollment')
    }

    const lzdsConsentPdf = 'https://cdn.lzds.edu.ph/pdf/lzds-parental-consent-read.pdf'
    const lzdsConsentPdfDownload = 'https://cdn.lzds.edu.ph/pdf/lzds-parental-consent.pdf'

    const agreed = ref(false)

    const checkAgree = () => {

      if (agreed.value) {
        document.getElementById('download').click();
      }

    }

    return {
      back,
      next,
      lzdsConsentPdf,
      lzdsConsentPdfDownload,
      agreed,
      checkAgree,
    }

  },
  computed: {
    loading() {
        return false
    }    
  }
}

</script>

<style scoped>
  h4 {
    line-height: 2.5rem;
  }
  .vue-pdf-embed > div {
    margin-bottom: 8px;
    box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  }
</style>