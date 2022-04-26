import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IMenuItem } from './interfaces/menuitem.interface';
import { initializeStore } from 'store';
// import { use0Store } from "store/storeProvider";
import { useEffect } from 'react';
import { useLocationListing } from 'hooks/useHomeNav';

const LEFT_MENU_LINKS: IMenuItem[] = [
  {
    href: '/',
    title: 'Charms',
  },
  {
    href: '/',
    title: 'Chains',
  },
  {
    href: '/',
    title: 'Sets',
  },
];

const RIGHT_MENU_LINKS = [
  {
    href: '/',
    title: 'The art of giving',
  },
  {
    href: '/',
    title: 'Create your own sets',
  },
  {
    href: '/',
    title: 'Tell me Y',
  },
];

export default function Navbar(props: any) {
  const { navCategories, isError, isLoading } = useLocationListing();

  return (
    <div>
      <div
        className={`${styles.navContainer} ${styles.borderBottom} flex space-between items-center`}
      >
        <div className="flex items-center">
          <div className={`${styles.navIcon} bg-burger`}>
            <svg viewBox="0 0 40 40" fill="none">
              <use xlinkHref="/assets/nb.svg#burger"></use>
            </svg>
          </div>
          {/* <div className={`${styles.navIcon} bg-close`}>
            <svg viewBox="0 0 40 40" fill="none">
              <use xlinkHref="/assets/nb.svg#close"></use>
            </svg>
          </div> */}
        </div>
        <div className="flex space-between items-center flex-30">
          {LEFT_MENU_LINKS.map((menuItem, idx) => (
            <div className={`${styles.menus}`} key={idx}>
              <Link href={menuItem.href}>
                <a>{menuItem.title}</a>
              </Link>
            </div>
          ))}
        </div>
        <a>
          <div className={`${styles.logo} bg-logo1`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M25 0C11.2133 0 0 11.2133 0 25C0 38.7867 11.2133 50 25 50C38.7867 50 50 38.7867 50 25C50 11.2133 38.7867 0 25 0ZM38.8733 5.41L26.6467 31.3267L12.37 4.58333C16.0433 2.3 20.37 0.98 25 0.98C30.1667 0.98 34.9533 2.62667 38.8733 5.41ZM0.98 25C0.98 18.18 3.84 12.02 8.42 7.64667L24.11 36.7167L18.7033 48.18C8.50333 45.4033 0.98 36.0667 0.98 25ZM25 49.02C24.0033 49.02 23.02 48.95 22.0533 48.8333L41.6067 7.67333C46.17 12.05 49.02 18.1967 49.02 25.0033C49.02 38.2433 38.2433 49.02 25 49.02Z"
                fill="#090954"
              ></path>
            </svg>
          </div>
        </a>
        <div className="flex space-between items-center flex-30">
          {RIGHT_MENU_LINKS.map((menuItem, idx) => (
            <div className={`${styles.menus}`} key={idx}>
              <Link href={menuItem.href}>
                <a>{menuItem.title}</a>
              </Link>
            </div>
          ))}
        </div>
        <div className={`${styles.navRight} flex justify-end items-center`}>
          <div className={`${styles.navIcon}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
            >
              <use xlinkHref="/assets/nb.svg#cart"></use>
            </svg>

            {/* <svg viewBox="0 0 40 40" fill="none">
              <use xlinkHref="/assets/nb.svg#close"></use>
            </svg> */}
            <p className={`${styles.cart_num_items}`}>1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
