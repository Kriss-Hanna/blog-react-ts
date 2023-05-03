import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <nav className="footer-container">
        <ul>
            <li><a href='http://www.instagram.com' target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize='large' /></a></li>
            <li><a href='http://www.linkedin.com' target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize='large' /></a></li>
            <li><a href='http://www.github.com' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize='large' /></a></li>       
        </ul>
    </nav>
  )
}

export default Footer;
