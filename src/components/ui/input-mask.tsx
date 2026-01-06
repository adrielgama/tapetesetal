import { forwardRef, useEffect, useMemo } from 'react'
import { type ControllerRenderProps } from 'react-hook-form'

import { masks } from '@/lib/masks'

import { Input } from '@/components/ui/input'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

type InputMaskProps = Omit<InputProps, 'value' | 'onChange'> &
  Omit<ControllerRenderProps, 'value' | 'name' | 'onChange' | 'onBlur'> &
  Partial<Pick<ControllerRenderProps, 'name' | 'onBlur'>> & {
    value: string | undefined
    mask: keyof typeof masks
    onChange: (value: string) => void
    onValueChange?: (values: { masked: string }) => void
    onMask?: (values: { masked: string }) => void
  }

const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  (
    { mask, value, onValueChange, onMask, onChange: setFormValue, ...props },
    ref
  ) => {
    const virtualValue = useMemo(() => value, [value])
    const maskedValue = useMemo(
      () => masks[mask](virtualValue ?? ''),
      [virtualValue, mask]
    )

    function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
      const masked = masks[mask](e.currentTarget.value)

      setFormValue?.(masked)

      onValueChange?.({ masked })
    }

    useEffect(() => {
      onMask?.({ masked: maskedValue })
    }, [onMask, maskedValue])

    useEffect(() => {
      if (virtualValue !== maskedValue) {
        setFormValue?.(maskedValue)
      }
    })

    return (
      <Input
        {...props}
        value={maskedValue}
        onChange={handleOnChange}
        ref={ref}
      />
    )
  }
)

export { InputMask }
