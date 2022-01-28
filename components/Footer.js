import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Link href="https://myportfolio06.herokuapp.com/" passHref>
        <p>Copyright &copy; @Yasir</p>
      </Link>
    </div>
  );
};

export default Footer;
