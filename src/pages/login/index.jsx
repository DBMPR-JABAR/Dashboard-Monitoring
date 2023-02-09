import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'js-cookie'

import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '../../context/auth_context'
import * as AuthConstant from '../../helper/auth_constant'

import delay from '../../helper/delay'

import logoTjWithTextSvg from '../../assets/logo/logo_tj_with_text.png'
import loginBgSvg from '../../assets/images/login.png'
import warningFillRedSvg from '../../assets/icon/warning_fill_red.svg'

import client from '../../services/client'

import Container from '../../components/container/Container'
import InputPassword from '../../components/form/input/InputPassword'
import InputText from '../../components/form/input/InputText'
import Button from '../../components/form/input/Button'
import TextLink from '../../components/link/TextLink'
import isEmptyOrSpaces from '../../helper/string_helper'

export default function Login() {
  const router = useRouter()
  const authContext = useContext(AuthContext)

  const [error, setError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginLoading, setIsLoginLoading] = useState(false)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleOnLogin = async () => {
    setIsLoginLoading(true)

    try {
      const response = await client.post('/auth/login', {
        email: username,
        password: password,
      })

      const data = response.data.data

      Cookies.set('tj-jwt-token', data.token)
      localStorage.setItem('tj-user', JSON.stringify(data.user))
      authContext.dispatchAuthEvent({
        type: AuthConstant.SET_USER,
        payload: data,
      })

      await router.push('/dashboard')

      setIsLoginLoading(false)
    } catch (err) {
      console.log(err)
      setError('Terjadi kesalahan, tidak dapat login')
    }

    setIsLoginLoading(false)
  }

  const showErrorMessageComponent = (errorMessage) => (
    <div className="flex items-center mt-10 p-4 bg-red-50 rounded-lg border border-red-800">
      <Image src={warningFillRedSvg} alt="Logo Error" className="w-5" />
      <span className="inline-block ml-3 text-gray-900">{errorMessage}</span>
    </div>
  )

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
            <Link href="/">
              <Image
                src={logoTjWithTextSvg}
                className="w-1/2 mx-auto md:w-1/3 lg:mx-0 lg:w-1/2"
                alt="Logo Temanjabar"
              />
            </Link>
            <p className="mt-10 text-center font-intro text-2xl lg:mt-12 lg:text-left">
              Selamat Datang
            </p>
            <p className="text-center font-intro lg:text-left">
              Silahkan masuk ke akun Teman Jabar
            </p>
            {isEmptyOrSpaces(error) ? null : showErrorMessageComponent(error)}
            <div className="mt-10 lg:mt-12">
              <InputText
                placeHolderText="E-Mail / NIP / NIK"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mt-3">
              <InputPassword
                placeHolderText="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mt-10">
              <Button
                text="Masuk"
                onClick={handleOnLogin}
                isLoading={isLoginLoading}
              />
            </div>
            {/* <div className="mt-4 text-center"> */}
            {/*  <TextLink text="Lupa Password?" /> */}
            {/* </div> */}
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
