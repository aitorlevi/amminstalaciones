import { useRef, useState } from "react";
import { useForm } from "react-hook-form"; // Or your preferred form library
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const emailJsKey = import.meta.env.VITE_EMAIL_JS_KEY;
const emailJsService = import.meta.env.VITE_EMAIL_JS_SERVICE;
const emailJsTemplate = import.meta.env.VITE_EMAIL_JS_TEMPLATE;

export const Contact = () => {
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const { register, handleSubmit, reset } = useForm<FormData>();
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = handleSubmit(() => {
    if (form.current) {
      emailjs
        .sendForm("service_i4lhr9k", emailJsTemplate, form.current, emailJsKey)
        .then(
          () => {
            setNotification({
              message: "Mensaje enviado correctamente.",
              type: "success",
            });
            reset();
          },
          () => {
            setNotification({
              message: "Error al enviar el mensaje. Inténtalo de nuevo.",
              type: "error",
            });
          }
        );
    }
  });
  {
    /* TODO Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo pronto para ayudarte a llevar a cabo el proyecto de tus sueños. */
  }

  return (
    <section>
      <h2>Contáctanos</h2>
      <div className={styles.content}>
        <div className={styles.copy}>
          <p>
            ¿Tienes alguna idea o proyecto en mente? ¡Nos encantaría saber más
            sobre tus necesidades de reforma! Llámanos al{" "}
            <a href="tel:+34629067099">629067099</a> o{" "}
            <a href="tel:+34696730964">696730964</a>. También puedes completar
            el formulario y nuestros expertos se pondrá en contacto contigo en
            brevedad.
          </p>
        </div>
        <form ref={form} onSubmit={onSubmit} className={styles.form}>
          <div className={styles.inputForm}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" {...register("name")} />
          </div>
          <div className={styles.inputForm}>
            <label htmlFor="email">Email:</label>
            <input type="email" {...register("email")} />
          </div>
          <div className={styles.inputForm}>
            <label htmlFor="message">Mensaje:</label>
            <textarea rows={8} {...register("message")} />
          </div>
          <input type="submit" value="Enviar" />
        </form>
      </div>
      <p>
        En AMMINSTALACIONES, tu satisfacción es nuestra prioridad. Cada proyecto
        es una oportunidad de transformar espacios y mejorar vidas. ¡Hablemos y
        comienza hoy a dar vida a tus ideas!
      </p>
      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}
    </section>
  );
};
