function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-500 py-6 px-4">
      <p>© {currentYear} In Loving Memory of Grace Appiah</p>
      <p className="mt-2 text-xs">Website created by Bara Studios</p>
    </footer>
  );
}

export default Footer;
