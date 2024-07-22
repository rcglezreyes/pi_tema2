$(document).ready(function () {
    $.validator.addMethod("customEmail", function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
    }, "Please enter a valid email address");
    
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true,
                customEmail: true
            },
            subject: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Por favor, introduzca su nombre",
                minlength: "Su nombre debe contener al menos 2 caracteres"
            },
            email: {
                required: "Por favor, introduzca su dirección de email",
                email: "Por favor, introduzca una dirección de email válida",
                customEmail: "Por favor, introduzca una dirección de email válida"
            },
            subject: {
                required: "Por favor, introduzca su asunto",
                minlength: "Su asunto debe tener al menos 2 caracteres"
            },
            message: {
                required: "Por favor, introduzca su mensaje",
                minlength: "Su mensaje debe contener al menos 5 caracteres"
            }
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.siblings("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });
    
    $("#contactForm input, #contactForm textarea").on("blur", function () {
        $(this).valid();
    });

    $("#loginForm").validate({
        rules: {
            email: {
                required: true,
                email: true,
                customEmail: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: "Por favor, introduzca su email",
                email: "Por favor, introduzca un email válido",
                customEmail: "Por favor, introduzca un email válido"
            },
            password: {
                required: "Por favor, introduzca su contraseña",
                minlength: "Su contraseña debe tener al menos 5 caracteres"
            }
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.siblings("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });
    
    $("#contactForm input, #contactForm textarea").on("blur", function () {
        $(this).valid();
    });
    
    $("#loginForm input").on("blur", function () {
        $(this).valid();
    });

    $(".under-construction").on("click", function (e) {
        e.preventDefault();
        Swal.fire({
            title: 'Página en construcción',
            text: 'Esta página está en construcción. Vuelva pronto.',
            imageUrl: 'https://via.placeholder.com/300?text=404',
            imageWidth: 200,
            imageHeight: 150,
            imageAlt: 'Página en construcción',
            icon: 'info'
        });
    });
});