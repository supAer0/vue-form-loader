<template>
    <div>
        <form @submit.prevent="save" v-loader="loading">
            <button class="btn" type="submit">Submit form</button>
        </form>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                loading: false
            }
        },
        methods: {
            save() {
                this.loading = true;
                setTimeout(() => this.loading = false, 3000);
            }
        }
    }
</script>

<style lang="scss" scoped>

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .btn {
        padding: 16px 48px;
        background: #c9c9c9;
        border: 1px solid #ccc;
        font-size: 16px;
        cursor: pointer;
    }
    .is-loading {
        position: relative;
        transition: padding-right 0.3s ease-out;
        pointer-events: none;

        &::after {
             content: "";
             position: absolute;
             border-radius: 100%;
             right: 6px;
             top: 50%;
             width: 0;
             height: 0;
             border: 2px solid rgba(255, 255, 255, 0.5);
             border-left-color: #fff;
             border-top-color: #fff;
             animation: spin 0.6s infinite linear, grow 0.3s forwards ease-out;
        }
    }

    @keyframes spin {
        to {
            transform: rotate(359deg);
        }
    }

    @keyframes grow {
        to {
            width: 14px;
            height: 14px;
            margin-top: -8px;
            right: 13px;
        }
    }
</style>
