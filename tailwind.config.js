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
      },
      fontSize: {
        "font-large": "var(--font-large)",
        "font-big": "var(--font-big)",
        "font-medium": "var(--font-medium)",
        "font-regular": "var(--font-regular)",
        "font-small": "var(--font-small)",
        "font-very-small": "var(--font-very-small)",
      },
      padding: {
        "nav-p-2xl": "var(--nav-p-2xl)",
        "nav-p-lg": "var(--nav-p-lg)",
        "sign-in-p-2xl": "var(--sign-in-p-2xl)",
        "sign-in-p-lg": "var(--sign-in-p-lg)",
        "p-25px": "var(--p-25px)",
      },
      height: {
        "logo-h": "var(--logo-h)",
        "logo-h-md": "var(--logo-h-md)",
      },
      width: {
        "logo-w": "var(--logo-w)",
        "logo-w-md": "var(--logo-w-md)",
        "width-1px": "var(--width-1px)",
      },
      gap: {
        "sign-in-listing-gap": "var(--sign-in-listing-gap)",
        "sign-in-gap": "var(--sign-in-gap)",
        "list-gap": "var(--list-gap)",
        "gap-16px": "var(--gap-16px)",
      },
      borderRadius: {
        "btn-radius": "var(--btn-radius)",
      },
    },
  },
  plugins: [],
};
