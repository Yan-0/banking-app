import React from 'react'
import { FormLabel } from './ui/form'
import { Input } from './ui/input'
import { FormControl, FormMessage } from './ui/form'
import { FormField } from './ui/form'
import { Control, FieldPath, useForm } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');

interface CustomFormFieldProps {
    control: Control<z.infer<typeof formSchema>>
    name: FieldPath<z.infer<typeof formSchema>>
    label: string
    placeholder: string
}
const CustomFormField = ( {control, name, label, placeholder} : CustomFormFieldProps ) => {

  return (
    <FormField
        control= {control}
        name={name}
        render={({ field }) => (
        <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
                <div className="flex w-full flex-col">
                    <FormControl>
                        <Input placeholder={placeholder} className="input-class" type={name === "password" ? "password" : "text"} {...field} />
                    </FormControl>
                    <FormMessage className="form-message mt-2" />
                </div>
            </div>
        )}
    />
  )
}

export default CustomFormField