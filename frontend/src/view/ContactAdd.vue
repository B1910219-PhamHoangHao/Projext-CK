<template>
    <div class="page">
        <h4>Thêm Liên Hệ</h4>
        <ContactFrom :contact="{}" @submit:contact="addContact"/>
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactFrom from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
    components : {
        ContactFrom,
    },
    data(){
        return {
            message: "",
        };
    },
    methods : {
        async addContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Thêm liên hệ thành công."
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>