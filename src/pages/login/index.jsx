import Image from 'next/image'
import Head from 'next/head'

import logoTjWithTextSvg from '../../assets/logo/logo_tj_with_text.png'
import loginBgSvg from '../../assets/images/login.png'

import Container from '../../components/container/Container'
import InputPassword from '../../components/form/input/InputPassword'
import InputText from '../../components/form/input/InputText'
import Button from '../../components/form/input/Button'
import TextLink from '../../components/link/TextLink'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Dashboard Monitoring</title>
        <meta name="description" content="Login Dashboard Monitoring" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/logo_temanjabar.ico" />
      </Head>
      <main className="lg:flex lg:justify-between">
        <Container className="flex justify-center mt-32 mb-32 lg:w-1/2">
          <div className="lg:px-8">
            <Image
              src={logoTjWithTextSvg}
              className="w-1/2 mx-auto md:w-1/3 lg:mx-0 lg:w-1/2"
              alt="Logo Temanjabar"
            />
            <p className="mt-10 text-center font-intro text-2xl lg:mt-12 lg:text-left">
              Selamat Datang
            </p>
            <p className="text-center font-intro lg:text-left">
              Silahkan masuk ke akun Teman Jabar
            </p>
            <div className="mt-10 lg:mt-12">
              <InputText placeHolderText="E-Mail / NIP / NIK" />
            </div>
            <div className="mt-3">
              <InputPassword placeHolderText="Password" type="password" />
            </div>
            <div className="mt-10">
              <Button text="Masuk" />
            </div>
            <div className="mt-4 text-center">
              <TextLink text="Lupa Password?" />
            </div>
          </div>
        </Container>
        <Image
          src={loginBgSvg}
          className="hidden lg:block lg:w-1/2 lg:h-screen lg:bg-cover"
          alt="Logo Temanjabar"
        />
      </main>
    </>
  )
}
