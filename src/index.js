const options = {
    loadingClasses: ['is-loading']
};

const bindEventToForm = function (form) {
    form.addEventListener('submit', () => {
        const submit = form.querySelector('[type="submit"]');
        options.loadingClasses.forEach(c => {
          submit.classList.add(c);
        })
        submit.disabled = true;
    });
};

const FormLoaderDirective = {
    // Usage: <form v-loading>
    bind: function (form, binding) {
        bindEventToForm(form);
    },
    // Usage: <form v-loading="model">
    update: function (form, binding) {
        const submit = form.querySelector('[type="submit"]');
        if (binding.value) {
          options.loadingClasses.forEach(c => {
            submit.classList.add(c);
          })
            submit.disabled = true;
        } else {
          options.loadingClasses.forEach(c => {
            submit.classList.remove(c);
          })
            submit.disabled = false;
        }
    },
};

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.directive('loading', FormLoaderDirective);
}

const FormLoader = {
    install,
    autoBindToForms: function() {
        Array.from(document.querySelectorAll('form')).forEach(form => {
            bindEventToForm(form);
        });
    },
    set className(value) {
      options.loadingClasses = []
      arr = value.split(/\s/)
      arr.forEach(c => {
        options.loadingClasses.push(c);
      })
    }
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(FormLoader);
}

export default FormLoader;