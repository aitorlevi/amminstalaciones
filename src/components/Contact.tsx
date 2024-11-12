import { useRef } from "react";
import { useForm } from "react-hook-form"; // Or your preferred form library

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const form = useRef(null);

  const onSubmit = handleSubmit((e) => {
    alert(JSON.stringify(e));
    // emailjs
    //   .sendForm("service_i4lhr9k", "template_2fgp6e4", form.current, {
    //     publicKey: "g9wYisThgHuwKMggl",
    //   })
    //   .then(
    //     () => {
    //       notificationContext.setNotificationText(data.form.messageSent);
    //       notificationContext.showNotification();
    //       $(submit.current).attr("disabled", false);
    //     },
    //     (error) => {
    //       notificationContext.setNotificationText(error.text);
    //       notificationContext.showNotification();
    //       $(submit.current).attr("disabled", false);
    //     }
    //   );
  });
  {
    /* TODO Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo pronto para ayudarte a llevar a cabo el proyecto de tus sueños. */
  }

  return (
    <section className="contact">
      <h2>Contáctanos</h2>
      <div className="content">
        <div className="copy">
          <p>
            ¿Tienes alguna idea o proyecto en mente? ¡Nos encantaría saber más
            sobre tus necesidades de reforma! Completa el formulario y uno de
            nuestros expertos se pondrá en contacto contigo a la brevedad.
          </p>
        </div>
        <form ref={form} onSubmit={onSubmit} className="form">
          <div className="input-form">
            <label htmlFor="name">Nombre:</label>
            <input type="text" {...register("name")} />
          </div>
          <div className="input-form">
            <label htmlFor="email">Email:</label>
            <input type="email" {...register("email")} />
          </div>
          <div className="input-form">
            <label htmlFor="message">Mensaje:</label>
            <textarea rows={8} {...register("message")} />
          </div>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </section>
  );
};
