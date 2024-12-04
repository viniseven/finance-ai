import Image from 'next/image';
import { Button } from '../_components/ui/button';
import { LogInIcon } from 'lucide-react';
import { SignInButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const { userId } = await auth();

  if (userId) {
    redirect('/');
  }

  return (
    <div className="h-full grid-cols-2 md:grid">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image src="/logo.svg" alt="Finance AI" width={173} height={39} />
        <h1 className="pt-8 text-4xl font-bold">Bem-vindo</h1>
        <p className="pt-3 text-justify opacity-60">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>

        <SignInButton>
          <Button variant={'outline'} className="mt-8 max-w-[488px]">
            <LogInIcon />
            Entrar ou criar conta
          </Button>
        </SignInButton>
      </div>

      <div className="relative hidden h-full w-full md:block">
        <Image
          src="/login.svg"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
