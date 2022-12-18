const Footer = (props) => {
    return (
      <footer>
        <h5>{props.footer}</h5>
      </footer>
    );
  }
  Footer.defaultProps={
  footer: 'Cortex6, 2022'
  }
  
  export default Footer;
  