import { styled } from "styled-components";

export default function Navbar() {
    return (
        <NavbarStyle>
            <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1376_163)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.95026 3.0571C5.95026 2.27059 5.63878 1.51629 5.0843 0.960141C4.52983 0.403993 3.77782 0.0915527 2.99369 0.0915527C2.20955 0.0915527 1.45754 0.403993 0.903072 0.960141C0.348608 1.51629 0.0371127 2.27059 0.0371126 3.0571H2.99369H5.95026ZM0.0371126 3.0571H5.95026V11.0774C7.82824 9.92313 10.0371 9.25775 12.401 9.25775C16.1107 9.25775 19.4389 10.8966 21.7051 13.4919C22.0778 12.9461 22.4563 12.4919 22.8075 12.1397C30.8671 4.89551 38.3068 9.92545 41.2574 13.5963C41.2606 13.6004 41.2635 13.6049 41.2661 13.6095C41.3965 13.8492 41.1865 14.251 41.0112 14.4599L32.8632 24.171C31.5045 25.7904 32.4143 28.2167 34.2595 27.1897C34.3787 27.1234 34.4949 27.0531 34.6079 26.9796C36.1182 25.9969 38.29 25.5748 39.6026 26.8105C40.6596 27.8055 40.7685 29.4817 39.7034 30.4678C32.4766 37.1588 25.1959 33.0034 21.9582 29.5272C19.6906 32.2951 16.2513 34.0605 12.401 34.0605C5.57259 34.0605 0.0371094 28.5082 0.0371094 21.6591C0.0371094 21.569 0.0380681 21.4791 0.0399758 21.3894L0.0371094 21.3896L0.0371126 3.0571ZM19.1204 21.6591C19.1204 25.3814 16.1121 28.399 12.401 28.399C8.68991 28.399 5.68146 25.3814 5.68146 21.6591C5.68146 17.9368 8.68991 14.9192 12.401 14.9192C16.1121 14.9192 19.1204 17.9368 19.1204 21.6591ZM32.9747 15.3736L26.4607 23.704C25.9231 24.4162 24.6889 20.0928 26.8392 16.9924C28.3818 14.7682 31.1923 14.6181 32.79 14.87C33.0271 14.9074 33.1227 15.1842 32.9747 15.3736Z" fill="url(#paint0_linear_1376_163)" />
                    <path d="M41.8294 34.0605C43.0233 34.0605 43.9911 33.0898 43.9911 31.8923C43.9911 30.6948 43.0233 29.7241 41.8294 29.7241C40.6356 29.7241 39.6678 30.6948 39.6678 31.8923C39.6678 33.0898 40.6356 34.0605 41.8294 34.0605Z" fill="#5951D1" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_1376_163" x1="30.1261" y1="8.449" x2="30.1261" y2="34.0307" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5984C0" />
                        <stop offset="1" stopColor="#5844D5" />
                    </linearGradient>
                    <clipPath id="clip0_1376_163">
                        <rect width="44" height="34" fill="white" transform="translate(0 0.0800171)" />
                    </clipPath>
                </defs>
            </svg>
        </NavbarStyle>
    );
}

const NavbarStyle = styled.div`
    height: 60px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 5px #cfcfcf /* #888888 */;

    svg{
        margin-left: 32px;
    }
`