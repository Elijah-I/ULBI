import { FC } from "react";

interface FooterProps {
  page: { name: string };
}

const Footer: FC<FooterProps> = (props) => {
  const { page } = props;

  return (
    <div
      style={{
        borderTop: "1px solid #F0F",
        padding: "10px",
        marginTop: "20px"
      }}
    >
      Footer of {page.name}
    </div>
  );
};

export default Footer;
