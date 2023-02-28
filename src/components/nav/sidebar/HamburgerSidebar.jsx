import styles from './HamburgerSidebar.module.scss'

export default function HamburgerSidebar({ isShown, onClick }) {
  return (
    <svg
      onClick={onClick}
      className={`h-6 w-6 ${styles.hamburger} ${isShown && styles.active}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2244_69272)">
        <path
          d="M22.4615 4.30747H1.53752C1.12949 4.30747 0.738164 4.14538 0.44964 3.85685C0.161115 3.56833 -0.000976562 3.177 -0.000976562 2.76897C-0.000976563 2.36093 0.161115 1.96961 0.44964 1.68108C0.738164 1.39256 1.12949 1.23047 1.53752 1.23047H22.4615C22.8696 1.23047 23.2609 1.39256 23.5494 1.68108C23.8379 1.96961 24 2.36093 24 2.76897C24 3.177 23.8379 3.56833 23.5494 3.85685C23.2609 4.14538 22.8696 4.30747 22.4615 4.30747Z"
          fill="#069550"
        />
        <path
          d="M13.8455 13.5399H1.53752C1.12949 13.5399 0.738164 13.3778 0.44964 13.0893C0.161115 12.8007 -0.000976562 12.4094 -0.000976562 12.0014C-0.000976563 11.5934 0.161115 11.202 0.44964 10.9135C0.738164 10.625 1.12949 10.4629 1.53752 10.4629H13.8455C14.2536 10.4629 14.6449 10.625 14.9334 10.9135C15.2219 11.202 15.384 11.5934 15.384 12.0014C15.384 12.4094 15.2219 12.8007 14.9334 13.0893C14.6449 13.3778 14.2536 13.5399 13.8455 13.5399Z"
          fill="#069550"
        />
        <path
          d="M22.4624 13.5379H20.0004C19.7984 13.5379 19.5983 13.4981 19.4117 13.4208C19.225 13.3435 19.0554 13.2302 18.9125 13.0873C18.7697 12.9445 18.6563 12.7749 18.579 12.5882C18.5017 12.4015 18.4619 12.2015 18.4619 11.9994C18.4619 11.7974 18.5017 11.5973 18.579 11.4107C18.6563 11.224 18.7697 11.0544 18.9125 10.9116C19.0554 10.7687 19.225 10.6554 19.4117 10.578C19.5983 10.5007 19.7984 10.4609 20.0004 10.4609H22.4624C22.6645 10.4609 22.8645 10.5007 23.0512 10.578C23.2378 10.6554 23.4074 10.7687 23.5503 10.9116C23.6932 11.0544 23.8065 11.224 23.8838 11.4107C23.9611 11.5973 24.0009 11.7974 24.0009 11.9994C24.0009 12.2015 23.9611 12.4015 23.8838 12.5882C23.8065 12.7749 23.6932 12.9445 23.5503 13.0873C23.4074 13.2302 23.2378 13.3435 23.0512 13.4208C22.8645 13.4981 22.6645 13.5379 22.4624 13.5379Z"
          fill="#4DC27E"
        />
        <path
          d="M22.462 22.7694H1.53802C1.12986 22.7694 0.738405 22.6073 0.449786 22.3186C0.161168 22.03 -0.000976562 21.6386 -0.000976562 21.2304C-0.000976562 20.8222 0.161168 20.4308 0.449786 20.1422C0.738405 19.8536 1.12986 19.6914 1.53802 19.6914H22.462C22.8701 19.6914 23.2614 19.8535 23.5499 20.142C23.8384 20.4305 24.0005 20.8219 24.0005 21.2299C24.0005 21.6379 23.8384 22.0293 23.5499 22.3178C23.2614 22.6063 22.8701 22.7684 22.462 22.7684V22.7694Z"
          fill="#069550"
        />
      </g>
      <defs>
        <clipPath id="clip0_2244_69272">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}