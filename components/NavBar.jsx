'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css'; // Import the CSS module

// --- Data for Navigation Items ---
const navItems = [
    { label: 'Homepage', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services ', href: '/services' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/case-studies' },
];

// --- Main Navbar Component ---

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to close the mobile menu
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    // Effect to prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        // Cleanup function: ensures scrolling is re-enabled when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.mainContent}>

                    {/* Left Side: Logo and Navigation Links */}
                    <div className={styles.leftSide}>
                        {/* Logo */}
                        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
                            <Image
                                src="/logo.png"
                                alt="n8n logo"
                                className={styles.logoImg} // Custom class for invert
                                width={30}
                                height={30}
                            />
                        </Link>

                        {/* Desktop Navigation Links */}
                        <nav className={styles.desktopNav}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={styles.desktopNavLink}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Right Side: Action Buttons - Desktop */}
                    <div className={styles.desktopActions}>
                        <Link href="/contact" className={styles.signInLink}>
                            Get In Touch
                        </Link>
                        <Link href="https://hashboard.in/book/web" className={styles.getStartedButton}>
                            Book A Call
                        </Link>
                    </div>

                    {/* Mobile Menu Button (Hamburger/Close) */}
                    <div className={styles.mobileMenuButtonContainer}>
                        <Link href="https://hashboard.in/book/web" className={styles.callButton} onClick={closeMobileMenu}>
                            Book A Call
                        </Link>
                        <button
                            className={styles.mobileMenuButton}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                        >
                            {isMobileMenuOpen ? (
                                // X icon
                                <svg className={styles.mobileMenuButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            ) : (
                                // Hamburger icon
                                <svg className={styles.mobileMenuButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenuOverlay}>
                    {/* Wrapper div to center content within the overlay */}
                    <div className={styles.mobileMenuContent}>
                        <nav className={styles.mobileNav}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={styles.mobileNavLink}
                                    onClick={closeMobileMenu}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Action Buttons */}
                        <div className={styles.mobileActions}>
                            <Link href="/contact" className={styles.mobileSignInLink} onClick={closeMobileMenu}>
                                Get In Touch
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;