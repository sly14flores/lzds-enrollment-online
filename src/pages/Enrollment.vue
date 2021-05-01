<template>
    <LayoutWrapper>
        <div class="layout-main">
            <div class="lzds-width p-mx-auto">
                <form @submit="onSubmit">
                    <BlockUI :blocked="loading">
                        <Card>
                            <template #title>
                                Enrollment Form
                                <hr />
                            </template>
                            <template #content>
                                <div class="p-fluid p-formgrid p-grid p-mb-2">
                                    <div class="p-field p-col-4">
                                        <label class="p-text-bold">Grade/Level</label>
                                        <Dropdown v-model="grade" :class="{'p-invalid': gradeError}" :options="levels" optionLabel="description" optionValue="id" placeholder="Select grade/level" :disabled="newStudent" @change="getFees" />
                                        <small class="p-error">{{ gradeError }}</small>
                                    </div>
                                    <div class="p-field p-col-4">
                                        <label class="p-text-bold">Total fees</label>
                                        <InputText type="text" v-model="fees.total" :disabled="true" />                                           
                                    </div>
                                    <div class="p-field p-col-4">
                                        <label class="p-text-bold">Down payment</label>
                                        <InputText type="text" v-model="fees.down_payment" />                                           
                                    </div>                                                                                 
                                </div>
                                <div class="p-fluid p-formgrid p-grid p-mb-2">
                                    <div class="p-col-8">
                                        <lable class="p-text-bold">Fees Details</lable>
                                        <DataTable class="p-mt-2" :value="fees.fees" showGridlines responsiveLayout="scroll">                                    
                                            <Column field="no" header="#"></Column>
                                            <Column field="category" header="Category"></Column>
                                            <Column field="description" header="Description"></Column>
                                            <Column field="amount" header="Amount"></Column>
                                        </DataTable>                                    
                                    </div>
                                    <div class="p-field p-col-4">
                                        <div class="p-fluid p-formgrid p-grid">
                                            <div class="p-field p-col">
                                                <label class="p-text-bold">Discount</label>
                                                <InputText type="text" v-model="discount_amount" :disabled="true" />
                                            </div>
                                        </div>                                           
                                        <div class="p-fluid p-formgrid p-grid">
                                            <div class="p-field p-col">
                                                <label class="p-text-bold">Balance</label>
                                                <InputText type="text" v-model="balance" :disabled="true" />
                                            </div>
                                        </div>                                    
                                        <div class="p-fluid p-formgrid p-grid">
                                            <div class="p-field p-col">
                                                <label class="p-text-bold">Payment Mode</label>
                                                <div class="p-formgroup-inline p-mt-2">
                                                    <div class="p-field-checkbox">
                                                        <RadioButton id="Full" name="payment_mode" value="full" v-model="payment_mode" :class="{'p-invalid': payment_modeError}" @click="fullPayment" />
                                                        <label for="Full">Full Payment</label>
                                                    </div>
                                                    <div class="p-field-checkbox">
                                                        <RadioButton id="Quarterly" name="payment_mode" value="quarterly" v-model="payment_mode" :class="{'p-invalid': payment_modeError}" @click="downPayment" />
                                                        <label for="Quarterly">Quarterly Payment</label>
                                                    </div>
                                                    <div class="p-field-checkbox">
                                                        <RadioButton id="Monthly" name="payment_mode" value="monthly" v-model="payment_mode" :class="{'p-invalid': payment_modeError}" @click="downPayment" />
                                                        <label for="Monthly">Monthly Payment</label>
                                                    </div>                                        
                                                </div>
                                                <small class="p-error">{{ payment_modeError }}</small>
                                            </div>
                                        </div>
                                        <div class="p-fluid p-formgrid p-grid">
                                            <div class="p-field p-col">
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
                                        <div class="p-fluid p-formgrid p-grid">
                                            <div class="p-field p-col">
                                                <label class="p-text-bold">Payment Method</label>
                                                <div class="p-formgroup-inline p-mt-2">
                                                    <div class="p-field-checkbox">
                                                        <RadioButton id="cash" name="payment_method" value="cash" v-model="payment_method" :class="{'p-invalid': payment_methodError}" />
                                                        <label for="cash">Cash</label>
                                                    </div>
                                                    <div class="p-field-checkbox">
                                                        <RadioButton id="bank_deposit" name="payment_method" value="bank_deposit" v-model="payment_method" :class="{'p-invalid': payment_methodError}" />
                                                        <label for="bank_deposit">Bank Deposit</label>
                                                    </div>
                                                    <div class="p-field-checkbox">
                                                        <RadioButton id="gcash" name="payment_method" value="gcash" v-model="payment_method" :class="{'p-invalid': payment_methodError}" />
                                                        <label for="gcash">Gcash</label>
                                                    </div>
                                                    <div class="p-field-checkbox">
                                                        <RadioButton id="paypal" name="payment_method" value="paypal" v-model="payment_method" :class="{'p-invalid': payment_methodError}" />
                                                        <label for="paypal">Paypal</label>
                                                    </div>                                                                                  
                                                </div>
                                                <small class="p-error">{{ payment_methodError }}</small>
                                            </div>
                                        </div>                                    
                                    </div>                                
                                </div>
                                <div class="p-fluid p-formgrid p-grid">
                                </div>
                            </template>
                            <template #footer>
                                <div class="lzds-center p-mt-2 p-mb-4">
                                    <Button icon="pi pi-times" label="Back" class="p-button-secondary" @click="back"/>
                                    <NextButton :loading="loading" style="margin-left: .5em" />
                                </div>
                            </template>                        
                        </Card>
                    </BlockUI>
                </form>         
            </div>
        </div>
        <Footer />        
    </LayoutWrapper>
</template>

<script>

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast"
import { ref, watch } from 'vue'

import LayoutWrapper from '../components/LayoutWrapper'
import Footer from '../components/Footer'

import Card from 'primevue/card/sfc'
import Button from 'primevue/button/sfc'
import RadioButton from 'primevue/radiobutton/sfc'
import InputText from 'primevue/inputtext/sfc'
import Dropdown from 'primevue/dropdown/sfc'
import BlockUI from 'primevue/blockui/sfc'
import NextButton from '../components/NextButton'

import DataTable from 'primevue/datatable/sfc';
import Column from 'primevue/column/sfc';
import ColumnGroup from 'primevue/columngroup/sfc';

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
        DataTable,
        Column,
        ColumnGroup,
        BlockUI,
        NextButton
    },
    setup() {

        const store = useStore()
        const router = useRouter()
        const toast = useToast()

        console.log(`Status: ${store.state.students.student.student_status}, LRN: ${store.state.students.student.lrn}, STUDENT_ID: ${store.state.students.student.id}`)
        const studentStatus = store.state.students.student.student_status
        const newStudent = studentStatus == 'New'

        store.dispatch('selections/LEVELS')
        store.dispatch('selections/QUESTIONNAIRES')
        /**
         * If new student get fees for Nursery already
         */
        let level = 1    
        /**
         * If regular student set grade to next_level_id
         * Set fees per next level
         */
        if (studentStatus==null) level = store.state.students.student.next_level_id
        if (studentStatus=='Transferee') level = null

        if (level!=null) store.dispatch('selections/FEES', {id: level})        

        const init = {
            initialValues: {
                enrollment: {
                    ...store.state.enrollments.enrollment,
                    lrn: store.state.students.student.lrn,
                    student_id: store.state.students.student.student_id,
                    student_status: store.state.students.student.student_status,
                    grade: level,
                    email_address: store.state.students.student.email_address,
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

        function validField(value) {
            return true;
        }

        function validateBool(value) {
            if (value==null) {
                return "This field is required";
            }
            return true;
        }         

        const { value: id } = useField('enrollment.id',validField);
        const { value: grade, errorMessage: gradeError } = useField('enrollment.grade',validateField);    
        const { value: payment_mode, errorMessage: payment_modeError } = useField('enrollment.payment_mode',validateField);    
        const { value: payment_method, errorMessage: payment_methodError } = useField('enrollment.payment_method',validateField);    
        const { value: esc_voucher_grantee, errorMessage: escError } = useField('student.esc_voucher_grantee',validateBool);        
        const { value: discount_amount } = useField('student.discount_amount',validField);        

        const onSubmit = handleSubmit((values, actions) => {
            console.log(values)
            const { enrollment } = values
            store.dispatch('enrollments/ENROLL', enrollment)
        })

        const getFees = () => {
            store.dispatch('selections/FEES', {id: grade.value})
        }

        const back = () => {
            console.log(studentStatus)
            if (studentStatus == 'New') {
                router.push(`/profile/new`)
            }
            if (studentStatus == 'Transferee') {
                router.push('/profile/transferee')
            }
            if (studentStatus == null) {
                router.push('/student/info')
            }
        }
        
        return {
            id,
            grade,
            payment_mode,
            payment_method,
            esc_voucher_grantee,
            discount_amount,
            gradeError,
            payment_modeError,
            payment_methodError,
            escError,
            onSubmit,
            getFees,
            back,
            newStudent
        }
    },
    computed: {
        levels() {
            return this.$store.state.selections.levels
        },
        fees() {
            return this.$store.state.selections.fees
        },
        balance() {
            let balance = this.$store.state.selections.fees.total - this.$store.state.selections.fees.down_payment
            if (isNaN(balance)) balance = 0
            return balance
        },
        loading() {
            return this.$store.state.selections.loading || this.$store.state.enrollments.loading
        }        
    },
    methods: {
        fullPayment() {
            this.$store.dispatch('selections/FULL_PAYMENT')
        },
        downPayment() {
            this.$store.dispatch('selections/DOWN_PAYMENT')
        }
    },
}
</script>

<style scoped>

    .lzds-width {
        width: 75%;
    }

    @media only screen and (max-width: 1200px) {
        .lzds-width {
            width: 75%
        }
    }

    @media only screen and (max-width: 1024px) {
        .lzds-width {
            width: 75%
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