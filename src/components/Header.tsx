'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
    const [stars, setStars] = useState('0');

    useEffect(() => {
        fetch('https://api.github.com/repos/sfdcnaveen/naveens-profile-galaxy-17')
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (data && typeof data.stargazers_count === 'number') {
                    const count = data.stargazers_count;
                    setStars(count >= 1000 ? (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : count.toString());
                }
            })
            .catch(() => {});
    }, []);

    return (
        <header className="nav" data-od-id="nav">
            <div className="container nav-inner">
                <a href="#top" className="brand">
                    <span className="brand-mark">Ø</span>
                    <span>Naveen Kumar</span>
                    <span className="brand-meta">
                        <b>SDET Specialist</b> Nellore / Bengaluru / Earth
                    </span>
                </a>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="#about">
                                About<span className="num">01</span>
                            </a>
                        </li>
                        <li>
                            <a href="#experience">
                                Experience<span className="num">02</span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                Projects<span className="num">03</span>
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                Skills<span className="num">04</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="nav-side">
                    <a className="nav-cta ghost" href="https://github.com/sfdcnaveen" target="_blank" rel="noreferrer noopener">
                        GitHub
                    </a>
                    <a className="nav-cta" href="https://github.com/sfdcnaveen/naveens-profile-galaxy-17" target="_blank" rel="noreferrer noopener">
                        Star · {stars}
                    </a>
                    <span className="status-dot" aria-hidden="true"></span>
                </div>
            </div>
        </header>
    );
}
