<template>
    <LayoutWrapper>
        <Header />
        <div class="layout-main">
            <div class="lzds-center">
                <div class="p-mx-auto lzds-width">
                    <Card class="card-mt">
                        <template #title>
                            Please select status
                        </template>                
                        <template #content>
                            <div class="">
                                <div class="p-field-radiobutton p-pl-6">
                                    <RadioButton id="regular" name="regular" value="Regular" v-model="studentStatus" />
                                    <label for="regular">Old or regular student</label>
                                </div>
                                <div class="p-field-radiobutton p-pl-6">
                                    <RadioButton id="new" name="new" value="New" v-model="studentStatus" />
                                    <label for="new">New student</label>
                                </div>                        
                                <div class="p-field-radiobutton p-pl-6">
                                    <RadioButton id="transferee" name="transferee" value="Transferee" v-model="studentStatus" />
                                    <label for="transferee">Transferee student</label>
                                </div>
                            </div>
                        </template>
                        <template #footer>
                            <Button class="p-button-lg" label="Next" @click="next" />
                        </template>
                    </Card>         
                </div>
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

        store.dispatch('students/INIT')

        const next = () => {
            if (studentStatus.value == null) {
                toast.add({severity:'error', summary: 'Student status is required', detail:'Please select student status', life: 3000});
                return
            }
            store.dispatch('STUDENT_STATUS',studentStatus.value)
            switch (studentStatus.value) {
                case 'Regular':
                    router.push('/enroll')
                break;

                case 'New':
                    router.push('/profile/new')
                break;

                case 'Transferee':
                    router.push('/profile/new')
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

</style>