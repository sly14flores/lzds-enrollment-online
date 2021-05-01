<template>
    <LayoutWrapper>
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <form @submit="onSubmit">
                    <Card class="card">
                        <template #title>
                            Student Profile
                        </template>
                        <template #content>
                            <hr />
                                <h5><i class="pi pi-book"></i> Academic Info</h5>
                            <hr />
                            <div class="p-fluid p-formgrid p-grid p-mb-2">
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">LRN</label>
                                    <InputText type="text" v-model="lrn" :class="{'p-invalid': lrnError}" />
                                    <small class="p-error">{{ lrnError }}</small>                                  
                                </div>
                                <div class="p-field p-col-12 p-md-3">
                                    <label class="p-text-bold">ESC Voucher Grantee</label>
                                    <div class="p-formgroup-inline p-mt-2">
                                        <div class="p-field-checkbox">
                                            <RadioButton id="escNo" name="esc_voucher_grantee" :value="false" v-model="esc_voucher_grantee" :class="{'p-invalid': escError}" />
                                            <label for="escNo">No</label>
                                        </div>
                                        <div class="p-field-checkbox">
                                            <RadioButton id="escYes" name="esc_voucher_grantee" :value="true" v-model="esc_voucher_grantee" :class="{'p-invalid': escError}" />
                                            <label for="escYes">Yes</label>
                                        </div>
                                    </div>
                                    <small class="p-error">{{ escError }}</small>
                                </div>
                            </div>
                            <h5><i class="pi pi-user"></i> Basic Info</h5>
                            <hr />
                            <div class="p-fluid p-formgrid p-grid p-mb-2">
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Last name</label>
                                    <InputText type="text" v-model="lastname" :class="{'p-invalid': lastnameError}" />
                                    <small class="p-error">{{ lastnameError }}</small>
                                </div>
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">First name</label>
                                    <InputText type="text" v-model="firstname" :class="{'p-invalid': firstnameError}" />
                                    <small class="p-error">{{ firstnameError }}</small>
                                </div>
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Middle name</label>
                                    <InputText type="text" v-model="middlename" />
                                </div>                                                                              
                            </div>
                            <div class="p-fluid p-formgrid p-grid p-mb-2">
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Extension name</label>
                                    <InputText type="text" v-model="ext_name" />
                                </div>                                 
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Gender</label>
                                    <div class="p-formgroup-inline">
                                        <div class="p-field-checkbox">
                                            <RadioButton id="Male" name="gender" value="Male" v-model="gender" :class="{'p-invalid': genderError}" />
                                            <label for="Male">Male</label>
                                        </div>
                                        <div class="p-field-checkbox">
                                            <RadioButton id="Female" name="gender" value="Female" v-model="gender" :class="{'p-invalid': genderError}" />
                                            <label for="Female">Female</label>
                                        </div>
                                    </div>
                                    <small class="p-error">{{ genderError }}</small>
                                </div>                                 
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Birthdate</label>
                                    <InputText type="date" v-model="date_of_birth" :class="{'p-invalid': date_of_birthError}" />
                                    <small class="p-error">{{ date_of_birthError }}</small>
                                </div>                              
                            </div>
                            <div class="p-fluid p-formgrid p-grid p-mb-2">
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Are you a member of indigent group</label>
                                    <div class="p-formgroup-inline p-mt-2">
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
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Indigenous Group</label>
                                    <Dropdown v-model="indigenous" :options="indigenousGroups" optionLabel="name" optionValue="name" placeholder="Select indigenous group" :filter="true" :disabled="!indigent" />
                                </div>
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Mother Tonque</label>
                                    <Dropdown v-model="mother_tongue" :class="{'p-invalid': mother_tongueError}" :options="dialects" optionLabel="name" optionValue="name" placeholder="Select dialect" :filter="true" />
                                    <small class="p-error">{{ mother_tongueError }}</small>
                                </div>                                                                                                                          
                            </div>                            
                            <div class="p-fluid p-formgrid p-grid p-mb-2">
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Province</label>
                                    <Dropdown v-model="province" :class="{'p-invalid': provinceError}" :options="provinces" optionLabel="name" optionValue="code" placeholder="Select province" :filter="true" @change="fetchCities" />
                                    <small class="p-error">{{ provinceError }}</small>
                                </div>
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Municipality/City</label>
                                    <Dropdown v-model="city" :class="{'p-invalid': cityError}" :options="cities" optionLabel="name" optionValue="code" placeholder="Select municipality/city" :filter="true" @change="fetchBarangays" />
                                    <small class="p-error">{{ cityError }}</small>
                                </div>
                                <div class="p-field p-col-12 p-md-4">
                                    <label class="p-text-bold">Barangay</label>
                                    <Dropdown v-model="barangay" :class="{'p-invalid': barangayError}" :options="barangays" optionLabel="name" optionValue="code" placeholder="Select barangay" :filter="true" />
                                    <small class="p-error">{{ barangayError }}</small>
                                </div>
                            </div>
                            <div class="p-fluid p-formgrid p-grid p-mb-2">                                                                                          
                                <div class="p-field p-col-12 p-md-3">
                                    <label class="p-text-bold">House No / Bldg / Subdivision</label>
                                    <InputText type="text" v-model="house_no" />
                                </div>
                                <div class="p-field p-col-12 p-md-3">
                                    <label class="p-text-bold">Zip Code</label>
                                    <InputText type="text" v-model="zip_code" :class="{'p-invalid': zip_codeError}" />
                                    <small class="p-error">{{ zip_codeError }}</small>
                                </div>
                                <div class="p-field p-col-12 p-md-3">
                                    <label class="p-text-bold">Contact No</label>
                                    <InputText type="text" v-model="contact_no" :class="{'p-invalid': contact_noError}" />
                                    <small class="p-error">{{ contact_noError }}</small>
                                </div>
                                <div class="p-field p-col-12 p-md-3">
                                    <label class="p-text-bold">Email Address</label>
                                    <InputText type="text" v-model="email_address" :class="{'p-invalid': email_addressError}" />
                                    <small class="p-error">{{ email_addressError }}</small>
                                </div>
                            </div>
                            <h5><i class="pi pi-user"></i> Parent / Guardian</h5>
                            <hr />
                            <div class="p-fluid p-formgrid p-grid p-mb-2">
                                <div class="p-field p-col-12 p-md-3">
                                    <label class="p-text-bold">Relationship</label>
                                    <Dropdown v-model="relationship" :class="{'p-invalid': relationshipError}" :options="relationships" optionLabel="name" optionValue="id" placeholder="Select relationship" />
                                    <small class="p-error">{{ relationshipError }}</small>
                                </div>
                                <div class="p-field p-col-12 p-md-3">
                                    <label class="p-text-bold">Last name</label>
                                    <InputText type="text" v-model="gp_lastname" :class="{'p-invalid': gp_lastnameError}" />
                                    <small class="p-error">{{ gp_lastnameError }}</small>
                                </div>
                                <div class="p-field p-col-12 p-md-3">
                                    <label class="p-text-bold">First name</label>
                                    <InputText type="text" v-model="gp_firstname" :class="{'p-invalid': gp_firstnameError}" />
                                    <small class="p-error">{{ gp_firstnameError }}</small>
                                </div>
                                <div class="p-field p-col-12 p-md-3">
                                    <label class="p-text-bold">Middle name</label>
                                    <InputText type="text" v-model="gp_middlename" />
                                </div>                                                          
                            </div>
                            <div class="p-fluid p-formgrid p-grid">
                                <div class="p-field p-col-12 p-md-3">
                                    <label class="p-text-bold">Contact No</label>
                                    <InputText type="text" v-model="gp_contact_no" :class="{'p-invalid': gp_contact_noError}" />
                                    <small class="p-error">{{ gp_contact_noError }}</small>
                                </div>                                 
                            </div>
                        </template>
                        <template #footer>
                            <div class="lzds-center p-mt-2 p-mb-4">
                                <Button icon="pi pi-times" label="Back" class="p-button-secondary" @click="back"/>
                                <Button type="submit" icon="pi pi-check" label="Next" style="margin-left: .5em" />
                            </div>
                        </template>
                    </Card>
                </form>
            </div>
        </div>
        <Footer />
    </LayoutWrapper>
</template>

<script>

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useToast } from "primevue/usetoast"
import { ref, watch } from 'vue'

import LayoutWrapper from '../components/LayoutWrapper'
import Footer from '../components/Footer'

import Card from 'primevue/card/sfc'
import Button from 'primevue/button/sfc'
import RadioButton from 'primevue/radiobutton/sfc'
import InputText from 'primevue/inputtext/sfc'
import Dropdown from 'primevue/dropdown/sfc'

import { useForm, useField } from 'vee-validate'

export default {
    components: {
        LayoutWrapper,
        Footer,
        Card,
        Button,
        RadioButton,
        InputText,
        Dropdown,
    },    
    setup() {

        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const toast = useToast()

        console.log(route.params.student_status)
        let studentStatus = route.params.student_status
        if (studentStatus == 'new') studentStatus = 'New'
        if (studentStatus == 'transferee') studentStatus = 'Transferee'
        const transfereeStudent = studentStatus == 'Transferee'

        // store.dispatch('selections/REGIONS')
        store.dispatch('selections/PROVINCES',{code: '01'})
        store.dispatch('selections/INDIGENOUS_GROUPS')
        store.dispatch('selections/DIALECTS')

        watch(
            () => store.state.students.student.updated_dt,
            (data, prevData) => {
                store.dispatch('STUDENT_STATUS',store.state.students.student.student_status)
                store.dispatch('LRN',store.state.students.student.lrn)
                store.dispatch('STUDENT_ID',store.state.students.student.id)
                toast.add({severity:'success', summary: 'Student Profile', detail:'Your information were save successfully', life: 3000});
                router.push('/enrollment')
            }
        )

        // if (store.state.studentStatus) {
        //     toast.add({severity:'error', summary: 'Student status is required', detail:'Please select student status', life: 3000});
        //     router.push('/')
        // }

        const init = {
            initialValues: {
                student: {
                    // ...store.state.students.student,                  
                    ...store.state.students.testStudent,
                    student_status: studentStatus,               
                }
            }
        }

        const { setValues, handleSubmit, resetForm } = useForm(init);
        
        function validateField(value) {
            if (!value) {
                return "This field is required";
            }
            return true;
        }

        function validateBool(value) {
            if (value==null) {
                return "This field is required";
            }
            return true;
        }        
        
        function validField(value) {
            return true;
        }

        const { value: id } = useField('student.id',validField);
        const { value: lrn, errorMessage: lrnError } = useField('student.lrn',(transfereeStudent)?validateField:validField);
        const { value: esc_voucher_grantee, errorMessage: escError } = useField('student.esc_voucher_grantee',validateBool);
        const { value: lastname, errorMessage: lastnameError }  = useField('student.lastname',validateField);
        const { value: firstname, errorMessage: firstnameError }  = useField('student.firstname',validateField);
        const { value: middlename } = useField('student.middlename',validField);
        const { value: ext_name } = useField('student.ext_name',validField);
        const { value: date_of_birth, errorMessage: date_of_birthError } = useField('student.date_of_birth',validateField);
        const { value: gender, errorMessage: genderError } = useField('student.gender',validateField);
        const { value: house_no } = useField('student.house_no',validField);
        const { value: barangay, errorMessage: barangayError } = useField('student.barangay',validateField);
        const { value: city, errorMessage: cityError } = useField('student.city',validateField);
        const { value: province, errorMessage: provinceError } = useField('student.province',validateField);
        const { value: zip_code, errorMessage: zip_codeError } = useField('student.zip_code',validateField);
        const { value: contact_no, errorMessage: contact_noError } = useField('student.contact_no',validateField);
        const { value: email_address, errorMessage: email_addressError } = useField('student.email_address',validateField);
        const { value: indigenous } = useField('student.indigenous',validField);
        const { value: mother_tongue, errorMessage: mother_tongueError } = useField('student.mother_tongue',validateField);
        const { value: relationship, errorMessage: relationshipError } = useField('student.relationship',validateField);
        const { value: gp_firstname, errorMessage: gp_firstnameError } = useField('student.gp_firstname',validateField);
        const { value: gp_middlename } = useField('student.gp_middlename',validField);
        const { value: gp_lastname, errorMessage: gp_lastnameError } = useField('student.gp_lastname',validateField);
        const { value: gp_contact_no, errorMessage: gp_contact_noError } = useField('student.gp_contact_no',validateField);
    
        const { value: indigent } = useField('student.indigent',validField);

        const { value: region } = useField('student.region',validField);
        const { value: student_status } = useField('student.student_status',validField);

        // const region = "01"
        // const student_status = store.state.studentStatus

        const fetchCities = () => {
            store.dispatch('selections/CITIES',{code: province.value})
            // store.dispatch('selections/CITIES',{code: null})
        }

        const fetchBarangays = () => {
            store.dispatch('selections/BARANGAYS',{code: city.value})
            // store.dispatch('selections/BARANGAYS',{code: null})
        }

        const onSubmit = handleSubmit((values, actions) => {
            console.log(values)
            const { student } = values
            store.dispatch('students/STUDENT', student)
        })

        const back = () => {
            router.push('/')
        }

        return {
            id,
            lrn,
            esc_voucher_grantee,
            lastname,
            firstname,
            middlename,
            ext_name,
            date_of_birth,
            gender,
            house_no,
            barangay,
            city,
            province,
            region,
            zip_code,
            contact_no,
            student_status,
            email_address,
            indigenous, // Name of indenous group
            mother_tongue,
            relationship,
            gp_firstname,
            gp_middlename,
            gp_lastname,
            gp_contact_no, 
            indigent,
            lrnError,
            escError,
            lastnameError,
            firstnameError,
            date_of_birthError,
            genderError,
            barangayError,
            cityError,
            provinceError,
            zip_codeError,
            contact_noError,
            email_addressError,
            mother_tongueError,
            relationshipError,
            gp_firstnameError,
            gp_lastnameError,
            gp_contact_noError,
            fetchCities,
            fetchBarangays,
            onSubmit,
            back,
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

    .card {
        border-top: 4px solid #252a83;
    }

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