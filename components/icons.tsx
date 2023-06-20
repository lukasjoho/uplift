import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg
      width="174"
      height="174"
      viewBox="0 0 174 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_132_496)">
        <rect
          x="86.9995"
          width="123.036"
          height="123.036"
          rx="12.3185"
          transform="rotate(45 86.9995 0)"
          fill="#050711"
        />
        <path
          d="M41.5752 94.8227L86.6147 49.7832L131.654 94.8227M62.3626 115.225L86.6147 90.9732L110.867 115.225"
          stroke="url(#paint0_linear_132_496)"
          stroke-width="15.3981"
        />
      </g>
      <rect
        x="86.9995"
        y="1.41421"
        width="121.036"
        height="121.036"
        rx="11.3185"
        transform="rotate(45 86.9995 1.41421)"
        stroke="url(#paint1_linear_132_496)"
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_132_496"
          x1="86.6147"
          y1="49.7832"
          x2="86.6147"
          y2="115.225"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#31DF6B" />
          <stop offset="1" stop-color="#26BC58" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_132_496"
          x1="59.7761"
          y1="34.2945"
          x2="179.277"
          y2="153.796"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#26BC58" stop-opacity="0" />
          <stop offset="0.515625" stop-color="#31DF6B" />
          <stop offset="1" stop-color="#26BC58" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_132_496">
          <rect
            x="86.9995"
            width="123.036"
            height="123.036"
            rx="12.3185"
            transform="rotate(45 86.9995 0)"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  logoRaw: (props: LucideProps) => (
    <svg
      width="480"
      height="480"
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 297.186L240.186 87L450.372 297.186M127.009 392.399L240.186 279.222L353.363 392.399"
        stroke="url(#paint0_linear_150_367)"
        stroke-width="71.8585"
      />
      <defs>
        <linearGradient
          id="paint0_linear_150_367"
          x1="240.186"
          y1="87"
          x2="240.186"
          y2="392.399"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#31DF6B" />
          <stop offset="1" stop-color="#26BC58" />
        </linearGradient>
      </defs>
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  logoFull: (props: LucideProps) => (
    <svg
      viewBox="0 0 2557 493"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M37.8676 338.247L306.727 69.3877L575.587 338.248M161.957 460.039L306.727 315.268L451.498 460.039"
        stroke="url(#paint0_linear_159_448)"
        stroke-width="91.9179"
      />
      <path
        d="M737.579 52.5628H819.681V278.751C819.681 301.95 827.474 321.343 843.061 336.93C858.648 352.517 877.134 360.31 898.521 360.31C919.907 360.31 938.394 352.517 953.98 336.93C969.93 321.343 977.904 301.95 977.904 278.751V52.5628H1059.46V278.751C1059.46 323.699 1044.06 361.397 1013.25 391.846C982.798 421.932 944.556 436.975 898.521 436.975C853.211 436.975 814.969 422.113 783.795 392.39C752.984 362.304 737.579 324.424 737.579 278.751V52.5628ZM1116.76 432.625V52.0191H1284.77C1322.11 52.0191 1353.82 65.0685 1379.92 91.1672C1406.38 117.266 1419.62 148.077 1419.62 183.6C1419.62 219.848 1406.57 250.478 1380.47 275.489C1354.73 300.138 1322.83 312.644 1284.77 313.006L1198.86 313.55V432.625H1116.76ZM1198.86 240.691L1279.33 240.147C1297.1 240.147 1311.78 234.347 1323.38 222.748C1334.98 211.149 1340.78 197.193 1340.78 180.881C1340.78 164.932 1334.98 151.702 1323.38 141.19C1312.14 130.678 1297.46 125.422 1279.33 125.422L1198.86 125.965V240.691ZM1466.15 432.625V52.0191H1547.7V357.048H1724.96V432.625H1466.15ZM1770.93 432.625V52.0191H1849.77V432.625H1770.93ZM2190.62 52.0191V127.597H1991.07V205.349H2168.87V278.751H1991.07V432.625H1909.51V52.0191H2190.62ZM2228.91 52.0191H2537.74V128.14H2426.28V432.625H2344.72V128.14H2228.91V52.0191Z"
        fill="#E2E7ED"
      />
      <defs>
        <linearGradient
          id="paint0_linear_159_448"
          x1="306.727"
          y1="69.3877"
          x2="306.727"
          y2="460.039"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#31DF6B" />
          <stop offset="1" stop-color="#26BC58" />
        </linearGradient>
      </defs>
    </svg>
  ),
  rocket: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-rocket"
      {...props}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
  ),
  calendarClock: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-calendar-clock"
      {...props}
    >
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
      <path d="M16 2v4"></path>
      <path d="M8 2v4"></path>
      <path d="M3 10h5"></path>
      <path d="M17.5 17.5 16 16.25V14"></path>
      <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"></path>
    </svg>
  ),
  heart: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-heart"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>
  ),
  users: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  pluscircle: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-plus-circle"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" x2="12" y1="8" y2="16"></line>
      <line x1="8" x2="16" y1="12" y2="12"></line>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  ),
}
