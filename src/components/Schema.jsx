import * as Yup from "yup"

export const validateSchema = Yup.object({
    firstName:Yup.string().min(2).max(25).required("Please enter your first name"),
    email:Yup.string().email().required("Please enter your email"),
    lastName:Yup.string().min(2).max(25).required("Please enter your last name"),
    phoneNumber:Yup.string().min(6).max(9).required("please enter the phone number"),
    company:Yup.string().min(2).max(25).required("Please enter your company name"),
    jobTitle:Yup.string().min(2).max(25).required("Please enter your job title"),
})