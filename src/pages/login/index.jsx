import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import useLogin from '../../hooks/useLogin'

import * as AuthActions from '../../state/redux/auth'
import * as LoginActions from '../../state/context/login/loginActions'

import logoTjWithTextSvg from '../../assets/logo/logo_tj_with_text.png'
import loginBgSvg from '../../assets/images/login.png'
import warningFillRedSvg from '../../assets/icon/warning_fill_red.svg'

import axiosClient from '../../services/axiosClient'

import Container from '../../components/container/Container'
import InputPassword from '../../components/form/input/InputPassword'
import InputText from '../../components/form/input/InputText'
import Button from '../../components/form/input/Button'
import TextLink from '../../components/link/TextLink'
import isEmptyOrSpaces from '../../helper/stringUtils'
import LoadingSpinner from '../../components/loading/spinner/LoadingSpinner'

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
      const response = await axiosClient.post('/auth/login', {
        email: username,
        password,
      })
      console.log(response)
      dispatch(AuthActions.setUser(response.data.data))
      loginActionDispatcher(LoginActions.loginSucces())
    } catch (e) {
      console.error(e)
      loginActionDispatcher(LoginActions.loginFailed(e.message))
    }
  }

  useEffect(() => {
    if (loginState.isSuccess) {
      router.replace('/dashboard')
    }
  }, [loginState.isSuccess])

  useEffect(() => {
    if (authState.user) {
      router.replace('/dashboard')
    }
  }, [authState.user])

  const showErrorMessageComponent = (errorMessage) => (
    <div className="flex items-center mt-10 p-4 bg-red-50 rounded-lg border border-red-800">
      <Image src={warningFillRedSvg} alt="Logo Error" className="w-5" />
      <span className="inline-block ml-3 text-gray-900">{errorMessage}</span>
    </div>
  )

  const render = () => {
    if (!authState.user) {
      return (
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
          <Image
            src={loginBgSvg}
            className="hidden lg:block lg:w-1/2 lg:h-screen lg:bg-cover"
            alt="Logo Temanjabar"
          />
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
