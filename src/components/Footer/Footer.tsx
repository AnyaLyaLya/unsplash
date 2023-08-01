import { ImHtmlFive2 } from 'react-icons/im';
import { FaCss3Alt, FaReact, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { BsFiletypeScss, BsFiletypeJsx, BsGit } from 'react-icons/bs';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiMui, SiTypescript, SiReactrouter, SiUnsplash } from 'react-icons/si';
import { AiFillApi, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

import './footer.scss';

const techStack = [ImHtmlFive2, FaCss3Alt, BsFiletypeScss, FaReact, BsFiletypeJsx, SiTypescript, TbBrandJavascript, BsGit, SiMui, SiReactrouter];
const contacts = [
  {
    'Icon': FaGithub, 
    href: 'https://github.com/AnyaLyaLya/unsplash', 
    title: 'GitHub'
  }, 
  {
    'Icon': FaTelegramPlane, 
    href: 'https://t.me/annalatusha', 
    title: 'Telegram'
  },
  {
    'Icon': AiOutlineMail, 
    href: 'mailto:annlatusha@gmail.com', 
    title: 'E-mail'
  },
  {
    'Icon': AiFillLinkedin, 
    href: 'https://www.linkedin.com/in/anna-latusha-03298a278/', 
    title: 'Linkedin'
  },
];

const source = [
  {
    'Icon': SiUnsplash, 
    href: 'https://unsplash.com/', 
    title: 'Unsplash'
  }, 
  {
    'Icon': AiFillApi, 
    href: 'https://unsplash.com/developers', 
    title: 'Unsplash API'
  },
];

export const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__list'>
        <li className='footer__list--item'>
          <h2 className='footer__list--item--title'>
            Unsplash clone
          </h2>

          <p className='footer__list--item--text'>
            A practice project, which is a replica of the well-known Unsplash. Detailed description and my achievements in web development can be found in my {' '} 
            <a href="" className='footer__list--item--subtitle'>
              CV
            </a>
            .
          </p>
        </li>

        <li className='footer__list--item'>
          <h2 className='footer__list--item--title'>
            Contact
          </h2>

          <ul className='footer__contact-list'>
            {contacts.map(({Icon, href, title }, index) => (
              <li key={index} className='footer__contact-list--item'>
                <Icon size={24} />

                <a href={href}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </li>

        <li className='footer__list--item'>
          <h2 className='footer__list--item--title'>
            Tech Stack
          </h2>

          <ul className='footer__stack-list'>
            {techStack.map((Icon, index) => (
              <li key={index} className='footer__stack-list--item'>
                <Icon size={24} />
              </li>
            ))}
          </ul>   
        </li>

        <li className='footer__list--item'>
          <h2 className='footer__list--item--title'>
            Source & Usage Terms
          </h2>

          <ul className='footer__contact-list'>
            {source.map(({Icon, href, title }, index) => (
              <li key={index} className='footer__contact-list--item'>
                <Icon size={24} />

                <a href={href} className='footer__contact-list--item--link'>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </footer>
  );
};