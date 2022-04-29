import styles from './Footer.module.scss';

import Link from 'next/link';
import { Container } from '@mui/material';

// TODO: Please fix this horrible component and make it better and more reusable  🙏
export function Footer() {
  return (
    <>
      <div>
        <a href="https://www.instagram.com/yjewelryindia/">
          <div className={`${styles.homeLookBookContainer}`}>
            <div className={`${styles.overlay}`}></div>
            <div className={`${styles.insta}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.0025 0.00984779C5.90663 0.00984779 2.01803 -0.354766 0.531116 3.45572C-0.0843766 5.0299 0.00445734 7.07174 0.00445734 9.99712C0.00445734 12.5653 -0.0775026 14.9786 0.529 16.5401C2.00957 20.3527 5.93254 19.9876 9.99775 19.9876C13.9202 19.9876 17.9642 20.3955 19.4681 16.5401C20.0825 14.9506 19.9926 12.9373 19.9926 9.99712C19.9926 6.09468 20.2078 3.57514 18.3138 1.68338C16.3964 -0.232172 13.8028 0.00984779 9.99563 0.00984779H10.0025ZM9.10359 1.8065C17.6475 1.79329 18.7347 0.844236 18.1345 14.0301C17.923 18.694 14.3681 18.1819 10.0004 18.1819C2.03653 18.1819 1.80705 17.9542 1.80705 9.9913C1.80652 1.93913 2.44105 1.81284 9.10359 1.8065ZM15.3347 3.46523C15.0974 3.46523 14.8656 3.53553 14.6683 3.66725C14.4711 3.79896 14.3174 3.98617 14.2266 4.20519C14.1359 4.42421 14.1122 4.66521 14.1585 4.89771C14.2048 5.1302 14.3191 5.34375 14.4868 5.51134C14.6546 5.67893 14.8683 5.79303 15.101 5.83921C15.3337 5.8854 15.5748 5.86159 15.794 5.7708C16.0131 5.68001 16.2003 5.52631 16.3321 5.32915C16.4638 5.132 16.534 4.90023 16.5339 4.66318C16.5335 4.34583 16.4071 4.04161 16.1824 3.81731C15.9578 3.59301 15.6533 3.46696 15.3357 3.46682L15.3347 3.46523ZM10.0025 4.86768C8.98703 4.86684 7.99411 5.16701 7.14937 5.73021C6.30463 6.29342 5.64602 7.09435 5.25686 8.03168C4.8677 8.96902 4.76547 10.0006 4.9631 10.9961C5.16074 11.9915 5.64936 12.9059 6.36715 13.6238C7.08495 14.3416 7.99966 14.8306 8.99558 15.0288C9.9915 15.227 11.0239 15.1256 11.9621 14.7374C12.9003 14.3491 13.7023 13.6915 14.2664 12.8478C14.8306 12.004 15.1317 11.0119 15.1316 9.99712C15.1316 8.63725 14.5914 7.33301 13.6296 6.37099C12.6679 5.40897 11.3633 4.86788 10.0025 4.86662V4.86768ZM10.0025 6.66803C14.4072 6.66803 14.413 13.3262 10.0025 13.3262C5.59201 13.3262 5.58936 6.66803 10.0025 6.66803Z"
                  fill="white"
                />
              </svg>
              <div className="cursor-pointer">
                <a href="https://www.instagram.com/yjewelryindia/" className="home-link">
                  follow us on instagram!
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className={`${styles.footerContainer}`}>
        <div className={`${styles.mainDiv} flex flex-wrap justify-center`}>
          <div className={`${styles.detailsDiv} ${styles.mbr20} flex-col`}>
            <div className={`${styles.details}  w-100`}></div>
            <div>
              <div>
                <div className={`${styles.title}`}>PHONE</div>
                <div>
                  <a href="https://wa.me/?phone=91{{whatsApp}} & text=%20" target="_blank" rel="noopener noreferrer">
                    <br />
                  </a>
                </div>
              </div>
              <div>
                <div className={`${styles.title}`}>EMAIL</div>
                <div>
                  <a href="mailto:{{email}}">Email</a>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.deliveryDiv} ${styles.mbr20}`}>
            <div className={`${styles.title}`}>CHECK YOUR DELIVERY</div>
            <div>Enter your postal code to check availability in your city:</div>
            <div>Cash on delivery is available!</div>
            <div>PrePaid delivery is available!</div>
            <div className={`${styles.error}`}>Sorry, delivery is unavailable</div>
            <div className="flex">
              <div className="mat-form"></div>
              <button className="btn btn-dark-blue mx-11">OK</button>
            </div>
          </div>
          <div className={`${styles.paymentMethods} ${styles.mbr20} flex-col`}>
            <div className={`${styles.title}`}>PAYMENT METHODS</div>
            <div className="payment-icons w-100 flex ">
              <div className="bg-visa">
                <svg width="45" height="30">
                  <use xlinkHref="assets/pm.svg#visa"></use>
                </svg>
              </div>
              <div className="bg-mastercard">
                <svg width="45" height="30">
                  <use xlinkHref="assets/pm.svg#mastercard"></use>
                </svg>
              </div>
              <div className="bg-amex">
                <svg width="45" height="30">
                  <use xlinkHref="assets/pm.svg#amex"></use>
                </svg>
              </div>
              <div className="bg-gpay">
                <svg width="45" height="30">
                  <use xlinkHref="assets/pm.svg#gpay"></use>
                </svg>
              </div>
              <div className="bg-netBanking">
                <svg width="45" height="30">
                  <use xlinkHref="assets/pm.svg#netbanking"></use>
                </svg>
              </div>
              <div className="bg-cod">
                <svg width="45" height="30">
                  <use xlinkHref="assets/pm.svg#cod"></use>
                </svg>
              </div>
            </div>
            <div className={`${styles.title}`}>FOLLOW US!</div>
            <div className="w-100 flex">
              <a className={`${styles.fb} ${styles.icon} ${styles.mr10}`}>
                <div className="bg-facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path
                      opacity="0.75"
                      d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM18.75 10.35H16.8C16.35 10.35 15.9 10.8 15.9 11.4V12.3H18.6L18.3 15H16.05V22.5H13.05V15H11.25V12.15H13.05V10.65C13.2 9.15 13.8 7.65 16.5 7.5H18.75V10.35Z"
                      fill="#090954"
                    />
                  </svg>
                </div>
              </a>
              <a className={`instagram ${styles.icon} ${styles.mr10}`} target="_blank" rel="noopener">
                <div className="bg-instegram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <g opacity="0.75">
                      <path
                        d="M15 17.85C16.574 17.85 17.85 16.574 17.85 15C17.85 13.426 16.574 12.15 15 12.15C13.426 12.15 12.15 13.426 12.15 15C12.15 16.574 13.426 17.85 15 17.85Z"
                        fill="#090954"
                      />
                      <path
                        d="M21.75 9.9C21.6 9.6 21.3 9.15 21 9C20.7 8.7 20.4 8.55 19.95 8.4C19.65 8.25 19.2 8.1 18.3 8.1C17.4 8.1 17.1 8.1 14.85 8.1C12.6 8.1 12.3 8.1 11.4 8.1C10.5 8.1 10.05 8.25 9.75 8.4C9.6 8.4 9.15 8.7 9 9C8.7 9.15 8.4 9.6 8.25 9.9C8.1 10.2 8.1 10.65 7.95 11.55C7.95 12.45 7.95 12.75 7.95 15C7.95 17.25 7.95 17.55 7.95 18.45C7.95 19.35 8.1 19.8 8.25 20.1C8.4 20.4 8.7 20.85 9 21C9.3 21.3 9.6 21.45 10.05 21.6C10.35 21.75 10.8 21.9 11.7 21.9C12.6 21.9 12.9 21.9 15.15 21.9C17.4 21.9 17.7 21.9 18.6 21.9C19.5 21.9 19.95 21.75 20.25 21.6C21 21.3 21.6 20.7 21.9 19.95C22.05 19.65 22.2 19.2 22.2 18.3C22.2 17.4 22.2 17.1 22.2 14.85C22.2 12.6 22.2 12.3 22.2 11.4C21.9 10.65 21.9 10.2 21.75 9.9ZM15 19.35C12.6 19.35 10.65 17.4 10.65 15C10.65 12.6 12.6 10.65 15 10.65C17.4 10.65 19.35 12.6 19.35 15C19.35 17.4 17.4 19.35 15 19.35ZM19.65 11.4C19.05 11.4 18.6 10.95 18.6 10.35C18.6 9.75 19.05 9.3 19.65 9.3C20.25 9.3 20.7 9.75 20.7 10.35C20.7 10.95 20.1 11.4 19.65 11.4Z"
                        fill="#090954"
                      />
                      <path
                        d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM23.55 18.6C23.55 19.5 23.4 20.1 23.1 20.7C22.65 21.9 21.75 22.8 20.55 23.25C19.95 23.4 19.35 23.55 18.45 23.7C17.55 23.7 17.25 23.7 14.85 23.7C12.45 23.7 12.15 23.7 11.25 23.7C10.35 23.7 9.75 23.55 9.15 23.25C8.55 23.1 8.1 22.65 7.65 22.2C7.2 21.75 6.9 21.3 6.6 20.7C6.45 20.1 6.3 19.5 6.15 18.6C6.15 17.7 6.15 17.4 6.15 15C6.15 12.6 6.15 12.3 6.15 11.4C6.15 10.5 6.3 9.9 6.6 9.3C6.75 8.7 7.2 8.25 7.65 7.8C8.1 7.35 8.55 7.05 9.15 6.75C9.9 6.6 10.5 6.45 11.4 6.45C12.3 6.45 12.6 6.45 15 6.45C17.4 6.45 17.7 6.45 18.6 6.45C19.5 6.45 20.1 6.6 20.7 6.9C21.3 7.05 21.75 7.5 22.2 7.95C22.65 8.4 22.95 8.85 23.25 9.45C23.4 10.05 23.55 10.65 23.7 11.55C23.7 12.45 23.7 12.75 23.7 15.15C23.7 17.55 23.55 17.7 23.55 18.6Z"
                        fill="#090954"
                      />
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className={`${styles.links} ${styles.mbr20} flex}`}>
            <div className={`${styles.infoLinks} flex-col`} style={{ textAlign: 'left' }}>
              <div className={`${styles.title}`}>INFO</div>
              <a>About us</a>
              <a>Care for your charms</a>
              <a>Size Guide</a>
              <a>Blog</a>
              <a>Contact Us</a>
              <a>FAQ</a>
            </div>
            <div
              className={`${styles.legalLinks}`}
              style={{
                textAlign: 'left',
                marginTop: '-190px',
                marginLeft: '140px',
              }}
            >
              <a className={`${styles.title}`}>Legals</a>
              <a>Terms & Conditions</a>
              <a>Shipping & Delivery policy</a>
              <a>Cancellation, Return & Refund</a>
              <a>Privacy Policy</a>
              <a>Warning about forgery</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
