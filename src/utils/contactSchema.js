import * as yup from 'yup'

export function buildContactSchema(t) {
  return yup.object({
    name: yup.string().required(t('contact.form.errors.nameRequired')),
    email: yup
      .string()
      .required(t('contact.form.errors.emailRequired'))
      .email(t('contact.form.errors.emailInvalid')),
    message: yup
      .string()
      .required(t('contact.form.errors.messageRequired'))
      .min(10, t('contact.form.errors.messageMin')),
    website: yup.string(), // honeypot
  })
}
