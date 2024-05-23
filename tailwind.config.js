/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "clr-primary": "var(--primary)",
        "clr-white": "var(--clr-white)",
        "clr-very-dark": "var(--very-dark)",
        "clr-dark": "var(--dark)",
        "clr-light": "var(--light)",
        "clr-very-light": "var(--very-light)",
        "clr-light-green": "var(--light-green)",
        "pink-bg": "var(--pink-bg)",
        "green-bg": "var(--green-bg)",
        "purple-bg": "var(--purple-bg)",
        "blue-bg": "var(--blue-bg)",
        "gray-bg": "var(--gray)",
        "light-black": "var(--light-black)",
      },
      fontSize: {
        "font-large": "var(--font-large)",
        "font-big": "var(--font-big)",
        "font-medium": "var(--font-medium)",
        "font-regular": "var(--font-regular)",
        "font-small": "var(--font-small)",
        "font-very-small": "var(--font-very-small)",
        "f-20px": "var(--f-20px)",
        "f-24px": "var(--f-24px)",
        "f-18px": "var(--f-18px)",
        "f-16px": "var(--f-16px)",
      },
      padding: {
        "nav-p-2xl": "var(--nav-p-2xl)",
        "nav-p-lg": "var(--nav-p-lg)",
        "sign-in-p-2xl": "var(--sign-in-p-2xl)",
        "sign-in-p-lg": "var(--sign-in-p-lg)",
        "p-25px": "var(--p-25px)",
        "p-7px": "var(--p-7px)",
        "p-12px": "var(--p-12px)",
        "p-14px": "var(--p-14px)",
        "p-16px": "var(--p-16px)",
        "p-18px": "var(--p-18px)",
        "p-20px": "var(--p-20px)",
        "p-22px": "var(--p-22px)",
      },
      height: {
        "logo-h": "var(--logo-h)",
        "logo-h-md": "var(--logo-h-md)",
        "h-1px": "var(--h-1px)",
      },
      width: {
        "logo-w": "var(--logo-w)",
        "logo-w-md": "var(--logo-w-md)",
        "width-1px": "var(--width-1px)",
        "w-1px": "var(--w-1px)",
        "w-2px": "var(--w-2px)",
        "w-3px": "var(--w-3px)",
        "w-4px": "var(--w-4px)",
        "w-12px": "var(--w-12px)",
        "w-14px": "var(--w-14px)",
        "w-16px": "var(--w-16px)",
        "w-18px": "var(--w-18px)",
        "w-20px": "var(--w-20px)",
        "w-22px": "var(--w-22px)",
        "w-24px": "var(--w-24px)",
        "w-25px": "var(--w-25px)",
        "w-26px": "var(--w-26px)",
        "w-28px": "var(--w-28px)",
        "w-30px": "var(--w-30px)",
        "w-32px": "var(--w-32px)",
        "w-34px": "var(--w-34px)",
        "w-36px": "var(--w-36px)",
        "w-38px": "var(--w-38px)",
        "w-40px": "var(--w-40px)",
        "w-44px": "var(--w-44px)",
        "w-48px": "var(--w-48px)",
        "w-55px": "var(--w-55px)",
      },
      gap: {
        "sign-in-listing-gap": "var(--sign-in-listing-gap)",
        "sign-in-gap": "var(--sign-in-gap)",
        "list-gap": "var(--list-gap)",
        "gap-16px": "var(--gap-16px)",
        "g-12px": "var(--g-12px)",
        "g-14px": "var(--g-14px)",
        "g-16px": "var(--g-16px)",
        "g-18px": "var(--g-18px)",
        "g-20px": "var(--g-20px)",
        "g-22px": "var(--g-22px)",
        "g-24px": "var(--g-24px)",
        "g-25px": "var(--g-25px)",
        "g-26px": "var(--g-26px)",
        "g-28px": "var(--g-28px)",
        "g-30px": "var(--g-30px)",
        "g-32px": "var(--g-32px)",
        "g-40px": "var(--g-40px)",
      },
      margin: {
        "mt-100": "var(--mt-100)",
        "mt-50": "var(--mt-50)",
      },
      borderRadius: {
        "btn-radius": "var(--btn-radius)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, and Opera */,
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
