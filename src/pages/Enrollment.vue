<template>
    <LayoutWrapper>
        <TopBar />
        <div class="p-grid p-jc-center p-mt-6">
            <div class="p-lg-9 p-sm-12">
                <form @submit.prevent="submitForm">
                    <BlockUI :blocked="loading">
                        <Card class="card">
                            <template #title>
                                Enrollment Form
                                <hr />
                            </template>
                            <template #content>
                                <div class="p-fluid p-formgrid p-grid p-mb-2" v-if="studentStatus=='Regular'">
                                    <div class="p-field p-col-12 p-md-4">
                                        <label class="p-text-bold">Email Address</label>
                                        <InputText type="text" v-model="email_address" :class="{'p-invalid': email_addressError}" />
                                        <small class="p-error">{{ email_addressError }}</small>
                                    </div>
                                    <div class="p-col-8 p-mt-5">
                                        <p class="p-text-light p-mt-2">We will use your email to send you notifications</p>
                                    </div>                               
                                </div>
                                <div class="p-fluid p-formgrid p-grid p-mb-2">
                                    <div class="p-field p-col-12 p-md-4">
                                        <label class="p-text-bold">Grade/Level</label>
                                        <Dropdown v-model="grade" :class="{'p-invalid': gradeError}" :options="levels" optionLabel="description" optionValue="id" placeholder="Select grade/level" @change="getFees" />
                                        <small class="p-error">{{ gradeError }}</small>
                                    </div>
                                    <div class="p-field p-col-12 p-md-4">
                                        <label class="p-text-bold">Total fees</label>
                                        <InputText type="text" v-model="totalFees" :disabled="true" />                                           
                                    </div>
                                    <div class="p-field p-col-12 p-md-4">
                                        <label class="p-text-bold">Down payment</label>
                                        <InputText type="text" v-model="downPayment" :disabled="payment_mode=='full'"/>                                           
                                    </div>                                                                                 
                                </div>
                                <div class="p-fluid p-formgrid p-grid p-mb-2">
                                    <div class="p-col-12 p-md-8">
                                        <lable class="p-text-bold">Fees Details</lable>
                                        <div class="p-fluid p-formgrid p-grid">
                                            <div class="p-col-12 p-md-6">
                                                <DataTable class="p-datatable-sm" :value="leftFees" showGridlines responsiveLayout="scroll">                                    
                                                    <Column field="no" header="#"></Column>
                                                    <!-- <Column field="category" header="Category"></Column> -->
                                                    <Column field="description" header="Description"></Column>
                                                    <Column field="amount" header="Amount"></Column>
                                                </DataTable>
                                            </div>
                                            <div class="p-col-12 p-md-6">
                                                <DataTable class="p-datatable-sm" :value="rightFees" showGridlines responsiveLayout="scroll">                                    
                                                    <Column field="no" header="#"></Column>
                                                    <!-- <Column field="category" header="Category"></Column> -->
                                                    <Column field="description" header="Description"></Column>
                                                    <Column field="amount" header="Amount"></Column>
                                                </DataTable>                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-field p-col-12 p-md-4">
                                        <div class="p-fluid p-formgrid p-grid">
                                            <div class="p-field p-col">
                                                <label class="p-text-bold">Discount {{(discount_percentage>0)?`(${discount_percentage*100}%)`:''}}</label>
                                                <InputText type="text" v-model="discount" :disabled="true" />
                                            </div>
                                        </div>
                                        <div class="p-fluid p-formgrid p-grid" v-if="payment_mode=='full'">
                                            <div class="p-field p-col">
                                                <label class="p-text-bold">Full Payment Discount (5%)</label>
                                                <InputText type="text" v-model="fullPaymentDiscount" :disabled="true" />
                                            </div>
                                        </div>
                                        <div class="p-fluid p-formgrid p-grid">
                                            <div class="p-field p-col">
                                                <label class="p-text-bold">Total amount to pay</label>
                                                <InputText type="text" v-model="totalAmountToPay" :disabled="true" />
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
                                                        <RadioButton id="Quarterly" name="payment_mode" value="quarterly" v-model="payment_mode" :class="{'p-invalid': payment_modeError}" @click="notFullPayment" />
                                                        <label for="Quarterly">Quarterly Payment</label>
                                                    </div>
                                                    <div class="p-field-checkbox">
                                                        <RadioButton id="Monthly" name="payment_mode" value="monthly" v-model="payment_mode" :class="{'p-invalid': payment_modeError}" @click="notFullPayment" />
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
                                <hr />
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
import { watch, computed } from 'vue'

import LayoutWrapper from '../components/LayoutWrapper'
import TopBar from '../components/TopBar'
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

import { useForm, useIsFormValid, useField } from 'vee-validate'
import Swal from 'sweetalert2'

export default {
    components: {
        LayoutWrapper,
        TopBar,
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

        store.dispatch('enrollments/RESET_UUID')

        if (store.state.students.student.id===0) {
            router.push('/')
            toast.add({severity:'warn', summary: 'Warning!', detail:'You have been redirected to the first page because you have refreshed the current page. Please do not refresh the current page to avoid losing of information while on session', life: 6000});
        }

        store.dispatch('selections/LEVELS')
        store.dispatch('selections/QUESTIONNAIRES')

        /**
         * If regular student set grade to next_level_id
         * Set fees per next level
         */
        let level = store.state.students.student.next_level_id
        if (studentStatus=='Transferee') level = null
        if (studentStatus=='New') level = 1

        if (level!=null) store.dispatch('selections/FEES', {id: level})

        console.log(store.state.students.student)
        const init = {
            initialValues: {
                enrollment: {
                    ...store.state.enrollments.enrollment,
                    lrn: store.state.students.student.lrn,
                    student_id: store.state.students.student.id,
                    student_status: store.state.students.student.student_status,
                    grade: level,
                    email_address: store.state.students.student.email_address,
                    discount_percentage: store.state.students.student.total_discounts_percentage
                }
            }
        }

        watch(
            () => store.state.enrollments.enrollment_uiid,
            (data, prevData) => {
                let page = payment_method.value
                if (payment_method.value=='bank_deposit') page = 'bank'
                router.push(`/payment/${page}/${data}`)
            }
        )        

        const { handleSubmit } = useForm(init)
        const isValid = useIsFormValid()

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
        const { value: lrn } = useField('enrollment.lrn',validField);
        const { value: student_id } = useField('enrollment.student_id',validField);
        const { value: student_status } = useField('enrollment.student_status',validField);
        const { value: email_address, errorMessage: email_addressError } = useField('enrollment.email_address',validateField);
        const { value: grade, errorMessage: gradeError } = useField('enrollment.grade',validateField);    
        const { value: payment_mode, errorMessage: payment_modeError } = useField('enrollment.payment_mode',validateField);    
        const { value: payment_method, errorMessage: payment_methodError } = useField('enrollment.payment_method',validateField);    
        const { value: esc_voucher_grantee, errorMessage: escError } = useField('enrollment.esc_voucher_grantee',validateBool);        
        const { value: down_payment } = useField('enrollment.down_payment',validField);
        const { value: discount_amount } = useField('enrollment.discount_amount',validField);
        const { value: discount_percentage } = useField('enrollment.discount_percentage',validField);
        const { value: total_amount_to_pay } = useField('enrollment.total_amount_to_pay',validField);

        const onSubmit = handleSubmit((values, actions) => {
            const { enrollment } = values

            enrollment.student_fees = store.state.selections.fees.fees

            console.log(enrollment)
            Swal.fire({
            title: 'Confirmation',
            text: "We will now process your enrollment, please confirm",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                     store.dispatch('enrollments/ENROLL', enrollment)
                }
            })
        })

        const submitForm = () => {
            if (!isValid.value) {
                toast.add({severity:'error', summary: 'Required fields', detail:'Please fill up all required fields', life: 3000});
            }
            onSubmit()
        }

        const getFees = () => {
            store.dispatch('selections/FEES', {id: grade.value})
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
        
        return {
            id,
            lrn,
            student_id,
            student_status,
            email_address,         
            grade,
            payment_mode,
            payment_method,
            esc_voucher_grantee,
            down_payment,
            discount_amount,
            discount_percentage,
            total_amount_to_pay,
            email_addressError,
            gradeError,
            payment_modeError,
            payment_methodError,
            escError,
            submitForm,
            getFees,
            back,
            newStudent,
            isValid,
            studentStatus
        }
    },
    computed: {
        levels() {
            return this.$store.state.selections.levels
        },
        fees() {
            return this.$store.state.selections.fees
        },
        leftFees() {
            return this.$store.state.selections.fees.fees && this.$store.state.selections.fees.fees.slice(0,12)
        },
        rightFees() {
            return this.$store.state.selections.fees.fees && this.$store.state.selections.fees.fees.slice(12,25)
        },
        totalFees() {
            const totalFees = this.$store.state.selections.fees.total || 0
            const total = totalFees && parseFloat(totalFees.toFixed(2))
            return total
        },
        downPayment() {
            return this.$store.state.selections.fees.down_payment
        },
        discount() {
            let discount = this.$store.state.selections.fees.tuition_fee*this.discount_percentage
            if (isNaN(discount)) discount = 0            
            return parseFloat(discount.toFixed(2))         
        },
        fullPaymentDiscount() {
            let fullPaymentDiscount = 0
            if (this.payment_mode=='full') {
                const discount = .05
                fullPaymentDiscount = this.$store.state.selections.fees.tuition_fee*discount
            }
            return parseFloat(fullPaymentDiscount.toFixed(2))
        },
        totalAmountToPay() {
            let totalAmountToPay = this.$store.state.selections.fees.down_payment
            if (this.payment_mode=='full') totalAmountToPay = totalAmountToPay - this.discount - this.fullPaymentDiscount            
            if (isNaN(totalAmountToPay)) totalAmountToPay = 0
            return parseFloat(totalAmountToPay.toFixed(2))
        },
        balance() {
            let balance = this.$store.state.selections.fees.total - this.discount - this.$store.state.selections.fees.down_payment
            if (isNaN(balance)) balance = 0
            if (balance < 0) balance = 0
            return parseFloat(balance.toFixed(2))
        },
        loading() {
            return this.$store.state.selections.loading || this.$store.state.enrollments.loading
        }        
    },
    watch: {
      totalAmountToPay(newValue, oldValue) {
          this.total_amount_to_pay = newValue
      },
      downPayment(newValue, oldValue) {
          this.down_payment = newValue
      },
      discount(newValue, oldValue) {
          this.discount_amount = newValue
      }
    },    
    methods: {
        fullPayment() {
            this.$store.dispatch('selections/FULL_PAYMENT')
        },
        notFullPayment() {
            this.$store.dispatch('selections/DOWN_PAYMENT')
        }
    },
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