import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import { DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

import { formatCurrency } from './utils/currency';
import { ProfileFormValues, formSchema } from './schema';

const userId = process.env.API_KEY_USERID as string;
const serviceId = process.env.API_KEY_SERVICEID as string;
const templateId = process.env.API_KEY_TEMPLATEID as string;

interface PropsForm {
  wizardValue?: number;
  setWizard: (value: 1 | 2) => void;
  setResult: (value: number) => void;
}

export const FormSection: React.FC<PropsForm> = ({ setWizard, setResult }) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [widthValue, setWidthValue] = React.useState('');
  const [heightValue, setHeightValue] = React.useState('');
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const result = +widthValue * +heightValue * 630.0;

  const numberFormat = (value: string) => value.match(/\(\d{2}\) \d{5}-\d{4}/g);

  emailjs.init(userId);

  async function onSubmit(data: ProfileFormValues) {
    try {
      const template_params = {
        name: data.username,
        email: data.email,
        tel: data.phone,
        altura: data.height,
        comprimento: data.width,
        message: data.message ?? '',
        valor_final: formatCurrency(result),
      };

      await emailjs.send(serviceId, templateId, template_params, userId);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Encontramos um problema.',
        description: `Entre em contato com o admin e informe o erro: ${error}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setResult(result);
      setWizard(2);
    }
  }

  const handleChangePhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;

    const formattedValue = inputValue.replace(/\D/g, '');
    const formattedPhoneNumber = `(${formattedValue.slice(
      0,
      2,
    )}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7, 11)}`;
    setPhoneNumber(formattedPhoneNumber);

    const numericValue = numberFormat(inputValue);
    form.setValue('phone', numericValue ? numericValue[0] : '');
  };

  const handleDimensionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValueFunction: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const inputValue = event.target.value;
    const cleanedValue = inputValue.replace(/[^\d.]/g, '');
    setValueFunction(cleanedValue);
  };

  const handleBlur = (fieldName: keyof ProfileFormValues) => {
    if (fieldName === 'width') {
      form.setValue(fieldName, widthValue);
    } else if (fieldName === 'height') {
      form.setValue(fieldName, heightValue);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="exemplo@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  maxLength={15}
                  placeholder="(00) 00000-0000"
                  value={phoneNumber}
                  onChange={handleChangePhoneNumber}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-between gap-2">
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Largura</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1.20"
                    {...field}
                    value={widthValue}
                    onChange={e => handleDimensionChange(e, setWidthValue)}
                    onBlur={() => handleBlur('width')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Altura</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0.50"
                    {...field}
                    value={heightValue}
                    onChange={e => handleDimensionChange(e, setHeightValue)}
                    onBlur={() => handleBlur('height')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Insira sua mensagem (opcional)"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button
            variant="default"
            type="submit"
            className="bg-orange-400 hover:bg-orange-600 text-white w-full uppercase sm:w-24 md:w-32 lg:w-40"
          >
            *Simular
          </Button>
        </DialogFooter>
        <DialogDescription className="text-xs text-gray-400">
          * Ao simular, os dados acima preenchidos serão enviados por e-mail
          para que os nossos colaboradores entrem em contato trazendo uma melhor
          experiência ao finalizar o orçamento.
        </DialogDescription>
      </form>
    </Form>
  );
};
