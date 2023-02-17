import Image from 'next/image'
import Head from 'next/head'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import useLogin from '../../hooks/useLogin'

import * as AuthActions from '../../state/redux/auth'
import * as LoginActions from '../../state/context/login/loginActions'
import warningFillRedSvg from '../../assets/icon/warning_fill_red.svg'
import logoTjWithTextSvg from '../../assets/logo/logo_tj_with_text.png'
// import loginBgSvg from '../../assets/images/login.svg'
import loginBgPng from '../../assets/images/login.png'

import { axiosTemanjabarClient } from '../../services/axiosClient'
import LoadingSpinner from '../../components/loading/spinner/LoadingSpinner'
import Container from '../../components/container/Container'
import isEmptyOrSpaces from '../../helper/stringUtils'
import InputText from '../../components/form/input/InputText'
import InputPassword from '../../components/form/input/InputPassword'
import Button from '../../components/form/input/Button'

export default function LoginPage() {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginState, loginActionDispatcher] = useLogin()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleOnLogin = async () => {
    loginActionDispatcher(LoginActions.loginLoading())
    try {
      const response = await axiosTemanjabarClient.post('/auth/login', {
        email: username,
        password,
      })
      dispatch(AuthActions.setUser(response.data.data))
      loginActionDispatcher(LoginActions.loginSucces())
    } catch (e) {
      loginActionDispatcher(LoginActions.loginFailed(e.message))
    }
  }

  useEffect(() => {
    if (authState.user) {
      router.replace('/dashboard')
    }
  }, [authState.user, router])

  const showErrorMessageComponent = (errorMessage) => (
    <div className="mt-10 flex items-center rounded-lg border border-red-800 bg-red-50 p-4">
      <Image src={warningFillRedSvg} alt="Logo Error" className="w-5" />
      <span className="ml-3 inline-block text-gray-900">{errorMessage}</span>
    </div>
  )

  const render = () => {
    if (!authState.user) {
      return (
        <main className="lg:flex lg:min-h-screen">
          <div className="lg:w-1/2 xl:w-3/5">
            <Container className="mt-32 mb-32 flex justify-center">
              <div className="lg:px-8">
                <Link href="/">
                  <Image
                    src={logoTjWithTextSvg}
                    className="mx-auto w-1/2 md:w-1/3 lg:mx-0 lg:w-1/2"
                    alt="Logo Temanjabar"
                  />
                </Link>
                <p className="mt-10 text-center font-intro text-2xl lg:mt-12 lg:text-left">
                  Selamat Datang
                </p>
                <p className="text-center font-intro lg:text-left">
                  Silahkan masuk ke akun Teman Jabar
                </p>
                {isEmptyOrSpaces(loginState.error)
                  ? null
                  : showErrorMessageComponent(loginState.error)}
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
                    isLoading={loginState.isLoading}
                  />
                </div>
                {/* <div className="mt-4 text-center"> */}
                {/*  <TextLink text="Lupa Password?" /> */}
                {/* </div> */}
              </div>
            </Container>
          </div>
          <div className="hidden lg:block lg:w-1/2 xl:w-2/5">
            <Image
              src={loginBgPng}
              className="h-full lg:block lg:bg-cover"
              alt="Logo Temanjabar"
            />
          </div>
        </main>
      )
    } else {
      return <LoadingSpinner />
    }
  }

  return (
    <>
      <Head>
        <title>Login | Dashboard Monitoring</title>
        <meta name="description" content="Login Dashboard Monitoring" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/logo_temanjabar.ico" />
      </Head>
      {render()}
    </>
  )
}
