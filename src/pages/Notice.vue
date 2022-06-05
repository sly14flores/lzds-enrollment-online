<template>
    <LayoutWrapper>
        <TopBar />
            <div class="p-grid p-jc-center p-mt-6">
              <div class="p-lg-9 p-sm-12">
                  <Card class="card">
                      <template #title>
                          <h2>Note</h2>
                          <hr />
                      </template>
                      <template #content>
                          <div class="p-fluid p-formgrid p-grid p-mb-2">
                              <div class="p-field p-col-12 p-md-12">
                                  <div class="p-field p-col-12 p-md-12">
                                    <ul>
                                      <li><h4>Filipino citizen students enrolled in Grade 7-10 will apply for ESC grant to receive Php 9,000 and be deducted upon enrolment from their school fees.</h4></li>
                                      <li><h4>Grade 10 completers from Public Schools will be automatically be qualified in the Voucher Program (VP) subsidy of the government with the amount grant of Php 17,500 and additional Php 1,000 scholarship grant from LZDS to be deducted upon enrolment from their school fees.</h4></li>
                                      <li><h4>Grade 10 completers and ESC grantees from Private Schools will automatically be qualified in the Voucher Program (VP) subsidy of the government with the amount of Php 14,000 to be deducted upon enrolment from their school fees.</h4></li>
                                    </ul>
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

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast"

export default {
  name: "notice",
  components: {
    LayoutWrapper,
    TopBar,
    Footer,
    Card,
    Button,
    NextButton,
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
        if (studentStatus == 'New') {
            router.push('/profile/new')
        }
        if (studentStatus == 'Transferee') {
            router.push('/profile/transferee')
        }
        if (studentStatus == null || studentStatus == 'Regular') {
            router.push('/student/info')
        }
    }

    const next = () => {
        router.push('/consent')
    }    

    return {
      back,
      next
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
</style>