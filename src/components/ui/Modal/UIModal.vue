<template>
    <div class="modal-overlay">
        <div class="modal-container">
            <h2>Contact me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form>
                <template
                    v-for="(item, index) in formData"
                    :key="index"
                >
                    <UIInput 
                        v-if="item.type === 'input'"
                        :input="item"
                    />
                    <UITextarea 
                        v-else
                        :textarea="item"
                    />
                </template>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

import { UIInput } from "@/components/ui/Inputs/Input/UIInput.vue";
import { UITextarea } from "@/components/ui/Inputs/Textarea/UITextarea.vue";

const formData = reactive([
    {
        type: 'input',
        label: 'ФИО',
        id: 'fullName',
        value: '',
        error: '',
        regex: /^[\wа-яА-ЯёЁ\s().-]{2,256}$/,
        required: true
    },
    {
        type: 'input',
        label: 'Email',
        id: 'email',
        value: '',
        error: '',
        regex: /^(?=.{1,50}@)[a-zA-Z0-9]([a-zA-Z0-9._-]?[a-zA-Z0-9])*@[a-zA-Z0-9]{2,15}\.[a-zA-Z0-9]{2,15}$/,
        required: true
    },
    {
        id: 'comment',
        type: 'textarea',
        label: 'Комментарий',
        value: '',
        error: '',
        regex: /^[\wа-яА-ЯёЁ\s().-]{0,1000}$/,
        required: true
    }
])
</script>

<style scoped lang="scss">
.modal {
    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 1000;
    }

    &-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        width: 840px;
        height: 800px;
        padding: 30px;
        background-color: white;
        border-radius: 20px;
    }
}
</style>