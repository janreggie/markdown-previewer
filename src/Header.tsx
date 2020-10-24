import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
    <div id="header" className="navbar navbar-light bg-light">
      <h1 className="h2">Markdown Previewer</h1>
      <h2 className="h4"><a href="https://github.com/janreggie/markdown-previewer/">
        <FontAwesomeIcon icon={faGithub} /> GitHub</a>
      </h2>
    </div>
)

export default Header
