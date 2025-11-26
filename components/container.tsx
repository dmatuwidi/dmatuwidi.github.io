import { cn } from '../lib/utils';

export default function Container({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="container"
      className={cn(
        'mx-auto flex min-h-screen w-full flex-col px-8 sm:max-w-[640px] md:max-w-3xl lg:max-w-6xl',
        className,
      )}
      {...props}
    />
  );
}
