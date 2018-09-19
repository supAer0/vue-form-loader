const loadingClass = 'is-loading';
const FormLoader = {
    // Usage: <form v-loader>
    bind: function (form, binding) {
        form.addEventListener('submit', function (event) {
            const submit = form.querySelector('[type="submit"]');
            submit.classList.add(loadingClass);
            submit.disabled = true;
        });
    },
    // Usage: <form v-loader="model">
    update: function (form, binding) {
        const submit = form.querySelector('[type="submit"]');
        if (binding.value) {
            submit.classList.add(loadingClass);
            submit.disabled = true;
        } else {
            submit.classList.remove(loadingClass);
            submit.disabled = false;
        }
    }
};

function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.directive('loader', FormLoader);
}

var plugin = {
    install
};

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

exports.install = install;
exports.FormLoader = FormLoader;
exports['default'] = plugin;