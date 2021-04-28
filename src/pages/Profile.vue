<template>
    <LayoutWrapper>
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <Card>
                    <template #title>
                        Student Profile
                    </template>
                    <template #content>
                        <hr>
                        <form autocomplete="off">
                            <div class="p-fluid p-formgrid p-grid">
                                <div class="p-field p-col-3">
                                    <label for="firstname">LRN</label>
                                    <InputText type="text" />
                                </div>
                            </div>
                            <div class="p-fluid p-formgrid p-grid">
                                <div class="p-field p-col">
                                    <label>Last name</label>
                                    <InputText type="text" />
                                </div>
                                <div class="p-field p-col">
                                    <label>First name</label>
                                    <InputText type="text" />
                                </div>
                                <div class="p-field p-col">
                                    <label>Middle name</label>
                                    <InputText type="text" />
                                </div>                                                                              
                            </div>
                            <div class="p-fluid p-formgrid p-grid">
                                <div class="p-field p-col">
                                    <label>Extension name</label>
                                    <InputText type="text" />
                                </div>                                 
                                <div class="p-field p-col">
                                    <label>Gender</label>
                                    <Dropdown v-model="gender" :options="genders" optionLabel="name" optionValue="id" placeholder="Select gender" />
                                </div>                                 
                                <div class="p-field p-col">
                                    <label>Birthdate</label>
                                    <InputText type="date" />
                                </div>                              
                            </div>
                            <div class="p-fluid p-formgrid p-grid">
                                <div class="p-field p-col-4">
                                    <label>Are you a member of indigent group</label>
                                    <div class="p-formgroup-inline">
                                        <div class="p-field-checkbox">
                                            <RadioButton id="indigent_no" name="indigent" :value="false" v-model="indigent" />
                                            <label for="indigent_no">No</label>
                                        </div>
                                        <div class="p-field-checkbox">
                                            <RadioButton id="indigent_yes" name="indigent" :value="true" v-model="indigent" />
                                            <label for="indigent_yes">Yes</label>
                                        </div>
                                    </div>                                    
                                </div>
                                <div class="p-field p-col-4">
                                    <label>Indigenous Group</label>
                                    <Dropdown v-model="indigenous" :options="indigenousGroups" optionLabel="name" optionValue="id" placeholder="Select indigenous group" :filter="true" :disabled="!indigent" />
                                </div>
                                <div class="p-field p-col-4">
                                    <label>Mother Tonque</label>
                                    <Dropdown v-model="mother_tongue" :options="dialects" optionLabel="name" optionValue="id" placeholder="Select dialect" :filter="true" />
                                </div>                                                                                                                           
                            </div>                            
                            <div class="p-fluid p-formgrid p-grid">
                                <div class="p-field p-col-4">
                                    <label>Province</label>
                                    <Dropdown v-model="province" :options="provinces" optionLabel="name" optionValue="code" placeholder="Select province" :filter="true" @change="fetchCities" />
                                </div>
                                <div class="p-field p-col-4">
                                    <label>Municipality/City</label>
                                    <Dropdown v-model="city" :options="cities" optionLabel="name" optionValue="code" placeholder="Select municipality/city" :filter="true" @change="fetchBarangays" />
                                </div>
                                <div class="p-field p-col-4">
                                    <label>Barangay</label>
                                    <Dropdown v-model="barangay" :options="barangays" optionLabel="name" optionValue="code" placeholder="Select barangay" :filter="true" />
                                </div>
                            </div>
                            <div class="p-fluid p-formgrid p-grid">                                                                                          
                                <div class="p-field p-col">
                                    <label>House No / Bldg / Subdivision</label>
                                    <InputText type="text" />
                                </div>
                                <div class="p-field p-col">
                                    <label>Zip Code</label>
                                    <InputText type="text" />
                                </div>
                                <div class="p-field p-col">
                                    <label>Contact No</label>
                                    <InputText type="text" />
                                </div>
                                <div class="p-field p-col">
                                    <label>Email Address</label>
                                    <InputText type="text" />
                                </div>                                                                                                                                                                                   
                            </div>
                            <div class="p-fluid p-formgrid p-grid">
                                <div class="p-field p-col">
                                    <label>Relationship</label>
                                    <Dropdown v-model="relationship" :options="relationships" optionLabel="name" optionValue="id" placeholder="Select relationship" />
                                </div>
                                <div class="p-field p-col">
                                    <label>Last name</label>
                                    <InputText type="text" />
                                </div>
                                <div class="p-field p-col">
                                    <label>First name</label>
                                    <InputText type="text" />
                                </div>
                                <div class="p-field p-col">
                                    <label>Middle name</label>
                                    <InputText type="text" />
                                </div>                                                          
                            </div>
                            <div class="p-fluid p-formgrid p-grid">
                                <div class="p-field p-col-3">
                                    <label>Contach No</label>
                                    <InputText type="text" />
                                </div>                                 
                            </div>
                        </form>                  
                    </template>
                    <template #footer>
                        <div class="lzds-center">
                            <Button icon="pi pi-times" label="Back" class="p-button-secondary" />
                            <Button icon="pi pi-check" label="Next" style="margin-left: .5em" />                        
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
import { ref } from 'vue'

import LayoutWrapper from '../components/LayoutWrapper'
import Footer from '../components/Footer'

import Card from 'primevue/card/sfc'
import Button from 'primevue/button/sfc'
import RadioButton from 'primevue/radiobutton/sfc'
import InputText from 'primevue/inputtext/sfc';
import Dropdown from 'primevue/dropdown/sfc';

export default {
    components: {
        LayoutWrapper,
        Footer,
        Card,
        Button,
        RadioButton,
        InputText,
        Dropdown
    },    
    setup() {

        const store = useStore()
        const router = useRouter()
        const toast = useToast()

        console.log(store.state.studentStatus)
        // store.dispatch('selections/REGIONS')
        store.dispatch('selections/PROVINCES',{code: '01'})
        store.dispatch('selections/INDIGENOUS_GROUPS')
        store.dispatch('selections/DIALECTS')

        // if (store.state.studentStatus) {
        //     toast.add({severity:'error', summary: 'Student status is required', detail:'Please select student status', life: 3000});
        //     router.push('/')
        // }

        const gender = ref(null)
        const province = ref(null)
        const city = ref(null)
        const barangay = ref(null)
        const indigenous = ref(null)
        const mother_tongue = ref(null)
        const relationship = ref(null)
        const indigent = ref(false)

        const fetchCities = () => {
            store.dispatch('selections/CITIES',{code: province.value})
        }

        const fetchBarangays = () => {
            store.dispatch('selections/BARANGAYS',{code: city.value})
        }

        return {
            gender,
            province,
            fetchCities,
            city,
            fetchBarangays,
            barangay,
            indigenous,
            mother_tongue,
            relationship,
            indigent
        }

    },
    data() {
        return {
            genders: [
                {id: 'Male', name: 'Male'},
                {id: 'Female', name: 'Female'},                
            ],
            relationships: [
                {id: 'Father', name: 'Father'},
                {id: 'Mother', name: 'Mother'},
                {id: 'Guardian', name: 'Guardian'}
            ]            
        }
    },
    computed: {
        // regions() {
        //     return this.$store.state.selections.regions
        // }
        provinces() {
            return this.$store.state.selections.provinces
        },
        cities() {
            return this.$store.state.selections.cities
        },
        barangays() {
            return this.$store.state.selections.barangays
        },
        indigenousGroups() {
            return this.$store.state.selections.indigenousGroups
        },
        dialects() {
            return this.$store.state.selections.dialects
        }
    }
}
</script>

<style scoped>

    .lzds-width {
        width: 80%;
    }

    @media only screen and (max-width: 1200px) {
        .lzds-width {
            width: 80%
        }
    }

    @media only screen and (max-width: 1024px) {
        .lzds-width {
            width: 80%
        }
    }

    @media only screen and (max-width: 768px) {
        .lzds-width {
            width: 90%
        }
    }

    @media only screen and (max-width: 480px) {
        .lzds-width {
            width: 100%
        }      
    }

    @media only screen and (max-width: 360) {
        .lzds-width {
            width: 100%
        }      
    }

    @media only screen and (max-width: 320) {
        .lzds-width {
            width: 100%
        }    
    }

</style>