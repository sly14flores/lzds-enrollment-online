<template>
    <LayoutWrapper>
        <Header />
        <div class="p-grid p-jc-center">
            <div class="p-lg-4 p-sm-12 p-mt-6">
                <Card class="card">
                    <template #content>
                        <div class="p-d-flex p-jc-center">
                            <h4 class="p-text-center p-text-bold">Please select status</h4>
                        </div>
                        <hr />
                        <div class="p-d-flex p-jc-center">
                            <div class="p-fluid p-mx-auto" style="width: 80%;">
                                <div class="p-grid p-mb-2">
                                    <div class="p-field-radiobutton p-pl-2">
                                        <RadioButton id="regular" name="regular" value="Regular" v-model="studentStatus" />
                                        <label for="regular" style="line-height: normal;">Old or regular student<br />(LZDS Student)</label>
                                    </div>
                                </div>
                                <div class="p-grid p-mb-2">
                                    <div class="p-field-radiobutton p-pl-2">
                                        <RadioButton id="new" name="new" value="New" v-model="studentStatus" />
                                        <label for="new" style="line-height: normal;">New student<br />(New Nursery / Kindergarten Student)</label>
                                    </div>
                                </div>
                                <div class="p-grid p-mb-2">                
                                    <div class="p-field-radiobutton p-pl-2">
                                        <RadioButton id="transferee" name="transferee" value="Transferee" v-model="studentStatus" />
                                        <label for="transferee">Transferee student</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div class="p-grid p-jc-center">
                            <div class="p-lg-3 p-sm-12 p-xs-12">
                                <Button class="p-button-lg" label="Next" @click="next" />
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
        <Footer />
    </LayoutWrapper>        
</template>

<script>

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast"
import { ref } from "vue"

import LayoutWrapper from '../components/LayoutWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Card from 'primevue/card/sfc'
import Button from 'primevue/button/sfc'
import RadioButton from 'primevue/radiobutton/sfc'

export default {
    setup() {

        const store = useStore()
        const router = useRouter()
        const toast = useToast()

        const studentStatus = ref(null)

        store.dispatch('selections/INIT')
        store.dispatch('students/INIT')

        const next = () => {
            if (studentStatus.value == null) {
                toast.add({severity:'error', summary: 'Student status is required', detail:'Please select student status', life: 3000});
                return
            }
            // store.dispatch('STUDENT_STATUS',studentStatus.value)
            switch (studentStatus.value) {
                case 'Regular':
                    router.push('/query/student')
                break;

                case 'New':
                    router.push('/profile/new')
                    store.dispatch('students/PRIVACY')
                break;

                case 'Transferee':
                    router.push('/profile/transferee')
                    store.dispatch('students/PRIVACY')
                break;
            }
        }

        return {
            studentStatus,
            next
        }

    },
    components: {
        LayoutWrapper,
        Header,
        Footer,
        Card,
        Button,
        RadioButton
    },
    data() {
        return {
            city: null
        }
    },  
}
</script>

<style scoped>

    .card {
        border-top: 4px solid #252a83;
        margin-top: 27%;
    }

    .hl {
        border: 1px solid red;
    }

    .lzds-left {
        text-align: left;
    }

    .lzds-width {
        width: 35%
    }

    .card-mt {
        margin-top: -20%;
    }    

    @media only screen and (max-width: 1200px) {
        .lzds-width {
            width: 35%
        }
        .card-mt {
            margin-top: -20%;
        }
    }

    @media only screen and (max-width: 1024px) {
        .lzds-width {
            width: 40%
        }
        .card-mt {
            margin-top: -50%;
        }  
    }

    @media only screen and (max-width: 768px) {
        .lzds-width {
            width: 50%
        }
        .card-mt {
            margin-top: -20%;
        }
    }

    @media only screen and (max-width: 480px) {
        .lzds-width {
            width: 100%
        }
        .card-mt {
            margin-top: -55%;
        }        
    }

    @media only screen and (max-width: 360) {
        .lzds-width {
            width: 100%
        }
        .card-mt {
            margin-top: 0;
        }        
    }

    @media only screen and (max-width: 320) {
        .lzds-width {
            width: 100%
        }
        .card-mt {
            margin-top: 0;
        }     
    }

    .hl {
        border: 1px solid red
    }

</style>