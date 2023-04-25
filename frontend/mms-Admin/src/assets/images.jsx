/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import brandLogo from './logo.svg';
import googleLogo from './google-icon.svg';
import resetIll from './password-reset-sucess-illustration.png';
import searchIcon from './search-icon.png';
import userAvatar from './avatar.svg';
import gadsElipse from './gads-elipse.png';
import gadsReportIcon from './gads-report.png';
import calender from './calender.svg';
import arrowDown from './arrow-down.svg';
import github from './akar-icons_github-fill.svg';
import linkedIn from './Vector.svg';
import ig from './Vector-1.svg';
import twitter from './Vector-2.svg';

// am importing pictures from the assets folder and exporting them as components
// mentor management system logo
export function BrandLogo({ styling }) {
  return <img src={brandLogo} className={styling} alt="logo" />;
}
// password eye show icon
export function PasswordEyeShow({ styling }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// password eye hide icon
export function PasswordEyeHide({ styling }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L22 22"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// google logo
export function GoogleLogo({ styling }) {
  return <img src={googleLogo} className={styling} alt="google logo" />;
}
// password rest success illustration
export function ResetPasswordIllustration({ styling }) {
  return <img src={resetIll} className={styling} alt="illustration" />;
}
// search bar icon
export function SearchIcon({ styling }) {
  return <img src={searchIcon} className={styling} alt="search icon" />;
}
// gads elipse
export function GadsElipse({ styling }) {
  return <img src={gadsElipse} className={styling} alt="search icon" />;
}
// gads report icon
export function GadsReportIcon({ styling }) {
  return <img src={gadsReportIcon} className={styling} alt="search icon" />;
}
// calender icon
export function CalenderIcon({ styling }) {
  return <img src={calender} className={styling} alt="search icon" />;
}
// arrow down icon
export function ArrowDown({ styling }) {
  return <img src={arrowDown} className={styling} alt="search icon" />;
}
// arrow down icon
export function InstagramIcon({ styling }) {
  return <img src={ig} className={styling} alt="search icon" />;
}
// github icon
export function GithubIcon({ styling }) {
  return <img src={github} className={styling} alt="search icon" />;
}
// linkedin icon
export function LinkedinIcon({ styling }) {
  return <img src={linkedIn} className={styling} alt="search icon" />;
}
// twitter icon
export function TwitterIcon({ styling }) {
  return <img src={twitter} className={styling} alt="search icon" />;
}
// message icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function MessageIcon({ styling, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H8L11.6464 20.6464C11.8417 20.8417 12.1583 20.8417 12.3536 20.6464L16 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// notification-bell icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function NotificationBellIcon({ styling, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={styling}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.6 9.45798V8.4C5.6 4.86538 8.46538 2 12 2C15.5346 2 18.4 4.86537 18.4 8.4V9.45798C18.4 11.7583 19.0649 14.0096 20.3146 15.9409L21 17H3L3.68539 15.9408C4.93512 14.0096 5.6 11.7583 5.6 9.45798Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 20.8889C11.5344 21.4827 12.4656 21.4827 13 20.8889"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// user avatr
export function UserAvatar({ styling }) {
  return <img src={userAvatar} className={styling} alt="search icon" />;
}

// user square icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function UserSquare({ styling, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// circle add icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function CircleAddIcon({ styling, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7V17M7 12H17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// discussion forum
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function ForumIcon({ styling, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7H17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11H11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// certificates icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function CertificateIcon({ styling, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_6784_4715)">
        <path
          d="M9.00001 12L11 14L15 10M7.94636 4.24972L6.25195 4.23704C5.1357 4.22868 4.22868 5.1357 4.23704 6.25195L4.24972 7.94636C4.25377 8.48716 4.03863 9.00655 3.65336 9.38609L2.44627 10.5753C1.65105 11.3587 1.65105 12.6414 2.44627 13.4248L3.65336 14.6139C4.03863 14.9935 4.25377 15.5129 4.24972 16.0537L4.23704 17.7481C4.22868 18.8643 5.1357 19.7713 6.25195 19.763L7.94636 19.7503C8.48716 19.7463 9.00655 19.9614 9.38609 20.3467L10.5753 21.5538C11.3587 22.349 12.6414 22.349 13.4248 21.5538L14.6139 20.3467C14.9935 19.9614 15.5129 19.7463 16.0537 19.7503L17.7481 19.763C18.8643 19.7713 19.7713 18.8643 19.763 17.7481L19.7503 16.0537C19.7463 15.5129 19.9614 14.9935 20.3467 14.6139L21.5538 13.4248C22.349 12.6414 22.349 11.3587 21.5538 10.5753L20.3467 9.38609C19.9614 9.00655 19.7463 8.48716 19.7503 7.94636L19.763 6.25195C19.7713 5.1357 18.8643 4.22868 17.7481 4.23704L16.0537 4.24972C15.5129 4.25377 14.9935 4.03863 14.6139 3.65336L13.4248 2.44627C12.6414 1.65105 11.3586 1.65105 10.5753 2.44627L9.38609 3.65336C9.00655 4.03863 8.48716 4.25377 7.94636 4.24972Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6784_4715">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
// mentor managers
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function MentorManagerIcon({ styling, color }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 21V17C2 15.8954 2.89543 15 4 15H14C15.1046 15 16 15.8954 16 17V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3C16.8604 3.2203 17.623 3.7207 18.1676 4.42231C18.7122 5.12392 19.0078 5.98683 19.0078 6.875C19.0078 7.76317 18.7122 8.62608 18.1676 9.32769C17.623 10.0293 16.8604 10.5297 16 10.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 15H20C21.1046 15 22 15.8954 22 17V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// mentors icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function MentorIcon({ styling, color }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// reports icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function ReportIcon({ styling, color }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 6H16M8 10H16M8 14H11M6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// dashboard icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function DashboardIcon({ styling, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5ZM5 19H11V5H5V19ZM13 19H19V12H13V19ZM13 10H19V5H13V10Z"
        fill={color}
      />
    </svg>
  );
}
// task icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function TaskIcon({ styling, color }) {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7044 13.5652H8.39135C8.09569 13.5652 7.84769 13.465 7.64735 13.2647C7.44769 13.065 7.34787 12.8174 7.34787 12.5217C7.34787 12.2261 7.44769 11.9781 7.64735 11.7777C7.84769 11.5781 8.09569 11.4782 8.39135 11.4782H11.7044L10.7653 10.5391C10.5566 10.3478 10.4567 10.1085 10.4658 9.8212C10.4741 9.53459 10.5827 9.28693 10.7913 9.07824C10.9827 8.88694 11.2261 8.79128 11.5218 8.79128C11.8174 8.79128 12.0609 8.88694 12.2522 9.07824L14.9653 11.7913C15.1566 11.9826 15.2522 12.2261 15.2522 12.5217C15.2522 12.8174 15.1566 13.0608 14.9653 13.2522L12.2522 15.9652C12.0609 16.1565 11.8174 16.2522 11.5218 16.2522C11.2261 16.2522 10.9827 16.1565 10.7913 15.9652C10.6 15.7739 10.5044 15.5349 10.5044 15.2483C10.5044 14.961 10.6 14.713 10.7913 14.5043L11.7044 13.5652ZM18.8261 19.8261H4.21743V5.21737H18.8261V19.8261ZM18.8261 5.21737V19.8261V5.21737ZM18.8261 21.913C19.4 21.913 19.8915 21.7088 20.3006 21.3005C20.7089 20.8915 20.9131 20.4 20.9131 19.8261V5.21737C20.9131 4.64346 20.7089 4.15198 20.3006 3.74294C19.8915 3.33459 19.4 3.13041 18.8261 3.13041H14.4435C14.2174 2.50433 13.839 1.99998 13.3082 1.61737C12.7781 1.23476 12.1827 1.04346 11.5218 1.04346C10.8609 1.04346 10.2651 1.23476 9.7343 1.61737C9.20422 1.99998 8.82613 2.50433 8.60004 3.13041H4.21743C3.64352 3.13041 3.15204 3.33459 2.743 3.74294C2.33465 4.15198 2.13048 4.64346 2.13048 5.21737V19.8261C2.13048 20.4 2.33465 20.8915 2.743 21.3005C3.15204 21.7088 3.64352 21.913 4.21743 21.913H18.8261ZM11.5218 4.43476C11.2957 4.43476 11.1086 4.36067 10.9604 4.2125C10.8129 4.06502 10.7392 3.87824 10.7392 3.65215C10.7392 3.42607 10.8129 3.23894 10.9604 3.09076C11.1086 2.94328 11.2957 2.86954 11.5218 2.86954C11.7479 2.86954 11.9347 2.94328 12.0821 3.09076C12.2303 3.23894 12.3044 3.42607 12.3044 3.65215C12.3044 3.87824 12.2303 4.06502 12.0821 4.2125C11.9347 4.36067 11.7479 4.43476 11.5218 4.43476Z"
        fill={color}
      />
    </svg>
  );
}
// programs icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function ProgramsIcon({ styling, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 3H4C3.44772 3 3 3.44772 3 4V11C3 11.5523 3.44772 12 4 12H11C11.5523 12 12 11.5523 12 11V4C12 3.44772 11.5523 3 11 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 16H16.5C16.2239 16 16 16.2239 16 16.5V20.5C16 20.7761 16.2239 21 16.5 21H20.5C20.7761 21 21 20.7761 21 20.5V16.5C21 16.2239 20.7761 16 20.5 16Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 7H16.5C16.2239 7 16 7.22386 16 7.5V11.5C16 11.7761 16.2239 12 16.5 12H20.5C20.7761 12 21 11.7761 21 11.5V7.5C21 7.22386 20.7761 7 20.5 7Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 16H7.5C7.22386 16 7 16.2239 7 16.5V20.5C7 20.7761 7.22386 21 7.5 21H11.5C11.7761 21 12 20.7761 12 20.5V16.5C12 16.2239 11.7761 16 11.5 16Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// settings icon
// you can use the color prop to change the color of this icon
// You can use any valid CSS color value for the color prop,
//  such as "blue", "#ff0000", "rgb(255, 0, 0)", etc.
export function SettingsIcon({ styling, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styling}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0761 3.16311C10.136 2.50438 10.6883 2 11.3497 2H12.6503C13.3117 2 13.864 2.50438 13.9239 3.16311C13.9731 3.70392 14.3623 4.14543 14.8708 4.336C15.0015 4.38499 15.1307 4.43724 15.2582 4.49263C15.7613 4.71129 16.3531 4.66938 16.7745 4.31818C17.2953 3.8842 18.0611 3.91894 18.5404 4.39829L19.4584 5.31623C19.9154 5.77326 19.9485 6.50338 19.5347 6.99992C19.1901 7.41349 19.158 7.99745 19.3897 8.48341C19.49 8.69386 19.5816 8.90926 19.664 9.12916C19.8546 9.63767 20.2961 10.0269 20.8369 10.0761C21.4956 10.136 22 10.6883 22 11.3497V12.6503C22 13.3117 21.4956 13.864 20.8369 13.9239C20.2961 13.9731 19.8546 14.3623 19.664 14.8708C19.59 15.0682 19.5086 15.262 19.4202 15.4518C19.2053 15.913 19.2401 16.4637 19.5658 16.8546C19.962 17.33 19.9303 18.0291 19.4927 18.4667L18.4667 19.4927C18.0291 19.9303 17.33 19.962 16.8546 19.5658C16.4637 19.2401 15.913 19.2053 15.4518 19.4202C15.262 19.5086 15.0682 19.59 14.8708 19.664C14.3623 19.8546 13.9731 20.2961 13.9239 20.8369C13.864 21.4956 13.3117 22 12.6503 22H11.3497C10.6883 22 10.136 21.4956 10.0761 20.8369C10.0269 20.2961 9.63767 19.8546 9.12917 19.664C8.90927 19.5816 8.69387 19.49 8.48343 19.3897C7.99746 19.158 7.4135 19.1901 6.99992 19.5347C6.50338 19.9485 5.77325 19.9154 5.31622 19.4584L4.39829 18.5404C3.91893 18.0611 3.8842 17.2953 4.31818 16.7745C4.66939 16.3531 4.71129 15.7613 4.49263 15.2582C4.43724 15.1307 4.385 15.0016 4.336 14.8708C4.14544 14.3623 3.70392 13.9731 3.16311 13.9239C2.50438 13.864 2 13.3117 2 12.6503V11.3497C2 10.6883 2.50438 10.136 3.16311 10.0761C3.70393 10.0269 4.14544 9.63768 4.33601 9.12917C4.3936 8.9755 4.45568 8.82402 4.52209 8.67489C4.7571 8.14716 4.71804 7.52257 4.34821 7.07877C3.89722 6.53758 3.93332 5.74179 4.43145 5.24365L5.24364 4.43146C5.74178 3.93332 6.53757 3.89722 7.07876 4.34822C7.52256 4.71805 8.14715 4.7571 8.67488 4.52209C8.82401 4.45568 8.97549 4.3936 9.12916 4.33601C9.63767 4.14544 10.0269 3.70393 10.0761 3.16311Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
