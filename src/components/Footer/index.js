import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={3} textAlign="center">
      <Typography variant="body1" component="p" color="dark.dark" p={2}>
        &copy;کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد.
      </Typography>
      <Typography pb={1} variant="body2" component="p" color="dark.dark">
        طراحی شده با 🧡 توسط{" "}
        <Link
          href="https://Target-Designer.com/"
          color="#189C02"
          variant="subtitle1"
          className="link-footer"
        >
          تارگت دیزاینر
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
