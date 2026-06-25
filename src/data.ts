import { Bot, Video, Testimonial, TrustFactor } from "./types";

export const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDM2tljUz1yTC_5h1sUl5n_DBkWIlZyZmZ1qTdmslAfCeY21FJRFdeaUsO0uSkn791ktouuFwdMKgydtKe2qhOv1L-H8wQ0KknQ5cG0INfAC67_Scaa8kaATSpbIeaaUP5a-Gj6m3qZYmolAOiV4YkYNgbW5t9rk0M7uQrbr_mwdued8H6za3Ejoh1YSWu2OtEkfyIDqD4yCUBMt3pYn17FIeMJUnvx5OYdJyT1FF-S903PZOzXRNVuATXasC5YvMWXL8MeBFRDCWAt";

export const HERO_CHART_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuD5WWrB3L7mk24-Hcnbr6dWjkMW_d_Y2XrfXFm8MrY4AdCHEjXrd2QVnqZUoUzhozdJZgeE6xYFAhWpzNOCkjc1YNge-gtRDVy5QkDDY5c59VofdYiTIpvOXb0TEBXUPOASgKEe6Pe2H_r1WGODoj-JmUTYQgcLtRycdRT01v2GlPyK-Kl1VrkzykB5cmciIcc6ucIGri3dE_9t1JXUlenkDJqVGMNLVArKdTBwk3MdqYwkLLo8qG6pmYqN8WRhpTS8H_RmZIJVHAku";

export const COMMAND_CENTER_DASHBOARD_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCtdBMxDmLd0uFLvJ9DiQmtDhSGYkHF-uKUBSDBjJr1aNVX3mGhw81WXhiq6O0qXHQ7m8Xp6DDe3925Eo-m5WP1C2YiCOYp-Q0ysphdIZq3joeY33Cp74ca2wfECu83LQfmyaR7NHisi9-lQsN9DTQzXWr0aMs0A3bIzdrmiy_I2PwWrSvtBMqnZeP4syVyHLlDZoumD1rQZPw4QGcqFhieh9pTjB4FE6xXpn-1OZvO2QXrM_VGzCx8qv9o4Svnt3_mByPdFqUtZasj";

export const ROMAN_PILLARS_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCvqEAJq4qGAXaO17s-xHMGu2obuGVHXAyVRXH1eyjY8A05HmuAwFu1No-KocarAKwfv5GxdAw4usf1SUMZDR5wRXG48ivASg1XuplNKZuspEpeyRcdRwLKmbMg5u_MltqLogQY542Y2i9oYIIHWA41E9kYw8Qkp8RySFAKlxgDL2bh5l9i2SULBlTlW698dt0nh2SzIcsW-zVfxIDmlTuuIsTO9UEu0lPsfUm5Ft_lgwZqLQLATa5db57c4vJxU0dNgS7q2jGsbNCX";

export const TRUST_FACTORS: TrustFactor[] = [
  {
    id: "tf1",
    icon: "history_edu", // Will map to Lucide icons: History, Feather, or BookOpen
    value: "30+ Years",
    label: "Combined Experience"
  },
  {
    id: "tf2",
    icon: "podcasts", // Map to Radio / Podcast
    value: "Daily Live",
    label: "Trading Sessions"
  },
  {
    id: "tf3",
    icon: "memory", // Map to Cpu / Bot
    value: "Pro Bots",
    label: "Proprietary Tech"
  },
  {
    id: "tf4",
    icon: "groups", // Map to Users / Group
    value: "Italian",
    label: "Mastermind Community"
  }
];

export const VIDEOS: Video[] = [
  {
    id: "main_video",
    title: "SCIPIO Live Intelligence Room Stream",
    views: "1.2M",
    date: "LIVE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEcYHHro9EguZTTBgfqyKoQ7BfGuowQG_sXBl5lRQ2sBHoK__wX7PrAE4Bw-6sg172M1Rtz7KQz3WVX97qfh5lEC-VlKnPSbJ-9KUm91Yw0Gk7tAcFFmoosCnWTSSpG4F7LgHEMcSq785yEHXMe86rMmZcjAeGTu5y9WBUrQpqSv0yD7qME7gzcmJiCAhAhoKFIuKMLIyzuGvXIWe2Zgv3jHc_dPgjgwJsJt_Ghqi6Um7Xlxc7MU56Z902XQjW03J6BEXoz0IndPkz",
    alt: "Wide luxury office layout with triple trading screens",
    duration: "2:45:10"
  },
  {
    id: "vid1",
    title: "Institutional Liquidity Secrets",
    views: "24k Views",
    date: "New",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAehm7k3f5pS_5D4-uIZ6GzjxroEoSiSNXK6hkswDMcXm4eg4Y7K-OWLdXm8Vh7h2gUoYyPDeYdFCsbn2i_56gXuPXxda9lCa25K5IDzAUCZUqik3TTOaFO3NZHS-zdsEvb1PyJhr8j5kdjeiK_v-HjhNSzdKEdu59bWd6vquUwMIdJAcJuKmb0MnvsdZXTj36UmCull_7fRbYVloG64SbTJ2UOKH5HtSg_YQGjAkRF8_iTawPgsk4rtseCbhOg1ESo8hsDVb-Q3pVo",
    alt: "Golden candlestick chart on dark background",
    duration: "14:22",
    isNew: true
  },
  {
    id: "vid2",
    title: "Live Scalping: NQ Session",
    views: "18k Views",
    date: "3 Days ago",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVDjcW0cMnhgXtuNusj76ILsgZSLxJpqwVPHwubiYLV5zl1jdeWgBaRrejRa5KA7SzpgD4BChZt1Wh1FqP_GJgfqO3CGy6m4pAckLBnAlt7hUNOApPfzaiMfp3-Rtf1mYq7D2xh9kRu2rYUNancRj8WAvHpClm7GcHFGEhMJTkHdYbztB2uzxxiO9mS-5tMbQu_9BoPXS5VjxWhCocHehRjTqfmM4lYwILLEDPXckUK3PNiVtQigqEj3QHnJmiDteV5kd90YAy2qVj",
    alt: "Traders hands on high-end backlit keyboard",
    duration: "45:15"
  },
  {
    id: "vid3",
    title: "The Psychology of Wealth",
    views: "42k Views",
    date: "1 Week ago",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6J-e5hgXUNVkKb_z222jg_fz6xvbjm6R4yE-gUWH8Clt1TDPBG1JxiNhLnmKPyDUK5fl8E-D0nWOxN8RKXDFZju8H2q9nx52HxhaFsSWuAIOa7FhXQxL4oeUh7I4r4dOtVlOIt_7GQOyNeNY5mRBfolR4F6MbZWY-VYJarzSjg0DAja6Jym9or1uhH3cYUQs_wmsrMZ2xQ0BhqRwmV2dwOTUwJSUx2wFch_MVaRL8rDcgVNmtM_zfvgw2_9pHdTznoF2ni7d329KY",
    alt: "Minimalist golden eagle on dark marble",
    duration: "18:05"
  }
];

export const BOTS: Bot[] = [
  {
    id: "bot1",
    name: "SCIPIO GOLD BOT",
    description: "Engineered for the precious metals market. Institutional trend-following logic with adaptive volatility filters. Designed for high accuracy on Gold (XAUUSD).",
    badge: "Best Seller",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDteUoHFbrPJuBvqygblPgvcCBy_LtjDtDWEkEtFg333N1_mEN08Nil7hhSS16ZR5mD43xK7qW_SXN9TM3sQ_qbo_RNXc69td2HPQ_FJ-5Qs86v4qe2g4RVqxIcWjyKJNQSwFw-3zrOIiXDdW_GLlAkcLR9XV03hpxcsTc6bmaDhpOxPxKibQPP_iZNhRYkgft2mblNnxGD9UYOp9y8ZdOJnlgAcWJsmvzT9nY-TRZNxmtwAl0jrV4zRhPfVk0lxvbEVNkZmhn5kmC7",
    accessType: "PRO ACCESS",
    winRate: "78.2%",
    profitFactor: "2.41",
    riskProfile: "Medium",
    strategy: "Breakout & Momentum Trend-following"
  },
  {
    id: "bot2",
    name: "SCIPIO FOREX BOT",
    description: "The ultimate currency strategist. Multi-pair analysis with sophisticated drawdown protection protocols. Highly optimized for major pairs (EURUSD, GBPUSD, USDJPY).",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX7YExzfpeoMh3ZAcJCKLUSzyUxCNO9DdMHd1TJJyFNWn4dI3ZporuCtZzu5ui14Ua15nDSIa6XHEpSBMi2KfxLj-nAjo1Nn2rL4gAZ9VYZ6W6ppb7vFi_bjthCV7AUHAFScykoFWa_bbJU7rBvIxVKsvSV8j2uazXFxbSTPmjrcgdoXVp9NJtr7rbVOMjfqdK3gcv1mhrrPtx0Qm5Kc_zsK2g-4QvTLDhoRRTIuxjRDvIQVR_e5YQaTGWyyxPb5OVYDKjFoaSWx75",
    accessType: "LIFETIME",
    winRate: "74.5%",
    profitFactor: "2.18",
    riskProfile: "Low",
    strategy: "Mean Reversion & Volatility Band Grid"
  },
  {
    id: "bot3",
    name: "TRENDMAESTRO",
    description: "Our flagship indicator suite and execution overlay. Visualize institutional order blocks, liquidity pools, fair value gaps, and liquidity sweeps in real-time.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAqLEuyZbZ_sCxAGvDnKZ8M4zuKBgoW7bPGZBjlhTq3OP_Omtkn0WeLB7pl7YEsXP_DcS3cYTtqyCupJuOofLTdi-brNrYkG_DbHGfAhAcKFSU0JGrSSBS7GLkw4QOP2xclUHKIv6qYxMlj7iMiB_Qewghv_OT9-8-MGWBbSPH-cPgL6vYs6ZdR2fEB5LvBAY1VkReTheVW7ErZVVleobPuIPXRTEC3qEsTUdYX5XrJy-DxnU9pc3C2R6ENay4HcUw9VK3gJzvb0NV",
    accessType: "ULTIMATE",
    winRate: "82.4%",
    profitFactor: "3.05",
    riskProfile: "Medium",
    strategy: "Smart Money Concepts (SMC) & Liquidity Sweeps"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Marco Rossini",
    role: "Full-time Trader",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqvh8dxB2xqe6gRCQsrax3mrJ6h4FcAZCbt34MtqDsg4qoZApMYYkwnCWgz1YuDuvz8qsOdLugIB9anAjLwOOyVt2H4s5jp6Slq3p9VumJloATbrW0sRmoCRc9c67lKaBt7ah2cr1595DT19MeANFygGdzAa7TXmnunmLS6hFxY0evK0SPNvnlIrYYl_TezWhJcENkCdHpRQqUH-nG0nL-N1sG1F2CjEg6lgzY5qFlZqZCWsaNBp73SIDwlc-exOrxn4TSNUhY6NFZ",
    text: "Scipio isn't just about signals; it's about the mindset. The institutional logic behind the Gold Bot has completely transformed my portfolio's stability."
  },
  {
    id: "t2",
    name: "Alessia G.",
    role: "Prop Desk Trader",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCrRVmIl7AiiYw4QRSwjFHqn3_FjVeizwO0rn72r8FBwwT4oZrT2rZpuims59cDYMn1Jpouq6lchmn6xIvcuK-Zjocet-Cjx7KJ6E4Qg9IzKZVYoshH5L3BEFM15CXChNRYYoUvrS8Iq8rZB4jgozeYjKCTayyirN2x7pgE--YpnUvfITnXRh1_yxbLrC2HT-W5eVxD3fMsreB6N2QcQgaj-xGxtMczVzY66nRcWuQwu22cbS2WJqCOEblwe5v3gJm23yHtkYSfs9D", // Alessia thumbnail
    text: "The Daily Live sessions are like getting a masters degree in the markets every single morning. The transparency is unmatched."
  },
  {
    id: "t3",
    name: "Gianluca T.",
    role: "Institutional Analyst",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSxL7Y7qsOgpuk9ZhOEBfLC_QwWxmnsHSIhS9UBxeSCENRdpUm81gngy6UeoY8qacBXLqlLeGqConVpwRoxlccctWsfyD4uKco8yQrkaGHFcqduzGhqLiLhZgi5V4moIanuT6AgImt3UDHigOC7SA19BqryrzwPcy8k0RYMvcXV3MNd70f7Q_CIFtlWk5WNWKlZBkCweEQDpoR-nVAyG4BBT38NvsBUh6Bb1PInQvFClvwypWPoC9KDu8XftClRUSakZLvrIH-FW6F",
    text: "I've seen many 'gurus', but Scipio Trading stands alone. The focus on risk management and discipline is what separates real pros from the rest."
  }
];
