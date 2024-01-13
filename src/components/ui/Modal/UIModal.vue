<template>
    <div class="modal-overlay">
        <div class="modal-container">
            <h2>Связаться со мной</h2>
            <p>Если есть вопросы - заполните форму, и я обязательно отвечу!</p>
            <form @submit.prevent.stop="postData()">
                <template
                    v-for="(item, index) in formData"
                    :key="index"
                >
                    <UIInput
                        v-if="item.type === 'input'"
                        :input="item"
                        @change="input"
                    />
                    <UITextarea
                        v-else
                        :textarea="item"
                        @change="input"
                    />
                </template>
                <UIButton
                    type="submit"
                    label="Отправить"
                />
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { inputValidation, postFormData } from "../../../utils/form";
import UIInput from "../Inputs/Input/UIInput";
import UITextarea from "../Inputs/Textarea/UITextarea";
import UIButton from "../Button/UIButton";

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

function input(data) {
    inputValidation(data, formData)
}
function postData() {
    postFormData(formData)
}
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
        padding: 30px 60px;
        background-color: white;
        border-radius: 20px;

        form {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            gap: 20px 0;

            .input-box {
                width: 45%;
            }

            .textarea-box {
                width: 100%;
                height: 200px;
            }

            button {
                width: 100%;
                margin-top: 16px;
            }
        }
    }
}
</style>
