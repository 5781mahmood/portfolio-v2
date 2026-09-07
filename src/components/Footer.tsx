const Footer = () => {
  return (
    <footer className="border-t border-border px-5 py-8 md:px-10 lg:px-14">
      <div className="page-width flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mahmood Sultan
        </p>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/mahmoodsultan5/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="mailto:5781mahmood@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Email
          </a>
          <a
            href="https://github.com/5781mahmood"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
