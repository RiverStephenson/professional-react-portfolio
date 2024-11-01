import Nav from "react-bootstrap/Nav";


function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
  
      <div id='header'>
        <h1>River Stephenson</h1>
        <Nav id="nav" variant="tabs" defaultActiveKey="/AboutMe">
          <Nav.Item className="navItem">
            <Nav.Link
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
              onClick={() => handlePageChange("AboutMe")}
              href="#AboutMe"
            >
              AboutMe
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
              onClick={() => handlePageChange("Portfolio")}
              href="#Portfolio"
            >
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              onClick={() => handlePageChange("Contact")}
              href="#Contact"
            >
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
              onClick={() => handlePageChange("Resume")}
              href="#Resume"
            >
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
     </div>
    </>
  );
}

export default NavBar;
